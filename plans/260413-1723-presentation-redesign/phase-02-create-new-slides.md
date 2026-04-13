# Phase 02: Create 6 New Slide Components

## Priority: High
## Status: Complete
## Effort: L

## Overview

Create 6 new slide components: Anchoring Fluff, Digging Beneath Ideas, Conferences & Events, Meeting Framework (VFWPA), Product Risk vs Market Risk, and Customer Slicing. All follow existing codebase patterns — SlideLayout wrapper, Framer Motion animations, Tailwind CSS v4 styling, dark theme.

## Context Links

- [Plan](./plan.md)
- [Brainstorm](../reports/brainstorm-260413-1723-presentation-redesign.md)
- Book text: `docs/the-mom-test-full-text.txt`

## Related Code Files

### Files to Create
- `src/slides/slide-11-anchoring-fluff.tsx`
- `src/slides/slide-12-digging-beneath-ideas.tsx`
- `src/slides/slide-15-conferences-and-events.tsx`
- `src/slides/slide-16-meeting-framework-vfwpa.tsx`
- `src/slides/slide-19-product-vs-market-risk.tsx`
- `src/slides/slide-22-customer-slicing.tsx`

**Note**: Final slide numbers assigned in Phase 03. File names here use target position for clarity. Phase 03 will handle the registry mapping.

### Files to Read for Context
- `src/components/slide-layout.tsx` — SlideLayout wrapper
- `src/components/card-grid.tsx` — CardGrid component
- `src/components/split-screen.tsx` — SplitScreen component
- `src/lib/animation-variants.ts` — All animation variants

## Slide Pattern

Every slide follows this structure:
```typescript
import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { /* variants */ } from '../lib/animation-variants'

export default function SlideXXName() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      {/* content */}
    </SlideLayout>
  )
}
```

Colors: `#f5f5f5` (text), `#E8699A`/`#E0527E` (pink accent), `#78716c` (stone muted), `#10b981` (green), `#ef4444` (red)

## Implementation Steps

### 1. Anchoring Fluff (`slide-11-anchoring-fluff.tsx`)

**Concept**: "I would definitely buy that" is the world's most deadly fluff. Show how to anchor generic claims to past behavior.

**Layout**: Three-column card design
- Column 1 — "Fluff" (red tint): Generic claims ("I usually", "I always", "I would")
- Column 2 — "Anchor" (pink arrow): The transition question
- Column 3 — "Fact" (green tint): What the anchored answer reveals

**Content**:
```
FLUFF                    ANCHOR                      FACT
"I'd definitely         "When's the last time      "Two months ago...
buy that"               you bought flowers?"        for Valentine's. $60."

"I always love          "What'd you do last         "Grabbed the $5 bunch
fresh flowers"          time you wanted some?"      at the grocery store"

"I would pay            "What do you currently      "Whatever's at the
premium for quality"    spend on flowers?"          market. Like $10 max."
```

**Animations**: `staggerContainer` + `slideFromLeft` for fluff, `fadeIn` for arrows, `slideFromRight` for facts.

**Footer quote**: "The world's most deadly fluff is: 'I would definitely buy that.'"

**Components**: Custom layout (3 columns with arrow connectors). Similar to slide-07 split pattern but with 3 columns.

---

### 2. Digging Beneath Ideas (`slide-12-digging-beneath-ideas.tsx`)

**Concept**: Feature requests ≠ real needs. The MTV analytics story — they asked for analytics but really wanted a weekly email to keep clients happy.

**Layout**: Vertical narrative with reveal
- Top: "They asked for analytics dashboards"
- Middle: Arrow down → "What they actually needed:"
- Bottom reveal: "A simple weekly email to keep their clients happy"
- Bullet summary: 3 dig questions

**Content**:
- Quote header: MTV asked Rob's company for analytics + CSV export + PDF export + branded reports
- Reveal: "Nobody even reads these. Our clients just like getting something emailed at the end of every week."
- Dig questions: "Why do you want that?", "What would that let you do?", "How are you coping without it?"

**Animations**: Title `fadeIn`, narrative `staggerContainer`, reveal with `dramaticZoom` delayed 1.5s, questions `staggerItem`.

**Footer rule**: "Ideas and feature requests should be understood, but not obeyed."

---

### 3. Conferences & Events (`slide-15-conferences-and-events.tsx`)

**Concept**: Turn hallway encounters into gold. Pop off your most important question instead of exchanging business cards.

