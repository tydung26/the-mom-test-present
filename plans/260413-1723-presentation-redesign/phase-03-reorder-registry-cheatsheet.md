# Phase 03: Reorder, Registry Update & Cheat Sheet

## Priority: High
## Status: Complete
## Effort: S

## Overview

Reorder all slides from 19→24, update the lazy-load registry in `slides-data.ts`, rename files to match new numbering, and expand the cheat sheet with new rules. This phase depends on Phase 01 and 02 being complete.

## Context Links

- [Plan](./plan.md)
- [Phase 01](./phase-01-update-existing-slides.md)
- [Phase 02](./phase-02-create-new-slides.md)

## Related Code Files

### Files to Modify
- `src/lib/slides-data.ts` — Slide registry (lazy imports)
- `src/slides/slide-18-cheat-sheet.tsx` — Expand rules list (becomes slide-23)
- Multiple slide files — Rename to match new numbering

### Files to Read for Context
- `src/hooks/use-slide-navigation.ts` — Uses `slides.length` for total count
- `src/components/slide-deck.tsx` — Renders slides by index from registry

## Slide Mapping: Old → New

The navigation hook and SlideDeck read from the `slides` array in `slides-data.ts`. Slide number = array index + 1. No hardcoded slide numbers in components.

| New # | Title | Source | Action |
|-------|-------|--------|--------|
| 1 | Title | slide-01-title | Keep (subtitle updated in P1) |
| 2 | The Problem | slide-02-the-problem | Keep |
| 3 | The Story | slide-03-the-story | Keep |
| 4 | Failing the Mom Test | slide-04-failing-mom-test | Updated in P1 |
| 5 | Passing the Mom Test | slide-05-passing-mom-test | Updated in P1 |
| 6 | The 3 Rules | slide-06-three-rules | Keep |
| 7 | Good vs Bad Questions | slide-07-good-vs-bad-questions | Updated in P1 |
| 8 | Rules of Thumb | slide-08-rules-of-thumb | Keep |
| 9 | 3 Types of Bad Data | slide-09-bad-data-types | Keep |
| 10 | Deflecting Compliments | slide-10-deflecting-compliments | Updated in P1 |
| 11 | Anchoring Fluff | **NEW** slide-11-anchoring-fluff | Created in P2 |
| 12 | Digging Beneath Ideas | **NEW** slide-12-digging-beneath-ideas | Created in P2 |
| 13 | Embrace the Uncomfortable | slide-13-embrace-uncomfortable | Merged in P1 (was slide-11+12) |
| 14 | Keep It Casual | slide-14-keep-it-casual | Was slide-13, rename |
| 15 | Conferences & Events | **NEW** slide-15-conferences-and-events | Created in P2 |
| 16 | Meeting Framework (VFWPA) | **NEW** slide-16-meeting-framework-vfwpa | Created in P2 |
| 17 | Commitment & Advancement | slide-17-commitment-advancement | Was slide-14, rename |
| 18 | Meeting Outcomes | slide-18-meeting-outcomes | Was slide-15, rename |
| 19 | Product Risk vs Market Risk | **NEW** slide-19-product-vs-market-risk | Created in P2 |
| 20 | Finding Conversations | slide-20-finding-conversations | Was slide-16, rename |
| 21 | Choose Your Customers | slide-21-choose-customers | Was slide-17, rename + updated in P1 |
| 22 | Customer Slicing | **NEW** slide-22-customer-slicing | Created in P2 |
| 23 | Cheat Sheet | slide-23-cheat-sheet | Was slide-18, rename + expand |
| 24 | Q&A | slide-24-qa | Was slide-19, rename |

## Implementation Steps

### 1. Rename Existing Slide Files

Files that shift position need renaming. Do this carefully to avoid broken imports.

**Rename sequence** (rename to temp first to avoid conflicts):
```
slide-11-scary-questions.tsx → (deleted, merged into embrace-uncomfortable in P1)
slide-12-love-bad-news.tsx → (deleted, merged in P1)
slide-13-keep-it-casual.tsx → slide-14-keep-it-casual.tsx
slide-14-commitment-advancement.tsx → slide-17-commitment-advancement.tsx
slide-15-meeting-outcomes.tsx → slide-18-meeting-outcomes.tsx
slide-16-finding-conversations.tsx → slide-20-finding-conversations.tsx
slide-17-choose-customers.tsx → slide-21-choose-customers.tsx
slide-18-cheat-sheet.tsx → slide-23-cheat-sheet.tsx
slide-19-qa.tsx → slide-24-qa.tsx
```

**Strategy**: Use `git mv` for clean history. Rename all to temp names first, then to final names, to avoid OS conflicts on case-insensitive filesystems.

### 2. Update slides-data.ts Registry

