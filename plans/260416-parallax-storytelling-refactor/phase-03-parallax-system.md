# Phase 3: Parallax System

## Context

- [Plan overview](plan.md)
- Depends on: Phase 1 (StorySection component with refs)

## Overview

- **Priority:** High
- **Status:** Pending
- **Description:** Build parallax background layer system using Framer Motion useScroll/useTransform

## Key Insights

- Each section gets optional decorative background layers that move at different speeds
- Framer Motion's `useScroll({ target: sectionRef })` gives 0→1 progress as section enters/leaves viewport
- `useTransform(scrollYProgress, [0,1], [startVal, endVal])` maps progress to CSS transforms
- `will-change: transform` on layers prevents paint thrashing
- `prefers-reduced-motion` should disable all parallax movement

## Requirements

### Functional
- ParallaxLayer component accepts: speed factor, direction, children/element
- StorySection optionally accepts parallax layer configs
- Background layers translate Y (or X) based on section scroll progress
- Multiple layers per section at different speeds for depth illusion
- Default parallax presets for sections (gradient blobs, accent shapes)

### Non-Functional
- 60fps scroll performance
- No layout shift from parallax layers
- Graceful degradation: no parallax = content still looks good
- `prefers-reduced-motion`: layers static, no transform

## Architecture

### ParallaxLayer

```tsx
interface ParallaxLayerProps {
  speed?: number        // -1 to 1, negative = opposite direction. Default 0.5
  direction?: 'y' | 'x' // Default 'y'
  className?: string
  children: React.ReactNode
}

export function ParallaxLayer({ speed = 0.5, direction = 'y', className, children }: ParallaxLayerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const range = speed * 100 // px
  const transform = useTransform(scrollYProgress, [0, 1], [-range, range])
  
  // Check prefers-reduced-motion
  // If reduced: return children without transform
  
  return (
    <motion.div ref={ref} style={{ [direction === 'y' ? 'y' : 'x']: transform }} className={className}>
      {children}
    </motion.div>
  )
}
```

### Parallax Presets

```tsx
// Reusable decorative elements per section theme
export const parallaxPresets = {
  gradientBlob: (color: string, position: string, speed: number) => ({
    element: <div className={`w-64 h-64 rounded-full blur-3xl opacity-20 ${color}`} />,
    speed,
    className: `absolute ${position}`,
  }),
  accentLine: (direction: 'left' | 'right', speed: number) => ({
    element: <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#E0527E]/30 to-transparent" />,
    speed,
    className: `absolute ${direction === 'left' ? 'left-12' : 'right-12'} top-1/4`,
  }),
}
```

### Updated StorySection

```tsx
interface StorySectionProps {
  children: React.ReactNode
  id: string
  className?: string
  parallaxLayers?: ParallaxLayerConfig[]
}

// Render parallax layers behind content (z-0), content on top (z-10)
```

## Related Code Files

### Create
- `src/components/parallax-layer.tsx`
- `src/lib/parallax-presets.ts`

### Modify
- `src/components/story-section.tsx` — add parallax layer slots

## Implementation Steps

1. Create `src/components/parallax-layer.tsx`:
   - Accept speed, direction, className, children
   - useScroll with target ref, offset ["start end", "end start"]
   - useTransform to map scroll progress to translate
   - Check `prefers-reduced-motion` via `useReducedMotion()` from framer-motion
   - If reduced motion: render without transform
   - Apply `will-change: transform` style
2. Create `src/lib/parallax-presets.ts`:
   - Define 3-4 reusable decorative elements (gradient blobs, accent lines, subtle shapes)
   - Export as factory functions accepting color/position/speed
   - Define per-section parallax configs (which sections get which layers)
3. Update `src/components/story-section.tsx`:
   - Accept optional `parallaxLayers` prop
   - Render layers as absolute-positioned children behind content
   - Content has relative z-10, layers have z-0
4. Update `src/components/scroll-container.tsx`:
   - Import parallax configs per section
   - Pass configs to StorySection
5. Compile + visual check

## Todo

- [ ] Create parallax-layer.tsx with useScroll/useTransform
- [ ] Create parallax-presets.ts with reusable decorative elements
- [ ] Update story-section.tsx to accept parallax layers
- [ ] Wire up parallax configs in scroll-container.tsx
- [ ] Test reduced-motion behavior
- [ ] Compile check

## Success Criteria

- Background elements move at different speeds during scroll
- Depth illusion visible (foreground content stationary, background drifts)
- No jank or dropped frames during normal scrolling
- `prefers-reduced-motion` disables all movement
- Sections without parallax layers render normally

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Parallax + content overflow clipping | Low | `overflow: hidden` on StorySection, layers absolute within bounds |
| Too many animated layers = jank | Medium | Limit to 2-3 layers per section. Use `will-change: transform`. Profile. |
| Gradient blobs look cheap | Low | Use very low opacity (0.1-0.2), large blur (blur-3xl), subtle colors |

## Security Considerations

None — purely decorative, no user input involved.
