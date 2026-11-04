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
] as const

// Logos that are drawn in black and need inverting on dark backgrounds.
const monochrome = new Set(["nextjs"])

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {technologies.map(([name, slug]) => (
        <li key={slug}>
          <img
            src={`/stack/${slug}.svg`}
            alt=""
            width={22}
            height={22}
            loading="lazy"
            draggable={false}
            data-invert={monochrome.has(slug) || undefined}
          />
          {name}
        </li>
      ))}
    </ul>
  )
}

export function TechMarquee() {
  return (
    <div className="marquee" role="group" aria-label="Technologies I work with">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
