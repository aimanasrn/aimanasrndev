import { suppliedPackages, suppliedComparisons } from "./service-packages"

export interface ServicePackage {
  name: string
  price: number
  priceSuffix?: string
  description?: string
  recommended?: boolean
  timeline?: string
  features: readonly string[]
}

export interface PackageComparisonRow {
  label: string
  values: readonly string[]
}

export interface DevelopmentService {
  id: string
  name: string
  shortName: string
  icon: "link" | "rocket" | "business" | "building" | "shopping" | "system"
  startingPrice: number
  timeline: string
  summary: string
  description: string
  audience: readonly string[]
  benefits: readonly string[]
  packages?: readonly ServicePackage[]
  comparison?: readonly PackageComparisonRow[]
  notes?: readonly string[]
  technologies?: readonly string[]
}

export const formatRM = (amount: number) =>
  `RM${amount.toLocaleString("en-MY")}`

export const formatPackagePrice = (plan: ServicePackage) =>
  `${formatRM(plan.price)}${plan.priceSuffix ?? ""}`

// Package details are transcribed from the owner's brief and supplied package sheets.
export const developmentServices: readonly DevelopmentService[] = [
  {
    id: "link-bio",
    name: "Link Bio / Mini Website",
    shortName: "Link Bio",
    icon: "link",
    startingPrice: 199,
    timeline: "1–5 working days",
    summary:
      "Your personal brand, important links and contact details. One professional home online.",
    description:
      "A professional digital profile that puts your personal brand, important links, services and contact information in one convenient place.",
    audience: [
      "Sales agents",
      "Property agents",
      "Freelancers",
      "Content creators",
      "Small business owners",
    ],
    benefits: [
      "Make a professional first impression",
      "Keep your important links together",
      "Give people an easy way to get in touch",
    ],
    comparison: [
      { label: "Maximum links", values: ["5", "10", "15"] },
      {
        label: "Design",
        values: [
          "Template-based",
          "Customized branding",
          "Premium custom layout",
        ],
      },
      { label: "Revision rounds", values: ["1", "2", "3"] },
      {
        label: "Inquiry form & analytics",
        values: ["Not listed", "Not listed", "Included"],
      },
    ],
    packages: [
      {
        name: "Basic",
        description: "A simple, professional place to start.",
        price: 199,
        timeline: "1–2 working days",
        features: [
          "One-page mini website",
          "Template-based design",
          "Profile image, name and short bio",
          "Maximum 5 links",
          "WhatsApp contact button",
          "Social media links",
          "Mobile-responsive layout",
          "1 revision round",
        ],
      },
      {
        name: "Standard",
        description: "Your profile, with more of your brand.",
        recommended: true,
        price: 299,
        timeline: "2–3 working days",
        features: [
          "Everything in Basic",
          "Customized branding",
          "Maximum 10 links",
          "Hero section and professional introduction",
          "WhatsApp prefilled message",
          "Up to 3 product or service highlights",
          "Basic SEO metadata",
          "2 revision rounds",
        ],
      },
      {
        name: "Premium",
        description: "More room for your work and story.",
        price: 499,
        timeline: "3–5 working days",
        features: [
          "Everything in Standard",
          "Premium custom layout",
          "Maximum 15 links",
          "Smooth animations",
          "Portfolio or gallery section",
          "Testimonials",
          "Simple inquiry form",
          "Basic visitor analytics",
          "3 revision rounds",
        ],
      },
    ],
  },
  {
    id: "landing-page",
    name: "Landing Page",
    shortName: "Landing Page",
    icon: "rocket",
    startingPrice: 599,
    timeline: "3–10 working days",
    summary:
      "One focused page for your campaign, product or service. Built around a clear next step.",
    description:
      "High-converting landing pages designed to showcase your services, promote products and turn visitors into potential customers.",
    audience: [
      "Marketing campaigns",
      "Service providers",
      "Sales agents",
      "Local businesses",
      "Product promotions",
    ],
    benefits: [
      "Give your offer a clear focus",
      "Guide visitors towards an enquiry",
      "Support your next campaign or launch",
    ],
    packages: suppliedPackages["landing-page"],
    comparison: suppliedComparisons["landing-page"],
    notes: [
      "Prices cover development only. Domain, hosting and maintenance are charged separately.",
      "Package-specific delivery estimates are confirmed in your quotation.",
    ],
  },
  {
    id: "business-website",
    name: "Business Website",
    shortName: "Business",
    icon: "business",
    startingPrice: 1500,
    timeline: "5–7 working days to 3 weeks",
    summary:
      "A professional multi-page website that introduces your business and what you do best.",
    description:
      "Professional multi-page websites for SMEs and growing businesses, with a clear structure for your company, services and enquiries.",
    audience: [
      "Contractors & interior designers",
      "Property agencies",
      "Tuition & education",
      "Homestays & accommodation",
    ],
    benefits: [
      "Build a credible online presence",
      "Give your services room to shine",
      "Help customers find the information they need",
    ],
    packages: suppliedPackages["business-website"],
    comparison: suppliedComparisons["business-website"],
  },
  {
    id: "corporate-website",
    name: "Corporate Website",
    shortName: "Corporate",
    icon: "building",
    startingPrice: 3000,
    timeline: "2–6 weeks",
    summary:
      "A considered digital presence for established companies, organizations and their audiences.",
    description:
      "Professional corporate websites for established companies and organizations, shaped around your brand, content and stakeholders.",
    audience: [
      "Construction companies",
      "Consulting & professional services",
      "Technology & IT",
      "Logistics & manufacturing",
    ],
    benefits: [
      "Present your organization with confidence",
      "Make company information easy to explore",
      "Keep the experience aligned with your brand",
    ],
    packages: suppliedPackages["corporate-website"],
    comparison: suppliedComparisons["corporate-website"],
  },
  {
    id: "e-commerce",
    name: "E-Commerce Website",
    shortName: "E-Commerce",
    icon: "shopping",
    startingPrice: 3500,
    timeline: "2–7 weeks",
    summary:
      "An online store that connects product discovery, checkout and order management.",
    description:
      "Online stores featuring product catalogs, shopping carts, checkout and order management, with the scope shaped around your products and sales workflow.",
    audience: [
      "Fashion & hijab",
      "Beauty & skincare",
      "Gadgets & accessories",
      "Food & local products",
    ],
    benefits: [
      "Give your products a home online",
      "Connect browsing with a clear checkout journey",
      "Organize the way you manage online orders",
    ],
    packages: suppliedPackages["e-commerce"],
    comparison: suppliedComparisons["e-commerce"],
    notes: [
      "Malaysia payment options: FPX, senangPay, toyyibPay, Billplz, Stripe and HitPay. Gateway integration is subject to merchant approval and transaction fees.",
    ],
  },
  {
    id: "custom-system",
    name: "Custom Web System",
    shortName: "Custom System",
    icon: "system",
    startingPrice: 6000,
    timeline: "4–6 weeks to 3–5+ months",
    summary:
      "Purpose-built web applications for the way your team works, manages data and gets things done.",
    description:
      "Custom web applications for managing workflows, operations, data and internal business processes. Start with the problem; we’ll scope the right solution.",
    audience: [
      "Tuition centre management",
      "Inventory & stock",
      "CRM & sales",
      "Invoices & payments",
    ],
    benefits: [
      "Shape software around your workflow",
      "Bring business information together",
      "Turn manual steps into a clearer process",
    ],
    packages: suppliedPackages["custom-system"],
    comparison: suppliedComparisons["custom-system"],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "Vercel",
      "Docker",
      "AWS / VPS",
    ],
    notes: [
      "The Advanced package starts from RM20,000. Final cost and delivery depend on the agreed modules, integrations and scope.",
    ],
  },
]

