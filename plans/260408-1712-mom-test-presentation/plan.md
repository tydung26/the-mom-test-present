---
name: The Mom Test Presentation Website
description: Cinematic slide presentation of The Mom Test book using TanStack Start
status: complete
date: 2026-04-08
blockedBy: []
blocks: []
---

# The Mom Test - Presentation Website

## Overview

Build a 30-minute cinematic presentation website for "The Mom Test" by Rob Fitzpatrick. 19 slides, dark theme, amber accents, Framer Motion animations, keyboard navigation. TanStack Start in SPA mode with hardcoded content.

## Tech Stack

- TanStack Start (SPA mode) + TanStack Router
- React 19 + TypeScript
- Framer Motion 11+
- Tailwind CSS v4
- Vite (via Vinxi)

## Phases

| Phase | Description | Status | Effort |
|-------|-------------|--------|--------|
| 01 | Project scaffolding + SPA config + Tailwind + Framer Motion | Complete | S |
| 02 | Slide engine — layout, navigation, transitions, progress bar | Complete | M |
| 03 | Slide content — all 19 slides with per-slide animations | Complete | L |

## Dependencies

- Phase 02 depends on Phase 01
- Phase 03 depends on Phase 02

## Success Criteria

- `npm run dev` serves the presentation locally
- Arrow keys navigate between 19 slides smoothly
- All animations run at 60fps
- Dark theme with amber accent renders correctly
- Looks great on projector (16:9, high contrast)

## References

- [Brainstorm Report](../reports/brainstorm-260408-1712-mom-test-presentation.md)
- [TanStack Start Research](../reports/researcher-260408-1712-tanstack-start-setup.md)
