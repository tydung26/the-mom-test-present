import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, staggerItem } from '../lib/animation-variants'

const lines = [
  { text: '3 years building the wrong thing.', highlight: false },
  { text: 'Nearly ran out of money.', highlight: false },
  { text: 'Relocated internationally.', highlight: false },
  { text: 'Co-founder deported.', highlight: false },
  { text: 'Months of customer conversations.', highlight: false },
  { text: 'All wrong.', highlight: true },
]

export default function Slide03TheStory() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 max-w-2xl w-full"
      >
        <motion.h2
          variants={staggerItem}
          className="text-stone-500 text-sm uppercase tracking-widest mb-2"
        >
          Rob at Habit — a cautionary tale
        </motion.h2>

        {lines.map((line) => (
          <motion.p
            key={line.text}
            variants={staggerItem}
            transition={{ duration: 0.3 }}
            className={
              line.highlight
                ? 'text-[#E8699A] font-black text-3xl sm:text-4xl'
                : 'text-[#f5f5f5] text-xl sm:text-2xl font-medium'
            }
            style={
              line.highlight
                ? { animation: 'shake 0.5s ease-in-out 1.8s 1' }
                : undefined
            }
          >
            {line.text}
          </motion.p>
        ))}
      </motion.div>
    </SlideLayout>
  )
}
