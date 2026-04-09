import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { dramaticZoom } from '../lib/animation-variants'

const QUOTE_PARTS = {
  before: 'You should be ',
  highlight: 'terrified',
  after: ' of at least one of the questions you\'re asking in every conversation.',
}

export default function Slide11ScaryQuestions() {
  return (
    <SlideLayout className="bg-[#0f0f0f] text-center">
      <motion.div
        variants={dramaticZoom}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p
          animate={{
            x: [0, -4, 4, -3, 3, -1, 1, 0],
            y: [0, 2, -2, 1, -1, 0],
          }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'easeInOut' }}
          className="text-2xl sm:text-3xl font-semibold text-[#f5f5f5] leading-relaxed"
        >
          <span className="text-4xl text-[#E8699A]/60 font-black">&ldquo;</span>
          {QUOTE_PARTS.before}
          <span
            className="text-[#E8699A] font-black"
            style={{ textShadow: '0 0 20px rgba(224,82,126,0.6)' }}
          >
            {QUOTE_PARTS.highlight}
          </span>
          {QUOTE_PARTS.after}
          <span className="text-4xl text-[#E8699A]/60 font-black">&rdquo;</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8 text-sm text-[#78716c] uppercase tracking-widest"
        >
          — The Mom Test
        </motion.p>
      </motion.div>
    </SlideLayout>
  )
}
