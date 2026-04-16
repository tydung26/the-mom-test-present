import { motion } from 'framer-motion'
import {
  fadeIn,
  staggerContainer,
  staggerItem,
  slideFromLeft,
  slideFromRight,
  earlyViewport,
  defaultViewport,
} from '../lib/animation-variants'

const productQuestions = [
  'Can I build it?',
  'Can I grow it?',
  'Will they keep using it?',
]

const marketQuestions = [
  'Do they want it?',
  'Will they pay?',
  'Are there enough of them?',
]

const EXAMPLES = [
  {
    label: 'Video games',
    tag: 'Pure product risk',
    tagColor: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    label: '"If you can build it, I\'ll buy it"',
    tag: 'Market risk solved — now build',
    tagColor: '#10b981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.25)',
  },
]

export default function Section09Risk() {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-6">
      {/* Title */}
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center"
      >
        Product vs. <span className="text-[#E8699A]">Market</span> Risk
      </motion.h2>

      {/* Two-column comparison */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex gap-4"
      >
        {/* Product Risk — amber */}
        <motion.div
          variants={staggerContainer}
          className="flex-1 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 flex flex-col gap-4"
        >
          <motion.h3
            variants={slideFromLeft}
            className="text-amber-400 text-xl font-black uppercase tracking-widest"
          >
            Product Risk
          </motion.h3>

          {productQuestions.map((q) => (
            <motion.p
              key={q}
              variants={staggerItem}
              className="text-[#f5f5f5] text-base leading-snug border-l-2 border-amber-500/40 pl-4"
            >
              {q}
            </motion.p>
          ))}

          <motion.div variants={staggerItem} className="mt-auto pt-2">
            <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm rounded-full px-4 py-1 font-medium">
              Validate by building
            </span>
          </motion.div>
        </motion.div>

        {/* Market Risk — green */}
        <motion.div
          variants={staggerContainer}
          className="flex-1 bg-green-500/5 border border-green-500/20 rounded-xl p-6 flex flex-col gap-4"
        >
          <motion.h3
            variants={slideFromRight}
            className="text-green-400 text-xl font-black uppercase tracking-widest"
          >
            Market Risk
          </motion.h3>

          {marketQuestions.map((q) => (
            <motion.p
              key={q}
              variants={staggerItem}
              className="text-[#f5f5f5] text-base leading-snug border-l-2 border-green-500/40 pl-4"
            >
              {q}
            </motion.p>
          ))}

          <motion.div variants={staggerItem} className="mt-auto pt-2">
            <span className="inline-block bg-green-500/15 border border-green-500/30 text-green-400 text-sm rounded-full px-4 py-1 font-medium">
              Validate by talking
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Examples */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="flex gap-3"
      >
        {EXAMPLES.map((ex) => (
          <motion.div
            key={ex.label}
            variants={staggerItem}
            className="flex-1 rounded-lg px-4 py-3 flex flex-col gap-1"
            style={{ background: ex.bg, border: `1px solid ${ex.border}` }}
          >
            <p className="text-[#f5f5f5] text-sm font-semibold italic">{ex.label}</p>
            <p className="text-xs font-bold" style={{ color: ex.tagColor }}>
              {ex.tag}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Key insight */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-[#78716c] italic text-sm"
      >
        If heavy product risk — you can&apos;t prove the business through conversations alone.
      </motion.p>
    </div>
  )
}
