import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { slideUp } from '../lib/animation-variants'
import { useCountUp } from '../hooks/use-count-up'

function formatDollars(n: number) {
  return '$' + n.toLocaleString('en-US')
}

export default function Slide12LoveBadNews() {
  const good = useCountUp(5000, 1400, 600)
  const bad = useCountUp(50000, 1800, 600)

  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Love <span className="text-[#E8699A]">Bad News</span>
      </motion.h2>

      <div className="flex gap-8 w-full max-w-3xl mb-10">
        {/* Green path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex-1 flex flex-col items-center text-center bg-green-500/10 border border-green-500/40 rounded-2xl p-7"
        >
          <span className="text-5xl font-black text-green-400 tabular-nums">
            {formatDollars(good)}
          </span>
          <p className="mt-2 text-sm text-green-300/70">to learn you&rsquo;re wrong</p>
          <div className="mt-5 px-5 py-2 bg-green-500/20 rounded-full">
            <span className="text-green-300 font-bold tracking-widest text-sm uppercase">
              GREAT
            </span>
          </div>
        </motion.div>

        {/* Red path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex-1 flex flex-col items-center text-center bg-red-500/10 border border-red-500/40 rounded-2xl p-7"
        >
          <span className="text-5xl font-black text-red-400 tabular-nums">
            {formatDollars(bad)}
          </span>
          <p className="mt-2 text-sm text-red-300/70">building the wrong thing</p>
          <div className="mt-5 px-5 py-2 bg-red-500/20 rounded-full">
            <span className="text-red-300 font-bold tracking-widest text-sm uppercase">
              DISASTER
            </span>
          </div>
        </motion.div>
      </div>

      <motion.p
        variants={slideUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="max-w-xl text-center text-base text-[#78716c] italic leading-relaxed"
      >
        &ldquo;It&rsquo;s not a failure if you learned something. The real failure is running out of
        money because you never asked.&rdquo;
      </motion.p>
    </SlideLayout>
  )
}
