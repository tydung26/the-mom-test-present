import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, staggerContainer, staggerItem, slideFromLeft, slideFromRight } from '../lib/animation-variants'

const badSteps = [
  'Exchange business cards',
  'Let\'s grab coffee sometime!',
  'Never follows up',
]

const goodSteps = [
  'Ask your #1 question on the spot',
  '5-minute real conversation',
  'Leave with insights + warm intro',
]

export default function Slide15ConferencesAndEvents() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center"
        >
          Conferences &amp; <span className="text-[#E8699A]">Events</span>
        </motion.h2>

        {/* Two columns */}
        <div className="flex gap-4">
          {/* Left — what most people do */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-red-500/5 border border-red-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromLeft}
              className="text-red-400 text-lg font-black uppercase tracking-widest"
            >
              What most people do
            </motion.h3>

            {badSteps.map((step, i) => (
              <motion.div key={step} variants={staggerItem} className="flex flex-col items-start">
                <p className="text-[#f5f5f5] text-base leading-snug border-l-2 border-red-500/40 pl-4">
                  {step}
                </p>
                {i < badSteps.length - 1 && (
                  <span className="text-red-500/40 text-lg pl-4 mt-1">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — what you should do */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-green-500/5 border border-green-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromRight}
              className="text-green-400 text-lg font-black uppercase tracking-widest"
            >
              What you should do
            </motion.h3>

            {goodSteps.map((step, i) => (
              <motion.div key={step} variants={staggerItem} className="flex flex-col items-start">
                <p className="text-[#f5f5f5] text-base leading-snug border-l-2 border-green-500/40 pl-4">
                  {step}
                </p>
                {i < goodSteps.length - 1 && (
                  <span className="text-green-500/40 text-lg pl-4 mt-1">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center text-[#78716c] italic text-sm"
        >
          &ldquo;If it&apos;s not a formal meeting, you don&apos;t need to make excuses about why you&apos;re there.&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
