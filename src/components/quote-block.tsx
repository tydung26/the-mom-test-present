import { motion } from 'framer-motion'
import { fadeIn } from '../lib/animation-variants'

interface QuoteBlockProps {
  quote: string
  highlight?: string
  className?: string
}

function renderWithHighlight(quote: string, highlight?: string) {
  if (!highlight) return quote
  const idx = quote.indexOf(highlight)
  if (idx === -1) return quote
  return (
    <>
      {quote.slice(0, idx)}
      <span className="text-[#E0527E] font-bold">{highlight}</span>
      {quote.slice(idx + highlight.length)}
    </>
  )
}

export default function QuoteBlock({ quote, highlight, className = '' }: QuoteBlockProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={`relative max-w-4xl mx-auto text-center px-8 ${className}`}
    >
      <span className="absolute -top-4 -left-2 text-6xl text-[#E0527E] leading-none select-none">
        &ldquo;
      </span>
      <p className="text-2xl sm:text-3xl text-[#f5f5f5] leading-relaxed font-light">
        {renderWithHighlight(quote, highlight)}
      </p>
      <span className="absolute -bottom-8 -right-2 text-6xl text-[#E0527E] leading-none select-none">
        &rdquo;
      </span>
    </motion.div>
  )
}
