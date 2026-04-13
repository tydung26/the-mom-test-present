import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, staggerItem, dramaticZoom, staggerFastContainer } from '../lib/animation-variants'

const digQuestions = [
  'Why do you want that?',
  'What would that let you do?',
  'How are you coping without it?',
]

const requestedFeatures = ['Analytics dashboards', 'CSV export', 'PDF export', 'Branded reports']

export default function Slide12DiggingBeneathIdeas() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center"
        >
          Digging Beneath <span className="text-[#E8699A]">Ideas</span>
        </motion.h2>

        {/* They asked for */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-center"
        >
          <p className="text-[#78716c] text-xs uppercase tracking-widest mb-2">They asked for:</p>
          <p className="text-[#f5f5f5] text-lg sm:text-xl leading-relaxed">
            {requestedFeatures.join(', ')}
          </p>
        </motion.div>

        {/* Arrow down */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.4 }}
          className="text-[#E8699A] text-3xl font-bold"
        >
          ↓
        </motion.div>

        {/* Dramatic reveal */}
        <motion.div
          variants={dramaticZoom}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, type: 'spring', stiffness: 150, damping: 15 }}
          className="w-full bg-[#E0527E]/10 border-2 border-[#E0527E]/40 rounded-xl p-6 text-center"
        >
          <p className="text-[#78716c] text-xs uppercase tracking-widest mb-2">What they actually needed:</p>
          <p className="text-[#E8699A] text-2xl sm:text-3xl font-black leading-tight">
            A simple weekly email to their clients
          </p>
        </motion.div>

        {/* Dig question pills */}
        <motion.div
          variants={staggerFastContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 2.4 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {digQuestions.map((q) => (
            <motion.span
              key={q}
              variants={staggerItem}
              className="bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-[#78716c] text-sm italic"
            >
              &ldquo;{q}&rdquo;
            </motion.span>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.2, duration: 0.6 }}
          className="text-center text-[#78716c] italic text-sm"
        >
          &ldquo;Ideas and feature requests should be understood, but not obeyed.&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
