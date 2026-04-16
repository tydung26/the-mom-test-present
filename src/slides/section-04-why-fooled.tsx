import { motion } from 'framer-motion'
import { staggerContainer, scaleSpring, defaultViewport, earlyViewport } from '../lib/animation-variants'

const CARDS = [
  {
    icon: '👏',
    title: 'Compliments',
    example: '"That\'s so cool!"',
    description: 'Feels great, means nothing',
    cost: '→ You build it. Nobody uses it.',
  },
  {
    icon: '☁️',
    title: 'Fluff',
    example: '"I would definitely use that..."',
    description: 'Future tense = wishful thinking',
    cost: '→ You quit your job. They forget you exist.',
  },
  {
    icon: '💡',
    title: 'Ideas',
    example: '"You should totally add..."',
    description: 'Their solution, not their problem',
    cost: '→ You add 10 features. They wanted something else.',
  },
]

export default function Section04WhyFooled() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
        className="mb-10 text-3xl font-black tracking-tight text-[#f5f5f5] text-center"
      >
        3 Types of <span className="text-[#E8699A]">Bad Data</span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={earlyViewport}
        className="flex gap-6 w-full max-w-4xl"
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.title}
            variants={scaleSpring}
            className="flex-1 flex flex-col items-center text-center bg-white/5 rounded-2xl p-8"
          >
            <span className="text-4xl mb-4">{card.icon}</span>
            <h3 className="text-xl font-bold text-[#E8699A] mb-3">{card.title}</h3>
            <p className="italic text-[#78716c] mb-3 text-base">{card.example}</p>
            <p className="text-sm text-[#f5f5f5]/70 mb-3">{card.description}</p>
            <p className="text-xs text-red-400/80 font-medium">{card.cost}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
