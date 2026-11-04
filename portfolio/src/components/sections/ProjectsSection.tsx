import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import type { Project } from "@/components/projects/ProjectCard"
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"

const projects = [
  {
    name: "DidikFlow",
    category: "Education Management SaaS",
    showcaseCategory: "Education Management SaaS",
    summary:
      "A central workspace for tuition centres to manage students, classes, invoices, and QR attendance.",
    year: 2026,
    description:
      "DidikFlow is an education management SaaS platform built with Next.js, TypeScript, Tailwind CSS, and Supabase PostgreSQL. It helps tuition centres manage students, teachers, classes, invoices, and QR-based attendance through a centralised platform with role-based access, bilingual support, and light and dark themes.",
    capabilities: [
      "Student and teacher management",
      "Class management",
      "Invoice management",
      "QR-based attendance",
      "Role-based access",
      "Bilingual support",
      "Light and dark themes",
    ],
    plannedEnhancements: [
      "Organisation categories for home tutors and similar education providers",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase PostgreSQL",
    ],
    image: "/projects/didikflowdashboard.png",
    imageAlt:
      "DidikFlow education management dashboard showing active students, today's classes, attendance rate, outstanding fees, and tuition centre navigation",
    imageWidth: 1920,
    imageHeight: 1080,
  },
  {
    name: "Suka Room & Homestay",
    category: "Full-Stack Project",
    showcaseCategory: "Booking Platform",
    summary:
      "A bilingual booking platform for guests to find accommodation, check availability, and enquire about their stay.",
    year: 2026,
    capabilities: [
      "Bilingual BM/EN booking",
      "Accommodation availability calendar",
      "Admin booking management",
      "Payment records and PDF invoices",
      "WhatsApp enquiries",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    image: "/projects/sukaroomhomestay.png",
    imageAlt:
      "Suka Room & Homestay booking website showing accommodation options, availability search, and bilingual navigation",
    imageWidth: 1920,
    imageHeight: 1080,
  },
  {
    name: "SoftSpend",
    category: "Full-Stack",
    showcaseCategory: "Expense Tracker",
    summary:
      "A clear view of everyday spending, budget progress, and transactions, organised in one dashboard.",
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
    showcaseCategory: "Invoice Management",
    summary:
      "An invoicing workspace with client management, business profiles, and PDF exports to keep billing organised.",
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
    showcaseCategory: "Corporate Website",
    summary:
      "A corporate property website connecting visitors with housing projects, company information, and WhatsApp enquiries.",
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
    showcaseCategory: "Learning Centre Website",
    summary:
      "A responsive learning centre website bringing programmes, teaching information, and enrolment enquiries together.",
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
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <PageContainer className="projects-container">
        <SectionHeading
          id="projects-heading"
          label="Selected work"
          description="Six products shaped around clear problems, thoughtful interfaces, and dependable engineering."
        >
          Less talk.
          <br />
          <span className="text-gradient">More shipped.</span>
        </SectionHeading>

        <ProjectShowcase projects={projects} />
      </PageContainer>
    </section>
  )
}
