import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, cascadeItem } from '../lib/animation-variants'

const RULES = [
  'Opinions are worthless.',
  'Anything involving the future is an over-optimistic lie.',
  'People will lie to you if they think it\'s what you want to hear.',
  'People know what their problems are, but they don\'t know how to solve those problems.',
  'People want to help you, but will rarely do so unless you give them an excuse.',
]

export default function Slide08RulesOfThumb() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Rules of <span className="text-[#E8699A]">Thumb</span>
      </motion.h2>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-5 max-w-3xl w-full"
      >
        {RULES.map((rule, i) => (
          <motion.li
            key={i}
            variants={cascadeItem}
            className="flex items-start gap-3"
          >
            <span className="text-3xl font-black text-[#E8699A] leading-none mt-[-4px] select-none">
              &ldquo;
            </span>
            <p className="text-xl text-[#f5f5f5] leading-snug">{rule}</p>
          </motion.li>
        ))}
      </motion.ul>
    </SlideLayout>
  )
}
