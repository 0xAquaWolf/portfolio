# Loading System Architecture

This document explains how the loading overlay systems work in the portfolio application.

## Overview

The portfolio uses **two distinct loading systems**:

1. **Global Application Loading** - Controls initial app load and critical assets
2. **Component-Level Loading** - Handles individual image/content loading

---

## 1. Global Application Loading System

### Architecture Components

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  LoadingManager │───▶│ LoadingContext   │───▶│  LoadingScreen  │
│                 │    │                  │    │                 │
│ - Orchestrator  │    │ - State Manager  │    │ - Visual Layer  │
│ - Asset Trigger │    │ - Progress Calc  │    │ - GSAP Animations │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       ▲
         ▼                       │
┌─────────────────┐              │
│ useAssetPreloader│──────────────┘
│                 │
│ - Loads Assets  │
│ - Reports Status│
└─────────────────┘
```

### File Structure

#### `lib/context/LoadingContext.tsx`
**Purpose:** Global state management for loading process

**Key Features:**
- Tracks 4 required assets: `god-rays-shader`, `fonts`, `hero-components`, `critical-images`
- Calculates progress: `(loadedAssets.size / REQUIRED_ASSETS.length) * 100`
- Auto-completes when all assets loaded (500ms delay for smooth UX)
- Provides React Context for global state access

**State Interface:**
```typescript
interface LoadingState {
  progress: number;        // 0-100 percentage
  isLoading: boolean;      // Loading in progress
  isComplete: boolean;     // All assets loaded
  loadedAssets: Set<string>; // Tracking loaded assets
}
```

#### `components/LoadingManager.tsx`
**Purpose:** Orchestrates the loading process

**Key Features:**
- Consumes `LoadingContext` for state
- Triggers `useAssetPreloader()` hook
- Controls main content visibility with `showContent` state
- Acts as bridge between context and UI

**Flow:**
```typescript
const { progress, isComplete } = useLoading();
const [showContent, setShowContent] = useState(false);

// Initialize asset preloading
useAssetPreloader();
```

#### `components/LoadingScreen.tsx`
**Purpose:** Animated visual loading experience

**Key Features:**
- **Z-Index:** `z-[100]` to cover menu and all UI
- **Scroll Lock:** Sets `document.body.style.overflow = 'hidden'`
- **GSAP Animations:**
  - Progress bar scales from 0 to 100%
  - Counter animates smoothly
  - Exit animation slides screen up (-100%)

**Animation Timeline:**
1. Progress updates → Bar scales + Counter animates
2. Completion → Slide-up exit animation (1s duration)
3. Custom event dispatched: `loadingScreenComplete`
4. Component unmounts → Scroll restored

### Complete Loading Flow

```
1. App Starts
   ↓
2. LoadingManager Renders
   ↓
3. LoadingScreen Shows (z-100, scroll locked)
   ↓
4. useAssetPreloader() Triggered
   ↓
5. Assets Load Progressively
   ↓ (for each asset)
6. setAssetLoaded('asset-name') Called
   ↓
7. LoadingContext Updates Progress
   ↓
8. LoadingScreen Animates Progress Bar + Counter
   ↓ (when all 4 assets complete)
9. Auto-completion After 500ms Delay
   ↓
10. LoadingScreen Exit Animation (slide up)
    ↓
11. Scroll Restored, Main App Content Shows
```

---

## 2. Component-Level Loading System

### Example: ProjectContent Image Loading

#### `components/Projects/ProjectContent.tsx` (lines 64-83)

**Purpose:** Smooth image loading with placeholder

**Architecture:**
```
┌─────────────────┐    ┌─────────────────┐
│ Loading Overlay │    │   Image Layer   │
│                 │    │                 │
│ opacity: 100%   │◄──▶│ opacity: 0%     │ (Initial)
│ Pulsing circle  │    │ Hidden image    │
└─────────────────┘    └─────────────────┘
         │                       │
         ▼ (on image load)       ▼
┌─────────────────┐    ┌─────────────────┐
│ Loading Overlay │    │   Image Layer   │
│                 │    │                 │
│ opacity: 0%     │◄──▶│ opacity: 100%   │ (Loaded)
│ Hidden (300ms)  │    │ Visible (700ms) │
└─────────────────┘    └─────────────────┘
```

**Key Implementation:**
```typescript
const [isLoading, setIsLoading] = useState(true);

// Loading Placeholder Layer
<div className={`absolute inset-0 transition-opacity duration-300 ${
  isLoading ? 'opacity-100' : 'opacity-0'
}`}>
  <div className="animate-pulse rounded-full bg-gray-700" />
</div>

// Image Layer
<Image
  className={`transition-all duration-700 ${
    isLoading ? 'opacity-0' : 'opacity-100'
  }`}
  onLoad={() => setIsLoading(false)}
/>
```

**Timing Strategy:**
- **Overlay fade-out:** 300ms (faster)
- **Image fade-in:** 700ms (slower)
- **Result:** Smooth crossfade without flash

---

## Key Concepts

### Opacity-Based Transitions
Both systems use opacity transitions for smooth UX:
- **Global:** Loading screen slides up when complete
- **Component:** Overlay fades out, content fades in

### State Management Patterns
- **Global:** React Context for app-wide state
- **Component:** Local useState for isolated loading

### Animation Libraries
- **Global:** GSAP for complex animations and timelines
- **Component:** CSS transitions for simple fade effects

### Z-Index Hierarchy
- **Loading Screen:** `z-[100]` (covers everything)
- **Menu/Navigation:** Lower z-index
- **Content:** Base layer

### Performance Considerations
- **Asset Preloading:** Critical resources loaded upfront
- **Progressive Loading:** Individual images load as needed
- **Smooth Transitions:** Prevents jarring layout shifts

---

## Debugging Tips

### Global Loading Issues
1. Check `LoadingContext` asset names match preloader
2. Verify `useAssetPreloader` is called in `LoadingManager`
3. Monitor progress updates in dev tools
4. Check for `loadingScreenComplete` custom event

### Component Loading Issues
1. Verify `onLoad` handler is attached to images
2. Check initial `isLoading` state is `true`
3. Ensure both overlay and image have proper opacity classes
4. Test with slow network to see transitions

### Common Problems
- **Scroll not locked:** Check `overflow: hidden` is applied to `body`
- **Menu visible:** Ensure loading screen has higher z-index
- **Flashing content:** Verify opacity transitions timing
- **Assets not loading:** Check asset paths and preloader implementation

---

## Future Enhancements

### Possible Improvements
1. **Error States:** Handle failed asset loading
2. **Retry Logic:** Automatic retry for failed assets
3. **Progressive Enhancement:** Graceful degradation without JS
4. **Performance Metrics:** Track loading times and bottlenecks
5. **Customizable Animations:** Different loading animations per route

### Monitoring
- Add analytics for loading performance
- Track completion rates and bounce rates
- Monitor asset loading failures