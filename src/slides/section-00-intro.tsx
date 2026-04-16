import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

// Ease-out-quint for smooth reveals
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

export default function Section00Intro() {
  return (
    <div className="max-w-3xl text-center flex flex-col items-center gap-6">
      {/* Book title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8, ease: EASE_OUT_QUINT }}
        className="text-5xl sm:text-7xl font-black text-[#f5f5f5] tracking-tight leading-tight"
      >
        The Mom Test
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: EASE_OUT_QUINT, delay: 0.3 }}
        className="text-lg sm:text-xl text-stone-400 font-medium max-w-2xl leading-relaxed"
      >
        How to talk to customers & learn if your business is a good idea
        <br />
        <span className="text-stone-500">when everyone is too nice to tell you the truth</span>
      </motion.p>

      {/* Author */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-[#E8699A] text-lg font-semibold"
      >
        Rob Fitzpatrick
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: EASE_OUT_QUINT, delay: 0.8 }}
        className="w-24 h-px bg-[#E8699A]/40 origin-center"
      />

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="text-stone-500 text-xs"
      >
        Scroll to continue
      </motion.p>
    </div>
  )
}
