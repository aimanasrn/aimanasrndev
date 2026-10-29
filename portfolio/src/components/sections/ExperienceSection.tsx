import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"

const experience = [
  {
    number: "01",
    period: "Current",
    project: "Jabatan Pendaftaran Negara project environment",
    role: "Mainframe Backend Developer",
    company: "Infomina Berhad",
    description:
      "Developing and maintaining backend systems while supporting production enhancements and delivery coordination.",
    skills: ["C", "SQL", "DB2", "CICS", "Data migration"],
  },
  {
    number: "02",
    period: "Previous role",
    project: "E-Vetting 3.0 · Chief Government Security Office Malaysia",
    role: "Frontend Developer",
    company: "Fotia Solutions Sdn. Bhd.",
    description:
      "Delivered responsive Angular interfaces, API integration and usability improvements for a government-grade application.",
    skills: ["Angular", "REST APIs", "Responsive UI"],
  },
  {
    number: "03",
    period: "Previous role",
    project: "Fintech and e-commerce workflows",
    role: "Full-Stack Developer",
    company: "ToyyibPay Sdn. Bhd.",
    description:
      "Built product features across web and mobile, including payment-related workflows and delivery-platform functionality.",
    skills: ["Vue.js", "React", "React Native", "Node.js", "PHP", "MySQL"],
  },
  {
    number: "04",
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
  return (
    <section
      id="experience"
      className="section section-ruled"
      aria-labelledby="experience-heading"
    >
      <PageContainer>
        <SectionHeading
          id="experience-heading"
          label="02 / The journey"
          description="Government systems, fintech products, and everything in between."
        >
          Built on real-world
          <br />
          experience<span className="yellow-dot">.</span>
        </SectionHeading>
        <ol className="experience-list">
          {experience.map((item, index) => (
            <AnimatedContent
              as="li"
              key={item.company}
              className="experience-row"
              staggerIndex={index}
            >
              <span className="experience-number">
                {item.number}
                <span aria-hidden="true" />
              </span>
              <article>
                <p className="experience-project">{item.project}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-description">{item.description}</p>
                <ul className="tag-list">
                  {item.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
              <span
                className="experience-period"
                data-current={item.period === "Current" || undefined}
              >
                {item.period === "Current" && <span aria-hidden="true" />}
                {item.period}
              </span>
            </AnimatedContent>
          ))}
        </ol>
      </PageContainer>
    </section>
  )
}
