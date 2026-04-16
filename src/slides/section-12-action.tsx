import { motion } from 'framer-motion'
import { fadeIn, pulseGlow, defaultViewport } from '../lib/animation-variants'

export default function Section12Action() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 py-4">
      {/* Pulsing pink glow backdrop */}
      <motion.div
        variants={pulseGlow}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, #E0527E3A 0%, transparent 70%)',
        }}
      />

      {/* Label */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative z-10 text-[#E8699A] text-sm font-black uppercase tracking-widest"
      >
        One Thing Monday
      </motion.p>

      {/* The bold question — centrepiece */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.2 }}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f5f5] text-center leading-tight max-w-2xl"
      >
        &ldquo;If this existed,
        <br />
        would you{' '}
        <span className="text-[#E8699A]">pay now</span>?&rdquo;
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-10 text-[#a8a29e] text-base text-center max-w-md leading-relaxed"
      >
        Forces the shift from hypothetical to concrete.
        <br />
        If yes — take their money. If hesitation — you learned the truth.
      </motion.p>

      {/* Divider */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="relative z-10 w-16 h-px bg-[#E8699A]/40"
      />

      {/* Q&A indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 20 }}
        className="relative z-10 flex flex-col items-center gap-2"
      >
        <p className="text-5xl sm:text-6xl font-black text-[#f5f5f5]">Questions?</p>
        <p className="text-[#78716c] text-base">The Mom Test — Rob Fitzpatrick</p>
      </motion.div>
    </div>
  )
}
