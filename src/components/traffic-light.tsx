import { motion } from 'framer-motion'
import { staggerFastContainer, staggerItem } from '../lib/animation-variants'

interface TrafficLightProps {
  activeIndex: number // 0=red, 1=yellow, 2=green, -1=none
}

const lights = [
  { color: '#ef4444', glow: '0 0 20px 6px rgba(239,68,68,0.7)', label: 'Red' },
  { color: '#eab308', glow: '0 0 20px 6px rgba(234,179,8,0.7)', label: 'Yellow' },
  { color: '#10b981', glow: '0 0 20px 6px rgba(16,185,129,0.7)', label: 'Green' },
]

export default function TrafficLight({ activeIndex }: TrafficLightProps) {
  return (
    <motion.div
      variants={staggerFastContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-3 bg-stone-900 border border-stone-700 rounded-2xl px-6 py-5 w-fit"
    >
      {lights.map((light, i) => {
        const isActive = activeIndex === i
        return (
          <motion.div
            key={i}
            variants={staggerItem}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-full transition-all duration-500"
              style={{
                backgroundColor: isActive ? light.color : '#374151',
                boxShadow: isActive ? light.glow : 'none',
              }}
            />
            <span className={`text-sm font-medium ${isActive ? 'text-[#f5f5f5]' : 'text-stone-600'}`}>
              {light.label}
            </span>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
