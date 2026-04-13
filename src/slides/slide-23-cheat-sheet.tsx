import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerFastContainer, staggerItem } from '../lib/animation-variants'

const RULES = [
  'Opinions are worthless',
  'Anything about the future = lie',
  'Talk about their life, not your idea',
  'Ask about specifics in the past',
  'Talk less, listen more',
  'Anchor fluff to real behavior',
  'Dig beneath feature requests',
  'Be terrified of at least one question',
  "Love bad news — it's progress",
  'Keep it casual — skip the meeting',
  'Pop your #1 question at conferences',
  'Frame meetings with VFWPA',
  'Push for commitment, not compliments',
  'Know your product risk vs market risk',
  'Slice customers into who-where pairs',
  'Keep talking until you stop hearing new stuff',
]

export default function Slide23CheatSheet() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-bold tracking-wider text-[#E8699A] text-center uppercase"
      >
        Cheat Sheet
      </motion.h2>

      <motion.div
        variants={staggerFastContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl"
      >
        {RULES.map((rule) => (
          <motion.div
            key={rule}
            variants={staggerItem}
            className="bg-white/5 rounded-lg p-3 text-xs text-[#f5f5f5] border-l-2 border-[#E0527E] leading-snug"
          >
            {rule}
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
