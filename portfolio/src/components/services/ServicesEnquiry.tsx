import { useLayoutEffect, useRef, useState, type FormEvent } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Mail } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import { Button } from "@/components/ui/button"
import { buildServiceEmail } from "@/lib/service-enquiry"
import { business, emailHref } from "@/content/business"
import { developmentServices, formatPackagePrice } from "@/content/services"
import type { SelectService } from "./ServiceDetail"

const extraServices = [
  { id: "mini-lms", name: "Mini Learning Management System" },
  { id: "maintenance", name: "Hosting, maintenance or improvements" },
  { id: "not-sure", name: "Help me choose" },
]

export function ServicesEnquiry({
  selectedService,
  selectedPackage,
  selectedAddon,
  onSelect,
}: {
  selectedService: string
  selectedPackage: string
  selectedAddon: string
  onSelect: SelectService
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")
  useLayoutEffect(() => {
    ScrollTrigger.refresh()
  }, [selectedService, selectedPackage, selectedAddon])
  const service = developmentServices.find(
    (item) => item.id === selectedService
  )
  const serviceName =
    service?.name ??
    extraServices.find((item) => item.id === selectedService)?.name ??
    "Help me choose"
  const plan = service?.packages?.find((item) => item.name === selectedPackage)
  const mailto = buildServiceEmail({
    recipient: business.email,
    name,
    email,
    service: serviceName,
    packageLabel: plan
      ? `${plan.name} (${formatPackagePrice(plan)})`
      : undefined,
    addonLabel: selectedAddon || undefined,
    details,
  })
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formRef.current?.reportValidity()) window.location.href = mailto
  }
  return (
    <section
      id="contact"
      className="section services-enquiry"
      aria-labelledby="services-enquiry-heading"
    >
      <PageContainer className="services-enquiry-layout">
        <AnimatedContent className="services-enquiry-intro">
          <p className="section-label">08 / Let’s make it happen</p>
          <h2 id="services-enquiry-heading">
            Your next idea.
            <br />
            Let’s build it.
          </h2>
          <p>Tell me what you’re planning. I’ll help you find the right fit.</p>
          <a href={emailHref} className="services-direct-email">
            <span>
              <Mail size={23} aria-hidden="true" />
            </span>
            <span>
              Prefer to reach out directly?<strong>{business.email}</strong>
            </span>
          </a>
        </AnimatedContent>
        <div id="project-enquiry" className="services-enquiry-anchor">
          <AnimatedContent className="services-enquiry-panel" staggerIndex={1}>
            <form
              ref={formRef}
              onSubmit={submit}
              aria-labelledby="project-enquiry-heading"
            >
              <h3 id="project-enquiry-heading">Tell me about your project</h3>
              <div className="services-form-grid">
                <label>
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    required
                    maxLength={120}
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                  />
                </label>
              </div>
              <label>
                Service
                <select
                  name="service"
                  value={selectedService}
                  onChange={(event) => onSelect(event.target.value)}
                >
                  {developmentServices.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                  {extraServices.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              {service?.packages && (
                <label>
                  Package
                  <select
                    name="package"
                    value={selectedPackage}
                    onChange={(event) =>
                      onSelect(selectedService, event.target.value)
                    }
                  >
                    <option value="">Help me choose a package</option>
                    {service.packages.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} · {formatPackagePrice(item)}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {plan && (
                <p className="services-selected-package" role="status">
                  {serviceName}
                  <strong>
                    {plan.name} · {formatPackagePrice(plan)}
                  </strong>
                </p>
              )}
              {selectedAddon && (
                <p
                  className="services-selected-package services-selected-addon"
                  role="status"
                >
                  Requested add-on
                  <strong>{selectedAddon}</strong>
                </p>
              )}
              <label>
                Project details
                <textarea
                  name="details"
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="Tell me about your idea, goals and anything you already have in mind…"
                  required
                  rows={4}
                  maxLength={4000}
                />
              </label>
              <Button type="submit" className="button button-dark">
                Continue via email
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
              <p className="services-email-note">
                Opens your email app with your project details. Review and send
                when ready.
              </p>
            </form>
          </AnimatedContent>
        </div>
      </PageContainer>
    </section>
  )
}