Replace entire `slides` array:
```typescript
export const slides: SlideConfig[] = [
  { id: 1, title: 'Title', component: lazy(() => import('../slides/slide-01-title.tsx')) },
  { id: 2, title: 'The Problem', component: lazy(() => import('../slides/slide-02-the-problem.tsx')) },
  { id: 3, title: 'The Story', component: lazy(() => import('../slides/slide-03-the-story.tsx')) },
  { id: 4, title: 'Failing the Mom Test', component: lazy(() => import('../slides/slide-04-failing-mom-test.tsx')) },
  { id: 5, title: 'Passing the Mom Test', component: lazy(() => import('../slides/slide-05-passing-mom-test.tsx')) },
  { id: 6, title: 'The 3 Rules', component: lazy(() => import('../slides/slide-06-three-rules.tsx')) },
  { id: 7, title: 'Good vs Bad Questions', component: lazy(() => import('../slides/slide-07-good-vs-bad-questions.tsx')) },
  { id: 8, title: 'Rules of Thumb', component: lazy(() => import('../slides/slide-08-rules-of-thumb.tsx')) },
  { id: 9, title: '3 Types of Bad Data', component: lazy(() => import('../slides/slide-09-bad-data-types.tsx')) },
  { id: 10, title: 'Deflecting Compliments', component: lazy(() => import('../slides/slide-10-deflecting-compliments.tsx')) },
  { id: 11, title: 'Anchoring Fluff', component: lazy(() => import('../slides/slide-11-anchoring-fluff.tsx')) },
  { id: 12, title: 'Digging Beneath Ideas', component: lazy(() => import('../slides/slide-12-digging-beneath-ideas.tsx')) },
  { id: 13, title: 'Embrace the Uncomfortable', component: lazy(() => import('../slides/slide-13-embrace-uncomfortable.tsx')) },
  { id: 14, title: 'Keep It Casual', component: lazy(() => import('../slides/slide-14-keep-it-casual.tsx')) },
  { id: 15, title: 'Conferences & Events', component: lazy(() => import('../slides/slide-15-conferences-and-events.tsx')) },
  { id: 16, title: 'Meeting Framework', component: lazy(() => import('../slides/slide-16-meeting-framework-vfwpa.tsx')) },
  { id: 17, title: 'Commitment & Advancement', component: lazy(() => import('../slides/slide-17-commitment-advancement.tsx')) },
  { id: 18, title: 'Meeting Outcomes', component: lazy(() => import('../slides/slide-18-meeting-outcomes.tsx')) },
  { id: 19, title: 'Product vs Market Risk', component: lazy(() => import('../slides/slide-19-product-vs-market-risk.tsx')) },
  { id: 20, title: 'Finding Conversations', component: lazy(() => import('../slides/slide-20-finding-conversations.tsx')) },
  { id: 21, title: 'Choose Your Customers', component: lazy(() => import('../slides/slide-21-choose-customers.tsx')) },
  { id: 22, title: 'Customer Slicing', component: lazy(() => import('../slides/slide-22-customer-slicing.tsx')) },
  { id: 23, title: 'Cheat Sheet', component: lazy(() => import('../slides/slide-23-cheat-sheet.tsx')) },
  { id: 24, title: 'Q&A', component: lazy(() => import('../slides/slide-24-qa.tsx')) },
]
```

### 3. Expand Cheat Sheet (`slide-23-cheat-sheet.tsx`)

Update `RULES` array to 16 items (from 12), adding rules from new slides:
```typescript
const RULES = [
  'Opinions are worthless',
  'Anything about the future = lie',
  'Talk about their life, not your idea',
  'Ask about specifics in the past',
  'Talk less, listen more',
  'Anchor fluff to real behavior',
  'Dig beneath feature requests',
  'Be terrified of at least one question',
  'Love bad news — it\'s progress',
  'Keep it casual — skip the meeting',
  'Pop your #1 question at conferences',
  'Frame meetings: Vision / Weakness / Ask',
  'Push for commitment, not compliments',
  'Know your product risk vs market risk',
  'Slice customers into who-where pairs',
  'Keep talking until you stop hearing new stuff',
]
```

Update grid to `grid-cols-2 sm:grid-cols-4` (4 columns × 4 rows = 16 items).

### 4. Update Function Names in Renamed Files

After renaming, update the exported function names to match:
- `Slide13KeepItCasual` → `Slide14KeepItCasual`
- `Slide14CommitmentAdvancement` → `Slide17CommitmentAdvancement`
- `Slide15MeetingOutcomes` → `Slide18MeetingOutcomes`
- `Slide16FindingConversations` → `Slide20FindingConversations`
- `Slide17ChooseCustomers` → `Slide21ChooseCustomers`
- `Slide18CheatSheet` → `Slide23CheatSheet`
- `Slide19QA` → `Slide24QA`

### 5. Verify & Test

```bash
pnpm dev          # Dev server starts without errors
pnpm build        # Production build succeeds
pnpm test         # Existing tests pass
```

Navigate through all 24 slides with arrow keys. Verify:
- Hash navigation works (#1 through #24)
- Progress bar shows /24
- No broken lazy imports
- All animations play correctly

## Todo List

- [x] Rename slide files to new numbering (git mv)
- [x] Update exported function names in renamed files
- [x] Rewrite slides-data.ts with 24-slide registry
- [x] Expand cheat sheet to 16 rules + 4-column grid
- [x] Run `pnpm dev` — verify all slides load
- [x] Run `pnpm build` — verify production build
- [x] Run `pnpm test` — verify tests pass
- [x] Navigate all 24 slides end-to-end

## Success Criteria

- 24 slides in registry, all lazy-loading correctly
- Arrow key navigation works across all 24 slides
- Hash URLs #1-#24 work for deep linking
- Progress bar shows correct /24 total
- Cheat sheet displays 16 rules in clean grid
- `pnpm build` succeeds with no errors
- All existing tests pass

## Risk Assessment

- **File rename conflicts**: Mitigate by renaming to temp names first
- **Broken imports**: Registry is single source of truth — only update slides-data.ts
- **Test failures**: Existing tests may reference slide count or specific slide indices — check and update
