import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect
type AnimatedTag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "header"
  | "footer"
  | "nav"
  | "aside"
  | "p"
  | "h1"
  | "h2"

interface AnimatedContentProps extends HTMLAttributes<HTMLElement> {
  as?: AnimatedTag
  children: ReactNode
  container?: Element | string | null
  distance?: number
  direction?: "vertical" | "horizontal"
  reverse?: boolean
  duration?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  threshold?: number
  delay?: number
  stagger?: number
  staggerIndex?: number
  disappearAfter?: number
  disappearDuration?: number
  disappearEase?: string
  onComplete?: () => void
  onDisappearanceComplete?: () => void
}

export default function AnimatedContent({
  as = "div",
  children,
  container,
  distance = 32,
  direction = "vertical",
  reverse = false,
  duration = 1,
  ease = "expo.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  stagger = 0.08,
  staggerIndex = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  onComplete,
  onDisappearanceComplete,
  className,
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLElement>(null)
  const setRef = useCallback((element: HTMLElement | null) => {
    ref.current = element
  }, [])

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element || element.hidden) return
    const media = gsap.matchMedia()
    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduce) {
          element.dataset.animationState = "reduced"
          return
        }
        const candidate =
          container || document.getElementById("snap-main-container")
        const scroller =
          typeof candidate === "string"
            ? document.querySelector(candidate)
            : candidate
        const axis = direction === "horizontal" ? "x" : "y"
        const moves = distance !== 0 || scale !== 1
        const clearProps = moves
          ? "opacity,visibility,transform"
          : "opacity,visibility"
        let finished = false
        element.dataset.animationState = "pending"
        gsap.set(element, {
          opacity: animateOpacity ? initialOpacity : 1,
          ...(distance !== 0 ? { [axis]: reverse ? -distance : distance } : {}),
          ...(scale !== 1 ? { scale } : {}),
        })
        const timeline = gsap.timeline({
          paused: true,
          delay: delay + Math.max(0, staggerIndex) * stagger,
          onStart: () => {
            element.dataset.animationState = "running"
          },
          onComplete: () => {
            finished = true
            element.dataset.animationState = "complete"
            gsap.set(element, { clearProps })
            onComplete?.()
            if (disappearAfter > 0) {
              gsap.to(element, {
                [axis]: reverse ? distance : -distance,
                scale: 0.8,
                opacity: animateOpacity ? initialOpacity : 0,
                delay: disappearAfter,
                duration: disappearDuration,
                ease: disappearEase,
                onComplete: onDisappearanceComplete,
              })
            }
          },
        })
        timeline.to(element, {
          opacity: 1,
          ...(distance !== 0 ? { [axis]: 0 } : {}),
          ...(scale !== 1 ? { scale: 1 } : {}),
          duration,
          ease,
        })
        const revealForFocus = () => {
          if (!finished) timeline.progress(1).pause()
        }
        element.addEventListener("focusin", revealForFocus)
        const trigger = ScrollTrigger.create({
          trigger: element,
          scroller: scroller || window,
          start: `clamp(top ${(1 - Math.min(1, Math.max(0, threshold))) * 100}%)`,
          once: true,
          onEnter: () => timeline.play(),
          onEnterBack: () => timeline.play(),
        })
        // Deep links can mount content above the viewport; keep it available on return.
        const bounds = element.getBoundingClientRect()
        const scrollBounds = scroller?.getBoundingClientRect()
        const viewportTop = scrollBounds?.top ?? 0
        const viewportHeight = scrollBounds?.height ?? window.innerHeight
        if (bounds.bottom < viewportTop) revealForFocus()
        else if (bounds.top < viewportTop + viewportHeight * (1 - threshold))
          timeline.play()
        return () => {
          element.removeEventListener("focusin", revealForFocus)
          trigger.kill()
          timeline.kill()
        }
      }
    )
    return () => media.revert()
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    stagger,
    staggerIndex,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete,
    props.hidden,
  ])

  const Component = as
  return (
    <Component
      {...props}
      ref={setRef}
      className={className}
      data-animated-content=""
    >
      {children}
    </Component>
  )
}
