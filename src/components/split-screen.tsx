import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { slideFromLeft, slideFromRight } from '../lib/animation-variants'

interface SplitScreenProps {
  left: ReactNode
  right: ReactNode
  leftLabel?: string
  rightLabel?: string
  leftTint?: 'red' | 'stone'
  rightTint?: 'green' | 'amber'
}

const leftTintMap = {
  red: 'bg-red-950/20 border-red-800/30',
  stone: 'bg-stone-900/40 border-stone-700/30',
}

const rightTintMap = {
  green: 'bg-green-950/20 border-green-800/30',
  amber: 'bg-[#E0527E]/10 border-[#E0527E]/20',
}

const leftLabelMap = {
  red: 'text-red-400',
  stone: 'text-stone-400',
}

const rightLabelMap = {
  green: 'text-green-400',
  amber: 'text-[#E8699A]',
}

export default function SplitScreen({
  left,
  right,
  leftLabel,
  rightLabel,
  leftTint = 'red',
  rightTint = 'green',
}: SplitScreenProps) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <motion.div
        variants={slideFromLeft}
        initial="hidden"
        animate="visible"
        className={`rounded-lg border p-6 ${leftTintMap[leftTint]}`}
      >
        {leftLabel && (
          <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${leftLabelMap[leftTint]}`}>
            {leftLabel}
          </p>
        )}
        {left}
      </motion.div>
      <motion.div
        variants={slideFromRight}
        initial="hidden"
        animate="visible"
        className={`rounded-lg border p-6 ${rightTintMap[rightTint]}`}
      >
        {rightLabel && (
          <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${rightLabelMap[rightTint]}`}>
            {rightLabel}
          </p>
        )}
        {right}
      </motion.div>
    </div>
  )
}
