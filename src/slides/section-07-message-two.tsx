import { motion } from 'framer-motion'
import { staggerContainer, dramaticZoom, fadeIn, defaultViewport, earlyViewport } from '../lib/animation-variants'
import type { Variants } from 'framer-motion'

// Sequential reveal: each line fades + scales in after the previous
const lineReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 },
  },
}

export default function Section07MessageTwo() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center gap-10">
      {/* Primary statement — dramatic bold reveal */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex flex-col items-center gap-6 text-center"
      >
        <motion.p
          variants={dramaticZoom}
          className="text-4xl sm:text-6xl font-black text-[#f5f5f5] leading-tight tracking-tight"
        >
          You want{' '}
          <span className="text-[#E8699A]">facts</span>{' '}
          and{' '}
          <span className="text-[#E8699A]">commitments</span>
          ,<br />
          not compliments.
        </motion.p>

        <motion.p
          variants={lineReveal}
          className="text-xl sm:text-2xl text-stone-400 font-medium leading-snug max-w-2xl"
        >
          A compliment costs them nothing,{' '}
          <span className="text-stone-300 font-semibold">so it&apos;s worth nothing.</span>
        </motion.p>
      </motion.div>

      {/* Punch line — arrives last with a beat of delay */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="border-l-4 border-[#E8699A] pl-6 max-w-2xl"
      >
        <p className="text-lg sm:text-xl text-stone-300 italic leading-relaxed">
          &ldquo;A compliment costs them nothing, so it&apos;s worth nothing
          and carries no data.&rdquo;
        </p>
      </motion.div>
    </div>
  )
}
