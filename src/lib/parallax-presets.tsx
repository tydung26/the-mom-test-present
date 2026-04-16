import type { ReactNode } from 'react'

export interface ParallaxConfig {
  speed: number
  className: string
  element: ReactNode
}

/**
 * Creates a soft gradient blob config for use as a decorative background layer.
 * Uses blur-3xl + low opacity so it stays subtle and non-distracting.
 */
function blob(
  color: string,
  position: string,
  speed: number,
  size = 'w-64 h-64',
): ParallaxConfig {
  return {
    speed,
    className: `absolute ${position} pointer-events-none`,
    element: <div className={`${size} rounded-full blur-3xl opacity-15 ${color}`} />,
  }
}

/**
 * Creates a thin vertical accent line with a pink gradient fade for visual rhythm.
 */
function accentLine(position: string, speed: number): ParallaxConfig {
  return {
    speed,
    className: `absolute ${position} pointer-events-none`,
    element: (
      <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#E0527E]/20 to-transparent" />
    ),
  }
}

/**
 * Per-section parallax background layer configs, keyed by 1-based section id.
 * Only sections that benefit from visual depth are listed here — omitted sections
 * receive no parallax layers (plain background).
 *
 * Speed range: -1 to 1.
 *   Positive → element drifts upward as user scrolls down (foreground feel)
 *   Negative → element drifts downward (deep background feel)
 */
export const sectionParallax: Record<number, ParallaxConfig[]> = {
  1: [
    blob('bg-[#E0527E]', 'top-20 -left-32', 0.2, 'w-96 h-96'),
    blob('bg-purple-600', 'bottom-20 -right-32', -0.15, 'w-80 h-80'),
  ],
  3: [
    accentLine('left-12 top-1/4', 0.3),
    blob('bg-amber-500', 'bottom-10 right-10', -0.2, 'w-48 h-48'),
  ],
  6: [
    blob('bg-[#E0527E]', 'top-10 right-10', 0.25, 'w-72 h-72'),
  ],
  9: [
    blob('bg-red-500', '-top-10 -left-20', 0.2, 'w-64 h-64'),
    blob('bg-amber-500', 'bottom-10 -right-20', -0.15, 'w-56 h-56'),
  ],
  12: [
    blob('bg-blue-500', 'top-20 -right-20', 0.3, 'w-72 h-72'),
    accentLine('left-8 top-1/3', 0.2),
  ],
  16: [
    blob('bg-emerald-500', '-top-10 left-10', 0.2, 'w-64 h-64'),
  ],
  20: [
    blob('bg-[#E0527E]', 'bottom-20 left-10', -0.2, 'w-80 h-80'),
    blob('bg-purple-500', 'top-10 -right-10', 0.25, 'w-56 h-56'),
  ],
  23: [
    blob('bg-[#E0527E]', 'top-1/4 -left-20', 0.15, 'w-96 h-96'),
  ],
  24: [
    blob('bg-[#E0527E]', 'top-20 left-1/4', 0.2, 'w-80 h-80'),
    blob('bg-purple-600', 'bottom-20 right-1/4', -0.15, 'w-72 h-72'),
  ],
}
