import { useState, useEffect, useRef } from 'react'

/**
 * Animated counter hook. Counts from 0 to target with ease-out cubic easing.
 * Properly cleans up both setTimeout and requestAnimationFrame on unmount.
 */
export function useCountUp(target: number, duration = 1800, delay = 400) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now()
      function tick(now: number) {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(target * eased))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, delay])

  return value
}
