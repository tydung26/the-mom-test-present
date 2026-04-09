import { motion } from 'framer-motion'
import { staggerFastContainer, staggerItem } from '../lib/animation-variants'

interface Card {
  title: string
  body: string
  icon?: string
}

interface CardGridProps {
  cards: Card[]
  columns?: 2 | 3 | 4
}

const colMap = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  return (
    <motion.div
      variants={staggerFastContainer}
      initial="hidden"
      animate="visible"
      className={`grid ${colMap[columns]} gap-4 w-full`}
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="border-t-2 border-[#E0527E] bg-white/5 rounded-lg p-5 flex flex-col gap-2"
        >
          {card.icon && (
            <span className="text-2xl">{card.icon}</span>
          )}
          <h3 className="text-[#E8699A] font-semibold text-sm sm:text-base">{card.title}</h3>
          <p className="text-stone-300 text-sm leading-relaxed">{card.body}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
