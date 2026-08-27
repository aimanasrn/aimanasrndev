export function AboutSection() {
  return (
    <section
      id="about"
      className="grid min-h-[70vh] gap-10 border-t border-[#C7D5E2]/10 px-6 py-20 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-32"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-[#9CAFC3]">01 · About</p>
      <div>
        <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
          Curious by default, precise by choice.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9CAFC3]">
          I work across product design, front-end engineering, and motion to turn complex ideas into clear,
          memorable moments.
        </p>
      </div>
    </section>
  )
}
