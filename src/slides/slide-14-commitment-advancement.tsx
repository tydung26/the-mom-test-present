import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, fadeIn } from '../lib/animation-variants'

const LIGHTS = [
  {
    color: '#ef4444',
    label: 'Zombie leads — friendly but never buying',
    shadow: '0 0 32px 8px #ef444499',
  },
  {
    color: '#eab308',
    label: 'Compliments without commitment',
    shadow: '0 0 32px 8px #eab30899',
  },
  {
    color: '#10b981',
    label: 'Real commitment — time, reputation, or money',
    shadow: '0 0 32px 8px #10b98199',
  },
]

const lightItem: Variants = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function Slide14CommitmentAdvancement() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Commitment &amp; <span className="text-[#E8699A]">Advancement</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 mb-10"
      >
        {LIGHTS.map((light) => (
          <motion.div
            key={light.color}
            variants={lightItem}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <div
              className="w-[60px] h-[60px] rounded-full shrink-0"
              style={{
                backgroundColor: light.color,
                boxShadow: light.shadow,
              }}
            />
            <p className="text-lg text-[#f5f5f5] font-medium">{light.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.8, duration: 0.8 }}
        className="max-w-2xl text-center text-[#78716c] italic text-base"
      >
        &ldquo;It&apos;s not a real lead until you&apos;ve given them a concrete chance to reject you.&rdquo;
      </motion.p>
    </SlideLayout>
  )
}
