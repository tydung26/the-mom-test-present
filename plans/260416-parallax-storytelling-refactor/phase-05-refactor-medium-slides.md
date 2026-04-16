# Phase 5: Refactor Medium Slides (8 slides)

## Context

- [Plan overview](plan.md)
- Depends on: Phase 1 (StorySection replaces SlideLayout)

## Overview

- **Priority:** High
- **Status:** Pending
- **Description:** Convert 8 medium-complexity slides with dual-column staggers, count-up hooks, and timing-sensitive animations

## Slides in This Phase

| Slide | File | Complexity | Notes |
|-------|------|-----------|-------|
| 04 | slide-04-failing-mom-test.tsx | Chat bubbles + stagger + delayed badge | ChatBubble component import stays |
| 05 | slide-05-passing-mom-test.tsx | Chat bubbles + annotations + PASS badge | Same pattern as 04 |
| 07 | slide-07-good-vs-bad-questions.tsx | Dual staggerContainers (columns) | Both columns need independent scroll triggers |
| 11 | slide-11-anchoring-fluff.tsx | 3-col table grid + nested stagger + footer | Complex stagger nesting |
| 14 | slide-14-keep-it-casual.tsx | Quote + count-up cards with spring | useCountUp hook timing |
| 15 | slide-15-conferences-and-events.tsx | Dual columns bad/good + mixed animations | Similar to 07 |
| 19 | slide-19-product-vs-market-risk.tsx | Dual columns + stagger + slideFrom | Similar to 07/15 |
| 21 | slide-21-choose-customers.tsx | Blur/opacity filter animations | Custom filter keyframes |

## Refactor Patterns

### Chat Bubble Slides (04, 05)

```tsx
// BEFORE: staggerContainer triggers on mount, chat bubbles stagger in
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {messages.map(msg => <ChatBubble ... />)}
</motion.div>

// AFTER: stagger triggers on scroll
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {messages.map(msg => <ChatBubble ... />)}
</motion.div>

// Delayed badge: use transition.delay on the badge element (preserved as-is)
// Just change animate → whileInView
```

### Dual-Column Slides (07, 15, 19)

Key concern: both columns should animate when section enters viewport, not independently.

```tsx
// Wrap both columns in a single parent with whileInView
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="flex gap-8"
>
  <motion.div variants={staggerContainer}>
    {/* Left column items with slideFromLeft */}
  </motion.div>
  <motion.div variants={staggerContainer}>
    {/* Right column items with slideFromRight */}
  </motion.div>
</motion.div>
```

### Count-Up Hook (Slide 14)

- `useCountUp` currently fires on mount with a delay
- Need to gate the hook: only start counting when section enters viewport
- Add `isInView` state via Framer Motion's `useInView` ref
- Pass `enabled` flag to useCountUp: `useCountUp({ target: 12, enabled: isInView })`

### Blur Filter Slide (21)

- Custom inline `animate={{ filter: 'blur(0px)', opacity: 1 }}` with delays
- Convert to `whileInView` with same filter values
- Test performance: filter animations during scroll can be costly
- Fallback: use opacity-only if blur jank detected

## Implementation Steps

1. Refactor slides 04, 05 (chat bubbles):
   - Replace animate → whileInView on stagger container
   - Badge delay preserved in transition prop
   - Remove SlideLayout wrapper
2. Refactor slides 07, 15, 19 (dual columns):
   - Wrap columns in single whileInView parent
   - Each column keeps its staggerContainer variant
   - slideFromLeft/Right children animate within stagger
   - Remove SlideLayout wrapper
3. Refactor slide 11 (anchoring fluff):
   - Nested stagger: outer container whileInView, inner items cascade
   - Footer delay preserved
   - Remove SlideLayout wrapper
4. Refactor slide 14 (count-up):
   - Add `useInView` ref to section content area
   - Pass `isInView` to useCountUp hook as enable gate
   - May need minor useCountUp hook update to accept `enabled` param
   - Remove SlideLayout wrapper
5. Refactor slide 21 (blur filters):
   - Convert inline animate → whileInView with same filter values
   - Test blur performance during scroll
   - Remove SlideLayout wrapper
6. Compile check
7. Visual spot-check for timing/feel

## Todo

- [ ] Refactor slide-04 (failing mom test)
- [ ] Refactor slide-05 (passing mom test)
- [ ] Refactor slide-07 (good vs bad questions)
- [ ] Refactor slide-11 (anchoring fluff)
- [ ] Refactor slide-14 (keep it casual) + update useCountUp hook
- [ ] Refactor slide-15 (conferences & events)
- [ ] Refactor slide-19 (product vs market risk)
- [ ] Refactor slide-21 (choose customers)
- [ ] Compile check
- [ ] Visual spot-check

## Success Criteria

- All 8 slides animate correctly on scroll
- Dual-column slides have synchronized column animations
- Chat bubbles stagger in sequence when scrolled into view
- Count-up numbers trigger only when visible
- Blur filter animations smooth (no dropped frames)
- Build passes

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Dual columns animate at wrong time | Medium | Single parent whileInView wrapping both columns |
| useCountUp fires before visible | Medium | Gate with useInView, add enabled prop |
| Blur filter jank on scroll | Medium | Test on multiple devices. Fallback: opacity-only transition |
| Stagger timing feels rushed on fast scroll | Low | Lower viewport amount (0.15-0.2) so animation starts earlier |
