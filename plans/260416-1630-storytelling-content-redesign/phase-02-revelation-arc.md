# Phase 2: Revelation Arc (Sections 1-6)

## Overview

- **Priority:** High
- **Status:** Completed
- **Effort:** Large
- **Dependencies:** Phase 1

Implement sections 1-6: "You've been collecting lies" narrative arc.

## Sections

| # | Section | Animation | Source |
|---|---------|-----------|--------|
| 1 | Hook | Typewriter reveal | Repurpose slide-02 |
| 2 | The Fail | Chat bubbles + internal monologue | Update slide-04 |
| 3 | Message 1 | Bold text zoom | NEW |
| 4 | Why We're Fooled | 3-card reveal | Merge 09+10+11+12 |
| 5 | The Fix | Rule cascade | Keep slide-06 |
| 6 | The Pass | Chat bubbles + gold highlights | Update slide-05 |

## Implementation Steps

### Section 1: Hook (section-01-hook.tsx)

**Content:** "We talk to customers... and still end up building stuff nobody buys."

Repurpose from slide-02-the-problem:
- Keep typewriter effect
- Change text to exact hook quote
- Highlight "nobody buys" in pink accent

### Section 2: The Fail (section-02-the-fail.tsx)

**Content:** Cookbook/iPad conversation showing lies.

Update from slide-04-failing-mom-test:
- Change flower shop → cookbook/iPad example from book
- Messages:
  1. Son: "Would you ever buy an app which was like a cookbook for your iPad?"
  2. Mom: "Hmmm." (internal: "As if I need another cookbook at my age")
  3. Son: "And it only costs $40..."
  4. Mom: "Oh, well yes honey, that sounds amazing." (internal: "I have rationalised the price outside of a real purchase decision")
- Keep chat bubble component, add internal monologue reveals
- End with red FAIL badge

### Section 3: Message 1 (section-03-message-one.tsx) — NEW

**Content:** Core revelation statement.

Create new component:
- Large bold text: "Opinions are worthless."
- Fade in second line: "Anything about the future is an over-optimistic lie."
- Punch line zoom: "If it felt good, the data is probably fake."
- Use scale animation with stagger

### Section 4: Why We're Fooled (section-04-why-fooled.tsx)

**Content:** 3 types of bad data.

Merge slide-09 content, consolidate 10-12:
- Header: "3 Types of Bad Data"
- Cards:
  1. **Compliments** — "They said they loved it!" = worthless
  2. **Fluff** — Generics, hypotheticals, the future
  3. **Ideas** — Feature requests without motivation
- Use staggered card reveal animation

### Section 5: The Fix (section-05-the-fix.tsx)

**Content:** The Mom Test 3 rules.

Keep slide-06-three-rules mostly as-is:
- Update header to "The Mom Test"
- Rules:
  1. Talk about their life, not your idea
  2. Ask about specifics in the past, not generics about the future
  3. Talk less and listen more
- Add tagline: "If you avoid mentioning your idea, you automatically ask better questions"

### Section 6: The Pass (section-06-the-pass.tsx)

**Content:** Same cookbook conversation, done right.

Update slide-05-passing-mom-test:
- Change to cookbook/iPad example from book
- Messages showing good questions:
  1. "What's the last thing you did on it?"
  2. "Where did you find out about the apps you use?"
  3. "What's the last cookbook you bought for yourself?"
- Highlight "gold dust" answers with accent color
- End with green PASS badge

## Files to Create/Modify

| File | Action |
|------|--------|
| section-01-hook.tsx | Modify (repurpose) |
| section-02-the-fail.tsx | Modify (update conversation) |
| section-03-message-one.tsx | Create new |
| section-04-why-fooled.tsx | Modify (merge content) |
| section-05-the-fix.tsx | Modify (minor updates) |
| section-06-the-pass.tsx | Modify (update conversation) |

## Todo

- [x] Update section-01-hook with exact quote and typewriter
- [x] Update section-02-the-fail with cookbook conversation + internal monologue
- [x] Create section-03-message-one with bold statement reveal
- [x] Update section-04-why-fooled with merged 3 bad data types
- [x] Update section-05-the-fix with Mom Test rules
- [x] Update section-06-the-pass with cookbook pass conversation
- [x] Test all 6 sections render with animations

## Success Criteria

- [x] All 6 sections render and animate on scroll
- [x] Cookbook/iPad conversation in sections 2 and 6 (not flower shop)
- [x] Core message "If it felt good, the data is probably fake" prominent in section 3
- [x] 3 bad data types consolidated into single section 4
