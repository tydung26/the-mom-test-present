import { motion } from 'framer-motion'
import { defaultViewport } from '../lib/animation-variants'

export default function Section13Questions() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="w-16 h-px bg-stone-700"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
        className="text-5xl sm:text-6xl font-black text-[#f5f5f5]"
      >
        Questions?
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[#78716c] text-base"
      >
        The Mom Test — Rob Fitzpatrick
      </motion.p>
    </div>
  )
}
