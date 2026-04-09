# Code Review: The Mom Test Presentation

**Date:** 2026-04-08
**Reviewer:** code-reviewer
**Stack:** TanStack Start (SPA) + React 19 + TypeScript + Framer Motion + Tailwind CSS v4
**Build status:** tsc --noEmit PASS, vite build PASS

---

## Scope

- **Files reviewed:** 33 source files (10 components, 19 slides, 2 lib, 1 hook, 1 route)
- **LOC:** ~1,400
- **Focus:** Full codebase review

## Overall Assessment

Solid presentation codebase. Clean component architecture, consistent patterns, proper lazy-loading. TypeScript strict mode enabled with zero errors. A few production-grade issues worth addressing, primarily around state management race conditions, missing cleanup in animation hooks, accessibility gaps, and DRY violations.

---

## Critical Issues

### 1. Race Condition: `setDirection` inside `setCurrentSlide` updater (use-slide-navigation.ts:17-23)

**Severity: Critical**

The `goTo` callback calls `setDirection(...)` from inside the `setCurrentSlide` updater function. React does not guarantee the order of state updates called from within another state updater. The `direction` state could be batched after `currentSlide` changes, causing `getSlideVariants(direction)` in `slide-deck.tsx` to use the stale previous direction for one render frame, producing a brief wrong-direction animation flicker.

The same pattern exists in `goNext` (line 26-31) and `goPrev` (line 33-39).

```ts
// CURRENT (problematic)
const goTo = useCallback((index: number) => {
  setCurrentSlide((prev) => {
    if (index < 0 || index >= TOTAL_SLIDES || index === prev) return prev
    setDirection(index > prev ? 1 : -1)  // side effect inside updater
    return index
  })
}, [])

// FIX: compute direction outside the updater
const goTo = useCallback((index: number) => {
  setCurrentSlide((prev) => {
    if (index < 0 || index >= TOTAL_SLIDES || index === prev) return prev
    const newDirection = index > prev ? 1 : -1
    setDirection(newDirection)
    return index
  })
}, [])
```

Note: In React 18+/19, `setDirection` called inside `setCurrentSlide`'s updater is fine for batching -- both will commit in the same render. The real risk is conceptual: side effects in updaters are discouraged by React docs and can cause confusion. However, functionally, both states **will** update together. Downgrading to **High** upon closer analysis -- not a flicker bug, but an anti-pattern.

**Updated Severity: High (anti-pattern, not a visual bug in React 19)**

### 2. Missing `requestAnimationFrame` cleanup in useCountUp (slide-12, slide-13)

**Severity: High**

The `useCountUp` hook in `slide-12-love-bad-news.tsx` and `slide-13-keep-it-casual.tsx` clears the initial `setTimeout` on unmount but does NOT cancel the `requestAnimationFrame` chain. If the user navigates away mid-animation, the rAF chain continues ticking and calling `setValue()` on an unmounted component.

```ts
// CURRENT (slide-12, line 8-22)
useEffect(() => {
  const timeout = setTimeout(() => {
    const start = performance.now()
    function tick(now: number) {
      // ...
      if (progress < 1) requestAnimationFrame(tick)  // NOT cancelled on unmount
    }
    requestAnimationFrame(tick)
  }, delay)
  return () => clearTimeout(timeout)  // only clears timeout, not rAF
}, [target, duration, delay])

// FIX: track the rAF ID
useEffect(() => {
  let rafId: number | null = null
  const timeout = setTimeout(() => {
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
  }, delay)
  return () => {
    clearTimeout(timeout)
    if (rafId !== null) cancelAnimationFrame(rafId)
  }
}, [target, duration, delay])
```

In React 19, `setState` on unmounted components no longer warns but still wastes CPU cycles. This is a memory/performance leak during rapid slide navigation.

---

## High Priority

### 3. DRY Violation: `useCountUp` duplicated in two files

**Files:** `slide-12-love-bad-news.tsx:6-24`, `slide-13-keep-it-casual.tsx:6-24`

Identical hook (minus default params) copy-pasted. The `counter-animation.tsx` component already exists with similar logic. Extract to a shared hook:

```
src/hooks/use-count-up.ts
```

Or reuse `CounterAnimation` component (which has proper rAF cleanup via `useRef`).

### 4. Unused dependency: `lucide-react`

`lucide-react` is in `package.json` dependencies but never imported in any source file. Adds ~150KB to node_modules. Remove it.

### 5. `TOTAL_SLIDES` hardcoded magic number (use-slide-navigation.ts:4)

`TOTAL_SLIDES = 19` is hardcoded but `slides-data.ts` exports the `slides` array. If a slide is added/removed, developers must update two files. Derive from source of truth:

```ts
import { slides } from '../lib/slides-data'
const TOTAL_SLIDES = slides.length
```

Or pass `totalSlides` as a parameter to the hook.

### 6. Missing `<Outlet />` in root layout (__root.tsx)

The root route renders `{children}` directly in the shell component. For TanStack Router, this works because `shellComponent` receives children. However, the `component` or `layout` of the root route itself should render `<Outlet />`. Since the root route only defines `shellComponent` and no `component`, the framework handles it. This is fine but worth noting: if a `component` is ever added to the root route, `<Outlet />` will be needed.

**No action required** -- just awareness.

---

## Medium Priority

### 7. No accessibility attributes at all

Zero `aria-*`, `role`, `tabIndex`, or `alt` attributes across the entire codebase. For a presentation app:

