import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { slideUp, fadeIn } from '../lib/animation-variants'

export default function Slide21ChooseCustomers() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-3xl flex flex-col items-center gap-8">
        <motion.h2
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl font-black text-[#f5f5f5] text-center"
        >
          Weddings or <span className="text-[#E8699A]">Weekends?</span>
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#78716c] text-center text-base sm:text-lg leading-relaxed max-w-xl"
        >
          A flower shop tried to serve everyone — weddings, Valentine&rsquo;s last-minuters, offices,
          funerals. Serving everyone meant serving no one.
        </motion.p>

        {/* Blur → focus animation */}
        <div className="relative flex items-center justify-center gap-12 my-4">
          <motion.div
            initial={{ filter: 'blur(0px)', opacity: 1 }}
            animate={{ filter: 'blur(8px)', opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-3xl font-black text-[#f5f5f5]/60 select-none"
          >
            Everyone
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="text-[#E8699A] text-2xl font-black"
          >
            →
          </motion.span>

          <motion.div
            initial={{ filter: 'blur(8px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.5 }}
            className="text-3xl font-black text-[#E8699A] select-none"
          >
            Brides-to-be
          </motion.div>
        </div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3.0, duration: 0.8 }}
          className="text-[#E8699A] font-bold text-xl sm:text-2xl text-center"
        >
          &ldquo;Startups don&apos;t starve, they drown.&rdquo;
        </motion.p>
      </div>
    </SlideLayout>
  )
}
