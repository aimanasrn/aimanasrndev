// Confirm these details and policy terms with the owner before publication.
// Keep unknown details empty rather than publishing invented contact information.
export const business = {
  name: "AIMANASRN",
  owner: "Muhammad Aiman Bin Kanasronsham",
  email: "aimanasrn@gmail.com",
  phone: "",
  address: "",
  registrationNumber: "",
  country: "Malaysia",
  policiesConfirmed: false,
  updated: "1 October 2026",
}

export const emailHref = `mailto:${business.email}`

export const policyLinks = [
  {
    slug: "refund",
    label: "Refund policy",
    description: "Cancellations, eligibility and requesting a refund.",
  },
  {
    slug: "privacy",
    label: "Privacy policy",
    description: "How information is collected, used and protected.",
  },
  {
    slug: "shipping-returns",
    label: "Shipping & return policy",
    description: "Digital delivery, project handover and returns.",
  },
  {
    slug: "business-contact",
    label: "Business & contact",
    description: "Business information and ways to get in touch.",
  },
] as const

export type PolicySlug = (typeof policyLinks)[number]["slug"]

export function getPolicySlug(hash: string): PolicySlug | undefined {
  return policyLinks.find(({ slug }) => hash === `#policies/${slug}`)?.slug
}
