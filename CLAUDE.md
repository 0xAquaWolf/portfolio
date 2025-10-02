# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun run dev` (uses Bun runtime)
- **Build production**: `bun run build` 
- **Start production**: `bun run start`
- **Add shadcn/ui components**: `bun run scn:add [component-name]`
- **Add Aceternity UI components**: `bun run ace:add [component-name]`
- **Install dependencies**: `bun install`
- **Clean and reinstall**: `bun run clean` (removes node_modules, .next, and reinstalls)

## Code Quality

- **Formatting**: Prettier with Tailwind plugin (configured in .prettierrc)
- **Linting**: ESLint with Next.js core web vitals config
- **No dedicated test framework configured**

## Environment Variables Required

```bash
YOUTUBE_API_KEY=""
GITHUB_ACCESS_TOKEN=""
TURSO_DATABASE_URL=""
TURSO_AUTH_TOKEN=""
```

## Architecture Overview

This is a Next.js 14 portfolio and blog website built with TypeScript, featuring:

- **App Router**: Uses Next.js App Router with TypeScript
- **Content Management**: 
  - Blog posts managed via Velite (content processing)
  - MDX support with syntax highlighting (Shiki)
  - Content files processed during build via Velite webpack plugin
- **Database**: Drizzle ORM with Turso (SQLite) database
- **Styling**: Tailwind CSS with shadcn/ui and Aceternity UI components
- **Animation**: GSAP and Framer Motion for animations
- **APIs**: YouTube API integration for video stats, GitHub API for project data

## Key Directory Structure

- `app/` - Next.js App Router pages and API routes
  - `api/youtube/videos/route.ts` - YouTube API endpoint
  - `posts/` - Blog post pages
  - `projects/` - Project showcase pages
- `components/` - Reusable React components organized by feature
  - `Hero/`, `LogoCloud/`, `GlobalStats/`, `Blog/` etc.
  - `magicui/` - UI components library
  - `mdx/` - MDX-specific components
- `lib/` - Utility functions and configurations
- `drizzle/` - Database schema and migrations

## Code Style Guidelines (from .cursorrules)

- **TypeScript**: Use TypeScript for all code; prefer interfaces over types, avoid enums (use maps instead)
- **Programming Style**: Use functional and declarative programming patterns; avoid classes
- **React Patterns**: Prefer React Server Components; minimize 'use client', useEffect, and setState
- **Components**: Use Shadcn UI, Radix, and Tailwind for components; wrap client components in Suspense
- **Design**: Mobile-first responsive design approach
- **Naming**: Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- **File Structure**: exported component, subcomponents, helpers, static content, types
- **Directories**: Use lowercase with dashes (e.g., auth-wizard)
- **Performance**: Optimize Web Vitals (LCP, CLS, FID); use dynamic loading for non-critical components

## Content Management

- Blog posts are processed by Velite during build
- MDX files support syntax highlighting with Shiki
- Content is automatically processed via webpack plugin in next.config.mjs

## Package Management

- **Runtime**: Uses Bun as the JavaScript runtime and package manager
- **Package Manager**: Configured to use pnpm@9.15.4 as fallback package manager
- **Dependencies**: Key libraries include GSAP, Framer Motion, Drizzle ORM, Velite, and Tailwind CSS

## Animation Libraries

- **GSAP**: Primary animation library (@gsap/react for React integration)
- **Framer Motion**: Secondary animation library for React components
- **Canvas Confetti**: For celebration animations

## Testing

No test framework is currently configured in this project.