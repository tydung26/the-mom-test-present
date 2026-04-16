import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../lib/animation-variants'

const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const

const EXAMPLES = [
  { company: 'Google', niche: 'PhD students finding code' },
  { company: 'eBay', niche: 'Pez collectors' },
  { company: 'Evernote', niche: 'moms saving recipes' },
]

export default function Section10StartupsDrown() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-10">
      {/* Main statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: EASE_OUT_QUINT }}
        className="text-center"
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f5f5] leading-tight">
          Startups don't starve.
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-[#E8699A] leading-tight">
          They drown.
        </p>
      </motion.div>

      {/* Subtext */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.3 }}
        className="text-stone-500 text-base sm:text-lg text-center max-w-lg"
      >
        Too many options. Too many leads. Too many ideas.
      </motion.p>

      {/* Examples */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col gap-3 mt-4"
      >
        {EXAMPLES.map((ex, i) => (
          <motion.div
            key={ex.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: EASE_OUT_QUINT }}
            className="flex items-center gap-3"
          >
            <span className="text-[#f5f5f5] font-bold text-lg w-24 text-right">{ex.company}</span>
            <span className="text-stone-600">→</span>
            <span className="text-stone-400 text-base">{ex.niche}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Punchline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ delay: 1.1, duration: 0.5, ease: EASE_OUT_QUINT }}
        className="text-xl sm:text-2xl font-bold text-[#f5f5f5] text-center mt-6"
      >
        Before you serve everyone,{' '}
        <span className="text-[#E8699A]">serve someone</span>.
      </motion.p>
    </div>
  )
}
