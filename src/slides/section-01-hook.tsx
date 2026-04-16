import { useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Ease-out-quint for smooth reveals
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section01Hook() {
  const ref = useRef<HTMLDivElement>(null)
  const isInViewOnce = useInView(ref, { once: true, amount: 0.3 })
  const isCurrentlyInView = useInView(ref, { amount: 0.5 })
  const [phase, setPhase] = useState(0)
  // phase 0 = initial state
  // phase 1 = reveal the twist
  // phase 2 = show the question
  // phase 3 = show the mission

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isCurrentlyInView && phase < 3) {
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
    <div ref={ref} className="max-w-4xl text-center flex flex-col items-center gap-8">
      {/* Phase 0: The setup */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(0px)' }}
        animate={
          isInViewOnce
            ? {
                opacity: phase >= 1 ? 0.2 : 1,
                y: 0,
                filter: phase >= 1 ? 'blur(8px)' : 'blur(0px)',
                scale: phase >= 1 ? 0.95 : 1
              }
            : { opacity: 0, y: 20, filter: 'blur(0px)' }
        }
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center"
      >
        <p className="text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight">
          We talk to customers.
        </p>
        <p className="text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight">
          We validate ideas.
        </p>
        <p className="text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight">
          We listen to feedback.
        </p>
      </motion.div>

      {/* Hint text */}
      {isCurrentlyInView && phase < 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: phase === 0 ? 1.2 : 0.3, duration: 0.4 }}
          className="text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
          {phase > 0 && <span className="ml-2 text-stone-600">({phase}/3)</span>}
        </motion.p>
      )}

      {/* Phase 1: The twist */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center"
      >
        <p className="text-4xl sm:text-6xl font-black text-[#f5f5f5]">
          And still build things
        </p>
        <p className="text-4xl sm:text-6xl font-black text-[#E8699A]">
          nobody wants to buy. 😢
        </p>
      </motion.div>

      {/* Phase 2: The insight */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-xl px-6 py-4"
      >
        <p className="text-lg sm:text-xl text-[#f5f5f5] font-semibold">
          It's not their job to tell us the truth.
        </p>
        <p className="text-lg sm:text-xl text-[#f5f5f5] font-semibold">
          It's our job to <span className="text-[#E8699A] font-black">ask the right questions</span>.
        </p>
      </motion.div>

      {/* Phase 3: The cost — personal stakes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center gap-3"
      >
        <p className="text-stone-500 text-xs uppercase tracking-widest">
          The cost
        </p>
        <p className="text-2xl sm:text-3xl font-black text-[#f5f5f5] text-center leading-snug">
          I spent <span className="text-[#E8699A]">6 months</span> building an app
          <br />
          my mom said she'd buy.
        </p>
        <p className="text-xl text-stone-400 mt-2">
          She never opened it.
        </p>
      </motion.div>
    </div>
  )
}
