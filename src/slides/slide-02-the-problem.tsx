import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { fadeIn } from '../lib/animation-variants'

const FULL_TEXT = 'We talk to customers\u2026 and still end up building stuff nobody buys.'
const HIGHLIGHT = 'nobody buys'

export default function Slide02TheProblem() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  // Split displayed text around the highlight phrase
  const highlightStart = FULL_TEXT.indexOf(HIGHLIGHT)
  const before = displayed.slice(0, highlightStart)
  const highlight = displayed.slice(highlightStart, Math.min(displayed.length, highlightStart + HIGHLIGHT.length))
  const after = displayed.slice(highlightStart + HIGHLIGHT.length)

  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="max-w-3xl text-center"
      >
        <p className="text-3xl sm:text-5xl font-semibold text-[#f5f5f5] leading-tight tracking-tight min-h-[8rem]">
          <span className="italic text-stone-300">&ldquo;</span>
          {before}
          {highlight && (
            <span className="text-[#E8699A] font-black">{highlight}</span>
          )}
          {after}
          <span className="italic text-stone-300">&rdquo;</span>
        </p>
      </motion.div>
    </SlideLayout>
  )
}
