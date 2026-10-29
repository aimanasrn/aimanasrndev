import type { MouseEvent } from "react"

// Keep real links, modifier keys, downloads and external destinations native.
export function handleInternalNavigation(event: MouseEvent<HTMLElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return
  const anchor =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>("a[href]")
      : null
  if (
    !anchor ||
    anchor.hasAttribute("download") ||
    (anchor.target && anchor.target !== "_self")
  )
    return
  const destination = new URL(anchor.href, window.location.href)
  if (
    destination.origin !== window.location.origin ||
    destination.pathname === window.location.pathname
  )
    return
  const route = destination.pathname.replace(/\/+$/, "") || "/"
  if (route !== "/" && route !== "/services") return
  event.preventDefault()
  window.history.pushState(
    null,
    "",
    `${destination.pathname}${destination.search}${destination.hash}`
  )
  window.dispatchEvent(new PopStateEvent("popstate"))
}
