import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, staggerContainer, staggerItem } from '../lib/animation-variants'

const rows = [
  {
    fluff: '"I\'d definitely buy that"',
    anchor: 'When\'s the last time you bought flowers?',
    fact: 'Valentine\'s. $60. They died in 3 days.',
  },
  {
    fluff: '"I always love fresh flowers"',
    anchor: 'What\'d you do last time you wanted some?',
    fact: 'Grabbed the $5 bunch at the grocery store',
  },
  {
    fluff: '"I would pay premium for quality"',
    anchor: 'What do you currently spend?',
    fact: 'Whatever\'s at the market. $10 max.',
  },
]

export default function Slide11AnchoringFluff() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-5xl flex flex-col gap-6">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center mb-2"
        >
          Anchoring <span className="text-[#E8699A]">Fluff</span>
        </motion.h2>

        {/* Column headers */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-widest"
        >
          <span className="text-red-400/70">Fluff</span>
          <span className="text-[#E8699A]/70">Anchor Question</span>
          <span className="text-green-400/70">Fact</span>
        </motion.div>

        {/* Rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="grid grid-cols-3 gap-3 items-center"
            >
              {/* Fluff box */}
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3 text-[#f5f5f5] text-sm leading-snug text-center min-h-[60px] flex items-center justify-center">
                {row.fluff}
              </div>

              {/* Anchor column: arrow + question */}
              <div className="flex flex-col items-center gap-1">
                <motion.span
                  variants={fadeIn}
                  className="text-[#E8699A] text-xl font-bold"
                >
                  →
                </motion.span>
                <p className="text-[#E8699A] text-xs italic text-center leading-snug">
                  {row.anchor}
                </p>
                <motion.span
                  variants={fadeIn}
                  className="text-[#E8699A] text-xl font-bold"
                >
                  →
                </motion.span>
              </div>

              {/* Fact box */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3 text-[#f5f5f5] text-sm leading-snug text-center min-h-[60px] flex items-center justify-center">
                {row.fact}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center text-[#78716c] italic text-sm mt-2"
        >
          &ldquo;The world&apos;s most deadly fluff is: &lsquo;I would definitely buy that.&rsquo;&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
