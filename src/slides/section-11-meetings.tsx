import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { defaultViewport } from '../lib/animation-variants'

// Color tokens per verdict tier
const COLOR = {
  bad: { bg: 'rgba(239,68,68,0.1)', border: '#ef4444', text: '#ef4444' },
  danger: { bg: 'rgba(234,179,8,0.1)', border: '#eab308', text: '#eab308' },
  good: { bg: 'rgba(16,185,129,0.1)', border: '#10b981', text: '#10b981' },
  gold: { bg: 'rgba(16,185,129,0.18)', border: '#10b981', text: '#10b981' },
} as const

interface Card {
  front: string
  verdict: string
  note: string
  tier: keyof typeof COLOR
}

const CARDS: Card[] = [
  {
    front: '"That\'s so cool. I love it!"',
    verdict: 'BAD',
    note: 'Pure compliment — zero data',
    tier: 'bad',
  },
  {
    front: '"Let me know when it launches"',
    verdict: 'BAD',
    note: 'Stall tactic — polite exit',
    tier: 'bad',
  },
  {
    front: '"I would definitely buy that"',
    verdict: 'DANGER',
    note: '$10M false positive',
    tier: 'danger',
  },
  {
    front: '"What are the next steps?"',
    verdict: 'GOOD',
    note: 'Advancement — they\'re in',
    tier: 'good',
  },
  {
    front: '"Can I buy the prototype?"',
    verdict: 'GOLD',
    note: 'Real commitment',
    tier: 'gold',
  },
]

// Ease-out-quart for smooth, dramatic flip
const EASE_OUT_QUART = 'cubic-bezier(0.165, 0.84, 0.44, 1)'

function FlipCard({
  card,
  index,
  isFlipped,
  isNext,
}: {
  card: Card
  index: number
  isFlipped: boolean
  isNext: boolean
}) {
  const colors = COLOR[card.tier]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex-1"
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          position: 'relative',
          height: '190px',
          transformStyle: 'preserve-3d',
          transition: `transform 0.8s ${EASE_OUT_QUART}`,
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face — neutral statement */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            // Subtle pulse animation for "next" card
            animation: isNext ? 'pulse-border 2s ease-in-out infinite' : 'none',
          }}
          className={`absolute inset-0 flex items-center justify-center rounded-xl bg-white/5 border p-4 text-center ${
            isNext ? 'border-[#E8699A]/50' : 'border-white/10'
          }`}
        >
          <p className="text-[#f5f5f5] text-sm font-medium italic leading-snug">
            {card.front}
          </p>
        </div>

        {/* Back face — color-coded verdict */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: colors.bg,
            borderColor: colors.border,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 p-4 text-center gap-2"
        >
          <p className="font-black text-lg" style={{ color: colors.text }}>
            {card.verdict}
          </p>
          <p className="text-[#c4b5a5] text-xs leading-snug">{card.note}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Section11Meetings() {
  const ref = useRef<HTMLDivElement>(null)
  // Live tracking for Enter key (animations use whileInView directly)
  const isCurrentlyInView = useInView(ref, { amount: 0.5 })
  const [flippedCount, setFlippedCount] = useState(0)

  // Handle Enter key to flip next card (only when currently visible)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isCurrentlyInView && flippedCount < CARDS.length) {
        e.preventDefault()
        setFlippedCount((prev) => prev + 1)
      }
    },
    [isCurrentlyInView, flippedCount]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Show footer after all cards flipped
  const allFlipped = flippedCount >= CARDS.length

  return (
    <div ref={ref} className="w-full">
      {/* Pulse animation for "next" card indicator */}
      <style>{`
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(232, 105, 154, 0.3); }
          50% { border-color: rgba(232, 105, 154, 0.7); }
        }
      `}</style>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Good vs. <span className="text-[#E8699A]">Bad</span> Meeting
      </motion.h2>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center gap-4 mb-6 flex-wrap"
      >
        {[
          { label: 'BAD', color: '#ef4444' },
          { label: 'DANGER', color: '#eab308' },
          { label: 'GOOD / GOLD', color: '#10b981' },
        ].map((item) => (
          <span
            key={item.label}
            className="text-xs font-bold px-3 py-1 rounded-full border"
            style={{ color: item.color, borderColor: item.color, background: `${item.color}14` }}
          >
            {item.label}
          </span>
        ))}
      </motion.div>

      {/* Cards row */}
      <div className="flex gap-3 w-full max-w-5xl mx-auto">
        {CARDS.map((card, i) => (
          <FlipCard
            key={card.front}
            card={card}
            index={i}
            isFlipped={i < flippedCount}
            isNext={i === flippedCount && isCurrentlyInView}
          />
        ))}
      </div>

      {/* Hint text - show until all cards flipped */}
      {isCurrentlyInView && flippedCount < CARDS.length && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: flippedCount === 0 ? 0.4 : 0.15, duration: 0.25 }}
          className="mt-4 text-center text-stone-500 text-xs"
        >
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-stone-400 font-mono">Enter</kbd>
          {flippedCount > 0 && <span className="ml-2 text-stone-600">({flippedCount}/{CARDS.length})</span>}
        </motion.p>
      )}

      {/* Fix line - appears after all cards flipped */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: allFlipped ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-center text-[#78716c] italic text-sm"
      >
        Push for commitment at the end of every meeting — or you&apos;re collecting compliments.
      </motion.p>
    </div>
  )
}
