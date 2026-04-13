# Phase 01: Update Existing Slides

## Priority: High
## Status: Complete
## Effort: M

## Overview

Update 7 existing slide components to replace cookbook/iPad example with flower shop, replace "Babies or Bodybuilders" with "Weddings or Weekends", and merge Scary Questions + Love Bad News into one slide.

## Context Links

- [Plan](./plan.md)
- [Brainstorm](../reports/brainstorm-260413-1723-presentation-redesign.md)

## Related Code Files

### Files to Modify
- `src/slides/slide-01-title.tsx` — Update subtitle
- `src/slides/slide-04-failing-mom-test.tsx` — Replace cookbook with flower shop FAIL
- `src/slides/slide-05-passing-mom-test.tsx` — Replace cookbook with flower shop PASS
- `src/slides/slide-07-good-vs-bad-questions.tsx` — Retheme examples with flower shop flavor
- `src/slides/slide-10-deflecting-compliments.tsx` — Update context to flower shop
- `src/slides/slide-11-scary-questions.tsx` — Merge with Love Bad News content → rename
- `src/slides/slide-12-love-bad-news.tsx` — DELETE (merged into slide-11)
- `src/slides/slide-17-choose-customers.tsx` — "Weddings or Weekends?"

### Files to Read for Context
- `src/components/chat-bubble.tsx` — Props for FAIL/PASS conversations
- `src/lib/animation-variants.ts` — Available animation variants

## Implementation Steps

### 1. Update Title Slide (`slide-01-title.tsx`)
Change subtitle from:
```
"How to talk to customers & learn if your business is a good idea when everyone is lying to you"
```
To:
```
"How to validate your startup idea when everyone is lying to you"
```

### 2. Replace Failing Mom Test (`slide-04-failing-mom-test.tsx`)
Replace the `messages` array with flower shop FAIL conversation:
```typescript
const messages: Message[] = [
  { sender: 'You', message: "I'm thinking of opening a flower shop with unique bouquets and same-day delivery. Would you buy from it?", side: 'right', color: 'amber' },
  { sender: 'Friend', message: "Oh wow, that sounds lovely! I'd definitely order from you.", side: 'left', color: 'stone', subtext: "(Thinking: I'll just say yes to be supportive.)" },
  { sender: 'You', message: "We'd do custom arrangements and a subscription service too.", side: 'right', color: 'amber' },
  { sender: 'Friend', message: "I love that! My apartment always needs flowers. You should totally do it.", side: 'left', color: 'stone', subtext: "(Thinking: I buy flowers maybe twice a year...)" },
]
```
Update header from "The Mom Test — FAIL" (keep as-is, this is fine).

### 3. Replace Passing Mom Test (`slide-05-passing-mom-test.tsx`)
Replace the `messages` array with flower shop PASS conversation:
```typescript
const messages = [
  { sender: 'You', message: "Those flowers on your table are nice — where'd you get them?", side: 'right', color: 'green', annotation: 'Asks about real behavior' },
  { sender: 'Friend', message: "The market on Sunday. They were like $5.", side: 'left', color: 'stone' },
  { sender: 'You', message: "Do you buy flowers often?", side: 'right', color: 'green', annotation: 'Frequency, not hypothetical' },
  { sender: 'Friend', message: "Not really. Maybe for someone's birthday.", side: 'left', color: 'stone' },
  { sender: 'You', message: "When's the last time you ordered from an actual flower shop?", side: 'right', color: 'green', annotation: 'Specific past event' },
  { sender: 'Friend', message: "Valentine's Day. It was $60 and they died in 3 days. Felt ripped off.", side: 'left', color: 'stone' },
  { sender: 'You', message: "Did you look at other options before that?", side: 'right', color: 'green', annotation: 'Existing alternatives' },
  { sender: 'Friend', message: "Just Googled 'flower delivery near me' and picked the first one.", side: 'left', color: 'stone' },
]
```

### 4. Retheme Good vs Bad Questions (`slide-07-good-vs-bad-questions.tsx`)
Update question arrays to include flower-shop-flavored alternatives:
```typescript
const badQuestions = [
  'Would you buy flowers from my shop?',
  'Do you think a flower subscription is a good idea?',
  'How much would you pay for a bouquet?',
]

const goodQuestions = [
  'When did you last buy someone flowers?',
  'Walk me through how you chose where to buy them.',
  'What else did you consider?',
]
```
Keep the "Opinions are worthless" footer quote.

### 5. Update Deflecting Compliments (`slide-10-deflecting-compliments.tsx`)
Update the "Before" conversation to flower shop context:
- Before: `"That's cool. Love it."` → keep generic (works for any context)
- After: `"Thanks! So how do you usually buy flowers when you need them?"` (deflect + flower shop)

Minimal change — the before/after structure already works. Only update the "After" deflection line to flower-specific.

### 6. Merge Scary Questions + Love Bad News (`slide-11-scary-questions.tsx`)
Rename to `slide-11-embrace-uncomfortable.tsx`. New content combines both concepts:

**Layout**: Two-row design
- Top: The scary question quote (from current slide-11) — keep dramatic zoom + shake
- Bottom: Two cards side-by-side (from current slide-12 pattern):
  - Green card: "$5K to learn you're wrong = GREAT"
  - Red card: "$50K building wrong thing = DISASTER"
- Footer quote: "The truth is our goal. Bad news gets us closer."

Reuse `dramaticZoom` for the quote, `staggerContainer` for the cards, `useCountUp` for the numbers.

### 7. Delete `slide-12-love-bad-news.tsx`
Content merged into slide-11. File deleted. Registry update happens in Phase 03.

### 8. Update Choose Your Customers (`slide-17-choose-customers.tsx`)
Replace "Babies or Bodybuilders?" with "Weddings or Weekends?":
- Title: `Weddings or <span>Weekends?</span>`
- Description: "A flower shop tried to serve everyone — weddings, Valentine's last-minuters, offices, funerals. Serving everyone meant serving no one."
- Blur→focus: `Everyone` → `Brides-to-be`
- Keep the "Startups don't starve, they drown" quote

## Todo List

- [x] Update title slide subtitle
- [x] Replace slide-04 messages with flower shop FAIL
- [x] Replace slide-05 messages with flower shop PASS
- [x] Retheme slide-07 questions with flower shop flavor
- [x] Update slide-10 deflection line to flower context
- [x] Create merged slide-11-embrace-uncomfortable.tsx
- [x] Delete slide-12-love-bad-news.tsx
- [x] Update slide-17 to "Weddings or Weekends?"
- [x] Verify all modified slides compile (`pnpm dev`)

## Success Criteria

- All 7 modified slides render without errors
- Flower shop conversation flows naturally in slides 4 and 5
- Chat bubble subtexts add humor/insight
- Merged slide-11 effectively combines scary questions + bad news
- "Weddings or Weekends" is clear and relatable
