import { ArrowDown, ArrowUpRight, Asterisk, MessageCircle } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import RotatingText from "@/components/RotatingText"
import StarBorder from "@/components/StarBorder"
import { business } from "@/content/business"
import AnimatedContent from "@/components/AnimatedContent"

const heroWords = ["software.", "websites.", "web apps.", "systems."]
const complementaryCapabilities = [
  "API integrations",
  "Cloud deployment",
  "Database design",
  "Responsive web design",
  "Maintenance & support",
]

export function HomeSection() {
  return (
    <section id="home" aria-labelledby="hero-heading">
      <PageContainer>
        <div className="hero-layout">
          <div className="hero-copy">
            <AnimatedContent className="hero-availability">
              <span
                className="availability-badge availability-badge-work"
                title="Open to full-time or contract opportunities"
              >
                <span className="availability-status-dot" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-[#28834b] opacity-75 motion-safe:animate-ping" />
                </span>
                Open to work
              </span>
            </AnimatedContent>
            <AnimatedContent
              as="h1"
              staggerIndex={1}
              id="hero-heading"
              aria-label="Good ideas. Great software, websites, web apps, and systems."
            >
              Good ideas.
              <br />
              <span className="hero-highlight" aria-hidden="true">
                <span>Great</span>
                <span className="highlight hero-rotating-slot">
                  {heroWords.map((word) => (
                    <span className="hero-rotating-sizer" key={word}>
                      {word}
                    </span>
                  ))}
                  <RotatingText
                    texts={heroWords}
                    mainClassName="hero-rotating-text"
                    splitBy="lines"
                    effect="slide"
                    rotationInterval={2500}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    pauseOnHover
                  />
                </span>
              </span>
            </AnimatedContent>
            <AnimatedContent as="p" staggerIndex={2}>
              I’m Aiman, a software developer based in Malaysia.
              <br className="hero-break" /> I turn complex challenges into
              thoughtful digital experiences — from the first idea to the final
              line of code.
            </AnimatedContent>
            <AnimatedContent className="hero-actions" staggerIndex={3}>
              <a
                className="button button-dark hero-project-cta"
                href={business.whatsappUrl || "#contact"}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Let’s discuss your project
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <StarBorder
                as="a"
                className="button button-outline"
                href="#projects"
              >
                View selected work <ArrowUpRight size={18} aria-hidden="true" />
              </StarBorder>
            </AnimatedContent>
            <AnimatedContent
              as="p"
              className="hero-hiring"

              staggerIndex={4}
            >
              Hiring for your team? <a href="#contact">Let’s talk.</a>
            </AnimatedContent>
          </div>
          <AnimatedContent className="hero-portrait" staggerIndex={2}>
            <div className="portrait-freelance-note">
              <span>
                Available for
                <br />
                freelance projects
              </span>
              <svg
                viewBox="0 0 72 64"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M9 7C5 27 16 49 57 49M57 49 44 40M57 49 43 55"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="portrait-note" aria-hidden="true">
              The person
              <br />
              behind the pixels
              <svg viewBox="0 0 80 76" fill="none">
                <path
                  d="M65 4c13 28-8 49-48 54m0 0 15-16M17 58l21 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <figure className="portrait-frame">
              <img
                src="/aimanasrndevprofile.png"
                alt="Muhammad Aiman, software developer based in Malaysia"
                width={1254}
                height={1254}
                fetchPriority="high"
              />
              <figcaption>
                <strong>Muhammad Aiman</strong>
                <span>Software Developer · Malaysia</span>
              </figcaption>
            </figure>
          </AnimatedContent>
        </div>
        <AnimatedContent className="hero-disciplines" staggerIndex={3}>
          <span>Full-stack development</span>
          <Asterisk aria-hidden="true" />
          <span>Enterprise systems</span>
          <Asterisk aria-hidden="true" />
          <span>AI-assisted workflows</span>
          <a
            href="#about"
            className="hero-scroll"
            aria-label="Explore about me"
          >
            <ArrowDown size={20} />
          </a>
        </AnimatedContent>
        <AnimatedContent className="hero-complementary" staggerIndex={4}>
          <p className="section-label" id="complementary-capabilities-heading">
            Complementary capabilities
          </p>
          <ul aria-labelledby="complementary-capabilities-heading">
            {complementaryCapabilities.map((capability) => (
              <li key={capability}>
                <Asterisk size={16} aria-hidden="true" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}
