---
name: Storytelling Content Redesign
description: Consolidate 24-section presentation into 12-section discovery story with two core messages
status: completed
date: 2026-04-16
completedDate: 2026-04-16
blockedBy: []
blocks: [260416-parallax-storytelling-refactor]
---

# Storytelling Content Redesign

## Overview

- **Priority:** High
- **Status:** Completed (2026-04-16)
- **Brainstorm:** [brainstorm report](../reports/brainstorm-260416-1630-storytelling-redesign.md)

Consolidate 24-section Mom Test presentation into 12-section discovery story. Two core messages: (1) Truth is uncomfortable (2) Seek commitment. Keep existing parallax scroll infrastructure, refactor slide content only.

## Two Core Messages

1. **Truth is Uncomfortable** — "If the conversation felt good, the data is probably fake."
2. **Seek Commitment** — "Compliments cost nothing = worth nothing."

## Section Mapping (24 → 12)

| New | Section | Source Slides | Action |
|-----|---------|---------------|--------|
| 1 | Hook | 02-the-problem | Repurpose |
| 2 | The Fail | 04-failing-mom-test | Keep, update to cookbook |
| 3 | Message 1 | NEW | Create bold statement |
| 4 | Why We're Fooled | 09 + 10 + 11 + 12 | Merge bad data types |
| 5 | The Fix | 06-three-rules | Keep |
| 6 | The Pass | 05-passing-mom-test | Keep, update to cookbook |
| 7 | Message 2 | 17-commitment | Repurpose |
| 8 | The Currencies | 17-commitment | Split/create |
| 9 | Product vs Market Risk | 19-product-vs-market-risk | Keep |
| 10 | Customer Slicing | 21 + 22 | Merge |
| 11 | Good vs Bad Meeting | 18-meeting-outcomes | Repurpose |
| 12 | One Thing Monday | 24-qa | Repurpose |

## Files to Remove

After consolidation, delete these unused slides:
- slide-01-title.tsx (merged into hook)
- slide-03-the-story.tsx
- slide-07-good-vs-bad-questions.tsx
- slide-08-rules-of-thumb.tsx
- slide-10-deflecting-compliments.tsx (merged)
- slide-11-anchoring-fluff.tsx (merged)
- slide-12-digging-beneath-ideas.tsx (merged)
- slide-13-embrace-uncomfortable.tsx
- slide-14-keep-it-casual.tsx
- slide-15-conferences-and-events.tsx
- slide-16-meeting-framework-vfwpa.tsx
- slide-20-finding-conversations.tsx
- slide-21-choose-customers.tsx (merged)
- slide-23-cheat-sheet.tsx

## Phases

| # | Phase | Status | Effort | Files |
|---|-------|--------|--------|-------|
| 1 | [Registry & Infrastructure](phase-01-registry-infrastructure.md) | Completed | Small | 2 |
| 2 | [Revelation Arc (1-6)](phase-02-revelation-arc.md) | Completed | Large | 6 |
| 3 | [Test Arc (7-8)](phase-03-test-arc.md) | Completed | Medium | 2 |
| 4 | [Action Arc (9-12)](phase-04-action-arc.md) | Completed | Medium | 4 |
| 5 | [Cleanup & Polish](phase-05-cleanup.md) | Completed | Small | 14 deletions |

## Dependencies

```
Phase 1 (registry) ─┬─ Phase 2 (revelation)
                    ├─ Phase 3 (test)
                    └─ Phase 4 (action)
Phases 2-4 ─────────── Phase 5 (cleanup)
```

Phases 2-4 can run in parallel after Phase 1.

## Success Criteria

- [x] 12 sections render correctly in scroll container
- [x] Two core messages clearly emphasized in sections 3 and 7
- [x] Cookbook/iPad example in sections 2 and 6 (not flower shop)
- [x] All animations work with whileInView
- [x] Old 14 slide files deleted
- [x] sections-data.ts updated with 12 entries
- [x] Build passes with no TypeScript errors
