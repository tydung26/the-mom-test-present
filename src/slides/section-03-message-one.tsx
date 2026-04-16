import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

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

// Ease-out-quint for impactful entrances
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1]

export default function Section03MessageOne() {
  return (
    <div className="max-w-3xl text-center flex flex-col items-center">
      {/* First statement — lands with impact */}
      <motion.p
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className={STATEMENTS[0].className}
      >
        {STATEMENTS[0].text}
      </motion.p>

      {/* Second statement — slides up after pause */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.4 }}
        className={`mt-6 ${STATEMENTS[1].className}`}
      >
        {STATEMENTS[1].text}
      </motion.p>

      {/* Third statement — punch line with box reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.8 }}
        className="mt-10 px-6 py-4 bg-[#E8699A]/10 border border-[#E8699A]/30 rounded-2xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.4, ease: EASE_OUT_QUINT, delay: 1.0 }}
          className={STATEMENTS[2].className}
        >
          {STATEMENTS[2].text}
        </motion.p>
      </motion.div>
    </div>
  )
}
