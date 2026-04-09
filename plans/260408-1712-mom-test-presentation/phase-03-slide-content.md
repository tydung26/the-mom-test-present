---
phase: 03
title: Slide Content — All 19 Slides with Animations
status: complete
priority: high
effort: L
depends_on: [phase-02]
---

# Phase 03 — Slide Content

## Context

- [Brainstorm Slide Table](../reports/brainstorm-260408-1712-mom-test-presentation.md)
- Book source: `docs/The Mom Test{Fitzpatrick, Rob}(2013, Robfitz Ltd){113274475} libgen.li.epub`

## Overview

Implement all 19 slides with hardcoded content from the book and per-slide animations. Each slide is a standalone React component using shared layout and animation utilities.

## File Structure

```
src/slides/
├── slide-01-title.tsx
├── slide-02-the-problem.tsx
├── slide-03-the-story.tsx
├── slide-04-failing-mom-test.tsx
├── slide-05-passing-mom-test.tsx
├── slide-06-three-rules.tsx
├── slide-07-good-vs-bad-questions.tsx
├── slide-08-rules-of-thumb.tsx
├── slide-09-bad-data-types.tsx
├── slide-10-deflecting-compliments.tsx
├── slide-11-scary-questions.tsx
├── slide-12-love-bad-news.tsx
├── slide-13-keep-it-casual.tsx
├── slide-14-commitment-advancement.tsx
├── slide-15-meeting-outcomes.tsx
├── slide-16-finding-conversations.tsx
├── slide-17-choose-customers.tsx
├── slide-18-cheat-sheet.tsx
└── slide-19-qa.tsx
```

## Slide Specs

### Slide 01 — Title
- "THE MOM TEST" in large bold type, centered
- Subtitle: "How to talk to customers & learn if your business is a good idea when everyone is lying to you"
- Author: "Rob Fitzpatrick"
- Animation: Text scales up from 0.8 to 1.0 with spring, subtitle fades in after 0.5s delay

### Slide 02 — The Problem
- Quote: "We talk to customers... and still end up building stuff nobody buys."
- Typewriter effect on the quote text, character by character
- Amber accent on "nobody buys"

### Slide 03 — The Story
- Rob's story at Habit: "3 years. Nearly ran out of money. Relocated internationally. Co-founder deported. Months of customer conversations. All wrong."
- Each line fades in staggered, 0.3s apart
- Final line "All wrong." in amber, bold, with slight shake

### Slide 04 — Failing the Mom Test
- iPad cookbook conversation — BAD version
- Chat bubble UI:
  - Son (right-aligned, amber border): pitching his idea
  - Mom (left-aligned, stone border): politely lying
  - Italicized subtext in stone color shows real thoughts
- Bubbles appear one-by-one with spring animation, ~0.8s intervals
- Red "FAIL" badge fades in at end

