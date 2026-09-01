import { PageContainer } from "@/components/PageContainer"

const workItems = [
  "Brand systems",
  "Digital products",
  "Experiments",
  "Motion studies",
]

export function WorkSection() {
  return (
    <section
      id="projects"
      className="min-h-[70vh] border-t border-[#C7D5E2]/10 py-20 lg:py-32"
    >
      <PageContainer>
        <p className="text-xs tracking-[0.35em] text-[#9CAFC3] uppercase">
          03 · Work
        </p>
        <h2 className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl">
          Selected work.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {workItems.map((item, index) => (
            <article
              key={item}
              className="group flex min-h-44 flex-col justify-between rounded-2xl border border-[#C7D5E2]/12 bg-[#0E1B2A]/80 p-6 transition-colors hover:border-[#4CC9F0]/70 hover:bg-[#102A43]"
            >
              <span className="text-xs text-[#9CAFC3]/70">0{index + 1}</span>
              <h3 className="text-2xl tracking-[-0.03em] transition-colors group-hover:text-[#4CC9F0]">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