**Layout**: Two-column comparison (reuse SplitScreen component)
- Left (stone/red tint): "What most people do" — Exchange cards → "Let's grab coffee sometime" → Never follows up
- Right (green tint): "What you should do" — Pop off your #1 question → Have a real conversation → Leave with insights + warm intro

**Content**:
- Left steps: "Exchange business cards" → "Let's grab coffee sometime!" → "Never follows up"
- Right steps: "Ask your #1 question on the spot" → "5-minute real conversation" → "Leave with insights & a warm intro"

**Animations**: `slideFromLeft`/`slideFromRight` for columns, `staggerItem` for steps within each.

**Footer quote**: "If it's not a formal meeting, you don't need to make excuses about why you're there."

---

### 4. Meeting Framework VFWPA (`slide-16-meeting-framework-vfwpa.tsx`)

**Concept**: When you DO need a formal meeting — Vision / Framing / Weakness / Pedestal / Ask.

**Layout**: Vertical stack of 5 labeled cards, each with the element name and a one-line example. Styled like an email template.

**Content**:
```
V — Vision:     "I'm trying to make [flower delivery] less of a pain for event planners"
F — Framing:    "We're just starting out and don't have anything to sell yet"
W — Weakness:   "I've only ever come at it from the buyer's side"
P — Pedestal:   "You've been running events for years — you could really help me"
A — Ask:        "Do you have 20 minutes this week for a quick chat?"
```

**Animations**: `staggerContainer` + `cascadeItem` for the 5 cards. Each card has a pink left border and bold letter.

**Mnemonic footer**: "Very Few Wizards Properly Ask for help"

---

### 5. Product Risk vs Market Risk (`slide-19-product-vs-market-risk.tsx`)

**Concept**: Know what you CAN'T validate just by talking. Some risks are about your product, not the market.

**Layout**: Two-column comparison (reuse SplitScreen or custom)
- Left column — "Market Risk" (green border): "Do they want it? Will they pay? Are there enough of them?" → Validate by talking
- Right column — "Product Risk" (red/amber border): "Can I build it? Can I grow it? Will they keep using it?" → Validate by building

**Content**:
- Market risk examples: "Do people want a flower delivery service?" → Talk to them
- Product risk examples: "Can I keep flowers fresh for 7 days?" → Build & test
- Bottom insight: "If they say 'I'd pay if you can do X' — the risk is in your product, not the market."

**Animations**: `slideFromLeft`/`slideFromRight` for columns, `fadeIn` for bottom insight.

---

### 6. Customer Slicing (`slide-22-customer-slicing.tsx`)

**Concept**: Who-where pairs. Keep slicing your segment until you know where to find them.

**Layout**: Funnel/tree narrowing visualization
- Top (wide, blurred): "Flower buyers" (too broad)
- Middle: "People who buy flowers for events" (better)
- Bottom (focused, highlighted): "Brides-to-be on Pinterest planning their wedding" (specific who-where)

**Content**:
- 3 tiers showing progressive narrowing
- Each tier shows: WHO + WHERE to find them
- Bottom tier highlighted in pink with "who-where pair" label

**Animations**: 
- Top tier: starts visible, then blurs out (`initial blur(0) → animate blur(8px)`)
- Middle tier: fades in, then blurs
- Bottom tier: fades in last with `scaleSpring`, stays sharp
- Similar pattern to existing slide-17 blur→focus animation

**Footer rule**: "If you don't know where to find your customers, keep slicing."

## Todo List

- [x] Create slide-11-anchoring-fluff.tsx (3-column fluff→anchor→fact)
- [x] Create slide-12-digging-beneath-ideas.tsx (MTV story reveal)
- [x] Create slide-15-conferences-and-events.tsx (SplitScreen comparison)
- [x] Create slide-16-meeting-framework-vfwpa.tsx (5-card VFWPA stack)
- [x] Create slide-19-product-vs-market-risk.tsx (two-column risk comparison)
- [x] Create slide-22-customer-slicing.tsx (funnel narrowing)
- [x] Verify each slide compiles and renders in isolation

## Success Criteria

- All 6 new slides render without errors
- Each uses existing animation variants (no new variants needed)
- Visual style consistent with existing slides (dark theme, pink accent, font sizes)
- Flower shop example threaded through VFWPA and Customer Slicing slides
- Content is concise — fits on screen without scrolling at 16:9
