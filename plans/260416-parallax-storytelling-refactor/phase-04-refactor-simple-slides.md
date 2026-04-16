# Phase 4: Refactor Simple Slides (11 slides)

## Context

- [Plan overview](plan.md)
- Depends on: Phase 1 (StorySection replaces SlideLayout)

## Overview

- **Priority:** High
- **Status:** Pending
- **Description:** Convert 11 simple slides from mount-triggered to scroll-triggered animations

## Key Insights

- These slides use only basic variants: fadeIn, zoomIn, slideUp, staggerContainer, staggerItem, cascadeItem, scaleSpring
- Mechanical refactor: `initial="hidden" animate="visible"` → `initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}`
- SlideLayout import → StorySection import (or remove wrapper since StorySection is now the parent)
- Since StorySection wraps each section in scroll-container, slides no longer need their own wrapper

## Slides in This Phase

| Slide | File | Variants Used | Notes |
|-------|------|--------------|-------|
| 01 | slide-01-title.tsx | zoomIn, fadeIn | Title slide — straightforward |
| 02 | slide-02-the-problem.tsx | fadeIn | Custom text reveal timer — preserve timer logic |
| 03 | slide-03-the-story.tsx | staggerContainer, staggerItem | Stagger list + inline shake |
| 06 | slide-06-three-rules.tsx | fadeIn, staggerContainer, slideUp | Standard list stagger |
| 08 | slide-08-rules-of-thumb.tsx | staggerContainer, cascadeItem | Cascade variant |
| 09 | slide-09-bad-data-types.tsx | staggerContainer, scaleSpring | 3-card spring scale |
| 10 | slide-10-deflecting-compliments.tsx | slideFromLeft, slideFromRight | Two side-by-side boxes |
| 16 | slide-16-meeting-framework-vfwpa.tsx | fadeIn, staggerContainer, cascadeItem | List + delayed footer |
| 17 | slide-17-commitment-advancement.tsx | staggerContainer, custom lightItem | Traffic light indicators |
| 20 | slide-20-finding-conversations.tsx | staggerContainer, custom circleItem | 3 circles spring |
| 23 | slide-23-cheat-sheet.tsx | staggerFastContainer, staggerItem | 4-col rapid grid |
| 24 | slide-24-qa.tsx | pulseGlow, fadeIn | Infinite pulse + spring |

## The Refactor Pattern

Every slide follows the same transformation:

```tsx
// BEFORE (mount-triggered)
import { SlideLayout } from '../components/slide-layout'

export default function SlideXX() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >...</motion.h2>
    </SlideLayout>
  )
}

// AFTER (scroll-triggered)
// No SlideLayout import needed — StorySection wraps externally

export default function SlideXX() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >...</motion.h2>
    </>
  )
}
```

For stagger containers:
```tsx
// BEFORE
<motion.div variants={staggerContainer} initial="hidden" animate="visible">

// AFTER
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
```

## Implementation Steps

1. For each slide in the list:
   a. Remove `SlideLayout` import and wrapper (StorySection handles layout externally)
   b. Replace all `animate="visible"` with `whileInView="visible"`
   c. Add `viewport={{ once: true, amount: 0.3 }}` to each animated element
   d. For stagger containers: use `amount: 0.2` (lower threshold so children start appearing earlier)
   e. Remove explicit transition delays that were tuned for sequential mount — scroll reveals handle pacing naturally
   f. Keep any internal state/timers (e.g., slide-02 text reveal)
   g. Return fragment or div instead of SlideLayout wrapper
2. Handle slide-specific className from SlideLayout:
   - If slide had `<SlideLayout className="bg-[#0f0f0f]">`, that bg is now on StorySection
   - Pass per-section className through sections-data.ts config
3. Compile check after each batch of 3-4 slides
4. Visual spot-check in dev mode

## Todo

- [ ] Refactor slide-01 (title)
- [ ] Refactor slide-02 (the problem)
- [ ] Refactor slide-03 (the story)
- [ ] Refactor slide-06 (three rules)
- [ ] Refactor slide-08 (rules of thumb)
- [ ] Refactor slide-09 (bad data types)
- [ ] Refactor slide-10 (deflecting compliments)
- [ ] Refactor slide-16 (meeting framework)
- [ ] Refactor slide-17 (commitment advancement)
- [ ] Refactor slide-20 (finding conversations)
- [ ] Refactor slide-23 (cheat sheet)
- [ ] Refactor slide-24 (Q&A)
- [ ] Compile check
- [ ] Visual spot-check

## Success Criteria

- All 11 slides render correctly in scroll container
- Elements fade/slide in when scrolled into view
- Stagger animations play as section enters viewport
- No mount-based animations remain
- No SlideLayout imports remain in these files
- Build passes

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Stagger timing feels different with scroll | Low | Adjust viewport amount threshold. Lower = earlier trigger. |
| Slide-02 text reveal timer fires too early | Low | Gate timer start on `onViewportEnter` callback if needed |
| Removing SlideLayout padding/centering | Low | StorySection provides same flex center + padding |
