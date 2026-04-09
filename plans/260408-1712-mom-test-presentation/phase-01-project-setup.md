---
phase: 01
title: Project Scaffolding & Configuration
status: complete
priority: high
effort: S
---

# Phase 01 — Project Scaffolding & Configuration

## Context

- [TanStack Start Research](../reports/researcher-260408-1712-tanstack-start-setup.md)
- [Brainstorm Report](../reports/brainstorm-260408-1712-mom-test-presentation.md)

## Overview

Scaffold TanStack Start project in SPA mode. Configure Tailwind CSS v4 and Framer Motion. Set up the base project structure.

## Implementation Steps

1. **Scaffold project** via `npx @tanstack/cli@latest create`
   - Project name: `the-mom-test-present` (use current directory)
   - If CLI doesn't support in-place, scaffold in temp dir and move files

2. **Configure SPA mode** in `vite.config.ts`:
   ```ts
   tanstackStart({ spa: { enabled: true } })
   ```

3. **Install & configure Tailwind CSS v4**:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
   - Add `@tailwindcss/vite` plugin to vite.config.ts
   - Create `src/styles/app.css` with `@import 'tailwindcss' source('../');`
   - Import in `__root.tsx` via `?url` query param

4. **Install Framer Motion**:
   ```bash
   npm install framer-motion
   ```

5. **Set up base `__root.tsx`**:
   - Dark background (#0f0f0f), off-white text (#f5f5f5)
   - Import app.css
   - Meta tags, viewport, title "The Mom Test"

6. **Create placeholder `index.tsx`** route to verify everything works

7. **Verify**: `npm run dev` — no errors, dark background renders

## Files to Create/Modify

- `vite.config.ts` — SPA mode + Tailwind plugin
- `src/styles/app.css` — Tailwind import
- `src/routes/__root.tsx` — Root layout with dark theme
- `src/routes/index.tsx` — Placeholder home

## Todo

- [x] Scaffold TanStack Start project
- [x] Configure SPA mode
- [x] Install and configure Tailwind CSS v4
- [x] Install Framer Motion
- [x] Set up root layout with dark theme
- [x] Verify dev server runs clean

## Success Criteria

- `npm run dev` starts without errors
- Page renders with dark background (#0f0f0f)
- Tailwind utility classes work
- No SSR-related console warnings
