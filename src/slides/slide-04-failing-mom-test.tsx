import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, fadeIn } from '../lib/animation-variants'
import ChatBubble from '../components/chat-bubble'

interface Message {
  sender: string
  message: string
  side: 'left' | 'right'
  color: 'amber' | 'stone' | 'green'
  subtext?: string
}

const messages: Message[] = [
  { sender: 'You', message: "I want to open a flower shop with same-day delivery. Would you buy from it?", side: 'right', color: 'amber' },
  { sender: 'Friend', message: "Oh wow, that sounds lovely! I'd definitely order from you.", side: 'left', color: 'stone', subtext: "(Thinking: I'll just say yes to be supportive.)" },
  { sender: 'You', message: "We'd do custom arrangements and a subscription service too.", side: 'right', color: 'amber' },
  { sender: 'Friend', message: "I love that! My apartment always needs flowers. You should totally do it.", side: 'left', color: 'stone', subtext: "(Thinking: I buy flowers maybe twice a year...)" },
]

export default function Slide04FailingMomTest() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-stone-500 text-sm uppercase tracking-widest mb-4 text-center"
        >
          The Mom Test — FAIL
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
          animate="visible"
          transition={{ delay: 2.8, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <span className="bg-red-500/20 text-red-400 rounded-full px-4 py-1 text-sm font-bold tracking-widest uppercase">
            FAIL
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
