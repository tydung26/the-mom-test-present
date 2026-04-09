import { useState, useEffect, useCallback } from 'react'
import { slides } from '../lib/slides-data.ts'

const TOTAL_SLIDES = slides.length

function getInitialSlide(): number {
  if (typeof window === 'undefined') return 0
  const hash = window.location.hash.replace('#', '')
  const num = parseInt(hash, 10)
  if (!isNaN(num) && num >= 1 && num <= TOTAL_SLIDES) return num - 1
  return 0
}

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrentSlide((prev) => {
      if (index < 0 || index >= TOTAL_SLIDES || index === prev) return prev
      setDirection(index > prev ? 1 : -1)
      return index
    })
  }, [])

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev >= TOTAL_SLIDES - 1) return prev
      setDirection(1)
      return prev + 1
    })
  }, [])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev <= 0) return prev
      setDirection(-1)
      return prev - 1
    })
  }, [])

  // Update URL hash on slide change
  useEffect(() => {
    window.location.hash = String(currentSlide + 1)
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goPrev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(TOTAL_SLIDES - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, goTo])

  // Touch swipe navigation
  useEffect(() => {
    let startX = 0
    let startY = 0

    function handleTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    function handleTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - startX
      const dy = e.changedTouches[0].clientY - startY
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      if (dx < 0) goNext()
      else goPrev()
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  return {
    currentSlide,
    direction,
    totalSlides: TOTAL_SLIDES,
    goNext,
    goPrev,
    goTo,
  }
}
