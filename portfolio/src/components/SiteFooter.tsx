import { ArrowUp, ArrowUpRight } from "lucide-react"

import { BrandMark } from "@/components/BrandMark"
import { PageContainer } from "@/components/PageContainer"
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons"
import { business, emailHref, policyLinks } from "@/content/business"

const explore = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Selected work", href: "/#projects" },
  { label: "Services & pricing", href: "/services" },
  { label: "Contact", href: "/#contact" },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="/#home" aria-label="AIMANASRN home">
              <BrandMark />
              <span>
                aimanasrn<span className="wordmark-suffix">.dev</span>
              </span>
            </a>
            <p>
              Thoughtful software.
              <br />
              Clear communication.
            </p>
            <div className="footer-social">
              <a href={emailHref}>
                <ArrowUpRight size={16} aria-hidden="true" />
                {business.email}
              </a>
              <a
                href="https://github.com/aimanasrn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-icon"
              >
                <GitHubIcon aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-aiman-bin-kanasronsham-2130431b0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-icon"
              >
                <LinkedInIcon aria-hidden="true" />
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="footer-column">
            <p className="detail-label">Explore</p>
            {explore.map(({ label, href }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <nav
            aria-label="Policies and business information"
            className="footer-column"
          >
            <p className="detail-label">Policies & information</p>
            {policyLinks.map(({ slug, label }) => (
              <a key={slug} href={`/#policies/${slug}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-column footer-business">
            <p className="detail-label">Business details</p>
            <p>{business.owner}</p>
            <address>{business.address || business.country}</address>
            {business.phone && (
              <a href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}>
                {business.phone}
              </a>
            )}
            {business.registrationNumber && (
              <p>Registration: {business.registrationNumber}</p>
            )}
          </div>
        </div>
        <p className="footer-giant" aria-hidden="true">
          aimanasrn
        </p>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <a href="/#home">
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}
