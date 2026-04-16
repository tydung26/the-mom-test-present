import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeIn, scaleSpring, defaultViewport } from '../lib/animation-variants'

// Sequential funnel: broad → narrow → who-where pair
// Each tier blurs out when the next tier appears, creating a "drilling down" effect
const FUNNEL_TIERS = [
  { label: 'Students', width: 'max-w-3xl' },
  { label: 'PhD students', width: 'max-w-2xl' },
  { label: 'Non-native PhD students with upcoming talks', width: 'max-w-xl' },
]

// Timing constants (ms after viewport entry)
const TIER_DELAYS = [300, 700, 1200, 1700, 2200, 2700]

export default function Section10Slicing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // tier state gates each sequential reveal:
  // 0 = nothing visible
  // 1 = tier-1 appears
  // 2 = tier-1 blurs + arrow-1 appears
  // 3 = tier-2 appears
  // 4 = tier-2 blurs + arrow-2 appears
  // 5 = tier-3 + who-where label appears
  // 6 = where-to-find + footer appear
  const [tier, setTier] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const timers = TIER_DELAYS.map((delay, i) =>
      setTimeout(() => setTier(i + 1), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <div ref={ref} className="w-full max-w-3xl flex flex-col items-center gap-3">
      {/* Title */}
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] text-center mb-2"
      >
        Customer <span className="text-[#E8699A]">Slicing</span>
      </motion.h2>

      {/* Problem callout */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.15 }}
        className="w-full rounded-lg bg-red-500/8 border border-red-500/20 px-5 py-3 text-center mb-1"
      >
        <p className="text-red-400 text-sm font-semibold">
          <span className="font-black">"Students"</span> = too broad — drowning in mixed signals
        </p>
      </motion.div>

      {/* Tier 1 — broadest, blurs when tier >= 2 */}
      <div className="w-full flex flex-col items-center gap-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={tier >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="w-full"
        >
          <motion.div
            initial={{ filter: 'blur(0px)', opacity: 1 }}
            animate={
              tier >= 2
                ? { filter: 'blur(7px)', opacity: 0.28 }
                : { filter: 'blur(0px)', opacity: 1 }
            }
            transition={{ duration: 0.45 }}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center"
          >
            <p className="text-[#f5f5f5] text-xl font-semibold">{FUNNEL_TIERS[0].label}</p>
          </motion.div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={tier >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#E8699A] text-2xl font-bold leading-none"
        >
          ↓
        </motion.span>
      </div>

      {/* Tier 2 — medium, blurs when tier >= 4 */}
      <div className="w-full flex flex-col items-center gap-1">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={tier >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ filter: 'blur(0px)', opacity: 1 }}
            animate={
              tier >= 4
                ? { filter: 'blur(7px)', opacity: 0.28 }
                : { filter: 'blur(0px)', opacity: 1 }
            }
            transition={{ duration: 0.45 }}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center"
          >
            <p className="text-[#f5f5f5] text-xl font-semibold">{FUNNEL_TIERS[1].label}</p>
          </motion.div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={tier >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#E8699A] text-2xl font-bold leading-none"
        >
          ↓
        </motion.span>
      </div>

      {/* Tier 3 — narrowest, pink highlight — the "who" */}
      <motion.div
        variants={scaleSpring}
        initial="hidden"
        animate={tier >= 5 ? 'visible' : 'hidden'}
        className="w-full max-w-xl mx-auto"
      >
        <div className="bg-[#E0527E]/10 border-2 border-[#E0527E] rounded-xl px-6 py-4 text-center">
          <p className="text-[#f5f5f5] text-lg sm:text-xl font-semibold leading-snug">
            {FUNNEL_TIERS[2].label}
          </p>
        </div>
      </motion.div>

      {/* WHO + WHERE outcome */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={tier >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mt-1"
      >
        <span className="text-[#E8699A] font-black text-base tracking-wide">WHO</span>
        <span className="text-[#78716c] text-sm">+</span>
        <span className="text-[#E8699A] font-black text-base tracking-wide">WHERE</span>
        <span className="text-[#78716c] text-sm mx-1">=</span>
        <span className="text-[#f5f5f5] text-sm font-semibold">Find via department advisors</span>
      </motion.div>

      {/* Rule */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={tier >= 6 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-[#E8699A] font-bold text-sm tracking-wide mt-1"
      >
        Good customer segments are a who-where pair.
      </motion.p>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={tier >= 6 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-center text-[#78716c] italic text-sm"
      >
        &ldquo;If you don&apos;t know where to find your customers, keep slicing.&rdquo;
      </motion.p>
    </div>
  )
}
