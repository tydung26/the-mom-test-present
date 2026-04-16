import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

// Ease-out-quint for impactful entrances
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section02bTheLie() {
  return (
    <div className="max-w-2xl text-center flex flex-col items-center gap-6">
      {/* The contradiction */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="text-4xl sm:text-5xl font-black text-[#f5f5f5] leading-tight"
      >
        Mom said <span className="text-green-400">yes</span>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT, delay: 0.4 }}
        className="text-4xl sm:text-5xl font-black text-[#f5f5f5] leading-tight"
      >
        She was <span className="text-red-400">lying</span>.
      </motion.p>

      {/* The question — makes audience want the answer */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.9 }}
        className="text-xl sm:text-2xl text-stone-400 mt-4 italic"
      >
        Why do people lie to us when they're trying to be nice?
      </motion.p>
    </div>
  )
}
