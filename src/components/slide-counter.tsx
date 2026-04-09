import { motion, AnimatePresence } from 'framer-motion'

interface SlideCounterProps {
  current: number
  total: number
}

export function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="fixed bottom-4 right-6 z-50 font-mono text-sm text-[#78716c]">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {current + 1}
        </motion.span>
      </AnimatePresence>
      <span> / {total}</span>
    </div>
  )
}
