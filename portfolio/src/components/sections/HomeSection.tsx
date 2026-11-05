import type { ReactNode } from "react"
import { ArrowDown, ArrowUpRight, MapPin, MessageCircle } from "lucide-react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import { PageContainer } from "@/components/PageContainer"
import RotatingText from "@/components/RotatingText"
import { TechMarquee } from "@/components/TechMarquee"
import { business } from "@/content/business"

const heroWords = ["software.", "websites.", "web apps.", "systems."]
const ease = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function Portrait() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 160,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 160,
    damping: 18,
  })

  return (
    <motion.div
      className="hero-portrait"
      style={reduceMotion ? undefined : { rotateX, rotateY }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left) / rect.width - 0.5)
        y.set((event.clientY - rect.top) / rect.height - 0.5)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <div className="hero-portrait-frame">
        <img
          src="/aimanasrndevprofile.webp"
          alt="Muhammad Aiman, software developer based in Malaysia"
          width={1254}
          height={1254}
          fetchPriority="high"
        />
        <div className="hero-portrait-caption">
          <div>
            <strong>Muhammad Aiman</strong>
            <span>Software Developer</span>
          </div>
          <span className="hero-portrait-location">
            <MapPin size={13} aria-hidden="true" />
            Malaysia
          </span>
        </div>
      </div>
      <div className="hero-chip hero-chip-top" aria-hidden="true">
        <span className="hero-chip-icon">✦</span>
        Available for freelance
      </div>
      <div className="hero-chip hero-chip-bottom" aria-hidden="true">
        <span className="hero-chip-code">{"</>"}</span>
        Full-stack · Enterprise
      </div>
    </motion.div>
  )
}

export function HomeSection() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>
      <PageContainer>
        <div className="hero-layout">
          <div className="hero-copy">
            <Reveal>
              <span
                className="availability-badge"
                title="Open to full-time or contract opportunities"
              >
                <span className="availability-dot" aria-hidden="true" />
                Open to work
                <span className="availability-divider" aria-hidden="true" />
                <span className="availability-muted">Full-time & contract</span>
              </span>
            </Reveal>

            <h1
              id="hero-heading"
              aria-label="Good ideas. Great software, websites, web apps, and systems."
            >
              <Reveal delay={0.08}>
                <span aria-hidden="true">Good ideas.</span>
              </Reveal>
              <Reveal delay={0.18}>
                <span className="hero-highlight" aria-hidden="true">
                  <span>Great</span>
                  <span className="hero-rotating-slot">
                    {heroWords.map((word) => (
                      <span className="hero-rotating-sizer" key={word}>
                        {word}
                      </span>
                    ))}
                    <RotatingText
                      texts={heroWords}
                      mainClassName="hero-rotating-text"
                      splitBy="characters"
                      effect="blur"
                      staggerDuration={0.025}
                      rotationInterval={2600}
                      pauseOnHover
                    />
                  </span>
                </span>
              </Reveal>
            </h1>

            <Reveal delay={0.28}>
              <p className="hero-lede">
                I’m Aiman, a software developer based in Malaysia. I turn
                complex challenges into thoughtful digital experiences — from
                the first idea to the final line of code.
              </p>
            </Reveal>

            <Reveal delay={0.38} className="hero-actions">
              <a
                className="button button-dark"
                href={business.whatsappUrl || "#contact"}
              >
                <MessageCircle size={17} aria-hidden="true" />
                Let’s discuss your project
              </a>
              <a className="button button-outline" href="#projects">
                View selected work
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={0.46}>
              <p className="hero-hiring">
                Hiring for your team? <a href="#contact">Let’s talk →</a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hero-media">
            <Portrait />
          </Reveal>
        </div>
      </PageContainer>

      <Reveal delay={0.55} className="hero-marquee">
        <p className="hero-marquee-label">Tools I build with</p>
        <TechMarquee />
      </Reveal>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
