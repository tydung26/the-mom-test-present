# Phase 4: Action Arc (Sections 9-12)

## Overview

- **Priority:** High
- **Status:** Completed
- **Effort:** Medium
- **Dependencies:** Phase 1

Implement sections 9-12: Nuance, targeting, and actionable takeaways.

## Sections

| # | Section | Animation | Source |
|---|---------|-----------|--------|
| 9 | Product vs Market Risk | Two-column comparison | Keep slide-19 |
| 10 | Customer Slicing | Funnel/drilling | Merge slide-21+22 |
| 11 | Good vs Bad Meeting | Pass/fail cards | Repurpose slide-18 |
| 12 | One Thing Monday | Bold question + Q&A | Repurpose slide-24 |

## Implementation Steps

### Section 9: Product vs Market Risk (section-09-risk.tsx)

**Content:** Know which risk you're validating.

Keep slide-19-product-vs-market-risk structure:
- Two columns:
  - **Product Risk:** Can I build it? Can I grow it? Will they keep using it?
  - **Market Risk:** Do they want it? Will they pay? Are there enough of them?
- Examples:
  - Video games = pure product risk
  - Farm fertility monitor = "if you can build it, I'll buy it"
- Key insight: "If heavy product risk, can't prove business through conversations alone"

### Section 10: Customer Slicing (section-10-slicing.tsx)

**Content:** Slice until you have a who-where pair.

Merge slide-21 + slide-22:
- Problem: "Advertisers" = drowning in mixed signals
- Visual: Funnel showing slicing process
  - "Students" → "PhD students" → "Non-native PhD students with upcoming talks" → "Find via department advisors"
- Rule: "Good customer segments are a who-where pair"
- Animation: Progressive reveal drilling down

### Section 11: Good vs Bad Meeting (section-11-meetings.tsx)

**Content:** Meeting outcome recognition.

Repurpose slide-18-meeting-outcomes:
- Table/cards showing statements and verdicts:

| Statement | Verdict |
|-----------|---------|
| "That's so cool. I love it!" | BAD - pure compliment |
| "Let me know when it launches" | BAD - stall tactic |
| "I would definitely buy that" | DANGER - $10M false positive |
| "What are the next steps?" | GOOD - advancement |
| "Can I buy the prototype?" | GOLD - real commitment |

- Animation: Cards flip or reveal verdict
- Fix: "Push for commitment at end of every meeting"

### Section 12: One Thing Monday (section-12-action.tsx)

**Content:** Single actionable takeaway + Q&A.

Repurpose slide-24-qa:
- Large bold question: "If this existed, would you pay now?"
- Subtext: "Forces shift from hypothetical to concrete. If yes, take their money. If hesitation, you learned the truth."
- Q&A indicator with pulsing glow
- Keep minimal — this is the closing

## Files to Modify

| File | Action |
|------|--------|
| section-09-risk.tsx | Modify (minor updates) |
| section-10-slicing.tsx | Modify (merge content) |
| section-11-meetings.tsx | Modify (repurpose) |
| section-12-action.tsx | Modify (repurpose) |

## Todo

- [x] Update section-09-risk with two-column risk comparison
- [x] Update section-10-slicing with merged who-where content
- [x] Update section-11-meetings with pass/fail meeting cards
- [x] Update section-12-action with single bold question + Q&A
- [x] Test all 4 sections render with animations

## Success Criteria

- [x] Section 9 clearly distinguishes product vs market risk
- [x] Section 10 shows slicing funnel with who-where outcome
- [x] Section 11 has clear pass/fail visual for meeting statements
- [x] Section 12 ends with powerful single question and Q&A state
