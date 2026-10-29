import { useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PageContainer } from "@/components/PageContainer"
import AnimatedContent from "@/components/AnimatedContent"
import { developmentServices } from "@/content/services"
import { ServicesHero } from "./ServicesHero"
import {
  ServicesOverview,
  LearningSolution,
  ServiceAddons,
  ServiceAftercare,
  ServiceProcess,
  ServiceFAQ,
} from "./ServiceSections"
import { ServiceNavigation } from "./ServiceNavigation"
import { ServiceDetail } from "./ServiceDetail"
import { ServicesEnquiry } from "./ServicesEnquiry"
import "@/styles/services.css"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("not-sure")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedAddon, setSelectedAddon] = useState("")
  const selectService = (service: string, packageName = "", addonName = "") => {
    setSelectedService(service)
    setSelectedPackage(packageName)
    setSelectedAddon(addonName)
  }
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      if (window.location.hash)
        document
          .getElementById(window.location.hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" })
      else
        document
          .getElementById("services-heading")
          ?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesOverview />
      <div className="services-catalog">
        <ServiceNavigation />
        <section
          id="service-details"
          className="services-details-heading"
          aria-labelledby="services-details-heading"
        >
          <PageContainer>
            <AnimatedContent>
              <p className="section-label">02 / Packages & possibilities</p>
              <h2 id="services-details-heading">
                A clear starting point.
                <br />A scope that fits.
              </h2>
              <p>
                Compare the included features, choose a package and let’s
                confirm the right scope for your next website.
              </p>
            </AnimatedContent>
          </PageContainer>
        </section>
        {developmentServices.map((service, index) => (
          <ServiceDetail
            service={service}
            index={index}
            key={service.id}
            onSelect={selectService}
          />
        ))}
      </div>
      <LearningSolution onSelect={selectService} />
      <ServiceAddons onSelect={selectService} />
      <ServiceAftercare onSelect={selectService} />
      <ServiceProcess />
      <ServiceFAQ />
      <ServicesEnquiry
        selectedService={selectedService}
        selectedPackage={selectedPackage}
        selectedAddon={selectedAddon}
        onSelect={selectService}
      />
    </div>
  )
}
