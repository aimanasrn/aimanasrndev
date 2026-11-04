import type { MouseEvent } from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const isDark = () => document.documentElement.classList.contains("dark")

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme()

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next = isDark() ? "light" : "dark"
    const apply = () => {
      flushSync(() => setTheme(next))
      const root = document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(next)
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (!document.startViewTransition || reduceMotion) {
      apply()
      return
    }

    // Reveal the new theme as a circle growing from the button.
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    const transition = document.startViewTransition(apply)
    void transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <button
      type="button"
      className={cn("theme-toggle", className)}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle theme (D)"
    >
      <Sun className="theme-toggle-sun" aria-hidden="true" />
      <Moon className="theme-toggle-moon" aria-hidden="true" />
    </button>
  )
}
