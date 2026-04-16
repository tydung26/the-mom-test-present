# Brainstorm: Parallax Storytelling Refactor

**Date:** 2026-04-16
**Status:** Approved

## Problem Statement

Current presentation is a 24-slide deck with keyboard navigation (arrow keys, AnimatePresence transitions). User wants a storytelling approach — single scrollable page with parallax interactions. Must work both as standalone reading experience and live presentation.

## Requirements

- Transform slideshow → single-page scroll story
- Immersive full-bleed visual style with layered parallax backgrounds
- Free scroll (no snap), each section ~100vh
- Keep all 24 sections as story chapters
- Keep existing interactive components (chat bubbles, cards, traffic lights, etc.)
- Floating dot navigation + keyboard shortcuts for presenter mode
- Use Framer Motion (already in project) for scroll animations
- Support `prefers-reduced-motion`

## Design Decisions

### Architecture Changes

| Current | New |
|---------|-----|
| `SlideDeck` (AnimatePresence, one slide visible) | `ScrollContainer` (all sections rendered vertically) |
| `SlideLayout` (fixed viewport) | `StorySection` (min-h-screen, parallax layers) |
| `useSlideNavigation` (keyboard, touch swipe) | `useStoryNavigation` (IntersectionObserver, scrollIntoView) |
| `SlideProgress` + `SlideCounter` | `FloatingNav` (dot nav, click-to-jump, keyboard) |
| `animate="visible"` on mount | `whileInView` on scroll enter |
| `overflow: hidden` on body | `overflow-y: auto` |

### New Components

- **ScrollContainer** — Renders all 24 StorySection components in sequence. Single scrollable page.
- **StorySection** — Wrapper replacing SlideLayout. min-h-screen, relative positioned, accepts parallax background layers. Uses `useScroll({ target })` for section-level scroll progress.
- **ParallaxLayer** — Decorative background elements (gradients, shapes, blurred accents) that translate at different speeds. Driven by section scroll progress via `useTransform`.
- **FloatingNav** — Right-side vertical dot navigation. Highlights current section via IntersectionObserver. Click = scrollIntoView. Keyboard ↑↓ = prev/next section.
- **useStoryNavigation** — Hook: tracks active section via IntersectionObserver, exposes `scrollToSection(n)`, `currentSection`, keyboard bindings. Updates URL hash (`#section-5`).

### Animation Strategy

- Element reveals: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, amount: 0.3 }}`
- Parallax: `useScroll({ target: sectionRef, offset: ["start end", "end start"] })` → `useTransform` for background layer transforms
- Stagger groups: same staggerContainer variant, triggered by whileInView
- Interactive components: animate in sequentially via staggered whileInView delays

### Reuse Assessment

- **Keep as-is:** ChatBubble, QuoteBlock, CardGrid, SplitScreen, TrafficLight, CounterAnimation, color theme, Tailwind config, TanStack Router
- **Refactor:** All 24 slide components (mount→scroll animations), SlideLayout→StorySection, SlideDeck→ScrollContainer, useSlideNavigation→useStoryNavigation
- **Remove:** AnimatePresence usage, SlideProgress, SlideCounter, getSlideVariants (directional enter/exit)
- **New:** ParallaxLayer, FloatingNav, useStoryNavigation

### Presenter Mode

- Keyboard: ↑↓ / arrow keys smooth-scroll to next/prev section
- FloatingNav dots visible and clickable
- URL hash deep-linking preserved (#section-N)
- Free scroll between keyboard jumps

### CSS Changes

- Body: `overflow-y: auto`
- Sections: `min-h-screen`, `position: relative`
- Parallax layers: `position: absolute`, `inset: 0`, `overflow: hidden`, z-indexed behind content

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| 24 IntersectionObservers + scroll listeners | Negligible. Each useScroll scoped to section ref. |
| Repetitive slide refactoring | Mechanical: animate→whileInView. Batch-able. |
| Parallax jank on low-end | `will-change: transform`, prefers-reduced-motion disables parallax |
| Presenter precision | scrollIntoView({ behavior: 'smooth' }) + keyboard bindings |

## Tech Stack (No Changes)

- TanStack Start + Router (SPA mode)
- React 19 + TypeScript
- Framer Motion (useScroll, useTransform, whileInView)
- Tailwind CSS v4
- Vite 7

## Next Steps

Create detailed implementation plan with phased approach:
1. Core infrastructure (ScrollContainer, StorySection, useStoryNavigation)
2. FloatingNav + presenter controls
3. Parallax system (ParallaxLayer)
4. Refactor all 24 sections from mount→scroll animations
5. Polish, perf optimization, reduced-motion support
