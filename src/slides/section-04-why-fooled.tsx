import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, scaleSpring, defaultViewport, earlyViewport } from '../lib/animation-variants'

const CARDS = [
  {
    icon: '👏',
    title: 'Compliments',
    example: '"That\'s so cool!"',
    description: 'Feels great, means nothing',
    cost: '→ You build it. Nobody uses it.',
  },
  {
    icon: '☁️',
    title: 'Fluff',
    example: '"I would definitely use that..."',
    description: 'Future tense = wishful thinking',
    cost: '→ You quit your job. They forget you exist.',
  },
  {
    icon: '💡',
    title: 'Ideas',
    example: '"You should totally add..."',
    description: 'Their solution, not their problem',
    cost: '→ You add 10 features. They wanted something else.',
  },
]

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const
const MAX_PHASE = 3

export default function Section04WhyFooled() {
  const ref = useRef<HTMLDivElement>(null)
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
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        3 Types of <span className="text-[#E8699A]">Bad Data</span>
      </motion.h2>

      {/* Hint text */}
      {isCurrentlyInView && phase < MAX_PHASE && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: phase === 0 ? 0.4 : 0.15, duration: 0.25 }}
          className="text-center text-stone-500 text-xs mb-6"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
          {phase > 0 && <span className="ml-2 text-stone-600">({phase}/{MAX_PHASE})</span>}
        </motion.p>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex gap-6 w-full max-w-4xl"
      >
        {CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            variants={scaleSpring}
            className="flex-1 flex flex-col items-center text-center bg-white/5 rounded-2xl p-8"
          >
            <span className="text-4xl mb-4">{card.icon}</span>
            <h3 className="text-xl font-bold text-[#E8699A] mb-3">{card.title}</h3>
            <p className="italic text-[#78716c] mb-3 text-base">{card.example}</p>
            <p className="text-sm text-[#f5f5f5]/70 mb-3">{card.description}</p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={phase >= index + 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: EASE_OUT_QUINT }}
              className="text-xs text-red-400/80 font-medium"
            >
              {card.cost}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
