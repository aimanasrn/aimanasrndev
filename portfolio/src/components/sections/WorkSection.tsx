const workItems = ["Brand systems", "Digital products", "Experiments", "Motion studies"]

export function WorkSection() {
  return (
    <section
      id="projects"
      className="grid min-h-[70vh] gap-10 border-t border-[#C7D5E2]/10 px-6 py-20 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-32"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-[#9CAFC3]">02 · Selected work</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {workItems.map((item, index) => (
          <article
            key={item}
            className="group flex min-h-44 flex-col justify-between rounded-2xl border border-[#C7D5E2]/12 bg-[#0E1B2A]/80 p-6 transition-colors hover:border-[#4CC9F0]/70 hover:bg-[#102A43]"
          >
            <span className="text-xs text-[#9CAFC3]/70">0{index + 1}</span>
            <h3 className="text-2xl tracking-[-0.03em] transition-colors group-hover:text-[#4CC9F0]">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