export const serviceAddonGroups = [
  {
    serviceId: "landing-page",
    title: "Landing Page",
    items: [
      { title: "Extra section", price: "By quotation" },
      { title: "Dual language BM / EN", price: "By quotation" },
      { title: "Google Analytics", price: "By quotation" },
      { title: "Meta Pixel", price: "By quotation" },
      { title: "Copywriting", price: "By quotation" },
      { title: "Booking form", price: "By quotation" },
    ],
  },
  {
    serviceId: "business-website",
    title: "Business Website",
    items: [
      { title: "Extra page", price: "RM200–RM350" },
      { title: "Bilingual BM / EN", price: "RM300–RM700" },
      { title: "Blog / CMS setup", price: "RM400–RM900" },
      { title: "Booking system", price: "RM300–RM1,500" },
      { title: "Payment gateway", price: "RM500–RM1,500" },
      { title: "Login and user system", price: "RM800–RM1,500" },
    ],
  },
  {
    serviceId: "corporate-website",
    title: "Corporate Website",
    items: [
      { title: "Extra page", price: "RM300–RM600" },
      { title: "Bilingual BM / EN", price: "RM500–RM1,200" },
      { title: "Professional copywriting", price: "RM200–RM400/page" },
      { title: "Careers application", price: "RM800–RM2,000" },
      { title: "Document download centre", price: "RM300–RM800" },
      { title: "Basic CRM integration", price: "RM800–RM2,000" },
    ],
  },
  {
    serviceId: "e-commerce",
    title: "E-Commerce Website",
    items: [
      { title: "Additional product upload", price: "RM5–RM15/product" },
      { title: "Product variation setup", price: "RM100–RM300" },
      { title: "Additional payment gateway", price: "RM300–RM700" },
      { title: "WhatsApp order notification", price: "RM300–RM800" },
      { title: "Courier API integration", price: "RM600–RM1,500" },
      { title: "Abandoned-cart email", price: "RM300–RM700" },
    ],
  },
  {
    serviceId: "custom-system",
    title: "Custom Web System",
    items: [
      { title: "Additional module", price: "RM800–RM2,000" },
      { title: "Approval workflow", price: "RM1,000–RM3,000" },
      { title: "Payment gateway", price: "RM700–RM1,500" },
      { title: "WhatsApp integration", price: "RM800–RM2,500" },
      { title: "Email notifications", price: "RM400–RM1,000" },
      { title: "Advanced reporting", price: "RM1,000–RM3,000" },
    ],
  },
] as const

