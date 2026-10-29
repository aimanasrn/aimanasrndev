import { useEffect, useState } from "react"
import { PageContainer } from "@/components/PageContainer"
import { developmentServices } from "@/content/services"

export function ServiceNavigation() {
  const [active, setActive] = useState("all")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: "-175px 0px -50% 0px" }
    )
    document
      .querySelectorAll("[data-service-detail]")
      .forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return (
    <nav className="services-category-nav" aria-label="Service categories">
      <PageContainer>
        <div className="services-category-scroll">
          <a
            href="#service-details"
            aria-current={active === "all" ? "location" : undefined}
            onClick={() => setActive("all")}
          >
            All Services
          </a>
          {developmentServices.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              aria-current={active === service.id ? "location" : undefined}
              onClick={() => setActive(service.id)}
            >
              {service.shortName}
            </a>
          ))}
        </div>
      </PageContainer>
    </nav>
  )
}
