# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `bun run dev` (uses Bun runtime)
- **Build production**: `bun run build` 
- **Start production**: `bun run start`
- **Lint code**: `bun run lint`
- **Add shadcn/ui components**: `bun run scn:add [component-name]`
- **Add Aceternity UI components**: `bun run ace:add [component-name]`
- **Install dependencies**: `bun install`

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

- Use TypeScript for all code; prefer interfaces over types
- Use functional and declarative programming patterns
- Prefer React Server Components; minimize 'use client'
- Use Shadcn UI, Radix, and Tailwind for components
- Mobile-first responsive design approach
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types

## Content Management

- Blog posts are processed by Velite during build
- MDX files support syntax highlighting with Shiki
- Content is automatically processed via webpack plugin in next.config.mjs

## Testing

No test framework is currently configured in this project.