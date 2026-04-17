import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeIn, defaultViewport, earlyViewport } from '../lib/animation-variants'

const EMPTY_PRAISE = [
  '"That\'s so cool!"',
  '"I\'d totally use that"',
  '"Love it!"',
]

const REAL_SIGNALS = [
  '"Here\'s my credit card"',
  '"Let me intro you to my boss"',
  '"When can we start?"',
]

export default function Section07MessageTwo() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center gap-10">
      {/* Section label */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest"
      >
        Seek Commitment
      </motion.p>

      {/* Two-column contrast */}
      <div className="flex gap-6 w-full">
        {/* Left: Empty praise — crossed out */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={earlyViewport}
          className="flex-1 bg-red-500/5 border border-red-500/20 rounded-xl p-6"
        >
          <motion.p
            variants={staggerItem}
            className="text-red-400 text-sm font-black uppercase tracking-widest mb-4"
          >
            Compliments
          </motion.p>
          <div className="flex flex-col gap-3">
            {EMPTY_PRAISE.map((phrase) => (
              <motion.p
                key={phrase}
                variants={staggerItem}
                className="text-stone-500 text-lg italic line-through decoration-red-500/50"
              >
                {phrase}
              </motion.p>
            ))}
          </div>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-xs text-red-400/70"
          >
            Cost nothing = worth nothing
          </motion.p>
        </motion.div>

        {/* Right: Real signals — highlighted */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={earlyViewport}
          className="flex-1 bg-green-500/5 border border-green-500/20 rounded-xl p-6"
        >
          <motion.p
            variants={staggerItem}
            className="text-green-400 text-sm font-black uppercase tracking-widest mb-4"
          >
            Commitments
          </motion.p>
          <div className="flex flex-col gap-3">
            {REAL_SIGNALS.map((phrase) => (
              <motion.p
                key={phrase}
                variants={staggerItem}
                className="text-[#f5f5f5] text-lg font-medium border-l-2 border-green-500/50 pl-3"
              >
                {phrase}
              </motion.p>
            ))}
          </div>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-xs text-green-400/70"
          >
            Skin in the game = real data
          </motion.p>
        </motion.div>
      </div>

      {/* Punchline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center"
      >
        Facts and <span className="text-[#E8699A]">commitments</span>.
        <br />
        <span className="text-stone-500">Not applause.</span>
      </motion.p>
    </div>
  )
}
