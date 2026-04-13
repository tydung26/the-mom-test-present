import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, scaleSpring } from '../lib/animation-variants'

export default function Slide22CustomerSlicing() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-3xl flex flex-col items-center gap-4">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center mb-2"
        >
          Customer <span className="text-[#E8699A]">Slicing</span>
        </motion.h2>

        {/* Tier 1 — broad, blurs out */}
        <div className="w-full flex flex-col items-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-3xl"
          >
            <motion.div
              initial={{ filter: 'blur(0px)', opacity: 1 }}
              animate={{ filter: 'blur(8px)', opacity: 0.3 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center"
            >
              <p className="text-[#f5f5f5] text-xl font-semibold">Flower buyers</p>
            </motion.div>
          </motion.div>

          {/* Connector arrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="text-[#E8699A] text-2xl font-bold"
          >
            ↓
          </motion.span>
        </div>

        {/* Tier 2 — medium, blurs out */}
        <div className="w-full flex flex-col items-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <motion.div
              initial={{ filter: 'blur(0px)', opacity: 1 }}
              animate={{ filter: 'blur(8px)', opacity: 0.3 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center"
            >
              <p className="text-[#f5f5f5] text-xl font-semibold">People buying flowers for events</p>
            </motion.div>
          </motion.div>

          {/* Connector arrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.4 }}
            className="text-[#E8699A] text-2xl font-bold"
          >
            ↓
          </motion.span>
        </div>

        {/* Tier 3 — narrow, stays sharp, pink highlight */}
        <motion.div
          variants={scaleSpring}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="w-full max-w-xl"
        >
          <div className="bg-[#E0527E]/10 border-2 border-[#E0527E] rounded-xl px-6 py-5 text-center">
            <p className="text-[#f5f5f5] text-lg sm:text-xl font-semibold leading-snug">
              Brides-to-be on Pinterest planning their wedding
            </p>
          </div>
        </motion.div>

        {/* WHO + WHERE label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.5 }}
          className="text-[#E8699A] font-bold text-base tracking-wide"
        >
          WHO + WHERE = your customer
        </motion.p>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.5 }}
          className="text-center text-[#78716c] italic text-sm mt-1"
        >
          &ldquo;If you don&apos;t know where to find your customers, keep slicing.&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
