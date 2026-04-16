# Phase 5: Cleanup & Polish

## Overview

- **Priority:** Medium
- **Status:** Completed
- **Effort:** Small
- **Dependencies:** Phases 2, 3, 4

Delete unused slide files, verify build, final polish.

## Files to Delete

14 old slide files no longer needed:

```bash
rm src/slides/slide-01-title.tsx
rm src/slides/slide-03-the-story.tsx
rm src/slides/slide-07-good-vs-bad-questions.tsx
rm src/slides/slide-08-rules-of-thumb.tsx
rm src/slides/slide-10-deflecting-compliments.tsx
rm src/slides/slide-11-anchoring-fluff.tsx
rm src/slides/slide-12-digging-beneath-ideas.tsx
rm src/slides/slide-13-embrace-uncomfortable.tsx
rm src/slides/slide-14-keep-it-casual.tsx
rm src/slides/slide-15-conferences-and-events.tsx
rm src/slides/slide-16-meeting-framework-vfwpa.tsx
rm src/slides/slide-20-finding-conversations.tsx
rm src/slides/slide-21-choose-customers.tsx
rm src/slides/slide-23-cheat-sheet.tsx
```

## Implementation Steps

### Step 1: Delete old slide files

Remove all 14 files listed above.

### Step 2: Verify no orphan imports

Check for any remaining imports of deleted files:
```bash
grep -r "slide-01\|slide-03\|slide-07\|slide-08\|slide-10\|slide-11\|slide-12\|slide-13\|slide-14\|slide-15\|slide-16\|slide-20\|slide-21\|slide-23" src/
```

### Step 3: Update README.md

Update section table from 24 to 12 sections:

| # | Section | Animation |
|---|---------|-----------|
| 1 | Hook | Typewriter reveal |
| 2 | The Fail | Chat bubbles + internal monologue |
| 3 | Truth is Uncomfortable | Bold text zoom |
| 4 | Why We're Fooled | 3-card reveal |
| 5 | The Fix | Rule cascade |
| 6 | The Pass | Chat bubbles + gold highlights |
| 7 | Seek Commitment | Bold text zoom |
| 8 | The Currencies | Ladder/tier visual |
| 9 | Product vs Market Risk | Two-column comparison |
| 10 | Customer Slicing | Funnel drill-down |
| 11 | Good vs Bad Meeting | Pass/fail cards |
| 12 | One Thing Monday | Bold question + Q&A glow |

### Step 4: Final build verification

```bash
pnpm build
pnpm preview  # Manual visual check
```

### Step 5: Keyboard navigation test

Verify:
- Arrow keys navigate between all 12 sections
- Dot nav shows 12 dots
- URL hash works (#section-1 through #section-12)

## Todo

- [x] Delete 14 old slide files
- [x] Verify no orphan imports remain
- [x] Update README.md with new 12-section table
- [x] Run `pnpm build` — no TypeScript errors
- [x] Manual test: scroll through all 12 sections
- [x] Manual test: keyboard nav + dot nav
- [x] Manual test: URL hash deep-linking

## Success Criteria

- [x] Only 12 section files remain in src/slides/
- [x] Build passes with no errors
- [x] All navigation methods work
- [x] README accurately reflects new structure
