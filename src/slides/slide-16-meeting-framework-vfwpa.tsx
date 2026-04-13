import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, staggerContainer, cascadeItem } from '../lib/animation-variants'

const framework = [
  {
    letter: 'V',
    label: 'Vision',
    example: "I'm trying to make flower delivery less of a pain for event planners",
  },
  {
    letter: 'F',
    label: 'Framing',
    example: "We're just starting out and don't have anything to sell yet",
  },
  {
    letter: 'W',
    label: 'Weakness',
    example: "I've only ever come at it from the buyer's side",
  },
  {
    letter: 'P',
    label: 'Pedestal',
    example: "You've been running events for years — you could really help me",
  },
  {
    letter: 'A',
    label: 'Ask',
    example: 'Do you have 20 minutes this week for a quick chat?',
  },
]

export default function Slide16MeetingFrameworkVfwpa() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-3xl flex flex-col gap-5">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center mb-1"
        >
          The <span className="text-[#E8699A]">VFWPA</span> Framework
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3"
        >
          {framework.map(({ letter, label, example }) => (
            <motion.div
              key={letter}
              variants={cascadeItem}
              className="border-l-4 border-[#E0527E] bg-white/5 rounded-lg p-4 flex items-start gap-4"
            >
              <span className="text-[#E8699A] text-2xl font-black w-6 shrink-0">{letter}</span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#f5f5f5] font-semibold text-base">{label}</span>
                <span className="text-[#78716c] italic text-sm leading-snug">&ldquo;{example}&rdquo;</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mnemonic footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.0, duration: 0.6 }}
          className="text-center text-[#78716c] italic text-sm mt-1"
        >
          &ldquo;Very Few Wizards Properly Ask for help&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
