import { motion } from 'framer-motion'
import { SlideLayout } from '../components/slide-layout'
import { staggerContainer, fadeIn } from '../lib/animation-variants'
import ChatBubble from '../components/chat-bubble'

const messages = [
  { sender: 'You', message: "Those flowers on your table are nice — where'd you get them?", side: 'right' as const, color: 'green' as const, annotation: 'Asks about real behavior' },
  { sender: 'Friend', message: "The market on Sunday. They were like $5.", side: 'left' as const, color: 'stone' as const },
  { sender: 'You', message: "Do you buy flowers often?", side: 'right' as const, color: 'green' as const, annotation: 'Frequency, not hypothetical' },
  { sender: 'Friend', message: "Not really. Maybe for someone's birthday.", side: 'left' as const, color: 'stone' as const },
  { sender: 'You', message: "When's the last time you ordered from an actual flower shop?", side: 'right' as const, color: 'green' as const, annotation: 'Specific past event' },
  { sender: 'Friend', message: "Valentine's Day. $60 and they died in 3 days. Felt ripped off.", side: 'left' as const, color: 'stone' as const },
  { sender: 'You', message: "Did you look at other options before that?", side: 'right' as const, color: 'green' as const, annotation: 'Existing alternatives' },
  { sender: 'Friend', message: "Just Googled 'flower delivery near me' and picked the first one.", side: 'left' as const, color: 'stone' as const },
]

export default function Slide05PassingMomTest() {
  return (
    <SlideLayout className="bg-[#0f0f0f]">
      <div className="w-full max-w-2xl flex flex-col gap-2">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-stone-500 text-sm uppercase tracking-widest mb-4 text-center"
        >
          The Mom Test — PASS
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
              {'annotation' in msg && msg.annotation && (
                <motion.span
                  variants={fadeIn}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+8px)] text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded px-2 py-0.5 whitespace-nowrap hidden lg:block"
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
          animate="visible"
          transition={{ delay: 3.2, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <span className="bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-bold tracking-widest uppercase">
            PASS
          </span>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
