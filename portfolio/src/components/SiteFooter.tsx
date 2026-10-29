import { ArrowUp, ArrowUpRight, CodeXml } from "lucide-react"

import { PageContainer } from "@/components/PageContainer"
import { business, emailHref, policyLinks } from "@/content/business"
import AnimatedContent from "@/components/AnimatedContent"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-main">
          <AnimatedContent className="footer-brand">
            <a
              className="footer-wordmark"
              href="/#home"
              aria-label="AIMANASRN home"
            >
              <span className="brand-icon">
                <CodeXml size={23} aria-hidden="true" />
              </span>
              aimanasrn<span className="wordmark-suffix">.dev</span>
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
          </AnimatedContent>
          <AnimatedContent
            as="nav"

            staggerIndex={1}
            aria-label="Policies and business information"
            className="footer-policies"
          >
            <p className="detail-label">Policies & information</p>
            {policyLinks.map(({ slug, label }) => (
              <a key={slug} href={`/#policies/${slug}`}>
                {label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </AnimatedContent>
          <AnimatedContent
            className="footer-business"

            staggerIndex={2}
          >
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
          </AnimatedContent>
        </div>
        <AnimatedContent className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <a href="/#home">
            Back to home
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </AnimatedContent>
      </PageContainer>
    </footer>
  )
}
