import { useState } from "react"
import { ArrowRight, RotateCcw } from "lucide-react"
import FallingText from "@/components/FallingText"
import StarBorder from "@/components/StarBorder"
import { PageContainer } from "@/components/PageContainer"
import AnimatedContent from "@/components/AnimatedContent"

const technologies = [
  ["React", "react"],
  ["Next.js", "nextjs"],
  ["TypeScript", "typescript"],
  ["Vite", "vitejs"],
  ["Tailwind CSS", "tailwindcss"],
  ["Vue", "vuejs"],
  ["Nuxt", "nuxtjs"],
  ["Angular", "angular"],
  ["Node.js", "nodejs"],
  ["Java", "java"],
  ["Spring Boot", "spring"],
  ["PHP", "php"],
  ["Laravel", "laravel"],
  ["C", "c"],
  ["PostgreSQL", "postgresql"],
  ["Supabase", "supabase"],
  ["MySQL", "mysql"],
  ["SQLite", "sqlite"],
  ["Docker", "docker"],
].map(([name, slug]) => ({
  name,
  icon: (
    <img
      src={`/stack/${slug}.svg`}
      alt=""
      width={28}
      height={28}
      loading="lazy"
      draggable={false}
    />
  ),
}))

const steps = [
  "Business requirement",
  "AI-assisted research",
  "Architecture & planning",
  "Human-reviewed development",
  "Testing & validation",
  "Production deployment",
]

export function StackSection() {
  const [replay, setReplay] = useState(0)
  return (
    <section
      id="stack"
      className="section section-ruled stack-section"
      aria-labelledby="stack-heading"
    >
      <PageContainer>
        <AnimatedContent className="section-heading stack-heading">
          <p className="section-label">03 / The toolkit</p>
          <h2 id="stack-heading">
            Good tools. Better possibilities
            <span className="yellow-dot">.</span>
          </h2>
          <p className="section-description">
            From interfaces to databases, the technologies behind my projects.
          </p>
        </AnimatedContent>
        <AnimatedContent className="stack-playground" staggerIndex={1}>
          <div className="stack-playground-header">
            <p>
              <span className="stack-desktop-instruction">
                Hover to drop. Drag to explore.
              </span>
              <span className="stack-mobile-instruction">
                Tap to drop the stack.
              </span>
            </p>
            <StarBorder
              as="button"
              type="button"
              onClick={() => setReplay((value) => value + 1)}
              aria-label="Replay stack animation"
            >
              <RotateCcw size={14} aria-hidden="true" />
              Replay
            </StarBorder>
          </div>
          <div className="stack-chips">
            <FallingText key={replay} items={technologies} trigger="hover" />
          </div>
        </AnimatedContent>
      </PageContainer>
      <div className="workflow-band">
        <PageContainer>
          <AnimatedContent>
            <p className="section-label">My development workflow</p>
            <h3>AI-assisted. Human-led.</h3>
          </AnimatedContent>
          <ol className="ai-workflow">
            {steps.map((step, index) => (
              <AnimatedContent
                as="li"
                key={step}

                staggerIndex={index}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{step}</h4>
                {index < steps.length - 1 && <ArrowRight aria-hidden="true" />}
              </AnimatedContent>
            ))}
          </ol>
          <AnimatedContent as="p">
            AI supports requirement analysis, ideation, prototyping, code
            generation, debugging and documentation. Engineering judgment,
            security validation and testing remain developer-controlled.
          </AnimatedContent>
        </PageContainer>
      </div>
    </section>
  )
}
