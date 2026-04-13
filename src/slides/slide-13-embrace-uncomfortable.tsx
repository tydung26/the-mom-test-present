import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { dramaticZoom, staggerContainer, staggerItem, fadeIn } from '../lib/animation-variants'
import { useCountUp } from '../hooks/use-count-up'

const QUOTE_PARTS = {
  before: 'You should be ',
  highlight: 'terrified',
  after: " of at least one of the questions you're asking in every conversation.",
}

function formatDollars(n: number) {
  return '$' + n.toLocaleString('en-US')
}

export default function Slide13EmbraceUncomfortable() {
  const good = useCountUp(5000, 1400, 600)
  const bad = useCountUp(50000, 1800, 600)

  return (
    <SlideLayout className="bg-[#0f0f0f] text-center">
      <div className="w-full max-w-3xl flex flex-col items-center gap-10">
        {/* Top: scary question quote with dramatic zoom + shake */}
        <motion.div
          variants={dramaticZoom}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            animate={{
              x: [0, -4, 4, -3, 3, -1, 1, 0],
              y: [0, 2, -2, 1, -1, 0],
            }}
            transition={{ delay: 0.9, duration: 0.6, ease: 'easeInOut' }}
            className="text-xl sm:text-2xl font-semibold text-[#f5f5f5] leading-relaxed"
          >
            <span className="text-3xl text-[#E8699A]/60 font-black">&ldquo;</span>
            {QUOTE_PARTS.before}
            <span
              className="text-[#E8699A] font-black"
              style={{ textShadow: '0 0 20px rgba(224,82,126,0.6)' }}
            >
              {QUOTE_PARTS.highlight}
            </span>
            {QUOTE_PARTS.after}
            <span className="text-3xl text-[#E8699A]/60 font-black">&rdquo;</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-4 text-xs text-[#78716c] uppercase tracking-widest"
          >
            — The Mom Test
          </motion.p>
        </motion.div>

        {/* Bottom: two cost cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex gap-6 w-full"
        >
          {/* Green: learning cheap */}
          <motion.div
            variants={staggerItem}
            className="flex-1 flex flex-col items-center text-center bg-green-500/10 border border-green-500/40 rounded-2xl p-6"
          >
            <span className="text-4xl font-black text-green-400 tabular-nums">
              {formatDollars(good)}
            </span>
            <p className="mt-2 text-sm text-green-300/70">to learn you&rsquo;re wrong</p>
            <div className="mt-4 px-5 py-2 bg-green-500/20 rounded-full">
              <span className="text-green-300 font-bold tracking-widest text-sm uppercase">
                GREAT
              </span>
            </div>
          </motion.div>

          {/* Red: building wrong thing */}
          <motion.div
            variants={staggerItem}
            className="flex-1 flex flex-col items-center text-center bg-red-500/10 border border-red-500/40 rounded-2xl p-6"
          >
            <span className="text-4xl font-black text-red-400 tabular-nums">
              {formatDollars(bad)}
            </span>
            <p className="mt-2 text-sm text-red-300/70">building the wrong thing</p>
            <div className="mt-4 px-5 py-2 bg-red-500/20 rounded-full">
              <span className="text-red-300 font-bold tracking-widest text-sm uppercase">
                DISASTER
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-sm text-[#78716c] italic"
        >
          The truth is our goal. Bad news gets us closer.
        </motion.p>
      </div>
    </SlideLayout>
  )
}
