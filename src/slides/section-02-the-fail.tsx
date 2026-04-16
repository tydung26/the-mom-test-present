import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, earlyViewport, defaultViewport } from '../lib/animation-variants'
import ChatBubble from '../components/chat-bubble'

interface Message {
  sender: string
  message: string
  side: 'left' | 'right'
  color: 'amber' | 'stone' | 'green'
  subtext?: string
}

// Cookbook/iPad conversation from the book - shows how mom's answers are lies
const messages: Message[] = [
  {
    sender: 'Son',
    message: 'Would you ever buy an app which was like a cookbook for your iPad?',
    side: 'right',
    color: 'amber',
  },
  {
    sender: 'Mom',
    message: 'Hmmm.',
    side: 'left',
    color: 'stone',
    subtext: '(Thinking: "As if I need another cookbook at my age")',
  },
  {
    sender: 'Son',
    message: 'And it only costs $40...',
    side: 'right',
    color: 'amber',
  },
  {
    sender: 'Mom',
    message: 'Oh, well yes honey, that sounds amazing.',
    side: 'left',
    color: 'stone',
    subtext: '(Thinking: "I have rationalised the price outside of a real purchase decision")',
  },
]

export default function Section02TheFail() {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-2">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-stone-500 text-sm uppercase tracking-widest mb-4 text-center"
      >
        The Mom Test — FAIL
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex flex-col gap-3"
      >
        {messages.map((msg) => (
          <ChatBubble
            key={msg.sender + msg.message.slice(0, 20)}
            sender={msg.sender}
            message={msg.message}
            subtext={msg.subtext}
            side={msg.side}
            color={msg.color}
          />
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
        <span className="bg-red-500/20 text-red-400 rounded-full px-4 py-1 text-sm font-bold tracking-widest uppercase">
          FAIL
        </span>
      </motion.div>
    </div>
  )
}
