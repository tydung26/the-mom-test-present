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
    <div ref={ref} className="max-w-4xl text-center flex flex-col items-center gap-6">
      {/* Phase 0: The setup - what we all do */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInViewOnce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center gap-2"
      >
        <motion.p
          animate={{ opacity: phase >= 1 ? 0.3 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-xl sm:text-2xl text-stone-400 font-medium"
        >
          We do everything right.
        </motion.p>
        <motion.p
          animate={{ opacity: phase >= 1 ? 0.3 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5]"
        >
          We talk to customers.
        </motion.p>
        <motion.p
          animate={{ opacity: phase >= 1 ? 0.3 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5]"
        >
          We validate ideas.
        </motion.p>
        <motion.p
          animate={{ opacity: phase >= 1 ? 0.3 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5]"
        >
          We listen to feedback.
        </motion.p>
      </motion.div>

      {/* Hint text */}
      {isCurrentlyInView && phase === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
        </motion.p>
      )}

      {/* Phase 1: The twist */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="flex flex-col items-center"
      >
        <p className="text-4xl sm:text-6xl font-black text-[#f5f5f5]">
          And still build things
        </p>
        <p className="text-4xl sm:text-6xl font-black text-[#E8699A]">
          nobody wants.
        </p>
      </motion.div>

      {/* Phase 2: The question */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="mt-4 bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-xl px-6 py-4"
      >
        <p className="text-lg sm:text-xl text-[#f5f5f5] font-semibold">
          What if the problem isn't <span className="italic text-stone-400">how</span> we listen—
        </p>
        <p className="text-lg sm:text-xl text-[#f5f5f5] font-semibold">
          but <span className="text-[#E8699A] font-black">what</span> we're hearing?
        </p>
      </motion.div>

      {/* Phase 3: The mission */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="mt-6 flex flex-col items-center gap-3"
      >
        <p className="text-stone-500 text-xs uppercase tracking-widest">
          Your mission
        </p>
        <p className="text-2xl sm:text-3xl font-black text-[#f5f5f5] text-center leading-snug">
          Learn the <span className="text-[#E8699A]">truth</span> before you run out of money.
        </p>
      </motion.div>
    </div>
  )
}
