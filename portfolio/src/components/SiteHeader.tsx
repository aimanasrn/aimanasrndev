import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, CodeXml, Menu, X } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import StarBorder from "@/components/StarBorder"
import AnimatedContent from "@/components/AnimatedContent"

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
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
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isPolicy || isServices) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-15% 0px -65% 0px" }
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

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const closeOnWideScreen = () => {
      if (window.innerWidth > 767) setOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    window.addEventListener("resize", closeOnWideScreen)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      window.removeEventListener("resize", closeOnWideScreen)
    }
  }, [open])

  return (
    <AnimatedContent as="header" className="site-header">
      <PageContainer className="header-inner">
        <a
          className="wordmark"
          href={isServices ? "/#home" : "#home"}
          aria-label="AIMANASRN home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon">
            <CodeXml size={23} strokeWidth={2.3} aria-hidden="true" />
          </span>
          aimanasrn<span className="wordmark-suffix">.dev</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(({ id, label }) => (
            <a
              href={hrefFor(id)}
              key={id}
              aria-current={
                !isPolicy && isServices && id === "services"
                  ? "page"
                  : !isPolicy && !isServices && active === id
                    ? "location"
                    : undefined
              }
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-dark header-cta" href="#contact">
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <StarBorder
          as="button"
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </StarBorder>
      </PageContainer>
      <AnimatedContent
        as="nav"
        key={open ? "open" : "closed"}

        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(({ id, label }, index) => (
          <a
            href={hrefFor(id)}
            key={id}
            aria-current={
              !isPolicy && isServices && id === "services" ? "page" : undefined
            }
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {label}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
        <a
          className="mobile-policies"
          href="/#policies/refund"
          onClick={() => setOpen(false)}
        >
          Policies & information
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </AnimatedContent>
    </AnimatedContent>
  )
}
