interface ServiceEnquiry {
  recipient: string
  name: string
  email: string
  service: string
  packageLabel?: string
  addonLabel?: string
  details: string
}

export function buildServiceEmail(enquiry: ServiceEnquiry) {
  const subject = `Website project enquiry — ${enquiry.service}${enquiry.packageLabel ? ` — ${enquiry.packageLabel}` : ""}`
  const body = `Hi Aiman,\n\nI’d like to discuss a project.\n\nName: ${enquiry.name.trim()}\nEmail: ${enquiry.email.trim()}\nService: ${enquiry.service}${enquiry.packageLabel ? `\nPackage: ${enquiry.packageLabel}` : ""}${enquiry.addonLabel ? `\nRequested add-on: ${enquiry.addonLabel}` : ""}\n\nProject details:\n${enquiry.details.trim()}\n\nThank you!`
  return `mailto:${enquiry.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
