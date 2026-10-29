import { Code2, Database, Monitor, Wrench } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"

const groups = [
  {
    title: "Frontend",
    icon: Monitor,
    tools: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vue.js",
      "Nuxt",
      "Angular",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    tools: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Inertia.js",
      "RESTful APIs",
      "C",
      "C#",
    ],
  },
  {
    title: "Database",
    icon: Database,
    tools: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "DB2", "SQL"],
  },
  {
    title: "Testing & tools",
    icon: Wrench,
    tools: [
      "Playwright",
      "Vitest",
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "AI-assisted development",
    ],
  },
]

export function ExpertiseSection() {
  return (
    <section
      id="capabilities"
      className="section"
      aria-labelledby="capabilities-heading"
    >
      <PageContainer>
        <SectionHeading
          id="capabilities-heading"
          label="04 / Capabilities"
          description="Tools chosen for the work at hand."
        >
          The right skills.
          <br />
          For the right solution<span className="yellow-dot">.</span>
        </SectionHeading>
        <div className="capability-grid">
          {groups.map(({ title, icon: Icon, tools }, index) => (
            <AnimatedContent
              as="article"
              className="capability"
              key={title}
              staggerIndex={index}
            >
              <div className="capability-top">
                <span className="capability-icon">
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <ul className="tag-list">
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </AnimatedContent>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
