import { Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSlideNavigation } from '../hooks/use-slide-navigation.ts'
import { slides } from '../lib/slides-data.ts'
import { getSlideVariants, slideTransition } from '../lib/animation-variants.ts'
import { SlideProgress } from './slide-progress.tsx'
import { SlideCounter } from './slide-counter.tsx'

export function SlideDeck() {
  const { currentSlide, direction, totalSlides } = useSlideNavigation()
  const SlideComponent = slides[currentSlide].component
  const variants = getSlideVariants(direction)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0f0f0f]" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0"
        >
          <Suspense
            fallback={
              <div className="flex h-screen w-screen items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#E0527E] border-t-transparent" />
              </div>
            }
          >
            <SlideComponent />
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <SlideProgress current={currentSlide} total={totalSlides} />
      <SlideCounter current={currentSlide} total={totalSlides} />
    </div>
  )
}
