# Phase 6: Refactor Complex Slides (5 slides)

## Context

- [Plan overview](plan.md)
- Depends on: Phase 1 (StorySection replaces SlideLayout)

## Overview

- **Priority:** High
- **Status:** Pending
- **Description:** Refactor 5 slides with state-driven timing, multi-stage orchestration, and custom animation logic

## Slides in This Phase

| Slide | File | Key Challenge |
|-------|------|--------------|
| 12 | slide-12-digging-beneath-ideas.tsx | 7-stage reveal with custom delays (0.4s→3.4s) |
| 13 | slide-13-embrace-uncomfortable.tsx | dramaticZoom + shake + useCountUp with mount delays |
| 18 | slide-18-meeting-outcomes.tsx | FlipCard component with internal setTimeout state |
| 22 | slide-22-customer-slicing.tsx | 3-tier blur cascade with 6 separate animation blocks |

## Detailed Analysis & Approach

### Slide 12: Digging Beneath Ideas (7-stage orchestrated reveal)

**Current behavior:** Elements appear in precise sequence with custom delays — dramaticZoom for headline, fadeIn stages at 0.4, 0.9, 1.4, 1.8, 2.8, 3.4s.

**Approach:** Use `onViewportEnter` callback to start a delay chain. All elements start hidden, viewport entry triggers sequential reveals via state.

```tsx
export default function Slide12() {
  const [stage, setStage] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 900),
      // ... up to stage 6
    ]
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  // Elements conditionally animate based on stage >= N
}
```

### Slide 13: Embrace Uncomfortable (shake + count-up)

**Current behavior:** dramaticZoom headline, shake animation on an element, useCountUp hooks firing at specific mount delays (1400ms, 1800ms).

**Approach:**
- Gate everything on `useInView`
- dramaticZoom → whileInView
- Shake: trigger via state after viewport entry delay
- useCountUp: pass `enabled: isInView` + adjust start delays relative to viewport entry

### Slide 18: Meeting Outcomes (FlipCard with setTimeout)

**Current behavior:** FlipCard component uses internal `useState` + `setTimeout` per card. Cards flip after 1s, 2s, 3s, 4s delays from mount.

**Approach:** FlipCard already self-contained. Add a `triggerFlip` prop or `enabled` prop:
- FlipCard starts inactive
- Parent passes `enabled={isInView}`
- FlipCard's setTimeout only fires when enabled becomes true
- Minimal change to component internals

```tsx
// In FlipCard
useEffect(() => {
  if (!enabled) return
  const timer = setTimeout(() => setFlipped(true), delay)
  return () => clearTimeout(timer)
}, [enabled, delay])
```

### Slide 22: Customer Slicing (3-tier blur cascade)

**Current behavior:** 6 separate `initial`/`animate` blocks with staggered delays (0.3s→3.0s). Blur filters + opacity + scaleSpring.

**Approach:** Similar to Slide 12 — use `useInView` to gate a staged reveal. Group the 3 tiers:

```tsx
const isInView = useInView(ref, { once: true, amount: 0.3 })

// Tier 1: visible immediately on viewport enter
// Tier 2: visible after 1s delay
// Tier 3: visible after 2s delay + scale highlight
```

Convert `animate={...}` to conditional animation state driven by isInView + timers.

## Implementation Steps

1. Read each slide file fully before modifying
2. **Slide 12:**
   - Add useInView ref
   - Convert 7-stage delay chain to useEffect + setTimeout sequence gated on isInView
   - Remove SlideLayout, convert animate → state-driven animation
   - Test: scroll to section, verify stages play in order
3. **Slide 13:**
   - Add useInView ref
   - Gate useCountUp with isInView enabled flag
   - Convert dramaticZoom to whileInView
   - Shake animation: state-gated after delay
   - Update useCountUp hook to accept `enabled` param (if not done in Phase 5)
4. **Slide 18:**
   - Add `enabled` prop to FlipCard component
   - Gate internal setTimeout on enabled
   - Parent uses useInView, passes enabled={isInView}
   - Convert title animate → whileInView
5. **Slide 22:**
   - Add useInView ref
   - Group 6 animation blocks into 3 tiers with staged timeouts
   - Convert inline animate to state-driven
   - Test blur filter performance on scroll
6. Compile check
7. Thorough visual testing — these are the highest-risk slides

## Todo

- [ ] Refactor slide-12 (digging beneath ideas) — staged reveal
- [ ] Refactor slide-13 (embrace uncomfortable) — shake + count-up gating
- [ ] Refactor slide-18 (meeting outcomes) — FlipCard enabled prop
- [ ] Refactor slide-22 (customer slicing) — tier cascade gating
- [ ] Update useCountUp hook (enabled param) if not done in Phase 5
- [ ] Compile check
- [ ] Visual testing of all complex slides

## Success Criteria

- Slide 12: 7-stage reveal plays sequentially when scrolled into view
- Slide 13: shake + count-up trigger only on viewport entry
- Slide 18: cards flip in sequence only when section visible
- Slide 22: blur cascade plays tier-by-tier when visible
- No animations fire before section is in viewport
- No jank from filter animations during scroll
- Build passes

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Timer cleanup on fast scroll-past | Medium | useEffect cleanup clears all timeouts. once: true prevents re-trigger. |
| useCountUp enabled prop breaking existing usage | Low | Default enabled=true for backward compat |
| FlipCard setTimeout + CSS 3D transform perf | Low | Already works; just gating start time |
| Multiple useInView + timers = state complexity | Medium | Keep each slide self-contained. No shared state between slides. |
