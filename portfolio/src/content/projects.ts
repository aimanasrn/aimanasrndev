import projectMedia from "virtual:project-media"

export interface ProjectMedia {
  type: "image" | "video"
  src: string
}

export interface ProjectStep {
  title: string
  detail: string
}

export interface Project {
  /** Used in the URL: /projects/<slug> */
  slug: string
  name: string
  category: string
  status?: string
  year: number
  /** One sentence for the project card. */
  summary: string
  /** Longer overview for the project page. */
  description: string
  /** How the project works, step by step. */
  flow: readonly ProjectStep[]
  technologies: readonly string[]
  plannedEnhancements?: readonly string[]
  github?: string
  website?: string
  /**
   * Folder inside public/projects holding the screenshots and videos.
   * Defaults to the slug. Everything in it is shown in the gallery: videos
   * first, then images, each sorted by file name. The first image is the
   * card cover. Prefix files with numbers (1-home.webp, 2-cart.webp) to
   * control the order.
   */
  imageFolder?: string
  /** Describes the cover image for screen readers. */
  imageAlt: string
}

export const projects: readonly Project[] = [
  {
    slug: "didikflow",
    name: "DidikFlow",
    category: "Education Management SaaS",
    year: 2026,
    summary:
      "A central workspace for tuition centres to manage students, classes, invoices, and QR attendance.",
    description:
      "DidikFlow is an education management SaaS platform that helps tuition centres manage students, teachers, classes, invoices, and QR-based attendance in one place, with role-based access, bilingual support, and light and dark themes.",
    flow: [
      {
        title: "Set up the centre",
        detail:
          "Admins add teachers, students, and classes, and give each person a role that controls what they can see and do.",
      },
      {
        title: "Run classes",
        detail:
          "Attendance is taken with QR check-in, so every class keeps an up-to-date register.",
      },
      {
        title: "Bill and collect",
        detail:
          "Invoices are created and tracked per student, so outstanding fees are always visible.",
      },
      {
        title: "Follow the numbers",
        detail:
          "The dashboard sums up active students, today's classes, attendance rate, and outstanding fees.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase PostgreSQL",
    ],
    plannedEnhancements: [
      "Organisation categories for home tutors and similar education providers",
    ],
    imageAlt:
      "DidikFlow dashboard showing active students, today's classes, attendance rate, outstanding fees, and tuition centre navigation",
  },
  {
    slug: "studymart",
    name: "StudyMart",
    category: "E-commerce Platform",
    // TODO: confirm the year.
    year: 2026,
    summary:
      "A stationery shop for students, with category browsing, live stock, a saved cart, and an admin catalogue.",
    description:
      "StudyMart sells pens, notebooks, art supplies, and workbooks from its own range. Students browse by category, check what's in stock, and keep their picks in a cart saved to their account, while admins manage products and categories from a separate dashboard.",
    flow: [
      {
        title: "Browse essentials",
        detail:
          "Students explore stationery by category, with prices in RM and stock shown for each item.",
      },
      {
        title: "Create an account",
        detail:
          "Signing up keeps the cart saved to the account, so picks are still there next visit.",
      },
      {
        title: "Manage the catalogue",
        detail:
          "Admins add and edit products and organise them into categories, each showing how many products it holds.",
      },
    ],
    // TODO: add the tech stack.
    technologies: [],
    github: "https://github.com/aimanasrn/coe-aimanasrn",
    imageFolder: "StudyMart",
    imageAlt:
      "StudyMart home page with the headline 'Everything you need for every chapter' and a featured notebook and pen",
  },
  {
    slug: "suka-room-homestay",
    name: "Suka Room & Homestay",
    category: "Booking Platform",
    year: 2026,
    summary:
      "A bilingual booking platform for guests to find accommodation, check availability, and enquire about their stay.",
    description:
      "Suka Room & Homestay is a bilingual (BM/EN) booking website. Guests compare rooms and check dates, while the owner manages bookings, payments, and invoices from an admin area.",
    flow: [
      {
        title: "Explore the stay",
        detail:
          "Guests browse accommodation options in Bahasa Melayu or English.",
      },
      {
        title: "Check dates",
        detail:
          "An availability calendar shows which dates are open before guests get in touch.",
      },
      {
        title: "Enquire",
        detail: "Guests send booking enquiries straight to WhatsApp.",
      },
      {
        title: "Manage bookings",
        detail:
          "Admins confirm bookings, record payments, and generate PDF invoices.",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    imageAlt:
      "Suka Room & Homestay website showing accommodation options, availability search, and bilingual navigation",
  },
  {
    slug: "softspend",
    name: "SoftSpend",
    category: "Expense Tracker",
    status: "Live",
    year: 2026,
    summary:
      "A clear view of everyday spending, budget progress, and transactions, organised in one dashboard.",
    description:
      "SoftSpend is a personal finance app that turns everyday transactions into a clear picture of spending, budgets, and savings.",
    flow: [
      {
        title: "Record transactions",
        detail: "Add income and expenses, each tagged with a category.",
      },
      {
        title: "Set budgets",
        detail:
          "Track how much of each budget has been used as the month goes on.",
      },
      {
        title: "Review spending",
        detail:
          "The dashboard breaks spending down by category and shows budget progress at a glance.",
      },
    ],
    technologies: ["React", "Vite", "Supabase"],
    imageAlt:
      "SoftSpend dashboard showing spending, budget progress, savings, and expense categories",
  },
  {
    slug: "nova-invoice",
    name: "Nova Invoice",
    category: "Invoice Management",
    year: 2026,
    summary:
      "An invoicing workspace with client management, business profiles, and PDF exports to keep billing organised.",
    description:
      "Nova Invoice is a full-stack invoicing workspace. Businesses keep their profiles and clients in one place, build invoices, and export them as PDFs, with related records kept in sync through cascading database relationships.",
    flow: [
      {
        title: "Set up a business profile",
        detail: "Add the business details that appear on every invoice.",
      },
      {
        title: "Add clients",
        detail: "Keep a client directory with analytics for each client.",
      },
      {
        title: "Build the invoice",
        detail: "Put together each invoice in the invoice builder.",
      },
      {
        title: "Export and track",
        detail: "Download the invoice as a PDF and follow its status.",
      },
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
    imageAlt:
      "Nova Invoice dashboard, invoice builder, client directory, and PDF output",
  },
  {
    slug: "koperat",
    name: "KOPERAT",
    category: "Corporate Website",
    status: "Client Project",
    year: 2026,
    summary:
      "A corporate property website connecting visitors with housing projects, company information, and WhatsApp enquiries.",
    description:
      "KOPERAT is a corporate website for a property developer. It presents the company, its housing projects, and its services, and turns interested visitors into WhatsApp enquiries.",
    flow: [
      {
        title: "Meet the company",
        detail: "Visitors learn about the company and the services it offers.",
      },
      {
        title: "Browse properties",
        detail: "Visitors browse the housing projects on offer.",
      },
      {
        title: "Build trust",
        detail: "FAQs and testimonials answer common questions.",
      },
      {
        title: "Get in touch",
        detail: "A WhatsApp button opens a chat with the company in one tap.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "Vite"],
    imageAlt:
      "KOPERAT property website showing housing projects, company information, testimonials, and contact options",
  },
  {
    slug: "al-fahmu-learning-centre",
    name: "Al-Fahmu Learning Centre",
    category: "Learning Centre Website",
    status: "Client Project",
    year: 2026,
    summary:
      "A responsive learning centre website bringing programmes, teaching information, and enrolment enquiries together.",
    description:
      "A responsive website for Al-Fahmu Learning Centre that explains its programmes and teaching approach and makes it easy for parents to enquire.",
    flow: [
      {
        title: "Explore programmes",
        detail: "Parents see the programmes on offer and who they are for.",
      },
      {
        title: "Understand the approach",
        detail: "The site explains how the centre teaches.",
      },
      {
        title: "Enquire",
        detail: "Parents reach the centre through a contact form or WhatsApp.",
      },
    ],
    technologies: ["React", "Tailwind CSS", "Vite"],
    imageAlt:
      "Al-Fahmu Learning Centre website showing programmes, learning approach, contact form, and WhatsApp option",
  },
]

export function getProjectMedia(project: Project): readonly ProjectMedia[] {
  return projectMedia[project.imageFolder ?? project.slug] ?? []
}

export function getProjectImages(project: Project): readonly string[] {
  return getProjectMedia(project)
    .filter((item) => item.type === "image")
    .map((item) => item.src)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const projectPath = (project: Project) => `/projects/${project.slug}`

/** Returns the slug for /projects/<slug>, or null for any other path. */
export function getProjectSlug(pathname: string) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}
