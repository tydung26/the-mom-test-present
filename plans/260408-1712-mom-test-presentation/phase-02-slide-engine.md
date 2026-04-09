---
phase: 02
title: Slide Engine — Layout, Navigation, Transitions
status: complete
priority: high
effort: M
depends_on: [phase-01]
---

# Phase 02 — Slide Engine

## Context

- [Brainstorm Report](../reports/brainstorm-260408-1712-mom-test-presentation.md)
- [Framer Motion Integration](../reports/researcher-260408-1712-tanstack-start-setup.md#6-framer-motion-integration)

## Overview

Build the core slide presentation engine: full-screen layout, keyboard navigation, animated transitions between slides, progress bar, and slide counter.

## Architecture

```
src/
├── routes/
│   ├── __root.tsx           # Root layout (dark theme, global styles)
│   └── index.tsx            # Redirects to slide 1 or serves as slide deck host
├── components/
│   ├── slide-deck.tsx       # Main slide container + AnimatePresence
│   ├── slide-progress.tsx   # Bottom progress bar
│   ├── slide-counter.tsx    # "5 / 19" counter display
│   └── slide-layout.tsx     # Reusable full-screen slide wrapper
├── hooks/
│   └── use-slide-navigation.ts  # Keyboard + touch navigation hook
├── lib/
│   ├── slides-data.ts       # Slide registry (title, component, transition type)
│   └── animation-variants.ts # Reusable Framer Motion variants
```

### Design Decisions

- **No file-based routing per slide** — slides are components managed by a single route with state. Simpler than 19 route files, avoids TanStack Router overhead for what's essentially a linear deck.
- **Slide index in URL hash** (`/#/5`) or query param (`/?slide=5`) for bookmarkability without route complexity.
- **AnimatePresence `mode="wait"`** — previous slide exits before next enters, cinematic feel.
- **Direction-aware transitions** — going forward = slide left, going back = slide right.

## Implementation Steps

1. **Create `animation-variants.ts`** — Reusable Framer Motion variants:
   - `slideForward` / `slideBackward` (direction-aware horizontal slide)
   - `fadeIn` / `fadeOut`
   - `zoomIn` (for title slide)
   - `typewriter` (for text reveals)
   - `staggerChildren` (for list items, chat bubbles)
   - `cardFlip`, `splitScreen`, `cascade` (per-slide specials)
   - All GPU-accelerated (transform + opacity only)

2. **Create `slides-data.ts`** — Slide registry:
   ```ts
   type SlideConfig = {
     id: number
     title: string
     component: React.LazyComponent
     transition?: 'slide' | 'fade' | 'zoom' | 'none'
   }
   ```
   - Lazy-load each slide component for code splitting
   - 19 entries, one per slide

3. **Create `use-slide-navigation.ts`** hook:
   - Listen for `ArrowRight`/`ArrowLeft` keydown events
   - `Home` → slide 1, `End` → slide 19
   - Touch swipe detection (left/right)
   - Expose: `currentSlide`, `goNext()`, `goPrev()`, `goTo(n)`, `direction`
   - Update URL hash on navigate
   - Initialize from URL hash on mount

4. **Create `slide-layout.tsx`** — Full-screen slide wrapper:
   - `100vw × 100vh`, centered content
   - Flex column, items-center, justify-center
   - Padding for safe area
   - Optional subtitle prop

5. **Create `slide-deck.tsx`** — Main orchestrator:
   - Uses `useSlideNavigation` hook
   - Renders current slide inside `AnimatePresence`
   - Passes `direction` to determine enter/exit animation direction
   - Wraps slide in `motion.div` with appropriate variant

6. **Create `slide-progress.tsx`** — Bottom progress bar:
   - Fixed bottom, full width
   - Amber (#f59e0b) fill proportional to current/total
   - Height: 3px, subtle glow
   - Animated width via Framer Motion `layout`

7. **Create `slide-counter.tsx`** — Slide number display:
   - Fixed bottom-right, stone color (#78716c)
   - Format: "5 / 19"
   - Fade transition on number change

8. **Update `index.tsx`** route — Mount `SlideDeck` as the main view

9. **Test navigation** — Arrow keys cycle through placeholder slides smoothly

## Todo

- [x] Create animation variants library
- [x] Create slide registry with lazy loading
- [x] Implement keyboard/touch navigation hook
- [x] Build full-screen slide layout component
- [x] Build slide deck orchestrator with AnimatePresence
- [x] Add progress bar
- [x] Add slide counter
- [x] Wire up in index route
- [x] Test navigation with placeholder slides

## Success Criteria

- Arrow keys navigate forward/backward between slides
- Slide transitions are smooth, direction-aware, 60fps
- Progress bar reflects current position
- URL hash updates on navigation
- Page loads at correct slide from URL hash