export const aftercareOptions = [
  {
    title: ".com domain",
    description: "Domain registration is separate from website development.",
    icon: "hosting",
    rates: [{ label: "Domain registration", price: "RM50–RM100/year" }],
  },
  {
    title: "Business website care",
    description: "Hosting and maintenance options for your business website.",
    icon: "maintenance",
    rates: [
      { label: "Business hosting", price: "RM120–RM500+/year" },
      { label: "Website maintenance", price: "RM100–RM250/month" },
    ],
  },
  {
    title: "Corporate website care",
    description:
      "Corporate hosting and maintenance. Business email is priced by your provider.",
    icon: "improvements",
    rates: [
      { label: "Business hosting", price: "RM200–RM800+/year" },
      { label: "Website maintenance", price: "RM150–RM400/month" },
    ],
  },
] as const

export const developmentProcess = [
  {
    title: "Discovery",
    description: "Your goals, your audience, and the problem to solve.",
  },
  {
    title: "Scope & quotation",
    description: "A clear plan for deliverables, cost and timing.",
  },
  {
    title: "Design & build",
    description: "Bring the agreed direction to life in the browser.",
  },
  {
    title: "Review & refine",
    description: "Work through feedback against the agreed scope.",
  },
  {
    title: "Launch & handover",
    description: "Prepare the agreed delivery and handover.",
  },
] as const

export const serviceFAQs = [
  {
    question: "Which service should I choose?",
    answer:
      "A Link Bio page works well for a professional profile and key links. A landing page focuses on one offer or campaign. Business and corporate websites give you more room for content, while e-commerce and custom systems support selling online or managing a specific workflow. If you’re unsure, tell me what you want to achieve.",
  },
  {
    question: "What do the starting prices cover?",
    answer:
      "Each package lists its included features, limits, revisions and available delivery estimates. Custom System Advanced starts from RM20,000 and may cost more depending on scope. Your final deliverables, costs and schedule are confirmed in a written quotation before work begins. Domain, hosting and maintenance are charged separately.",
  },
  {
    question: "What do you need to get started?",
    answer:
      "A short project brief is enough to start the conversation. Share your goals, audience, the pages or features you have in mind, and any brand assets, content or reference websites you already have.",
  },
  {
    question: "How long does development take?",
    answer:
      "The package timelines are estimates. The agreed scope, project complexity, content readiness and feedback can affect the schedule. Custom systems range from 4–6 weeks for Starter to 3–5 months or longer for Advanced. Individual Landing Page tier dates are confirmed in your quotation.",
  },
  {
    question: "Are hosting and maintenance included?",
    answer:
      "Domain, hosting and maintenance are charged separately. The aftercare section lists the supplied business and corporate price ranges, including yearly hosting and monthly maintenance. Business email depends on your provider. Other hosting and care arrangements are confirmed in your quotation.",
  },
  {
    question: "Can we discuss an existing website?",
    answer:
      "Yes—share the current URL and the changes you’re considering. I’ll review the fit and scope before putting together a quotation.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Choose any package to prefill the enquiry at the end of this page. Add your name, email and project details, then continue to your email app to review and send your brief. You can also contact me directly at aimanasrn@gmail.com.",
  },
] as const
