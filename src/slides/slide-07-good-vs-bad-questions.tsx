import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, slideFromLeft, slideFromRight, fadeIn } from '../lib/animation-variants'

const badQuestions = [
  'Would you buy flowers from my shop?',
  'Do you think a flower subscription is a good idea?',
  'How much would you pay for a bouquet?',
]

const goodQuestions = [
  'When did you last buy someone flowers?',
  'Walk me through how you chose where to buy them.',
  'What else did you consider?',
]

export default function Slide07GoodVsBadQuestions() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-stone-500 text-sm uppercase tracking-widest text-center"
        >
          Questions that fail vs. questions that reveal
        </motion.h2>

        <div className="flex gap-4">
          {/* BAD column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-red-500/5 border border-red-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromLeft}
              className="text-red-400 text-2xl font-black uppercase tracking-widest"
            >
              BAD
            </motion.h3>
            {badQuestions.map((q) => (
              <motion.p
                key={q}
                variants={slideFromLeft}
                className="text-[#f5f5f5] text-base sm:text-lg leading-snug border-l-2 border-red-500/40 pl-4"
              >
                {q}
              </motion.p>
            ))}
          </motion.div>

          {/* GOOD column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-green-500/5 border border-green-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromRight}
              className="text-green-400 text-2xl font-black uppercase tracking-widest"
            >
              GOOD
            </motion.h3>
            {goodQuestions.map((q) => (
              <motion.p
                key={q}
                variants={slideFromRight}
                className="text-[#f5f5f5] text-base sm:text-lg leading-snug border-l-2 border-green-500/40 pl-4"
              >
                {q}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center text-stone-400 text-lg italic"
        >
          "Opinions are worthless. Only facts matter."
        </motion.p>
      </div>
    </SlideLayout>
  )
}
