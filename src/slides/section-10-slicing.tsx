import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeIn, defaultViewport } from '../lib/animation-variants'

// Sequential funnel: broad → narrow → who-where pair
const FUNNEL_TIERS = [
  { label: 'Traders', width: 'max-w-3xl' },
  { label: 'Stock traders', width: 'max-w-2xl' },
  { label: 'Part-time traders who lost money this year wanting to learn', width: 'max-w-xl' },
]

// Slicing questions from the book
const SLICING_QUESTIONS = [
  'Who wants it most?',
  'Why do they want it?',
  'Where can we find them?',
]

// Ease-out-quint for smooth reveals
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

// Total steps: 8
// 0 = nothing, 1 = tier1, 2 = questions, 3 = blur+arrow, 4 = tier2,
// 5 = blur+arrow, 6 = tier3+who-where, 7 = method, 8 = footer
const MAX_TIER = 8

export default function Section10Slicing() {
  const ref = useRef<HTMLDivElement>(null)
  // Live tracking for Enter key (animations use whileInView directly)
  const isCurrentlyInView = useInView(ref, { amount: 0.5 })
  const [tier, setTier] = useState(0)

  // Handle Enter key to advance tier (only when currently visible)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isCurrentlyInView && tier < MAX_TIER) {
        e.preventDefault()
        setTier((prev) => prev + 1)
      }
    },
    [isCurrentlyInView, tier]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div ref={ref} className="w-full max-w-3xl flex flex-col items-center gap-3">
      {/* Title */}
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center mb-2"
      >
        Customer <span className="text-[#E8699A]">Slicing</span>
      </motion.h2>

      {/* Problem callout */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.15 }}
        className="w-full rounded-lg bg-red-500/8 border border-red-500/20 px-5 py-3 text-center mb-1"
      >
        <p className="text-red-400 text-sm font-semibold">
          <span className="font-black">"Traders"</span> = too broad — drowning in mixed signals
        </p>
      </motion.div>

      {/* Hint text - show until all tiers revealed */}
      {isCurrentlyInView && tier < MAX_TIER && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: tier === 0 ? 0.5 : 0.2, duration: 0.4 }}
          className="text-center text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
          {tier > 0 && <span className="ml-2 text-stone-600">({tier}/{MAX_TIER})</span>}
        </motion.p>
      )}

      {/* Tier 1 — broadest */}
      <div className="w-full flex flex-col items-center gap-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={tier >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
          className="w-full"
        >
          <motion.div
            initial={{ filter: 'blur(0px)', opacity: 1 }}
            animate={
              tier >= 3
                ? { filter: 'blur(7px)', opacity: 0.28 }
                : { filter: 'blur(0px)', opacity: 1 }
            }
            transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center"
          >
            <p className="text-[#f5f5f5] text-xl font-semibold">{FUNNEL_TIERS[0].label}</p>
          </motion.div>
        </motion.div>

        {/* Slicing questions — appear after tier 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={tier >= 2 && tier < 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
          className="flex gap-2 mt-2 flex-wrap justify-center"
        >
          {SLICING_QUESTIONS.map((q, i) => (
            <motion.span
              key={q}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={tier >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: EASE_OUT_QUINT }}
              className="text-xs text-[#E8699A] bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-full px-3 py-1"
            >
              {q}
            </motion.span>
          ))}
        </motion.div>

        {/* Arrow 1 */}
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={tier >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: EASE_OUT_QUINT }}
          className="text-[#E8699A] text-2xl font-bold leading-none mt-1"
        >
          ↓
        </motion.span>
      </div>

      {/* Tier 2 — medium */}
      <div className="w-full flex flex-col items-center gap-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={tier >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
          className="w-full max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ filter: 'blur(0px)', opacity: 1 }}
            animate={
              tier >= 5
                ? { filter: 'blur(7px)', opacity: 0.28 }
                : { filter: 'blur(0px)', opacity: 1 }
            }
            transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center"
          >
            <p className="text-[#f5f5f5] text-xl font-semibold">{FUNNEL_TIERS[1].label}</p>
          </motion.div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={tier >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: EASE_OUT_QUINT }}
          className="text-[#E8699A] text-2xl font-bold leading-none"
        >
          ↓
        </motion.span>
      </div>

      {/* Tier 3 — narrowest, pink highlight — the "who" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={tier >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="w-full max-w-xl mx-auto"
      >
        <div className="bg-[#E0527E]/10 border-2 border-[#E0527E] rounded-xl px-6 py-4 text-center">
          <p className="text-[#f5f5f5] text-lg sm:text-xl font-semibold leading-snug">
            {FUNNEL_TIERS[2].label}
          </p>
        </div>
      </motion.div>

      {/* WHO + WHERE outcome */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={tier >= 6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.15 }}
        className="flex items-center gap-3 mt-1"
      >
        <span className="text-[#E8699A] font-black text-base tracking-wide">WHO</span>
        <span className="text-[#78716c] text-sm">+</span>
        <span className="text-[#E8699A] font-black text-base tracking-wide">WHERE</span>
        <span className="text-[#78716c] text-sm mx-1">=</span>
        <span className="text-[#f5f5f5] text-sm font-semibold">Find via trading Discord servers, stock groups</span>
      </motion.div>

      {/* Method box — the slicing questions summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={tier >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="w-full max-w-md mt-3 bg-white/5 border border-white/10 rounded-xl p-4"
      >
        <p className="text-stone-400 text-xs uppercase tracking-widest mb-2 text-center">
          The Slicing Method
        </p>
        <ul className="text-sm text-[#f5f5f5]/80 space-y-1.5">
          <li className="flex gap-2">
            <span className="text-[#E8699A]">1.</span>
            <span>Who wants it <span className="text-stone-400">most</span>?</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#E8699A]">2.</span>
            <span>Why do they want it? <span className="text-stone-400">(problem/goal)</span></span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#E8699A]">3.</span>
            <span>Where can we <span className="text-stone-400">find</span> them?</span>
          </li>
        </ul>
      </motion.div>

      {/* Rule */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={tier >= 8 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT }}
        className="text-center text-[#E8699A] font-bold text-sm tracking-wide mt-2"
      >
        Good customer segments are a who-where pair.
      </motion.p>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={tier >= 8 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.2 }}
        className="text-center text-[#78716c] italic text-sm"
      >
        &ldquo;If you don&apos;t know where to find your customers, keep slicing.&rdquo;
      </motion.p>
    </div>
  )
}
