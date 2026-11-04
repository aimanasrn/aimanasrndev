import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

/** Counts up to `to` the first time it scrolls into view. */
export function CountUp({
  to,
  duration = 1.6,
}: {
  to: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || !inView) return
    if (reduceMotion) {
      element.textContent = String(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        element.textContent = String(Math.round(value))
      },
    })
    return () => controls.stop()
  }, [inView, to, duration, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {to}
    </span>
  )
}
