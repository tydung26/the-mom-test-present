import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, fadeIn } from '../lib/animation-variants'

const CIRCLES = [
  { size: 'w-20 h-20', label: '1 cold call', delay: 0 },
  { size: 'w-36 h-36', label: '3 warm intros', delay: 0.3 },
  { size: 'w-52 h-52', label: 'Network effect', delay: 0.6 },
]

const circleItem: Variants = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
}

export default function Slide16FindingConversations() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Finding <span className="text-[#E8699A]">Conversations</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex items-end justify-center gap-8 mb-12"
      >
        {CIRCLES.map((circle) => (
          <motion.div
            key={circle.label}
            variants={circleItem}
            className={`${circle.size} rounded-full bg-white/5 border-2 border-[#E0527E] flex items-center justify-center`}
          >
            <span className="text-[#f5f5f5] text-xs font-semibold text-center px-2 leading-tight">
              {circle.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.4, duration: 0.8 }}
        className="max-w-2xl text-center text-[#E8699A] italic text-lg font-medium"
      >
        &ldquo;The goal of cold conversations is to stop having cold conversations.&rdquo;
      </motion.p>
    </SlideLayout>
  )
}
