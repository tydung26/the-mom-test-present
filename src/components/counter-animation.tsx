import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/animation-variants'

interface CounterAnimationProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  color?: string
}

function formatWithCommas(n: number): string {
  return Math.floor(n).toLocaleString('en-US')
}

export default function CounterAnimation({
  value,
  prefix = '',
  suffix = '',
  duration = 1500,
  color = '#E0527E',
}: CounterAnimationProps) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(eased * value)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [value, duration])

  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="text-5xl sm:text-6xl font-bold tabular-nums"
      style={{ color }}
    >
      {prefix}{formatWithCommas(display)}{suffix}
    </motion.span>
  )
}
