import {
  Bot,
  ClipboardList,
  Code2,
  Compass,
  Rocket,
  ShieldCheck,
} from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"

const steps = [
  {
    title: "Business requirement",
    text: "Understand the goal, users and constraints.",
    icon: ClipboardList,
  },
  {
    title: "AI-assisted research",
    text: "Explore options and prior art quickly.",
    icon: Bot,
  },
  {
    title: "Architecture & planning",
    text: "Shape the data, flows and interfaces.",
    icon: Compass,
  },
  {
    title: "Human-reviewed development",
    text: "Every line reviewed and owned by me.",
    icon: Code2,
  },
  {
    title: "Testing & validation",
    text: "Security, edge cases and real devices.",
    icon: ShieldCheck,
  },
  {
    title: "Production deployment",
    text: "Ship, monitor and support.",
    icon: Rocket,
  },
]

export function StackSection() {
  return (
    <section
      id="workflow"
      className="section"
      aria-labelledby="workflow-heading"
    >
      <PageContainer>
        <SectionHeading
          id="workflow-heading"
          label="How I work"
          description="AI supports research, prototyping, code generation and documentation. Engineering judgment, security and testing stay developer-controlled."
        >
          AI-assisted.
          <br />
          <span className="text-gradient">Human-led.</span>
        </SectionHeading>

        <ol className="workflow">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <AnimatedContent
              as="li"
              key={title}
              className="card workflow-step"
              staggerIndex={index}
              data-spotlight
            >
              <div className="workflow-step-top">
                <span className="card-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="workflow-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </AnimatedContent>
          ))}
        </ol>
      </PageContainer>
    </section>
  )
}
