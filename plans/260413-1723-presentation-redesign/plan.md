---
name: Mom Test Presentation Redesign
description: Expand 19→24 slides, replace cookbook with flower shop example, add meetings/conferences content
status: complete
date: 2026-04-13
blockedBy: []
blocks: []
---

# Mom Test Presentation Redesign

## Overview

Redesign the existing 19-slide presentation into a 24-slide deck. Replace cookbook/iPad example with flower shop throughout. Replace "Babies or Bodybuilders" with "Weddings or Weekends". Add 6 new slides covering Anchoring Fluff, Digging Beneath Ideas, Conferences & Events, Meeting Framework (VFWPA), Product Risk vs Market Risk, and Customer Slicing. Merge Scary Questions + Love Bad News into one slide. 30-min talk, mixed tech crowd.

## Tech Stack

Same as existing: TanStack Start, React 19, TypeScript, Framer Motion, Tailwind CSS v4

## Phases

| Phase | Description | Status | Effort |
|-------|-------------|--------|--------|
| 01 | Update existing slides — flower shop example + content changes | Complete | M |
| 02 | Create 6 new slide components | Complete | L |
| 03 | Merge, reorder, registry update + cheat sheet | Complete | S |

## Dependencies

- Phase 02 can run in parallel with Phase 01 (independent new files)
- Phase 03 depends on both Phase 01 and 02

## Brainstorm Report

- [Brainstorm](../reports/brainstorm-260413-1723-presentation-redesign.md)

## Success Criteria

- 24 slides render and navigate correctly
- Flower shop example consistent across slides 4, 5, 7, 10
- "Weddings or Weekends" replaces "Babies or Bodybuilders" on slide 21
- All 6 new slides use existing components/animation patterns
- Cheat sheet expanded with new rules
- `pnpm dev` works, `pnpm build` succeeds
- All existing tests pass