- `slide-deck.tsx`: Add `role="region"` and `aria-live="polite"` on the slide container so screen readers announce slide changes
- `slide-progress.tsx`: Add `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Keyboard nav already handles arrows/space/home/end (good), but no visible focus indicators exist
- `slide-counter.tsx`: Add `aria-label="Slide X of Y"`

### 8. `AnimatePresence mode="wait"` may cause perceptible delay on slow devices

`mode="wait"` means the exit animation must fully complete before the enter animation begins. With `slideTransition` at 500ms, that's a 500ms gap where no slide content is visible (only the exit animating away). Consider `mode="sync"` or reduce the transition duration to 300ms for snappier feel.

### 9. External font loaded without `preconnect` (__root.tsx:15)

Google Fonts stylesheet loaded without preconnect hint:

```ts
// Add to links array:
{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
```

This saves ~100ms on first load.

### 10. Inline `<style>` tag injected on every render (slide-03-the-story.tsx:28)

```tsx
<style>{shakeKeyframes}</style>
```

This injects a `<style>` element into the DOM every time slide-03 renders (including re-renders from parent). Move to `styles.css` or use Framer Motion's `animate` prop instead (which is already done in slide-11 for a similar shake effect).

### 11. Potential stale closure in typewriter effect (slide-02-the-problem.tsx:12-19)

The `setInterval` callback captures `i` via closure and mutates it. This works because `i` is a local variable in the effect scope, not React state. However, if the component re-renders mid-animation (e.g., parent state change), a new interval starts while the old one continues (no guard against double-invocation in StrictMode dev). In production, this is fine since StrictMode double-effects are dev-only. Low risk in prod.

### 12. Card flip uses CSS transition instead of Framer Motion (slide-15)

`slide-15-meeting-outcomes.tsx` uses raw CSS `transition: 'transform 0.6s ease'` for the flip animation while the rest of the codebase uses Framer Motion. This inconsistency means:
- No integration with `AnimatePresence` (flip won't interrupt cleanly on slide change)
- Different animation timing model (CSS easing vs Framer spring)

Consider using `motion.div` with `animate={{ rotateY: flipped ? 180 : 0 }}` for consistency.

---

## Low Priority

### 13. `key={i}` used as array index in multiple components

- `card-grid.tsx:30` (`key={i}`)
- `slide-08-rules-of-thumb.tsx:32` (`key={i}`)
- `slide-15-meeting-outcomes.tsx:102` (`key={i}`)
- `traffic-light.tsx:26` (`key={i}`)

For static arrays that never reorder, index keys are fine. But using the card `title` or `label` as key is more semantically correct and prevents subtle bugs if arrays are ever filtered.

### 14. Inconsistent import extensions

Some imports use `.tsx`/`.ts` extensions, others don't:
- `slide-deck.tsx` uses `../hooks/use-slide-navigation.ts` (with extension)
- `slide-01-title.tsx` uses `'../components/slide-layout'` (without extension)

Both work with `allowImportingTsExtensions: true`, but consistency matters. Pick one style.

### 15. `ChatBubble` side="right" doesn't visually align right

`ChatBubble` uses `justify-end` for right-side messages but the bubble itself always has `border-l-4` (left border). For right-aligned messages, `border-r-4` + `rounded-l-lg` would be more visually correct for a chat UI pattern.

### 16. `@tailwindcss/typography` in devDependencies but unused

No `prose` classes found. Remove if not needed.

---

## Positive Observations

1. **Lazy loading** all 19 slides via `React.lazy()` with `Suspense` fallback -- excellent for initial load performance
2. **TypeScript strict mode** with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` -- thorough
3. **Proper cleanup** in `use-slide-navigation.ts` -- all event listeners removed on unmount
4. **Touch swipe navigation** with deadzone threshold (50px minimum, horizontal > vertical) -- good mobile UX
5. **URL hash sync** for deep-linking to specific slides
6. **GPU-friendly animations** -- Framer Motion animates `opacity`, `x`, `y`, `scale` which composite on GPU. No `width`/`height`/`top`/`left` animations that cause layout thrashing
7. **Consistent dark theme** with well-chosen amber/stone/green palette
8. **`tabular-nums`** class on counter displays prevents number width jitter
9. **`counter-animation.tsx`** properly cleans up rAF via `useRef` -- the correct pattern (unlike the inline `useCountUp` hooks)

---

## Recommended Actions (Prioritized)

1. **Fix rAF cleanup** in `useCountUp` hooks (slides 12, 13) -- extract to shared hook or reuse `CounterAnimation`
2. **Derive TOTAL_SLIDES** from `slides.length` to prevent count mismatch
3. **Add minimal a11y** -- `role="progressbar"` on progress bar, `aria-live="polite"` on slide container
4. **Remove unused deps** -- `lucide-react`, `@tailwindcss/typography`
5. **Add font preconnect** hints for Google Fonts
6. **Move shake keyframes** to `styles.css` (slide-03)
7. **Standardize import extension** style across codebase

---

## Metrics

| Metric | Value |
|--------|-------|
| Type Coverage | 100% (strict mode, zero errors) |
| Test Coverage | 0% (no tests written) |
| Linting Issues | 0 (tsc clean) |
| a11y Attributes | 0 (needs attention) |
| Unused Dependencies | 2 (lucide-react, @tailwindcss/typography) |

---

## Unresolved Questions

1. Is this presentation intended to be publicly accessible (i.e., does a11y compliance matter for audience beyond the presenter)?
2. Should the presentation support presenter notes or speaker view?
3. The `@tanstack/react-devtools` and `@tanstack/react-router-devtools` are in production dependencies -- should these be dev-only?

---

**Status:** DONE
**Summary:** Clean, well-structured presentation codebase with strong TypeScript and animation patterns. Two notable issues: missing rAF cleanup in duplicated `useCountUp` hooks (memory leak on rapid nav), and zero accessibility attributes. No security or data-leak concerns (static content, no user input, no API calls).
**Concerns:** The rAF leak and TOTAL_SLIDES hardcoding are the only items that could produce visible bugs in production.
