---
name: Parallax Storytelling Refactor
description: Transform slide deck into single-page scrolling story with immersive parallax, floating nav, and presenter mode
status: blocked
date: 2026-04-16
blockedBy: [260416-1630-storytelling-content-redesign]
blocks: []
note: Phases 4-6 (slide refactoring) superseded by content redesign plan. Phases 1-3 remain valid.
---

# Parallax Storytelling Refactor

## Overview

- **Priority:** High
- **Status:** Pending
- **Brainstorm:** [brainstorm report](../reports/brainstorm-260416-parallax-storytelling-refactor.md)

Transform the 24-slide keyboard-navigated presentation into a single-page scrolling story website with immersive parallax effects. Keep all content and interactive components. Support both standalone reading and live presentation with floating dot nav + keyboard controls.

## Key Decisions

- Framer Motion `whileInView` + `useScroll`/`useTransform` for all animations
- Free scroll (no snap), each section ~100vh
- IntersectionObserver for active section tracking
- URL hash deep-linking preserved (`#section-N`)
- `prefers-reduced-motion` disables parallax, keeps simple fades

## Phases

| # | Phase | Status | Effort | Files |
|---|-------|--------|--------|-------|
| 1 | [Core Infrastructure](phase-01-core-infrastructure.md) | Pending | Medium | 6 files |
| 2 | [Floating Nav & Presenter Controls](phase-02-floating-nav.md) | Pending | Small | 2 files |
| 3 | [Parallax System](phase-03-parallax-system.md) | Pending | Medium | 3 files |
| 4 | [Refactor Simple Slides (11)](phase-04-refactor-simple-slides.md) | Pending | Medium | 11 files |
| 5 | [Refactor Medium Slides (8)](phase-05-refactor-medium-slides.md) | Pending | Medium | 8 files |
| 6 | [Refactor Complex Slides (5)](phase-06-refactor-complex-slides.md) | Pending | Large | 5 files |
| 7 | [Polish & Accessibility](phase-07-polish-and-accessibility.md) | Pending | Small | 4 files |

## Dependencies

```
Phase 1 (core) ──┬── Phase 2 (nav)
                  ├── Phase 3 (parallax)
                  └──┬── Phase 4 (simple slides)
                     ├── Phase 5 (medium slides)
                     └── Phase 6 (complex slides)
Phase 2-6 ────────── Phase 7 (polish)
```

Phases 2-6 can run in parallel after Phase 1. Phase 7 runs last.

## Success Criteria

- [ ] All 24 sections render in single scrollable page
- [ ] Parallax backgrounds animate on scroll without jank
- [ ] Floating nav shows active section, click-to-jump works
- [ ] Keyboard ↑↓ smooth-scrolls between sections
- [ ] URL hash deep-linking works (#section-N)
- [ ] `prefers-reduced-motion` respected
- [ ] All interactive components (chat bubbles, cards, etc.) animate on scroll
- [ ] Existing tests pass or updated
- [ ] Build succeeds with no TypeScript errors
