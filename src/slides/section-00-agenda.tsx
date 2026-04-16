import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section00Agenda() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-20">
      {/* Message 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
        className="text-center"
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f5f5] leading-tight tracking-tight">
          Truth is{' '}
          <span className="text-[#E8699A]">uncomfortable</span>
        </p>
        <p className="mt-4 text-stone-500 text-base sm:text-lg">
          If it felt good, the data is fake.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.4, ease: EASE_OUT_QUINT, delay: 0.2 }}
        className="w-2 h-2 rounded-full bg-[#E8699A]/60"
      />

      {/* Message 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f5f5] leading-tight tracking-tight">
          Seek{' '}
          <span className="text-[#E8699A]">commitment</span>
        </p>
        <p className="mt-4 text-stone-500 text-base sm:text-lg">
          Compliments cost nothing = worth nothing.
        </p>
      </motion.div>
    </div>
  )
}
