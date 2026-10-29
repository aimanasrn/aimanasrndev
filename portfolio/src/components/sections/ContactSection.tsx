import { ArrowUpRight, Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons"
import { BusinessDetails } from "@/components/BusinessDetails"
import { PageContainer } from "@/components/PageContainer"
import AnimatedContent from "@/components/AnimatedContent"
import { business, emailHref, policyLinks } from "@/content/business"

const links = [
  { label: "Email", value: business.email, href: emailHref, icon: Mail },
  {
    label: "GitHub",
    value: "github.com/aimanasrn",
    href: "https://github.com/aimanasrn",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: business.owner,
    href: "https://www.linkedin.com/in/muhammad-aiman-bin-kanasronsham-2130431b0",
    icon: LinkedInIcon,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <PageContainer>
        <AnimatedContent as="p" className="section-label">
          06 / Say hello
        </AnimatedContent>
        <div className="contact-layout">
          <AnimatedContent className="contact-intro">
            <h2 id="contact-heading">
              Your next idea.
              <br />
              Let’s build it.
            </h2>
            <p>
              Have a product idea, a platform to improve, or a system challenge
              to solve? I’d be happy to talk through it.
            </p>
            <a className="button button-dark" href={emailHref}>
              Start a conversation
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </AnimatedContent>
          <AnimatedContent className="contact-links" staggerIndex={1}>
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                className="contact-link"
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <Icon aria-hidden="true" />
                <span>
                  <span className="contact-link-label">{label}</span>
                  <span className="contact-link-value">{value}</span>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </AnimatedContent>
        </div>
        <div className="contact-business-row">
          <div>
            <AnimatedContent>
              <h3>Business information</h3>
              <p className="contact-business-owner">{business.owner}</p>
            </AnimatedContent>
            <BusinessDetails />
          </div>
          <AnimatedContent className="contact-policies" staggerIndex={1}>
            <h3>Before we work together</h3>
            <p>
              Clear expectations, from the first conversation to the final
              handover.
            </p>
            <nav aria-label="Contact policies">
              {policyLinks.map(({ slug, label }) => (
                <a key={slug} href={`#policies/${slug}`}>
                  {label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </AnimatedContent>
        </div>
      </PageContainer>
    </section>
  )
}
