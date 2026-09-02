import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import type { Project } from "@/components/projects/ProjectCard"
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"
import SplitText from "@/components/SplitText"

const projects = [
  {
    name: "SoftSpend",
    category: "Full-Stack",
    status: "Live",
    year: 2026,
    capabilities: [
      "Spending overview",
      "Budget progress",
      "Expense categories",
      "Transaction management",
    ],
    technologies: ["React", "Vite", "Supabase"],
    image: "/projects/softspend.png",
    imageAlt:
      "SoftSpend dashboard showing spending, budget progress, savings, and expense categories",
    imageWidth: 1920,
    imageHeight: 1080,
  },
  {
    name: "Nova Invoice",
    category: "Full-Stack Project",
    year: 2026,
    capabilities: [
      "Invoice builder",
      "Client analytics",
      "Business profiles",
      "PDF export",
      "Cascading database relationships",
    ],
    technologies: [
      "Laravel 11",
      "Inertia.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "SQLite",
      "jsPDF",
    ],
    image: "/projects/novainvoice.png",
    imageAlt:
      "Nova Invoice interface showing its dashboard, invoice builder, client directory, and PDF output",
    imageWidth: 2752,
    imageHeight: 1536,
  },
  {
    name: "KOPERAT",
    category: "Client Project",
    year: 2026,
    capabilities: [
      "Corporate information",
      "Property listings",
      "Services",
      "FAQ",
      "Testimonials",
      "WhatsApp CTA",
    ],
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/koperat.png",
    imageAlt:
      "KOPERAT corporate property website showing housing projects, company information, testimonials, and contact options",
    imageWidth: 1536,
    imageHeight: 1024,
  },
  {
    name: "Al-Fahmu Learning Centre",
    category: "Frontend",
    status: "Client Project",
    year: 2026,
    capabilities: [
      "Programme information",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
    ],
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/projects/alfahmulc.png",
    imageAlt:
      "Al-Fahmu Learning Centre website showing its programmes, learning approach, contact form, and WhatsApp enquiry option",
    imageWidth: 1672,
    imageHeight: 941,
  },
] as const satisfies readonly Project[]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-x-clip border-t border-[#C7D5E2]/10 bg-[#07111F] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <PageContainer>
        <div className="max-w-3xl">
          <SplitText
            text="04 / Selected Projects"
            tag="p"
            splitType="words"
            textAlign="left"
            delay={24}
            duration={1}
            threshold={0.1}
            rootMargin="0px"
            className="font-mono text-xs tracking-[0.22em] text-[#4CC9F0] uppercase"
          />

          <BlurText
            text="Projects I’ve Built"
            tag="h2"
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.8}
            threshold={0.1}
            className="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          />

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#9CAFC3] sm:text-lg sm:leading-8">
            Four products shaped around clear problems, thoughtful interfaces,
            and dependable engineering.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-12 xl:mt-14">
          <ProjectShowcase projects={projects} />
        </div>
      </PageContainer>
    </section>
  )
}
