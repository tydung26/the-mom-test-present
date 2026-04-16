import { motion } from 'framer-motion'
import { staggerContainer, dramaticZoom, slideUp, defaultViewport, earlyViewport } from '../lib/animation-variants'

// Three-part revelation: opinions → future lies → fake good feelings
const STATEMENTS = [
  {
    text: 'Opinions are worthless.',
    className: 'text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight',
  },
  {
    text: 'The future is a lie.',
    className: 'text-3xl sm:text-5xl font-bold text-stone-400 leading-tight',
  },
  {
    text: 'If it felt good, the data is probably fake.',
    className: 'text-2xl sm:text-4xl font-black text-[#E8699A] leading-tight',
  },
]

export default function Section03MessageOne() {
  return (
    <div className="max-w-3xl text-center flex flex-col items-center">
      {/* First statement — dramatic zoom in */}
      <motion.p
        variants={dramaticZoom}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className={STATEMENTS[0].className}
      >
        {STATEMENTS[0].text}
      </motion.p>

      {/* Second statement — slides up after first */}
      <motion.p
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        className={`mt-6 ${STATEMENTS[1].className}`}
      >
        {STATEMENTS[1].text}
      </motion.p>

      {/* Third statement — punch line with stagger delay */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="mt-10 px-6 py-4 bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-2xl"
      >
        <motion.p
          variants={dramaticZoom}
          className={STATEMENTS[2].className}
        >
          {STATEMENTS[2].text}
        </motion.p>
      </motion.div>
    </div>
  )
}
