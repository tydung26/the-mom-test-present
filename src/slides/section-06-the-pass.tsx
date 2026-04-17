import { motion } from 'framer-motion'
import { chatStaggerContainer, fadeIn, earlyViewport, defaultViewport } from '../lib/animation-variants'
import ChatBubble from '../components/chat-bubble'

interface Message {
  sender: string
  message: string
  side: 'left' | 'right'
  color: 'amber' | 'stone' | 'green'
  annotation?: string
}

// Photo book app pass conversation — asking about real behavior, not hypotheticals
const messages: Message[] = [
  {
    sender: 'Son',
    message: "When's the last time you printed a photo?",
    side: 'right',
    color: 'green',
    annotation: 'Specific past action',
  },
  {
    sender: 'Mom',
    message: "Oh... maybe three years ago? For your aunt's birthday.",
    side: 'left',
    color: 'stone',
  },
  {
    sender: 'Son',
    message: 'Where are your favorite photos right now?',
    side: 'right',
    color: 'green',
    annotation: 'Current behavior',
  },
  {
    sender: 'Mom',
    message: "On my phone somewhere. I scroll past them sometimes.",
    side: 'left',
    color: 'stone',
  },
  {
    sender: 'Son',
    message: "Have you ever made a photo book before?",
    side: 'right',
    color: 'green',
    annotation: 'Prior solutions',
  },
  {
    sender: 'Mom',
    message: "I started one online once. Got overwhelmed choosing photos and gave up.",
    side: 'left',
    color: 'stone',
  },
]

export default function Section06ThePass() {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-2">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest mb-4 text-center"
      >
        The Mom Test — PASS
      </motion.h2>

      <motion.div
        variants={chatStaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex flex-col gap-3"
      >
        {messages.map((msg) => (
          <div key={msg.sender + msg.message.slice(0, 20)} className="relative">
            <ChatBubble
              sender={msg.sender}
              message={msg.message}
              side={msg.side}
              color={msg.color}
            />
            {msg.annotation && (
              // Gold dust highlight: annotation floats beside the bubble on large screens
              <motion.span
                variants={fadeIn}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+8px)] text-xs text-[#E8B84B] bg-[#E8B84B]/10 border border-[#E8B84B]/30 rounded px-2 py-0.5 whitespace-nowrap hidden lg:block"
              >
                {msg.annotation}
              </motion.span>
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        transition={{ delay: 0.6, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="mt-6 flex justify-center"
      >
        <span className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-bold tracking-widest uppercase">
          PASS
        </span>
      </motion.div>
    </div>
  )
}
