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

const navigationItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home", link: "#home" },
  { label: "About", ariaLabel: "Go to about", link: "#about" },
  { label: "Experience", ariaLabel: "Go to experience", link: "#experience" },
  { label: "Projects", ariaLabel: "Go to projects", link: "#projects" },
  { label: "Contact", ariaLabel: "Go to contact", link: "#contact" },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/aimanasrn" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-aiman-bin-kanasronsham-2130431b0",
  },
]

export function App() {
  return (
    <main
      id="main-content"
      className="portfolio min-h-screen scroll-smooth bg-[#07111F] text-[#F4F7FB]"
    >
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <StaggeredMenu
        isFixed
        items={navigationItems}
        socialItems={socialItems}
        menuButtonColor="#F4F7FB"
        openMenuButtonColor="#4CC9F0"
        colors={["#4CC9F0", "#7B61FF", "#0E1B2A"]}
        accentColor="#4CC9F0"
      />

      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <StackSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="portfolio-footer page-container mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-[#9CAFC3] sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Muhammad Aiman</p>
        <a href="#home" className="transition-colors hover:text-[#4CC9F0]">
          Back to top ↑
        </a>
      </footer>
    </main>
  )
}

export default App
