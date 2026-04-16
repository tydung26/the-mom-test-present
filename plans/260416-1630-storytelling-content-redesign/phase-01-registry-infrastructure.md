# Phase 1: Registry & Infrastructure

## Overview

- **Priority:** High
- **Status:** Completed
- **Effort:** Small
- **Dependencies:** None

Update sections-data.ts and rename slide files to new 12-section structure.

## Files to Modify

1. `src/lib/sections-data.ts` — Update registry from 24 to 12 sections
2. Rename existing slide files to new numbering

## Implementation Steps

### Step 1: Rename slide files for new structure

```bash
# Files to keep and rename
mv src/slides/slide-02-the-problem.tsx src/slides/section-01-hook.tsx
mv src/slides/slide-04-failing-mom-test.tsx src/slides/section-02-the-fail.tsx
# section-03-message-one.tsx — CREATE NEW
mv src/slides/slide-09-bad-data-types.tsx src/slides/section-04-why-fooled.tsx
mv src/slides/slide-06-three-rules.tsx src/slides/section-05-the-fix.tsx
mv src/slides/slide-05-passing-mom-test.tsx src/slides/section-06-the-pass.tsx
mv src/slides/slide-17-commitment-advancement.tsx src/slides/section-07-message-two.tsx
# section-08-currencies.tsx — CREATE NEW
mv src/slides/slide-19-product-vs-market-risk.tsx src/slides/section-09-risk.tsx
mv src/slides/slide-22-customer-slicing.tsx src/slides/section-10-slicing.tsx
mv src/slides/slide-18-meeting-outcomes.tsx src/slides/section-11-meetings.tsx
mv src/slides/slide-24-qa.tsx src/slides/section-12-action.tsx
```

### Step 2: Update sections-data.ts

```typescript
export const sections: SectionConfig[] = [
  { id: 1, title: 'Hook', component: lazy(() => import('../slides/section-01-hook.tsx')) },
  { id: 2, title: 'The Fail', component: lazy(() => import('../slides/section-02-the-fail.tsx')) },
  { id: 3, title: 'Truth is Uncomfortable', component: lazy(() => import('../slides/section-03-message-one.tsx')) },
  { id: 4, title: 'Why We\'re Fooled', component: lazy(() => import('../slides/section-04-why-fooled.tsx')) },
  { id: 5, title: 'The Fix', component: lazy(() => import('../slides/section-05-the-fix.tsx')) },
  { id: 6, title: 'The Pass', component: lazy(() => import('../slides/section-06-the-pass.tsx')) },
  { id: 7, title: 'Seek Commitment', component: lazy(() => import('../slides/section-07-message-two.tsx')) },
  { id: 8, title: 'The Currencies', component: lazy(() => import('../slides/section-08-currencies.tsx')) },
  { id: 9, title: 'Product vs Market Risk', component: lazy(() => import('../slides/section-09-risk.tsx')) },
  { id: 10, title: 'Customer Slicing', component: lazy(() => import('../slides/section-10-slicing.tsx')) },
  { id: 11, title: 'Good vs Bad Meeting', component: lazy(() => import('../slides/section-11-meetings.tsx')) },
  { id: 12, title: 'One Thing Monday', component: lazy(() => import('../slides/section-12-action.tsx')) },
]
```

### Step 3: Create placeholder files for new sections

Create empty component shells for sections 3 and 8 (will be filled in Phase 2 and 3):
- `section-03-message-one.tsx`
- `section-08-currencies.tsx`

## Todo

- [x] Rename existing slide files to new section-XX naming
- [x] Update sections-data.ts with 12 entries
- [x] Create placeholder components for sections 3 and 8
- [x] Verify build passes

## Success Criteria

- [x] 12 section files exist with correct naming
- [x] sections-data.ts imports all 12 sections
- [x] `pnpm build` succeeds (placeholders render empty)
