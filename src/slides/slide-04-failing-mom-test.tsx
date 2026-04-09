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
  { sender: 'Son', message: "Mom, I have a business idea. What do you think?", side: 'right', color: 'amber' },
  { sender: 'Mom', message: "Of course, dear! What is it?", side: 'left', color: 'stone' },
  { sender: 'Son', message: "It's an app for creating cookbooks on the iPad. Would you use something like that?", side: 'right', color: 'amber' },
  { sender: 'Mom', message: "Oh yes, that sounds wonderful! I love it.", side: 'left', color: 'stone', subtext: "(Thinking: I'll just say yes to be supportive.)" },
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
