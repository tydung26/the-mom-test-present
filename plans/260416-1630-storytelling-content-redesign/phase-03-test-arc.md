# Phase 3: Test Arc (Sections 7-8)

## Overview

- **Priority:** High
- **Status:** Completed
- **Effort:** Medium
- **Dependencies:** Phase 1

Implement sections 7-8: "How to know if it's real" narrative arc.

## Sections

| # | Section | Animation | Source |
|---|---------|-----------|--------|
| 7 | Message 2 | Bold text zoom | Repurpose slide-17 |
| 8 | The Currencies | Ladder/tier visual | NEW (from slide-17 content) |

## Implementation Steps

### Section 7: Message 2 (section-07-message-two.tsx)

**Content:** Core commitment revelation.

Repurpose slide-17-commitment-advancement:
- Large bold text: "You want facts and commitments, not compliments."
- Second line: "A compliment costs them nothing, so it's worth nothing."
- Punch line: "The more they're giving up, the more seriously you can take their kind words."
- Use same animation style as section-03

### Section 8: The Currencies (section-08-currencies.tsx) — NEW

**Content:** Time, Reputation, Money commitment ladder.

Create new component showing currency hierarchy:

```
┌─────────────────────────────────────┐
│           FINANCIAL                 │  ← Strongest signal
│   Letter of intent, Pre-order,      │
│   Deposit, Purchase                 │
├─────────────────────────────────────┤
│          REPUTATION                 │
│   Intro to boss, Public testimonial,│
│   Case study                        │
├─────────────────────────────────────┤
│             TIME                    │  ← Weakest signal
│   Clear next meeting, Trial usage,  │
│   Feedback session                  │
└─────────────────────────────────────┘
```

Animation:
- Stagger reveal from bottom (Time) to top (Financial)
- Each tier slides up and fades in
- Final tagline: "Think in terms of currency — what are they giving up for you?"

## Files to Create/Modify

| File | Action |
|------|--------|
| section-07-message-two.tsx | Modify (repurpose) |
| section-08-currencies.tsx | Create new |

## Todo

- [x] Update section-07-message-two with commitment revelation
- [x] Create section-08-currencies with tiered ladder visual
- [x] Add stagger animations for currency tiers
- [x] Test both sections render with animations

## Success Criteria

- [x] Section 7 displays "compliments cost nothing" message prominently
- [x] Section 8 shows clear visual hierarchy of commitment types
- [x] Animations flow naturally on scroll