### Slide 05 — Passing the Mom Test
- Same conversation done RIGHT
- Chat bubble UI with green (#10b981) highlights on good questions
- Annotations appear next to good questions explaining WHY they work
- Green "PASS" badge at end

### Slide 06 — The 3 Rules
- Three large cards, each revealing one-by-one:
  1. "Talk about their life, not your idea"
  2. "Ask about specifics in the past, not generics about the future"
  3. "Talk less and listen more"
- Cards fly in from bottom with stagger
- Each card has an icon/number and amber accent line

### Slide 07 — Good vs Bad Questions
- Split screen: left = BAD (red-tinted), right = GOOD (green-tinted)
- Bad: "Do you think it's a good idea?" / "Would you buy X?" / "How much would you pay?"
- Good: "How are you dealing with it now?" / "Talk me through the last time..." / "What else have you tried?"
- Items slide in from their respective sides
- Rule of thumb fades in at bottom

### Slide 08 — Rules of Thumb
- Cascading quotes, each appearing with slight upward motion:
  - "Opinions are worthless."
  - "Anything involving the future is an over-optimistic lie."
  - "People will lie to you if they think it's what you want to hear."
  - "People know what their problems are, but they don't know how to solve those problems."
  - "People want to help you, but will rarely do so unless you give them an excuse."
- Amber quotation marks decorating each quote

### Slide 09 — 3 Types of Bad Data
- Three large sections/cards:
  1. **Compliments** — "That's so cool!" with deflation animation
  2. **Fluff** — "I would definitely..." with blur/dissolve effect
  3. **Ideas** — "You should add..." with redirect animation
- Cards animate in with scale spring, icons pulse

### Slide 10 — Deflecting Compliments
- Before/After split:
- **Before** (faded/red): "That's cool. Love it." → "Sounds terrific. Keep me in the loop." → "We've found our big idea!"
- **After** (bright/green): Deflect → ask for specifics → seek commitment
- Transition: Before slides left, After slides in from right

### Slide 11 — Ask Scary Questions
- Big quote: "You should be terrified of at least one of the questions you're asking in every conversation."
- Text zooms in dramatically from very small to filling screen
- Subtle screen shake on "terrified"
- Amber glow on the word "terrified"

### Slide 12 — Love Bad News
- Counter animation: "$50,000" appears
- Split into: "$5,000 to learn you're wrong = GREAT" vs "$50,000 on wrong idea = DISASTER"
- Number counter animates from 0 to values
- Green for $5k path, red for $50k path

### Slide 13 — Keep It Casual
- Quote: "When you strip all the formality from the process, you end up with no meetings, no interview questions, and a much easier time."
- Relaxed, slower fade-in transition
- Time comparison: "Formal meeting: 4 hours" → "Casual chat: 5 minutes"
- Numbers animate with spring

### Slide 14 — Commitment & Advancement
- Traffic light metaphor:
  - Red: "Zombie leads — friendly but never buying"
  - Yellow: "Compliments without commitment"
  - Green: "Real commitment — time, reputation, or money"
- Lights illuminate one by one with glow effect
- Quote: "It's not a real lead until you've given them a concrete chance to reject you."

### Slide 15 — Meeting Outcomes
- Card flip reveals — 4 cards:
  - "That's so cool. I love it!" → flip → "BAD — pure compliment, zero data"
  - "Let me know when it launches" → flip → "BAD — compliment + stall"
  - "What are the next steps?" → flip → "GOOD — advancing"
  - "Can I buy the prototype?" → flip → "GREAT — strongest signal"
- Cards flip on staggered delay

### Slide 16 — Finding Conversations
- Snowball visual metaphor:
  - Small circle: "1 cold call" → grows → "2 warm intros" → grows → "network effect"
- Animated growing circles
- Key insight: "The goal of cold conversations is to stop having them"

### Slide 17 — Choose Your Customers
- "Babies or Bodybuilders?" headline
- Story of the superfood powder: trying to serve everyone = serving no one
- Focus lens effect: blurry crowd → zooms into one clear segment
- Quote: "Startups don't starve, they drown."

### Slide 18 — Cheat Sheet
- Grid of all key rules, each in a small card:
  - Opinions are worthless
  - Anything about future = lie
  - Talk about their life, not your idea
  - Ask about specifics in the past
  - Talk less, listen more
  - Be terrified of at least one question
  - Love bad news
  - Keep it casual
  - Push for commitment
  - It's not a lead until they can reject you
  - Always have your 3 big questions
  - Keep talking until you stop hearing new stuff
- Cards reveal in rapid grid animation (stagger 0.05s each)

### Slide 19 — Q&A
- "Questions?" in large text, centered
- Subtle pulsing amber glow behind text
- Book cover or title reference below
- "Thank you" appears after short delay

## Shared Components Needed

- `chat-bubble.tsx` — Reusable chat bubble (sender, message, subtext, alignment, color)
- `quote-block.tsx` — Large quote display with amber quotation marks
- `split-screen.tsx` — Left/right comparison layout
- `card-grid.tsx` — Grid of animated cards
- `traffic-light.tsx` — Three-circle traffic light with glow states
- `counter-animation.tsx` — Animated number counter

## Implementation Steps

1. Create shared slide components (chat-bubble, quote-block, etc.)
2. Implement slides 01-05 (intro + conversations — the hook)
3. Implement slides 06-09 (rules + bad data — the framework)
4. Implement slides 10-13 (techniques — practical tools)
5. Implement slides 14-17 (advanced — commitment + finding customers)
6. Implement slides 18-19 (wrap-up)
7. Register all slides in `slides-data.ts`
8. Full run-through test — check timing, transitions, readability

## Todo

- [x] Build shared slide components
- [x] Implement slides 01-05 (intro + conversations)
- [x] Implement slides 06-09 (rules + bad data)
- [x] Implement slides 10-13 (techniques)
- [x] Implement slides 14-17 (advanced)
- [x] Implement slides 18-19 (wrap-up)
- [x] Register all slides and test full deck

## Success Criteria

- All 19 slides render with correct content
- Per-slide animations work as specified
- Chat bubbles stagger naturally
- Quotes are readable on dark background
- Cheat sheet grid is scannable
- Full presentation flows smoothly in ~30 minutes
