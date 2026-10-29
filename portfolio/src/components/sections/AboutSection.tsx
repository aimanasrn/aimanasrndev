import { BriefcaseBusiness, Check, Download, Settings2 } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import AnimatedContent from "@/components/AnimatedContent"

const background = [
  "Software developer",
  "Government systems experience",
  "Fintech platform experience",
  "Responsive web application development",
  "Independently developed digital products",
]
const approach = [
  "Translating business requirements into practical software",
  "Improving user experiences",
  "Using AI-assisted development to accelerate delivery",
  "Maintaining engineering quality",
]

export function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <PageContainer>
        <AnimatedContent as="p" className="section-label">
          01 / About me
        </AnimatedContent>
        <div className="about-layout">
          <AnimatedContent className="about-intro">
            <h2 id="about-heading">
              A developer’s mind.
              <br />
              <span className="underline-yellow">A builder’s heart.</span>
            </h2>
            <p>
              I’m a Malaysian software developer who enjoys building practical
              software that solves real problems. I’ve worked across government
              systems, fintech and independent products, turning business
              requirements into reliable, user-friendly solutions.
            </p>
            <a
              className="button button-dark"
              href="/Muhammad%20Aiman%20Bin%20Kanasronsham_resume.pdf"
              download="Muhammad Aiman Bin Kanasronsham_resume.pdf"
            >
              <Download size={18} aria-hidden="true" />
              Download resume
            </a>
          </AnimatedContent>
          {[
            {
              title: "Professional background",
              icon: BriefcaseBusiness,
              items: background,
            },
            { title: "Working approach", icon: Settings2, items: approach },
          ].map(({ title, icon: Icon, items }, index) => (
            <AnimatedContent
              className="about-list"
              key={title}
              staggerIndex={index + 1}
            >
              <h3>
                <span className="small-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <span className="check-icon">
                      <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
