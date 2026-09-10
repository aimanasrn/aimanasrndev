import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import SplitText from "@/components/SplitText"

const capabilityGroups = [
  {
    title: "Frontend",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Vue.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    tools: [
      "Laravel",
      "Inertia.js",
      "Node.js",
      "Express.js",
      "PHP",
      "RESTful APIs",
      "C",
      "C#",
    ],
  },
  {
    title: "Database",
    tools: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "DB2", "SQL"],
  },
  {
    title: "Testing & tools",
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
] as const

export function ExpertiseSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-[#C7D5E2]/10 py-20 lg:py-32"
    >
      <PageContainer>
        <SplitText
          text="Capabilities"
          tag="p"
          splitType="words"
          textAlign="left"
          delay={24}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="text-xs tracking-[0.35em] text-[#9CAFC3] uppercase"
        />
        <BlurText
          id="capabilities-heading"
          text="Tools chosen for the work at hand."
          tag="h2"
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.8}
          threshold={0.1}
          className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {capabilityGroups.map((group, index) => (
            <AnimatedContent
              key={group.title}
              distance={42}
              duration={0.8}
              delay={index * 0.08}
              threshold={0.08}
              className="h-full"
            >
              <article className="group flex h-full min-h-64 flex-col rounded-[1.75rem] border border-[#C7D5E2]/15 bg-[#0E1B2A] p-7 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#4CC9F0]/45 hover:bg-[#102A43] hover:shadow-[0_22px_60px_rgba(0,0,0,0.2)] motion-reduce:transform-none sm:p-9">
                <span
                  className="size-2 rounded-full bg-[#4CC9F0] opacity-70 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.035em] text-[#F4F7FB] transition-colors group-hover:text-[#4CC9F0] sm:text-3xl">
                  {group.title}
                </h3>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-[#C7D5E2]/18 bg-[#07111F]/60 px-3 py-1.5 text-sm text-[#C7D5E2] transition-colors group-hover:border-[#4CC9F0]/25 group-hover:text-[#F4F7FB]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
