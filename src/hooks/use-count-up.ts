import { useState, useEffect, useRef } from 'react'

/**
 * Animated counter hook. Counts from 0 to target with ease-out cubic easing.
 * Properly cleans up both setTimeout and requestAnimationFrame on unmount.
 *
 * @param target   - Final value to count up to
 * @param duration - Animation duration in ms (default 1800)
 * @param delay    - Delay before animation starts in ms (default 400)
 * @param enabled  - Gate flag: pass false to hold at 0 until visible (default true)
 */
export function useCountUp(
  target: number,
  duration = 1800,
  delay = 400,
  enabled = true,
) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    // Do not start animation until enabled (e.g. element is in viewport)
    if (!enabled) {
      setValue(0)
      return
    }

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
  }, [target, duration, delay, enabled])

  return value
}
