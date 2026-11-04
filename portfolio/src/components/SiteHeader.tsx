import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { PageContainer } from "@/components/PageContainer"
import { ThemeToggle } from "@/components/ThemeToggle"
import { BrandMark } from "@/components/BrandMark"

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
]

export function SiteHeader({
  isPolicy,
  isServices = false,
}: {
  isPolicy: boolean
  isServices?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (isPolicy || isServices) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    )
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isPolicy, isServices])

  const hrefFor = (id: string) =>
    id === "services"
      ? "/services"
      : `${isServices && id !== "contact" ? "/" : ""}#${id}`

  const currentFor = (id: string) =>
    isPolicy
      ? undefined
      : isServices
        ? id === "services"
          ? ("page" as const)
          : undefined
        : active === id
          ? ("location" as const)
          : undefined

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const closeOnWideScreen = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    window.addEventListener("resize", closeOnWideScreen)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", closeOnEscape)
      window.removeEventListener("resize", closeOnWideScreen)
    }
  }, [open])

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <PageContainer className="header-inner">
        <a
          className="wordmark"
          href={isServices ? "/#home" : "#home"}
          aria-label="AIMANASRN home"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span>
            aimanasrn<span className="wordmark-suffix">.dev</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ id, label }) => {
            const current = currentFor(id)
            return (
              <a href={hrefFor(id)} key={id} aria-current={current}>
                {current && (
                  <motion.span
                    layoutId="nav-active"
                    className="desktop-nav-pill"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 36 }
                    }
                  />
                )}
                <span className="desktop-nav-label">{label}</span>
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-dark header-cta" href="#contact">
            Let’s talk
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </PageContainer>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {links.map(({ id, label }, index) => (
              <motion.a
                href={hrefFor(id)}
                key={id}
                aria-current={currentFor(id)}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.05 + index * 0.05,
                  duration: reduceMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span>0{index + 1}</span>
                {label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </motion.a>
            ))}
            <a
              className="mobile-policies"
              href="/#policies/refund"
              onClick={() => setOpen(false)}
            >
              Policies & information
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
