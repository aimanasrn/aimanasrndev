import {
  lazy,
  Suspense,
  useEffect,
  useSyncExternalStore,
  type PointerEvent,
} from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PolicyPage } from "@/components/PolicyPage"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { HomeSection } from "@/components/sections/HomeSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ProjectPage } from "@/components/projects/ProjectPage"
import { StackSection } from "@/components/sections/StackSection"
import { getPolicySlug, policyLinks } from "@/content/business"
import { getProjectBySlug, getProjectSlug } from "@/content/projects"
import { handleInternalNavigation } from "@/lib/navigation"
import { PageContainer } from "@/components/PageContainer"

const ServicesPage = lazy(() => import("@/components/services/ServicesPage"))

function subscribeToLocation(callback: () => void) {
  window.addEventListener("hashchange", callback)
  window.addEventListener("popstate", callback)
  return () => {
    window.removeEventListener("hashchange", callback)
    window.removeEventListener("popstate", callback)
  }
}
// Cards marked with data-spotlight get a soft glow that follows the cursor.
function trackSpotlight(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return
  const card =
    event.target instanceof Element
      ? event.target.closest<HTMLElement>("[data-spotlight]")
      : null
  if (!card) return
  const rect = card.getBoundingClientRect()
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`)
  card.style.setProperty("--my", `${event.clientY - rect.top}px`)
}

const getLocation = () => window.location.pathname + window.location.hash

export function App() {
  const location = useSyncExternalStore(
    subscribeToLocation,
    getLocation,
    () => "/"
  )
  const pathname = location.split("#")[0]
  const hash = location.slice(pathname.length)
  const isServices = pathname.replace(/\/+$/, "") === "/services"
  const policySlug = getPolicySlug(hash)
  const projectSlug = getProjectSlug(pathname)

  useEffect(() => {
    let cancelled = false
    void document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    document.title = policySlug
      ? `${policyLinks.find(({ slug }) => slug === policySlug)!.label} — AIMANASRN`
      : projectSlug
        ? `${getProjectBySlug(projectSlug)?.name ?? "Project not found"} — AIMANASRN`
        : isServices
          ? "Web Development Services & Pricing — AIMANASRN"
          : "Muhammad Aiman — Software Developer"
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      if (policySlug) {
        window.scrollTo({ top: 0, behavior: "instant" })
        document
          .getElementById("policy-heading")
          ?.focus({ preventScroll: true })
      } else if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      } else {
        window.scrollTo({ top: 0, behavior: "instant" })
        const heading = isServices
          ? "services-heading"
          : projectSlug
            ? "project-heading"
            : null
        if (heading)
          document.getElementById(heading)?.focus({ preventScroll: true })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, policySlug, isServices, projectSlug, pathname])

  return (
    <div
      className="portfolio"
      onClick={handleInternalNavigation}
      onPointerMove={trackSpotlight}
    >
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById("main-content")?.focus()
        }}
      >
        Skip to content
      </a>
      <SiteHeader
        key={policySlug ? "policy" : pathname}
        isPolicy={Boolean(policySlug)}
        isServices={isServices}
        isProject={Boolean(projectSlug)}
      />
      <main id="main-content" tabIndex={-1}>
        {policySlug ? (
          <PolicyPage slug={policySlug} />
        ) : projectSlug ? (
          <ProjectPage key={projectSlug} slug={projectSlug} />
        ) : isServices ? (
          <Suspense
            fallback={
              <PageContainer className="grid min-h-[60vh] items-center py-16">
                <p role="status" className="text-sm text-muted-foreground">
                  Loading services…
                </p>
              </PageContainer>
            }
          >
            <ServicesPage />
          </Suspense>
        ) : (
          <>
            <HomeSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ExpertiseSection />
            <StackSection />
            <ContactSection />
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
export default App
