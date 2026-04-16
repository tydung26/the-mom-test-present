import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, defaultViewport, earlyViewport } from '../lib/animation-variants'
import type { Variants } from 'framer-motion'

// Tiers ordered bottom-to-top for stagger reveal (weakest → strongest)
// Rendered in DOM top-to-bottom but stagger delay is inverted via custom prop
const TIERS = [
  {
    id: 'financial',
    label: 'FINANCIAL',
    strength: 'Strongest signal',
    items: ['Letter of intent', 'Pre-order', 'Deposit', 'Purchase'],
    borderColor: '#10b981',
    textColor: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.08)',
    glowColor: '0 0 24px 2px rgba(16, 185, 129, 0.25)',
    staggerIndex: 2, // reveals last (top of ladder = strongest)
  },
  {
    id: 'reputation',
    label: 'REPUTATION',
    strength: 'Medium signal',
    items: ['Intro to boss', 'Public testimonial', 'Case study'],
    borderColor: '#eab308',
    textColor: '#eab308',
    bgColor: 'rgba(234, 179, 8, 0.08)',
    glowColor: '0 0 24px 2px rgba(234, 179, 8, 0.2)',
    staggerIndex: 1,
  },
  {
    id: 'time',
    label: 'TIME',
    strength: 'Weakest signal',
    items: ['Clear next meeting', 'Trial usage', 'Feedback session'],
    borderColor: '#6366f1',
    textColor: '#818cf8',
    bgColor: 'rgba(99, 102, 241, 0.08)',
    glowColor: '0 0 24px 2px rgba(99, 102, 241, 0.2)',
    staggerIndex: 0, // reveals first (bottom of ladder = weakest)
  },
]

// Slides up from below — used for each tier
const tierReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 24 },
  },
}

export default function Section08Currencies() {
  // Sort tiers for stagger: bottom (weakest) first, top (strongest) last
  const orderedByStagger = [...TIERS].sort((a, b) => a.staggerIndex - b.staggerIndex)

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-8">
      {/* Section label */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
        className="text-stone-500 text-sm uppercase tracking-widest"
      >
        Commitment Currencies
      </motion.p>

      {/* Ladder — stagger reveals Time → Reputation → Financial */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="w-full flex flex-col gap-3"
        // Re-order children in DOM to match visual top→bottom, but CSS order
        // keeps Financial at top. We render in visual order and use custom delays.
        style={{ flexDirection: 'column' }}
      >
        {orderedByStagger.map((tier) => (
          <motion.div
            key={tier.id}
            variants={tierReveal}
            className="rounded-xl border-l-4 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3"
            style={{
              borderColor: tier.borderColor,
              backgroundColor: tier.bgColor,
              boxShadow: tier.glowColor,
              // Visual order: financial on top, time on bottom
              order: 2 - tier.staggerIndex,
            }}
          >
            {/* Tier header */}
            <div className="shrink-0 w-36">
              <p
                className="text-sm font-black tracking-widest uppercase"
                style={{ color: tier.textColor }}
              >
                {tier.label}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">{tier.strength}</p>
            </div>

            {/* Divider */}
            <div
              className="hidden sm:block w-px h-10 shrink-0"
              style={{ backgroundColor: tier.borderColor, opacity: 0.3 }}
            />

            {/* Items */}
            <div className="flex flex-wrap gap-2">
              {tier.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-stone-300 bg-white/5 rounded-full px-3 py-1 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center text-stone-400 italic text-base max-w-xl"
      >
        &ldquo;Think in terms of currency &mdash; what are they giving up for you?&rdquo;
      </motion.p>
    </div>
  )
}
