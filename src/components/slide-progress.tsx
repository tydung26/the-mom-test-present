import { motion } from 'framer-motion'

interface SlideProgressProps {
  current: number
  total: number
}

export function SlideProgress({ current, total }: SlideProgressProps) {
  const progress = ((current + 1) / total) * 100

  return (
    <div
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Slide ${current + 1} of ${total}`}
      className="fixed bottom-0 left-0 z-50 h-[3px] w-full bg-white/5"
    >
      <motion.div
        className="h-full bg-[#E0527E]"
        style={{ boxShadow: '0 0 8px rgba(224, 82, 126, 0.5)' }}
        animate={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  )
}
