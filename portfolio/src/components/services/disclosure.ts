import { ScrollTrigger } from "gsap/ScrollTrigger"

export function refreshServiceLayout() {
  requestAnimationFrame(() => ScrollTrigger.refresh())
}
