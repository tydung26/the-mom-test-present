# Phase 2: Floating Nav & Presenter Controls

## Context

- [Plan overview](plan.md)
- Depends on: Phase 1 (useStoryNavigation hook)

## Overview

- **Priority:** High
- **Status:** Pending
- **Description:** Create floating dot navigation for section jumping and presenter keyboard controls

## Key Insights

- Replaces SlideProgress (progress bar) and SlideCounter (slide number display)
- Must work for both standalone reading (click dots) and live presenting (keyboard shortcuts)
- Consumes `currentSection` and `scrollToSection` from `useStoryNavigation`

## Requirements

### Functional
- Vertical dot strip on right edge of viewport
- Active dot highlighted with pink accent (#E0527E)
- Click dot → smooth scroll to that section
- Hover dot → show section title tooltip
- Auto-hide after 3s of no mouse movement, reappear on hover/move
- Keyboard: Arrow keys scroll to prev/next section (from Phase 1 hook)

### Non-Functional
- Fixed position, doesn't shift layout
- z-index above all section content
- Accessible: dots are buttons with aria-labels
- Responsive: hidden on mobile (< 768px), swipe gestures from Phase 1 handle nav

## Architecture

```tsx
interface FloatingNavProps {
  current: number
  total: number
  titles: string[]
  onNavigate: (index: number) => void
}

export function FloatingNav({ current, total, titles, onNavigate }: FloatingNavProps) {
  // Auto-hide logic: mouse idle timer
  // Map sections to dots
  // Active dot: scale + color
  // Tooltip: absolute positioned label on hover
}
```

## Related Code Files

### Create
- `src/components/floating-nav.tsx`

### Modify
- `src/components/scroll-container.tsx` — integrate FloatingNav, pass props

### Delete
- `src/components/slide-progress.tsx` (if not deleted in Phase 1)
- `src/components/slide-counter.tsx` (if not deleted in Phase 1)

## Implementation Steps

1. Create `src/components/floating-nav.tsx`:
   - Fixed right-8 top-1/2 -translate-y-1/2, flex flex-col gap-2, z-50
   - Each dot: button, w-3 h-3 rounded-full, bg-white/20 default, bg-[#E0527E] when active
   - Active dot: scale-125 with spring transition
   - Hover: show tooltip (section title) left of the dot, absolute positioned
   - Auto-hide: opacity-0 after 3s idle, opacity-100 on mousemove. Use useState + setTimeout
   - Accessibility: each button has `aria-label="Go to section N: Title"`, `aria-current` on active
2. Update `src/components/scroll-container.tsx`:
   - Pass `currentSection`, `scrollToSection`, section titles to FloatingNav
3. Hide on mobile: `hidden md:flex` on nav container
4. Compile check

## Todo

- [ ] Create floating-nav.tsx with dots, tooltips, auto-hide
- [ ] Integrate into scroll-container.tsx
- [ ] Test click navigation + tooltip display
- [ ] Verify mobile hiding
- [ ] Compile check

## Success Criteria

- Dots visible on right edge, highlight current section
- Click dot → smooth scroll to section
- Hover shows section title
- Nav auto-hides after 3s idle
- Hidden on mobile viewports
- Accessible button markup

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| 24 dots may be too many vertically | Low | Small dots (w-2 h-2) + tight gap (gap-1.5) fit in viewport. Can group if needed. |
| Auto-hide conflicts with tooltip hover | Low | Reset idle timer on nav hover. Nav stays visible while interacting. |
