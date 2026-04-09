import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { zoomIn, fadeIn } from '../lib/animation-variants'

export default function Slide01Title() {
  return (
    <SlideLayout className="bg-[#0f0f0f] text-center">
      <motion.h1
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="text-6xl sm:text-8xl font-black tracking-tight text-[#f5f5f5] leading-none"
      >
        THE MOM TEST
      </motion.h1>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 text-lg text-stone-400 max-w-2xl leading-relaxed"
      >
        How to talk to customers &amp; learn if your business is a good idea
        when everyone is lying to you
      </motion.p>

      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 text-[#E8699A] text-xl font-semibold tracking-wide"
      >
        Rob Fitzpatrick
      </motion.p>
    </SlideLayout>
  )
}
