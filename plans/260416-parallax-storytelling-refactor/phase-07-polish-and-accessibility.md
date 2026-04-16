# Phase 7: Polish & Accessibility

## Context

- [Plan overview](plan.md)
- Depends on: Phases 1-6 (all sections refactored)

## Overview

- **Priority:** Medium
- **Status:** Pending
- **Description:** Final polish — reduced motion support, performance optimization, responsive tweaks, documentation updates

## Requirements

### Functional
- `prefers-reduced-motion`: disable parallax, use simple opacity fades, disable stagger delays
- Smooth scroll behavior on all browsers
- Mobile responsive: sections adapt to smaller viewports, no horizontal overflow
- Update README with new navigation instructions

### Non-Functional
- Lighthouse performance score > 90
- No layout shift (CLS < 0.1)
- All interactive elements keyboard accessible

## Implementation Steps

1. **Reduced Motion Support:**
   - In `parallax-layer.tsx`: check `useReducedMotion()`, return static element if true
   - In `animation-variants.ts`: add reduced-motion variant set (opacity-only, no transforms)
   - CSS: existing `@media (prefers-reduced-motion)` rule already kills animations — verify it works with whileInView
   - Test: enable reduced motion in OS settings, verify all sections readable

2. **Performance Optimization:**
   - Add `will-change: transform` to parallax layers only (not all animated elements)
   - Verify no unnecessary re-renders: React.memo on StorySection if needed
   - Test scroll performance with Chrome DevTools Performance tab
   - If any section drops below 60fps: reduce parallax layers or simplify animations

3. **Responsive Polish:**
   - Test all 24 sections at 320px, 768px, 1024px, 1440px widths
   - FloatingNav hidden below 768px (md breakpoint)
   - Verify no horizontal overflow or text cutoff
   - Parallax layers: reduce amplitude on mobile or disable below md

4. **Documentation:**
   - Update README.md: new navigation instructions (scroll, floating nav, keyboard)
   - Remove old slideshow navigation table
   - Update "Design" section: mention parallax storytelling approach
   - Update project structure if file names changed

5. **Test Updates:**
   - Update any existing tests that reference SlideDeck, SlideLayout, useSlideNavigation
   - Add basic test: ScrollContainer renders all 24 sections
   - Add test: useStoryNavigation tracks section changes

6. **Cleanup:**
   - Remove any dead imports across all files
   - Verify no references to old deleted components
   - Final `pnpm build` to ensure clean production build
   - `pnpm test` to ensure all tests pass

## Todo

- [ ] Implement reduced-motion support for parallax + animations
- [ ] Performance audit + optimization
- [ ] Responsive testing + fixes
- [ ] Update README.md
- [ ] Update/add tests
- [ ] Final cleanup + build verification

## Success Criteria

- `prefers-reduced-motion` shows clean, static content without jarring transitions
- Lighthouse performance > 90
- No horizontal scroll at any viewport width
- README accurately reflects new interaction model
- All tests pass
- Clean production build

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Reduced motion breaks whileInView triggers | Low | whileInView still fires (it's visibility, not animation). Only transform/animation disabled. |
| Mobile scroll performance with parallax | Medium | Disable parallax layers below md breakpoint |
| Existing tests tightly coupled to old API | Low | Tests are likely minimal — update imports and assertions |
