import { useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Ease-out-quint for smooth reveals
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1]

const PROBLEM_TEXT = 'We talk to customers… and still end up building stuff nobody buys.'
const HIGHLIGHT = 'nobody buys'

export default function Section01Hook() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [phase, setPhase] = useState(0)
  // phase 0 = show "Why?"
  // phase 1 = show problem statement (typewriter)

  const [displayed, setDisplayed] = useState('')

  // Handle Enter key to advance phase
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isInView && phase < 1) {
        e.preventDefault()
        setPhase(1)
      }
    },
    [isInView, phase]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Typewriter effect for problem statement
  useEffect(() => {
    if (phase < 1) return
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(PROBLEM_TEXT.slice(0, i))
      if (i >= PROBLEM_TEXT.length) clearInterval(timer)
    }, 35)
    return () => clearInterval(timer)
  }, [phase])

  // Split displayed text around the highlight phrase
  const highlightStart = PROBLEM_TEXT.indexOf(HIGHLIGHT)
  const before = displayed.slice(0, highlightStart)
  const highlight = displayed.slice(highlightStart, Math.min(displayed.length, highlightStart + HIGHLIGHT.length))
  const after = displayed.slice(highlightStart + HIGHLIGHT.length)

  return (
    <div ref={ref} className="max-w-4xl text-center flex flex-col items-center gap-8">
      {/* Phase 0: The "Why?" question */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: phase >= 1 ? 0.4 : 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl font-black text-[#f5f5f5] tracking-tight"
        >
          Why do we build things
        </motion.p>
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: phase >= 1 ? 0.4 : 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl font-black text-[#E8699A] tracking-tight"
        >
          nobody wants?
        </motion.p>
      </motion.div>

      {/* Hint text */}
      {isInView && phase === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
        </motion.p>
      )}

      {/* Phase 1: The problem statement (answer) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="min-h-[6rem]"
      >
        {phase >= 1 && (
          <p className="text-2xl sm:text-3xl font-semibold text-[#f5f5f5]/90 leading-relaxed tracking-tight">
            <span className="italic text-stone-400">&ldquo;</span>
            {before}
            {highlight && (
              <span className="text-[#E8699A] font-black">{highlight}</span>
            )}
            {after}
            <span className="italic text-stone-400">&rdquo;</span>
          </p>
        )}
      </motion.div>
    </div>
  )
}
