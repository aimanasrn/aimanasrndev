import StaggeredMenu, {
  type StaggeredMenuItem,
  type StaggeredMenuSocialItem,
} from "@/components/StaggeredMenu"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { HomeSection } from "@/components/sections/HomeSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"

const navigationItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home", link: "#home" },
  { label: "About", ariaLabel: "Go to about", link: "#about" },
  { label: "Expertise", ariaLabel: "Go to expertise", link: "#expertise" },
  { label: "Projects", ariaLabel: "Go to projects", link: "#projects" },
  { label: "Contact", ariaLabel: "Go to contact", link: "#contact" },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { label: "GitHub", link: "https://github.com/aimanasrndev" },
  { label: "LinkedIn", link: "https://www.linkedin.com" },
]

export function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#07111F] text-[#F4F7FB]">
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
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
