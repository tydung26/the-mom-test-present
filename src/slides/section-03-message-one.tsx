import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeIn, defaultViewport } from '../lib/animation-variants'

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const
const MAX_PHASE = 2

export default function Section03MessageOne() {
  const ref = useRef<HTMLDivElement>(null)
  const isInViewOnce = useInView(ref, { once: true, amount: 0.3 })
  const isCurrentlyInView = useInView(ref, { amount: 0.5 })
  const [phase, setPhase] = useState(0)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isCurrentlyInView && phase < MAX_PHASE) {
        e.preventDefault()
        setPhase((p) => p + 1)
      }
    },
    [isCurrentlyInView, phase]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div ref={ref} className="max-w-3xl text-center flex flex-col items-center gap-8">
      {/* Section label */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest"
      >
        Truth is Uncomfortable
      </motion.p>

      {/* Phase 0: First statement — dramatic, alone */}
      <motion.p
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={
          isInViewOnce
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.92, y: 20 }
        }
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight"
      >
        Opinions are worthless.
      </motion.p>

      {/* Hint text */}
      {isCurrentlyInView && phase < MAX_PHASE && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: phase === 0 ? 0.4 : 0.15, duration: 0.25 }}
          className="text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
          {phase > 0 && <span className="ml-2 text-stone-600">({phase}/{MAX_PHASE})</span>}
        </motion.p>
      )}

      {/* Phase 1: Second statement — slides up */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="text-2xl sm:text-4xl font-bold text-stone-400 leading-tight max-w-2xl"
      >
        People will lie to you if they think it's what you want to hear.
      </motion.p>

      {/* Phase 2: Punchline — boxed reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="px-8 py-5 bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-2xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: EASE_OUT_QUINT, delay: 0.15 }}
          className="text-2xl sm:text-4xl font-black text-[#E8699A] leading-tight"
        >
          If it felt good, the data is probably fake.
        </motion.p>
      </motion.div>
    </div>
  )
}
