import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { ParallaxLayer } from './parallax-layer.tsx'
import type { ParallaxConfig } from '../lib/parallax-presets.tsx'

interface StorySectionProps {
  children: ReactNode
  id: string
  className?: string
  /** Optional decorative background layers rendered behind section content. */
  parallaxLayers?: ParallaxConfig[]
}

/**
 * Full-viewport section wrapper for scroll-based storytelling.
 * Replaces SlideLayout — provides min-h-screen centering with
 * relative positioning for parallax layer support.
 *
 * Parallax layers are rendered first (z-0) so all content sits on top (z-10).
 */
export const StorySection = forwardRef<HTMLElement, StorySectionProps>(
  ({ children, id, className = '', parallaxLayers }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-12 sm:px-16 md:px-24 ${className}`}
    >
      {/* Parallax background layers — rendered behind content */}
      {parallaxLayers?.map((layer, i) => (
        <ParallaxLayer key={i} speed={layer.speed} className={layer.className}>
          {layer.element}
        </ParallaxLayer>
      ))}

      {/* Content on top */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        {children}
      </div>
    </section>
  ),
)

StorySection.displayName = 'StorySection'
