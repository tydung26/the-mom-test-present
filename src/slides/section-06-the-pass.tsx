import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, earlyViewport, defaultViewport } from '../lib/animation-variants'
import ChatBubble from '../components/chat-bubble'

interface Message {
  sender: string
  message: string
  side: 'left' | 'right'
  color: 'amber' | 'stone' | 'green'
  annotation?: string
}

// Cookbook/iPad pass conversation — asking about real behavior, not hypotheticals
const messages: Message[] = [
  {
    sender: 'Son',
    message: "What's the last thing you cooked from a recipe?",
    side: 'right',
    color: 'green',
    annotation: 'Specific past behavior',
  },
  {
    sender: 'Mom',
    message: 'Oh, I made that lamb stew last week from a card your aunt gave me.',
    side: 'left',
    color: 'stone',
  },
  {
    sender: 'Son',
    message: 'Where did you find out about the apps you use on your iPad?',
    side: 'right',
    color: 'green',
    annotation: 'Discovery habits',
  },
  {
    sender: 'Mom',
    message: "I don't really look for apps. Your father set most of them up.",
    side: 'left',
    color: 'stone',
  },
  {
    sender: 'Son',
    message: "What's the last cookbook you bought for yourself?",
    side: 'right',
    color: 'green',
    annotation: 'Real purchase history',
  },
  {
    sender: 'Mom',
    message: "I haven't bought one in years. I just use the ones I have, or ask friends.",
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
        variants={staggerContainer}
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
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-6 flex justify-center"
      >
        <span className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-bold tracking-widest uppercase">
          PASS
        </span>
      </motion.div>
    </div>
  )
}
