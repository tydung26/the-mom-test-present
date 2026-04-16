# Phase 1: Core Infrastructure

## Context

- [Brainstorm report](../reports/brainstorm-260416-parallax-storytelling-refactor.md)
- [Plan overview](plan.md)

## Overview

- **Priority:** Critical (blocks all other phases)
- **Status:** Pending
- **Description:** Replace slide deck architecture with scroll container, story sections, and scroll-based navigation

## Key Insights

- Current `SlideDeck` uses AnimatePresence to show one slide at a time — must render all 24 simultaneously
- `SlideLayout` is a simple flex wrapper — refactoring to `StorySection` is straightforward
- `useSlideNavigation` handles keyboard, touch, hash — new hook needs IntersectionObserver + scrollIntoView
- Body `overflow: hidden` must become scrollable
- Animation variants `getSlideVariants` and `slideTransition` are deck-specific — can be removed
- Existing variants (fadeIn, zoomIn, staggerContainer, etc.) stay as-is — slides will switch trigger mechanism

## Requirements

### Functional
- Single scrollable page rendering all 24 sections
- Each section occupies min-h-screen
- Section refs tracked for navigation and parallax
- IntersectionObserver detects active section
- Keyboard ↑↓ smooth-scrolls to prev/next section
- URL hash updates on scroll (#section-1 through #section-24)
- Hash in URL on load scrolls to correct section

### Non-Functional
- No layout shift during initial render
- Smooth 60fps scrolling
- SSR-compatible (refs initialized client-side)

## Architecture

### ScrollContainer (replaces SlideDeck)

```tsx
// Renders all sections vertically, no AnimatePresence
export function ScrollContainer() {
  const { sectionRefs, currentSection } = useStoryNavigation()
  
  return (
    <div className="relative min-h-screen bg-[#0f0f0f]">
      {sections.map((section, i) => (
        <StorySection key={section.id} ref={sectionRefs[i]} id={`section-${section.id}`}>
          <section.component />
        </StorySection>
      ))}
      <FloatingNav current={currentSection} total={sections.length} />
    </div>
  )
}
```

### StorySection (replaces SlideLayout)

```tsx
// Full-viewport section wrapper with parallax support
const StorySection = forwardRef<HTMLElement, Props>(({ children, id, className }, ref) => (
  <section
    ref={ref}
    id={id}
    className={`relative min-h-screen flex flex-col items-center justify-center px-8 py-12 sm:px-16 md:px-24 overflow-hidden ${className}`}
  >
    {children}
  </section>
))
```

### useStoryNavigation (replaces useSlideNavigation)

```tsx
// Core hook: section tracking + keyboard + hash
export function useStoryNavigation() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [currentSection, setCurrentSection] = useState(0)
  
  // IntersectionObserver: threshold 0.5 — section is "active" when 50%+ visible
  // Keyboard: ↑↓ arrows → scrollIntoView({ behavior: 'smooth' })
  // Hash: read on mount, update on section change
  
  return { sectionRefs, currentSection, scrollToSection }
}
```

## Related Code Files

### Modify
- `src/components/slide-deck.tsx` → rename to `src/components/scroll-container.tsx`
- `src/components/slide-layout.tsx` → rename to `src/components/story-section.tsx`
- `src/hooks/use-slide-navigation.ts` → rename to `src/hooks/use-story-navigation.ts`
- `src/lib/slides-data.ts` → rename to `src/lib/sections-data.ts` (update type names)
- `src/routes/index.tsx` → update import to ScrollContainer
- `src/styles.css` → change `overflow: hidden` to `overflow-y: auto`

### Remove
- `src/components/slide-progress.tsx` (replaced by FloatingNav in Phase 2)
- `src/components/slide-counter.tsx` (replaced by FloatingNav in Phase 2)

### Keep
- `src/lib/animation-variants.ts` — remove `getSlideVariants` + `slideTransition`, keep all other variants
- `src/routes/__root.tsx` — no changes needed

## Implementation Steps

1. Create `src/components/story-section.tsx` — forwardRef section wrapper, min-h-screen, flex center, accepts id + className
2. Create `src/hooks/use-story-navigation.ts`:
   - Array of refs (one per section)
   - IntersectionObserver with threshold 0.5 to track active section
   - `scrollToSection(index)` using `scrollIntoView({ behavior: 'smooth' })`
   - Keyboard listener: ArrowUp/ArrowDown/Home/End → scrollToSection
   - Hash read on mount (parse `#section-N`), hash write on section change
3. Create `src/components/scroll-container.tsx`:
   - Import sections from `sections-data.ts`
   - Render all sections in order, each wrapped in `StorySection`
   - Pass refs from `useStoryNavigation`
   - No AnimatePresence, no Suspense boundaries per section (all eagerly rendered)
4. Update `src/lib/slides-data.ts` → `src/lib/sections-data.ts`:
   - Rename `SlideConfig` → `SectionConfig`
   - Remove `lazy()` wrappers — import all section components directly (they're all on one page now)
   - Rename exports: `slides` → `sections`
5. Update `src/routes/index.tsx` — import `ScrollContainer` instead of `SlideDeck`
6. Update `src/styles.css` — change `html, body, #app` from `overflow: hidden` to allow scrolling
7. Update `src/lib/animation-variants.ts` — remove `getSlideVariants` and `slideTransition`
8. Delete `src/components/slide-deck.tsx`, `src/components/slide-progress.tsx`, `src/components/slide-counter.tsx`
9. Compile check: `pnpm build` — expect errors in slide components still importing old SlideLayout (that's ok, fixed in phases 4-6)

## Todo

- [ ] Create story-section.tsx
- [ ] Create use-story-navigation.ts (IntersectionObserver, keyboard, hash)
- [ ] Create scroll-container.tsx
- [ ] Rename slides-data → sections-data, remove lazy loading
- [ ] Update route index.tsx
- [ ] Update styles.css (overflow)
- [ ] Clean animation-variants.ts
- [ ] Delete old slide-deck, slide-progress, slide-counter
- [ ] Compile check

## Success Criteria

- All 24 sections render vertically in a scrollable page
- Scrolling updates current section state via IntersectionObserver
- Keyboard ↑↓ smooth-scrolls between sections
- URL hash reflects active section and loads correct section on refresh
- No TypeScript errors in infrastructure files (slide components may still error)

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Removing lazy() increases initial bundle | Medium | 24 slide components are small (~50-100 lines each). Total ~2-3KB gzipped. Acceptable. |
| IntersectionObserver threshold edge cases | Low | Test with sections of varying content height. 0.5 threshold works for min-h-screen. |
| Hash parsing collision with TanStack Router | Low | TanStack Router in SPA mode doesn't use hash routing. Manual hash is safe. |

## Next Steps

After this phase, Phases 2 (FloatingNav), 3 (Parallax), and 4-6 (slide refactors) can proceed in parallel.
