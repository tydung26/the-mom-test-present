import { useState, useEffect, useCallback, useRef } from 'react'
import { sections } from '../lib/sections-data.ts'

const TOTAL_SECTIONS = sections.length

export function useStoryNavigation() {
  const sectionRefs = useRef<(HTMLElement | null)[]>(
    Array.from({ length: TOTAL_SECTIONS }, () => null),
  )
  const [currentSection, setCurrentSection] = useState(0)
  const isScrollingRef = useRef(false)
  const isInitializedRef = useRef(false)

  // Assign ref callback for scroll-container to wire up
  const setSectionRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      sectionRefs.current[index] = el
    },
    [],
  )

  // Scroll to a specific section
  const scrollToSection = useCallback((index: number, instant = false) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return
    const el = sectionRefs.current[index]
    if (!el) return

    isScrollingRef.current = true
    el.scrollIntoView({ behavior: instant ? 'instant' : 'smooth' })

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, instant ? 50 : 800)
  }, [])

  // Force scroll to top on mount and delay observer setup
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Delay observer setup to avoid initial intersection cascade
    const initTimeout = setTimeout(() => {
      isInitializedRef.current = true
    }, 300)

    return () => clearTimeout(initTimeout)
  }, [])

  // IntersectionObserver: track which section is most visible
  // Uses a single observer with all entries to pick the most visible one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Ignore events before initialization or during programmatic scroll
        if (!isInitializedRef.current || isScrollingRef.current) return

        // Find the entry with highest intersection ratio
        let bestEntry: IntersectionObserverEntry | null = null
        let bestRatio = 0

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            bestEntry = entry
          }
        }

        if (bestEntry) {
          const index = sectionRefs.current.findIndex(
            (el) => el === bestEntry!.target
          )
          if (index !== -1) {
            setCurrentSection(index)
          }
        }
      },
      { threshold: [0.3, 0.5, 0.7] },
    )

    // Observe all sections
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Update URL hash on section change (use section.id to match element IDs)
  useEffect(() => {
    if (!isInitializedRef.current) return
    const sectionId = sections[currentSection]?.id ?? currentSection
    const newHash = `#section-${sectionId}`
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash)
    }
  }, [currentSection])

  // Keyboard navigation (instant scroll when holding keys for fast navigation)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Skip if scrolling and not a repeated key (allow rapid-fire when holding)
      if (isScrollingRef.current && !e.repeat) return

      // Use instant scroll when holding keys for fast navigation
      const useInstant = e.repeat

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          setCurrentSection((prev) => {
            const next = Math.min(prev + 1, TOTAL_SECTIONS - 1)
            scrollToSection(next, useInstant)
            return next
          })
          break
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          setCurrentSection((prev) => {
            const next = Math.max(prev - 1, 0)
            scrollToSection(next, useInstant)
            return next
          })
          break
        case 'Home':
          e.preventDefault()
          setCurrentSection(0)
          scrollToSection(0, true)
          break
        case 'End':
          e.preventDefault()
          setCurrentSection(TOTAL_SECTIONS - 1)
          scrollToSection(TOTAL_SECTIONS - 1, true)
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
