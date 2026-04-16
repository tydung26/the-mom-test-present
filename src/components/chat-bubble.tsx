import { motion } from 'framer-motion'
import { chatBubbleItem, chatBubbleItemRight } from '../lib/animation-variants'

interface ChatBubbleProps {
  sender: string
  message: string
  subtext?: string
  side: 'left' | 'right'
  color: 'amber' | 'stone' | 'green'
}

const colorMap = {
  amber: 'border-[#E0527E]',
  stone: 'border-stone-500',
  green: 'border-green-500',
}

const textColorMap = {
  amber: 'text-[#E8699A]',
  stone: 'text-stone-400',
  green: 'text-green-400',
}

export default function ChatBubble({
  sender,
  message,
  subtext,
  side,
  color,
}: ChatBubbleProps) {
  return (
    <motion.div
      variants={side === 'right' ? chatBubbleItemRight : chatBubbleItem}
      className={`flex w-full ${side === 'right' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] border-l-4 ${colorMap[color]} bg-white/5 rounded-r-lg px-4 py-3`}
      >
        <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${textColorMap[color]}`}>
          {sender}
        </p>
        <p className="text-[#f5f5f5] text-sm sm:text-base leading-relaxed">{message}</p>
        {subtext && (
          <p className="text-stone-400 text-xs italic mt-1">{subtext}</p>
        )}
      </div>
    </motion.div>
  )
}
