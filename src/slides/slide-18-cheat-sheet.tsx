import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerFastContainer, staggerItem } from '../lib/animation-variants'

const RULES = [
  'Opinions are worthless',
  'Anything about future = lie',
  'Talk about their life, not your idea',
  'Ask about specifics in the past',
  'Talk less, listen more',
  'Be terrified of at least one question',
  'Love bad news',
  'Keep it casual',
  'Push for commitment',
  "It's not a lead until they can reject you",
  'Always have your 3 big questions',
  'Keep talking until you stop hearing new stuff',
]

export default function Slide18CheatSheet() {
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
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-4xl"
      >
        {RULES.map((rule) => (
          <motion.div
            key={rule}
            variants={staggerItem}
            className="bg-white/5 rounded-lg p-4 text-sm text-[#f5f5f5] border-l-2 border-[#E0527E] leading-snug"
          >
            {rule}
          </motion.div>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
