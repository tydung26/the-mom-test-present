import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { slideFromLeft, slideFromRight } from '../lib/animation-variants'

export default function Slide10DeflectingCompliments() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        Deflecting <span className="text-[#E8699A]">Compliments</span>
      </motion.h2>

      <div className="flex gap-8 w-full max-w-4xl">
        {/* Before */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
          className="flex-1 bg-red-500/10 border border-red-500/30 rounded-2xl p-6"
        >
          <p className="text-sm font-bold text-red-400 uppercase tracking-widest mb-5">Before</p>
          <div className="flex flex-col gap-3">
            <p className="text-[#f5f5f5] text-base">&ldquo;That&rsquo;s cool. Love it.&rdquo;</p>
            <span className="text-red-400 text-xl self-center">↓</span>
            <p className="text-[#f5f5f5] text-base">&ldquo;Sounds terrific. Keep me in the loop.&rdquo;</p>
            <span className="text-red-400 text-xl self-center">↓</span>
            <p className="text-red-300 font-bold text-base">&ldquo;We&rsquo;ve found our big idea!&rdquo;</p>
          </div>
          <p className="mt-5 text-xs text-red-400/70 italic">Escalating false confidence</p>
        </motion.div>

        {/* After */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
          className="flex-1 bg-green-500/10 border border-green-500/30 rounded-2xl p-6"
        >
          <p className="text-sm font-bold text-green-400 uppercase tracking-widest mb-5">After</p>
          <div className="flex flex-col gap-3">
            <p className="text-[#f5f5f5] text-base">&ldquo;That&rsquo;s cool.&rdquo;</p>
            <span className="text-green-400 text-xl self-center">↓</span>
            <p className="text-green-300 text-base">
              &ldquo;Thanks! So how are you dealing with this currently?&rdquo;
            </p>
            <span className="text-green-400 text-xl self-center">↓</span>
            <div className="flex gap-2 flex-wrap">
              {['Deflect', 'Dig deeper', 'Seek commitment'].map((step) => (
                <span
                  key={step}
                  className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
