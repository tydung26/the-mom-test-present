import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { slideUp, staggerContainer, staggerItem } from '../lib/animation-variants'
import { useCountUp } from '../hooks/use-count-up'

export default function Slide14KeepItCasual() {
  const formalHours = useCountUp(4, 900, 1100)
  const casualMinutes = useCountUp(5, 900, 1300)

  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.blockquote
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="max-w-2xl text-center mb-12"
      >
        <p className="text-xl sm:text-2xl text-[#f5f5f5] leading-relaxed font-medium">
          <span className="text-3xl text-[#E8699A]/60 font-black">&ldquo;</span>
          When you strip all the formality from the process, you end up with no meetings, no
          interview questions, and a much easier time.
          <span className="text-3xl text-[#E8699A]/60 font-black">&rdquo;</span>
        </p>
      </motion.blockquote>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex gap-8 w-full max-w-3xl"
      >
        {/* Formal */}
        <motion.div
          variants={staggerItem}
          className="flex-1 flex flex-col items-center text-center bg-white/5 rounded-2xl p-7 opacity-60"
        >
          <p className="text-base font-semibold text-[#78716c] uppercase tracking-widest mb-3">
            Formal Meeting
          </p>
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 18 }}
            className="text-4xl font-black text-[#78716c] tabular-nums"
          >
            {formalHours} hrs
          </motion.span>
          <p className="mt-2 text-sm text-[#78716c]/70">prep + scheduling</p>
        </motion.div>

        {/* Casual */}
        <motion.div
          variants={staggerItem}
          className="flex-1 flex flex-col items-center text-center bg-[#E0527E]/10 border border-[#E0527E]/30 rounded-2xl p-7"
        >
          <p className="text-base font-semibold text-[#E8699A] uppercase tracking-widest mb-3">
            Casual Chat
          </p>
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, type: 'spring', stiffness: 260, damping: 18 }}
            className="text-4xl font-black text-[#E8699A] tabular-nums"
          >
            {casualMinutes} min
          </motion.span>
          <p className="mt-2 text-sm text-[#E8699A]/70">at a coffee shop</p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
