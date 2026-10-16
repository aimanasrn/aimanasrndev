import { useEffect, useState, useSyncExternalStore } from "react"

import { PolicyPage } from "@/components/PolicyPage"
import { SiteFooter } from "@/components/SiteFooter"
import StaggeredMenu, {
  type StaggeredMenuItem,
  type StaggeredMenuSocialItem,
} from "@/components/StaggeredMenu"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { HomeSection } from "@/components/sections/HomeSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { StackSection } from "@/components/sections/StackSection"
import { getPolicySlug, policyLinks } from "@/content/business"

const navigationItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home", link: "#home" },
  { label: "About", ariaLabel: "Go to about", link: "#about" },
  { label: "Experience", ariaLabel: "Go to experience", link: "#experience" },
  { label: "Projects", ariaLabel: "Go to projects", link: "#projects" },
  { label: "Contact", ariaLabel: "Go to contact", link: "#contact" },
  {
    label: "Policies",
    ariaLabel: "Read website policies",
    link: "#policies/refund",
  },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/aimanasrn" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-aiman-bin-kanasronsham-2130431b0",
  },
]

function subscribeToLocation(callback: () => void) {
  window.addEventListener("hashchange", callback)
  window.addEventListener("popstate", callback)
  return () => {
    window.removeEventListener("hashchange", callback)
    window.removeEventListener("popstate", callback)
  }
}

const getHash = () => window.location.hash

export function App() {
  const hash = useSyncExternalStore(subscribeToLocation, getHash, () => "")
  const policySlug = getPolicySlug(hash)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const hero = document.getElementById("home")
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [policySlug])

  useEffect(() => {
    document.title = policySlug
      ? `${policyLinks.find(({ slug }) => slug === policySlug)!.label} — AIMANASRN`
      : "Muhammad Aiman — Software Developer"
    const frame = requestAnimationFrame(() => {
      if (policySlug) {
        window.scrollTo({ top: 0, behavior: "instant" })
        document
          .getElementById("policy-heading")
          ?.focus({ preventScroll: true })
      } else if (hash && !hash.startsWith("#policies/")) {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, policySlug])

  return (
    <main
      id="main-content"
      className="portfolio min-h-screen scroll-smooth bg-[#07111F] text-[#F4F7FB]"
    >
      <a
        className="skip-link"
        href={policySlug ? "#policy-heading" : "#home"}
        onClick={
          policySlug
            ? (event) => {
                event.preventDefault()
                document.getElementById("policy-heading")?.focus()
              }
            : undefined
        }
      >
        Skip to content
      </a>
      <StaggeredMenu
        isFixed
        logoUrl="/aimanasrndevprofile.png"
        hideLogo={!policySlug && heroVisible}
        items={navigationItems}
        socialItems={socialItems}
        menuButtonColor="#F4F7FB"
        openMenuButtonColor="#4CC9F0"
        colors={["#4CC9F0", "#7B61FF", "#0E1B2A"]}
        accentColor="#4CC9F0"
      />

      {policySlug ? (
        <PolicyPage slug={policySlug} />
      ) : (
        <>
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <StackSection />
          <ExpertiseSection />
          <ProjectsSection />
          <ContactSection />
        </>
      )}
      <SiteFooter />
    </main>
  )
}

export default App
