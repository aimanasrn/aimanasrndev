import { Code2, Database, Monitor, Wrench } from "lucide-react"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import AnimatedContent from "@/components/AnimatedContent"

const groups = [
  {
    title: "Frontend",
    blurb: "Interfaces that feel fast, clear and accessible.",
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
    blurb: "APIs and services built to be dependable.",
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
    blurb: "Data models that stay sane as products grow.",
    icon: Database,
    tools: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "DB2", "SQL"],
  },
  {
    title: "Testing & tools",
    blurb: "Quality checks and delivery, from laptop to production.",
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
          label="Capabilities"
          description="Tools chosen for the work at hand — not the other way around."
        >
          The right skills.
          <br />
          For the right solution<span className="accent-dot">.</span>
        </SectionHeading>
        <div className="capability-grid">
          {groups.map(({ title, blurb, icon: Icon, tools }, index) => (
            <AnimatedContent
              as="article"
              className="card capability"
              key={title}
              staggerIndex={index}
              data-spotlight
            >
              <div className="capability-top">
                <span className="card-icon card-icon-lg">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="capability-count">{tools.length} tools</span>
              </div>
              <h3>{title}</h3>
              <p>{blurb}</p>
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
