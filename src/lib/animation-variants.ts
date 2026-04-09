import type { Variants, Transition } from 'framer-motion'

// Direction-aware slide transition for deck navigation
export function getSlideVariants(direction: number): Variants {
  return {
    enter: { x: direction > 0 ? '100%' : '-100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: direction > 0 ? '-100%' : '100%', opacity: 0 },
  }
}

export const slideTransition: Transition = {
  type: 'tween',
  duration: 0.35,
  ease: [0.25, 0.46, 0.45, 0.94],
}

// Fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Zoom in for title slide
export const zoomIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

// Stagger children for lists and card groups
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export const staggerFastContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
}

// Slide up from bottom
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

// Slide from left / right
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 },
  },
}

// Scale spring for cards
export const scaleSpring: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

// Card flip
export const cardFlip: Variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
}

// Dramatic zoom for impact quotes
export const dramaticZoom: Variants = {
  hidden: { scale: 0.3, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 150, damping: 15, duration: 0.8 },
  },
}

// Cascade (sequential items appearing from different positions)
export const cascadeItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
}

// Pulse glow for Q&A slide
export const pulseGlow: Variants = {
  hidden: { opacity: 0.4, scale: 0.95 },
  visible: {
    opacity: [0.4, 1, 0.4],
    scale: [0.95, 1.02, 0.95],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}
