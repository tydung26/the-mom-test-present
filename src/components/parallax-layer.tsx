import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ParallaxLayerProps {
  /** -1 to 1. Positive = moves up as you scroll down. Default 0.3 */
  speed?: number
  className?: string
  children: ReactNode
}

/**
 * Decorative background element that moves at a different speed than the page
 * scroll, creating a depth/parallax effect. Automatically disabled when the
 * user has `prefers-reduced-motion` set.
 */
export function ParallaxLayer({ speed = 0.3, className = '', children }: ParallaxLayerProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Total vertical travel in pixels derived from speed
  const range = speed * 150
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  // Honour accessibility preference — no motion, plain div
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
