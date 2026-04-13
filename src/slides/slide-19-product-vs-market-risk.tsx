import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn, staggerContainer, staggerItem, slideFromLeft, slideFromRight } from '../lib/animation-variants'

const marketQuestions = [
  'Do they want it?',
  'Will they pay?',
  'Are there enough of them?',
]

const productQuestions = [
  'Can I build it?',
  'Can I grow it?',
  'Will they keep using it?',
]

export default function Slide19ProductVsMarketRisk() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center"
        >
          Product vs. <span className="text-[#E8699A]">Market</span> Risk
        </motion.h2>

        {/* Two columns */}
        <div className="flex gap-4">
          {/* Market Risk — green */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-green-500/5 border border-green-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromLeft}
              className="text-green-400 text-xl font-black uppercase tracking-widest"
            >
              Market Risk
            </motion.h3>

            {marketQuestions.map((q) => (
              <motion.p
                key={q}
                variants={staggerItem}
                className="text-[#f5f5f5] text-base leading-snug border-l-2 border-green-500/40 pl-4"
              >
                {q}
              </motion.p>
            ))}

            <motion.div variants={staggerItem} className="mt-auto pt-2">
              <span className="inline-block bg-green-500/15 border border-green-500/30 text-green-400 text-sm rounded-full px-4 py-1 font-medium">
                → Validate by talking
              </span>
            </motion.div>
          </motion.div>

          {/* Product Risk — amber */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <motion.h3
              variants={slideFromRight}
              className="text-amber-400 text-xl font-black uppercase tracking-widest"
            >
              Product Risk
            </motion.h3>

            {productQuestions.map((q) => (
              <motion.p
                key={q}
                variants={staggerItem}
                className="text-[#f5f5f5] text-base leading-snug border-l-2 border-amber-500/40 pl-4"
              >
                {q}
              </motion.p>
            ))}

            <motion.div variants={staggerItem} className="mt-auto pt-2">
              <span className="inline-block bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm rounded-full px-4 py-1 font-medium">
                → Validate by building
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center text-[#78716c] italic text-sm"
        >
          &ldquo;If they say &lsquo;I&apos;d pay if you can do X&rsquo; — the risk is in your product, not the market.&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
