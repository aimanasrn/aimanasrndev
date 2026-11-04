import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"

const experience = [
  {
    period: "Current",
    project: "Jabatan Pendaftaran Negara project environment",
    role: "Mainframe Backend Developer",
    company: "Infomina Berhad",
    description:
      "Developing and maintaining backend systems while supporting production enhancements and delivery coordination.",
    skills: ["C", "SQL", "DB2", "CICS", "Data migration"],
  },
  {
    period: "Previous role",
    project: "E-Vetting 3.0 · Chief Government Security Office Malaysia",
    role: "Frontend Developer",
    company: "Fotia Solutions Sdn. Bhd.",
    description:
      "Delivered responsive Angular interfaces, API integration and usability improvements for a government-grade application.",
    skills: ["Angular", "REST APIs", "Responsive UI"],
  },
  {
    period: "Previous role",
    project: "Fintech and e-commerce workflows",
    role: "Full-Stack Developer",
    company: "ToyyibPay Sdn. Bhd.",
    description:
      "Built product features across web and mobile, including payment-related workflows and delivery-platform functionality.",
    skills: ["Vue.js", "React", "React Native", "Node.js", "PHP", "MySQL"],
  },
  {
    period: "Previous role",
    project: "Government system development",
    role: "Mainframe Backend Developer",
    company: "HeiTech Padu Berhad",
    description:
      "Contributed to enterprise backend maintenance, support and knowledge sharing under SLA requirements.",
    skills: ["C", "SQL", "DB2", "CICS"],
  },
] as const

export function ExperienceSection() {
  const listRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <PageContainer>
        <SectionHeading
          id="experience-heading"
          label="Experience"
          description="Government systems, fintech products, and everything in between."
        >
          Built on real-world
          <br />
          experience<span className="accent-dot">.</span>
        </SectionHeading>

        <div className="timeline" ref={listRef}>
          <span className="timeline-rail" aria-hidden="true">
            <motion.span
              className="timeline-rail-fill"
              style={{ scaleY: reduceMotion ? 1 : progress }}
            />
          </span>
          <ol className="timeline-list">
            {experience.map((item, index) => {
              const current = item.period === "Current"
              return (
                <AnimatedContent
                  as="li"
                  key={item.company}
                  className="timeline-item"
                  staggerIndex={index % 2}
                >
                  <span
                    className="timeline-node"
                    data-current={current || undefined}
                    aria-hidden="true"
                  />
                  <article className="card timeline-card" data-spotlight>
                    <header>
                      <div>
                        <h3>{item.role}</h3>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      <span
                        className="timeline-period"
                        data-current={current || undefined}
                      >
                        {current && (
                          <span
                            className="availability-dot"
                            aria-hidden="true"
                          />
                        )}
                        {item.period}
                      </span>
                    </header>
                    <p className="timeline-project">{item.project}</p>
                    <p className="timeline-description">{item.description}</p>
                    <ul className="tag-list">
                      {item.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                </AnimatedContent>
              )
            })}
          </ol>
        </div>
      </PageContainer>
    </section>
  )
}
