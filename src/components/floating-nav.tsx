import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface FloatingNavProps {
  current: number
  total: number
  titles: string[]
  onNavigate: (index: number) => void
}

/**
 * Floating dot navigation on right edge. Shows active section,
 * click to jump, hover for title tooltip. Auto-hides after idle.
 * Hidden on mobile (< md breakpoint).
 */
export function FloatingNav({ current, total, titles, onNavigate }: FloatingNavProps) {
  const [visible, setVisible] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Auto-hide after 3s of no mouse movement
  const resetIdleTimer = useCallback(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function handleMouseMove() {
      setVisible(true)
      clearTimeout(timer)
      timer = setTimeout(() => setVisible(false), 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    // Start the initial timer
    timer = setTimeout(() => setVisible(false), 3000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [resetIdleTimer])

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-1.5 transition-opacity duration-300 md:flex ${
        visible || hoveredIndex !== null ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="relative flex items-center">
          {/* Tooltip */}
          {hoveredIndex === i && (
            <motion.span
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-6 whitespace-nowrap rounded bg-stone-800 px-2 py-1 text-xs text-stone-300"
            >
              {titles[i]}
            </motion.span>
          )}

          <button
            onClick={() => onNavigate(i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Go to section ${i + 1}: ${titles[i]}`}
            aria-current={current === i ? 'step' : undefined}
            className="group flex h-4 w-4 items-center justify-center"
          >
            <motion.span
              className={`block rounded-full transition-colors ${
                current === i
                  ? 'bg-[#E0527E]'
                  : 'bg-white/20 group-hover:bg-white/40'
              }`}
              animate={{
                width: current === i ? 10 : 6,
                height: current === i ? 10 : 6,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </button>
        </div>
      ))}
    </nav>
  )
}
