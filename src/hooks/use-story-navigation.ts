import { useState, useEffect, useCallback, useRef } from 'react'
import { sections } from '../lib/sections-data.ts'

const TOTAL_SECTIONS = sections.length

/** Parse #section-N from URL hash, return 0-based index */
function getInitialSection(): number {
  if (typeof window === 'undefined') return 0
  const hash = window.location.hash.replace('#', '')

  // Support both #section-5 (new) and #5 (legacy)
  const sectionMatch = hash.match(/^section-(\d+)$/)
  if (sectionMatch) {
    const num = parseInt(sectionMatch[1], 10)
    if (num >= 1 && num <= TOTAL_SECTIONS) return num - 1
  }
  const num = parseInt(hash, 10)
  if (!isNaN(num) && num >= 1 && num <= TOTAL_SECTIONS) return num - 1

  return 0
}

export function useStoryNavigation() {
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    Array.from({ length: TOTAL_SECTIONS }, () => null),
  )
  const [currentSection, setCurrentSection] = useState(getInitialSection)
  const isScrollingRef = useRef(false)

  // Assign ref callback for scroll-container to wire up
  const setSectionRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      sectionRefs.current[index] = el
    },
    [],
  )

  // Scroll to a specific section
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return
    const el = sectionRefs.current[index]
    if (!el) return

    isScrollingRef.current = true
    el.scrollIntoView({ behavior: 'smooth' })

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, 800)
  }, [])

  // IntersectionObserver: track which section is most visible
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setCurrentSection(index)
          }
        },
        { threshold: 0.5 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  // Scroll to initial section on mount (if hash present)
  useEffect(() => {
    const initial = getInitialSection()
    if (initial > 0) {
      // Small delay to ensure refs are wired up
      requestAnimationFrame(() => {
        const el = sectionRefs.current[initial]
        if (el) el.scrollIntoView({ behavior: 'instant' })
      })
    }
  }, [])

  // Update URL hash on section change
  useEffect(() => {
    const newHash = `#section-${currentSection + 1}`
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash)
    }
  }, [currentSection])

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          setCurrentSection((prev) => {
            const next = Math.min(prev + 1, TOTAL_SECTIONS - 1)
            scrollToSection(next)
            return next
          })
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          setCurrentSection((prev) => {
            const next = Math.max(prev - 1, 0)
            scrollToSection(next)
            return next
          })
          break
        case 'Home':
          e.preventDefault()
          setCurrentSection(0)
          scrollToSection(0)
          break
        case 'End':
          e.preventDefault()
          setCurrentSection(TOTAL_SECTIONS - 1)
          scrollToSection(TOTAL_SECTIONS - 1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollToSection])

  return {
    currentSection,
    totalSections: TOTAL_SECTIONS,
    setSectionRef,
    scrollToSection,
  }
}
