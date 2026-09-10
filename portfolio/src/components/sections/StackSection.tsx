import { useState } from "react"
import { RotateCcw, Sparkles } from "lucide-react"
import FallingText from "@/components/FallingText"
import { PageContainer } from "@/components/PageContainer"
import AnimatedContent from "@/components/AnimatedContent"

const technologies = [
  ["Java", "java", "#5382A1"],
  ["Spring Boot", "spring", "#6DB33F"],
  ["React", "react", "#087EA4"],
  ["Vue", "vuejs", "#42B883"],
  ["Angular", "angular", "#DD0031"],
  ["TypeScript", "typescript", "#3178C6"],
  ["Next.js", "nextjs", "#202020"],
  ["Node.js", "nodejs", "#339933"],
  ["Laravel", "laravel", "#FF2D20"],
  ["PHP", "php", "#777BB4"],
  ["PostgreSQL", "postgresql", "#336791"],
  ["MySQL", "mysql", "#00758F"],
  ["SQLite", "sqlite", "#0F80CC"],
  ["Supabase", "supabase", "#3ECF8E"],
  ["Tailwind CSS", "tailwindcss", "#0EA5E9"],
  ["Vite", "vitejs", "#646CFF"],
  ["C", "c", "#3949AB"],
].map(([name, slug, color]) => ({
  name,
  color,
  icon: (
    <img
      src={`/stack/${slug}.svg`}
      alt=""
      width={28}
      height={28}
      draggable={false}
      className="size-7 shrink-0 rounded bg-white/95 p-0.5"
    />
  ),
}))

export function StackSection() {
  const [replay, setReplay] = useState(0)
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-t border-[#C7D5E2]/10 bg-[#07111F] py-20 sm:py-24 lg:py-28"
    >
      <PageContainer>
        <AnimatedContent distance={28} duration={0.7}>
          <p className="font-mono text-xs tracking-[0.22em] text-[#4CC9F0] uppercase">
            Tools of my trade
          </p>
          <h2
            id="stack-heading"
            className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          >
            The stack I build with.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#9CAFC3] sm:text-lg">
            From interfaces to databases, the technologies behind my projects.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[#C7D5E2]/15 bg-[#0B1726] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-12">
            <div className="flex items-center justify-between gap-4 border-b border-[#C7D5E2]/10 px-5 py-5 sm:px-8">
              <p className="text-sm text-[#9CAFC3]">
                <span className="hidden sm:inline">
                  Hover to drop. Drag to explore.
                </span>
                <span className="sm:hidden">Tap to drop the stack.</span>
              </p>
              <button
                type="button"
                onClick={() => setReplay((value) => value + 1)}
                className="inline-flex items-center gap-2 rounded-full border border-[#4CC9F0]/30 px-4 py-2 text-sm text-[#4CC9F0] transition-colors hover:bg-[#4CC9F0]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0] motion-reduce:hidden"
              >
                <RotateCcw className="size-4" aria-hidden="true" /> Replay
              </button>
            </div>
            <div className="h-[540px] bg-[radial-gradient(ellipse_at_top,rgba(76,201,240,0.07),transparent_70%)] sm:h-[420px]">
              <FallingText key={replay} items={technologies} trigger="hover" />
            </div>
          </div>
          <AnimatedContent
            distance={32}
            duration={0.8}
            threshold={0.08}
            className="mt-8 sm:mt-10"
          >
            <article className="rounded-3xl border border-[#4CC9F0]/25 bg-[#0E1B2A]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-9">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#4CC9F0]/30 bg-[#4CC9F0]/10 text-[#4CC9F0]">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#4CC9F0] uppercase">
                    AI-assisted development
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[#F4F7FB] sm:text-4xl">
                    A faster, human-reviewed way to deliver.
                  </h3>
                </div>
              </div>
              <ol className="ai-workflow mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                {[
                  "Business requirement",
                  "AI-assisted research",
                  "Architecture & planning",
                  "Human-reviewed development",
                  "Testing & validation",
                  "Production deployment",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="group/step flex items-start gap-3 rounded-2xl border border-[#C7D5E2]/12 bg-[#07111F]/60 p-4 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#4CC9F0]/60 hover:bg-[#12304A] hover:shadow-[0_12px_28px_rgba(76,201,240,0.12)] motion-reduce:transform-none"
                  >
                    <span className="font-mono text-xs text-[#4CC9F0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-[#C7D5E2] transition-colors group-hover/step:text-[#F4F7FB]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 max-w-4xl text-sm leading-7 text-[#9CAFC3] sm:text-base">
                AI supports requirement analysis, ideation, prototyping, code
                generation, debugging and documentation. Engineering judgment,
                security validation and testing remain developer-controlled.
              </p>
            </article>
          </AnimatedContent>
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}
