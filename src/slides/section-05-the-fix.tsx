import { motion } from 'framer-motion'
import { staggerContainer, slideUp, fadeIn, defaultViewport, earlyViewport } from '../lib/animation-variants'

const rules = [
  { number: '1', text: 'Talk about their life, not your idea' },
  { number: '2', text: 'Ask about specifics in the past, not generics about the future' },
  { number: '3', text: 'Talk less and listen more' },
]

export default function Section05TheFix() {
  return (
    <div className="w-full max-w-3xl">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest mb-2 text-center"
      >
        The Mom Test
      </motion.h2>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-stone-500 text-xs text-center mb-10 italic"
      >
        Named after the ultimate people-pleaser
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex flex-col gap-6"
      >
        {rules.map((rule) => (
          <motion.div
            key={rule.number}
            variants={slideUp}
            className="flex items-center gap-6 bg-white/5 border-l-4 border-[#E0527E] rounded-xl p-8"
          >
            <span className="text-5xl font-black text-[#E0527E] leading-none select-none shrink-0">
              {rule.number}
            </span>
            <p className="text-xl text-[#f5f5f5] font-medium leading-snug">{rule.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 text-center text-sm text-stone-400 italic max-w-xl mx-auto"
      >
        "If you avoid mentioning your idea, you automatically ask better questions."
      </motion.p>
    </div>
  )
}
