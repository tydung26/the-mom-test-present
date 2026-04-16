import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

// Ease-out-quint for smooth reveals
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section00Agenda() {
  return (
    <div className="max-w-2xl w-full flex flex-col items-center gap-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
        className="text-2xl sm:text-3xl font-bold text-stone-400 text-center"
      >
        Two things to remember
      </motion.h2>

      {/* Core Message 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT, delay: 0.2 }}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-center"
      >
        <span className="text-[#E8699A] text-sm font-black uppercase tracking-widest">
          Message 1
        </span>
        <p className="mt-3 text-3xl sm:text-4xl font-black text-[#f5f5f5] leading-tight">
          Truth is uncomfortable
        </p>
        <p className="mt-2 text-stone-500 text-sm">
          If the conversation felt good, the data is probably fake.
        </p>
      </motion.div>

      {/* Core Message 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT, delay: 0.4 }}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-center"
      >
        <span className="text-[#E8699A] text-sm font-black uppercase tracking-widest">
          Message 2
        </span>
        <p className="mt-3 text-3xl sm:text-4xl font-black text-[#f5f5f5] leading-tight">
          Seek commitment
        </p>
        <p className="mt-2 text-stone-500 text-sm">
          Compliments cost nothing — they're worth nothing.
        </p>
      </motion.div>
    </div>
  )
}
