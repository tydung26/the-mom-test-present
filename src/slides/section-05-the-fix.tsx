import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, slideUp, fadeIn, defaultViewport, earlyViewport } from '../lib/animation-variants'

const rules = [
  { number: '1', text: 'Talk about their life, not your idea' },
  { number: '2', text: 'Ask about specifics in the past, not generics about the future' },
  { number: '3', text: 'Talk less and listen more' },
]

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section05TheFix() {
  const ref = useRef<HTMLDivElement>(null)
  const isCurrentlyInView = useInView(ref, { amount: 0.5 })
  const [showPunchline, setShowPunchline] = useState(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isCurrentlyInView && !showPunchline) {
        e.preventDefault()
        setShowPunchline(true)
      }
    },
    [isCurrentlyInView, showPunchline]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div ref={ref} className="w-full max-w-3xl">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest mb-2 text-center"
      >
        The Mom Test
      </motion.h2>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-stone-500 text-xs text-center mb-10 italic"
      >
        Named after the ultimate people-pleaser
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex flex-col gap-6"
      >
        {rules.map((rule) => (
          <motion.div
            key={rule.number}
            variants={slideUp}
            className="flex items-center gap-6 bg-white/5 border-l-4 border-[#E0527E] rounded-xl p-8"
          >
            <span className="text-5xl font-black text-[#E0527E] leading-none select-none shrink-0">
              {rule.number}
            </span>
            <p className="text-xl text-[#f5f5f5] font-medium leading-snug">{rule.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Hint text */}
      {isCurrentlyInView && !showPunchline && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.25 }}
          className="text-center text-stone-500 text-xs mt-6"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
        </motion.p>
      )}

      {/* Punchline — reveals on Enter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showPunchline ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="mt-12 text-center"
      >
        <p className="text-2xl sm:text-3xl font-black text-[#f5f5f5] leading-snug">
          They own the <span className="text-[#E8699A]">problem</span>.
        </p>
        <p className="text-2xl sm:text-3xl font-black text-[#f5f5f5] leading-snug">
          You own the <span className="text-[#E8699A]">solution</span>.
        </p>
      </motion.div>
    </div>
  )
}
