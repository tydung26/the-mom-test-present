import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, pulseGlow } from '../lib/animation-variants'

export default function Slide24Qa() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="relative flex flex-col items-center justify-center gap-6">
        {/* Pulsing amber glow backdrop */}
        <motion.div
          variants={pulseGlow}
          initial="hidden"
          animate="visible"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '480px',
            height: '480px',
            background: 'radial-gradient(circle, #E0527E44 0%, transparent 70%)',
          }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative text-7xl sm:text-8xl font-black text-[#f5f5f5] text-center z-10"
        >
          Questions?
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#78716c] text-lg z-10"
        >
          The Mom Test — Rob Fitzpatrick
        </motion.p>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2, duration: 0.8 }}
          className="text-[#E8699A] text-2xl font-medium z-10"
        >
          Thank you
        </motion.p>
      </div>
    </SlideLayout>
  )
}
