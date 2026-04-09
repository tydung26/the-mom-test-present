import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, slideUp, fadeIn } from '../lib/animation-variants'

const rules = [
  { number: '1', text: 'Talk about their life, not your idea' },
  { number: '2', text: 'Ask about specifics in the past, not generics about the future' },
  { number: '3', text: 'Talk less and listen more' },
]

export default function Slide06ThreeRules() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-3xl">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-stone-500 text-sm uppercase tracking-widest mb-10 text-center"
        >
          The 3 Rules of The Mom Test
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
      </div>
    </SlideLayout>
  )
}
