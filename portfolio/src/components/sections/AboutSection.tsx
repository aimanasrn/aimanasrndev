import {
  BriefcaseBusiness,
  Check,
  Download,
  Rocket,
  Settings2,
  Sparkles,
} from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"
import { CountUp } from "@/components/CountUp"

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
const stats = [
  {
    value: 4,
    suffix: "",
    label: "Engineering roles across government & fintech",
  },
  { value: 6, suffix: "", label: "Products shipped and featured below" },
  { value: 19, suffix: "+", label: "Technologies in my everyday toolkit" },
]

export function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <PageContainer>
        <SectionHeading
          id="about-heading"
          label="About me"
          description="Practical software for real problems, built with care from first idea to final handover."
        >
          A developer’s mind.
          <br />
          <span className="text-gradient">A builder’s heart.</span>
        </SectionHeading>

        <div className="bento about-bento">
          <AnimatedContent className="card about-intro" data-spotlight>
            <span className="card-icon">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <p className="about-intro-text">
              I’m a Malaysian software developer who enjoys building practical
              software that solves real problems. I’ve worked across{" "}
              <strong>government systems</strong>, <strong>fintech</strong> and{" "}
              <strong>independent products</strong>, turning business
              requirements into reliable, user-friendly solutions.
            </p>
            <a
              className="button button-dark"
              href="/Muhammad%20Aiman%20Bin%20Kanasronsham_resume.pdf"
              download="Muhammad Aiman Bin Kanasronsham_resume.pdf"
            >
              <Download size={17} aria-hidden="true" />
              Download resume
            </a>
          </AnimatedContent>

          <AnimatedContent
            className="card about-stats"
            staggerIndex={1}
            data-spotlight
          >
            {stats.map(({ value, suffix, label }) => (
              <div className="stat" key={label}>
                <span className="stat-value">
                  <CountUp to={value} />
                  {suffix}
                </span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
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
              className="card about-list"
              key={title}
              staggerIndex={index + 2}
              data-spotlight
            >
              <h3>
                <span className="card-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          ))}

          <AnimatedContent
            className="card about-cta"
            staggerIndex={4}
            data-spotlight
          >
            <Rocket size={20} aria-hidden="true" />
            <p>
              Have a website or system in mind?
              <a href="/services">See services & pricing →</a>
            </p>
          </AnimatedContent>
        </div>
      </PageContainer>
    </section>
  )
}
