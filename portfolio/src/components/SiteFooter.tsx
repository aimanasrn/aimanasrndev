import { ArrowUp, ArrowUpRight } from "lucide-react"

import { PageContainer } from "@/components/PageContainer"
import { business, emailHref, policyLinks } from "@/content/business"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="footer-wordmark"
              href="#home"
              aria-label="AIMANASRN home"
            >
              AIMANASRN<span aria-hidden="true">.</span>
            </a>
            <p>
              Thoughtful software.
              <br />
              Clear communication.
            </p>
            <a className="footer-email" href={emailHref}>
              {business.email}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <nav
            aria-label="Policies and business information"
            className="footer-policies"
          >
            <p className="detail-label">Policies & information</p>
            {policyLinks.map(({ slug, label }) => (
              <a key={slug} href={`#policies/${slug}`}>
                {label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="footer-business">
            <p className="detail-label">Business details</p>
            <p>{business.owner}</p>
            <address>
              {business.address || "Business address pending confirmation."}
            </address>
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
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <a href="#home">
            Back to home
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}
