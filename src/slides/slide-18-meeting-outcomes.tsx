import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SlideLayout } from '../components/slide-layout'

const CARDS = [
  {
    front: '"That\'s so cool. I love it!"',
    back: 'BAD — pure compliment, zero data',
    backBg: '#ef444422',
    backBorder: '#ef4444',
    delay: 1000,
  },
  {
    front: '"Let me know when it launches"',
    back: 'BAD — compliment + stall',
    backBg: '#ef444422',
    backBorder: '#ef4444',
    delay: 2000,
  },
  {
    front: '"What are the next steps?"',
    back: 'GOOD — advancing',
    backBg: '#10b98122',
    backBorder: '#10b981',
    delay: 3000,
  },
  {
    front: '"Can I buy the prototype?"',
    back: 'GREAT — strongest signal',
    backBg: '#10b98133',
    backBorder: '#10b981',
    delay: 4000,
  },
]

function FlipCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFlipped(true), card.delay)
    return () => clearTimeout(timer)
  }, [card.delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 200, damping: 22 }}
      className="flex-1"
      style={{ perspective: '800px' }}
    >
      <div
        style={{
          position: 'relative',
          height: '200px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-4 text-center"
        >
          <p className="text-[#f5f5f5] text-sm font-medium italic leading-snug">{card.front}</p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: card.backBg,
            borderColor: card.backBorder,
          }}
          className="absolute inset-0 flex items-center justify-center rounded-xl border-2 p-4 text-center"
        >
          <p className="font-black text-base" style={{ color: card.backBorder }}>
            {card.back}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Slide18MeetingOutcomes() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Meeting <span className="text-[#E8699A]">Outcomes</span>
      </motion.h2>

      <div className="flex gap-4 w-full max-w-5xl">
        {CARDS.map((card, i) => (
          <FlipCard key={i} card={card} index={i} />
        ))}
      </div>
    </SlideLayout>
  )
}
