import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
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
  delay: number
}

const CARDS: Card[] = [
  {
    front: '"That\'s so cool. I love it!"',
    verdict: 'BAD',
    note: 'Pure compliment — zero data',
    tier: 'bad',
    delay: 800,
  },
  {
    front: '"Let me know when it launches"',
    verdict: 'BAD',
    note: 'Stall tactic — polite exit',
    tier: 'bad',
    delay: 1600,
  },
  {
    front: '"I would definitely buy that"',
    verdict: 'DANGER',
    note: '$10M false positive',
    tier: 'danger',
    delay: 2400,
  },
  {
    front: '"What are the next steps?"',
    verdict: 'GOOD',
    note: 'Advancement — they\'re in',
    tier: 'good',
    delay: 3200,
  },
  {
    front: '"Can I buy the prototype?"',
    verdict: 'GOLD',
    note: 'Real commitment',
    tier: 'gold',
    delay: 4000,
  },
]

function FlipCard({
  card,
  index,
  enabled,
}: {
  card: Card
  index: number
  enabled: boolean
}) {
  const [flipped, setFlipped] = useState(false)
  const colors = COLOR[card.tier]

  useEffect(() => {
    if (!enabled) return
    const timer = setTimeout(() => setFlipped(true), card.delay)
    return () => clearTimeout(timer)
  }, [enabled, card.delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 200, damping: 22 }}
      className="flex-1"
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          position: 'relative',
          height: '190px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front face — neutral statement */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-4 text-center"
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
  const ref = useRef(null)
  // Gate all flip timers on viewport entry so animation only starts when visible
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="w-full">
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
      <div className="flex gap-3 w-full max-w-5xl">
        {CARDS.map((card, i) => (
          <FlipCard key={card.front} card={card} index={i} enabled={isInView} />
        ))}
      </div>

      {/* Fix line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 text-center text-[#78716c] italic text-sm"
      >
        Push for commitment at the end of every meeting — or you&apos;re collecting compliments.
      </motion.p>
    </div>
  )
}
