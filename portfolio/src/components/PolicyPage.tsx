import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react"
import type { ReactNode } from "react"

import { BusinessDetails } from "@/components/BusinessDetails"
import { PageContainer } from "@/components/PageContainer"
import {
  business,
  emailHref,
  policyLinks,
  type PolicySlug,
} from "@/content/business"

type PolicySection = { title: string; content: ReactNode }

const policies: Record<
  Exclude<PolicySlug, "business-contact">,
  { intro: string; sections: PolicySection[] }
> = {
  refund: {
    intro:
      "A clear process for cancellations, payment issues and refund requests for software development services.",
    sections: [
      {
        title: "What this policy covers",
        content: (
          <p>
            This policy covers software development services arranged directly
            with {business.name}. Before payment, the written quotation or
            project agreement should confirm the scope, price, milestones,
            delivery dates and any project-specific cancellation terms. Products
            or services purchased from a separate project website are subject to
            that website’s policies.
          </p>
        ),
      },
      {
        title: "Cancellations and eligibility",
        content: (
          <>
            <p>
              Under these proposed terms, a cancellation before work begins is
              eligible for a full refund of the service payment. Once work has
              started, the refundable amount is the payment for work not yet
              performed, less any non-recoverable third-party costs that you
              approved in advance.
            </p>
            <p>
              Completed work is assessed against the agreed scope. If a
              deliverable is missing or does not meet that scope, please contact
              us to discuss a correction, replacement or appropriate refund.
              Duplicate or incorrect payments will be investigated and
              corrected.
            </p>
          </>
        ),
      },
      {
        title: "How to request a refund",
        content: (
          <>
            <p>
              Email <a href={emailHref}>{business.email}</a> with the subject
              “Refund request”. Please include:
            </p>
            <ul>
              <li>Your name and the email used for the project.</li>
              <li>The invoice or payment reference and payment date.</li>
              <li>The amount requested and the reason for your request.</li>
              <li>Any relevant details about the affected deliverable.</li>
            </ul>
            <p>
              Please do not send passwords, full card numbers or banking login
              details.
            </p>
          </>
        ),
      },
      {
        title: "Review and payment",
        content: (
          <p>
            The proposed response time is within 5 business days of receiving
            the information needed to review a request. Approved refunds are
            initiated within 10 business days, normally through the original
            payment method. Your bank or payment provider may take additional
            time to make the credit available. Any alternative method must be
            agreed with you.
          </p>
        ),
      },
      {
        title: "Your rights",
        content: (
          <p>
            This policy does not exclude or limit any rights or remedies that
            cannot be excluded under applicable consumer law. Where mandatory
            law provides a different remedy, that law applies.
          </p>
        ),
      },
    ],
  },
  privacy: {
    intro:
      "How this portfolio handles personal information when you browse the website or contact us about a project.",
    sections: [
      {
        title: "Who handles your information",
        content: (
          <p>
            This website is operated by {business.owner} under the portfolio
            name {business.name}. For privacy questions or requests, contact{" "}
            <a href={emailHref}>{business.email}</a>. Business contact
            information is available on the{" "}
            <a href="#policies/business-contact">Business & contact page</a>.
          </p>
        ),
      },
      {
        title: "Information you provide",
        content: (
          <p>
            When you send an email or discuss a project, the information
            provided may include your name, email address, contact details,
            company, project requirements, attachments and correspondence. If
            you engage us for work, billing information and payment references
            may also be needed. This portfolio does not currently offer an
            account registration form or collect card details directly.
          </p>
        ),
      },
      {
        title: "How information is used",
        content: (
          <>
            <p>
              Information is used to respond to enquiries, prepare quotations,
              deliver agreed services, communicate about projects, keep relevant
              business records and handle support or refund requests.
            </p>
            <p>
              Providing enquiry details is voluntary. Without enough contact or
              project information, we may be unable to respond or provide the
              requested service. Additional uses should be explained to you
              before your information is used for a new purpose.
            </p>
          </>
        ),
      },
      {
        title: "Browser storage and website logs",
        content: (
          <>
            <p>
              The website uses browser local storage to remember a display theme
              preference. You can clear this preference in your browser
              settings. The current application does not include advertising
              cookies or analytics tracking scripts.
            </p>
            <p>
              The hosting provider may process technical information such as IP
              addresses, browser details, requested pages and timestamps to
              serve and secure the website. Provider-specific logging and
              retention need to be confirmed for the live deployment.
            </p>
          </>
        ),
      },
      {
        title: "Service providers and external links",
        content: (
          <>
            <p>
              Email, hosting and any agreed project or payment providers may
              process information needed to provide their services. These
              providers may operate outside Malaysia. The providers, processing
              locations and applicable safeguards must be confirmed before this
              notice is finalised. Information may also be disclosed where
              required by law.
            </p>
            <p>
              Links to GitHub, LinkedIn and project websites take you to
              independent websites whose own privacy policies apply. Please
              review those policies before providing information.
            </p>
          </>
        ),
      },
      {
        title: "Retention and protection",
        content: (
          <p>
            Under this proposed policy, information is kept only as long as
            needed for the enquiry or project, relevant business records and
            applicable legal requirements. Reasonable access controls and
            security measures should protect it. The owner must confirm the
            actual retention periods and security practices before publication;
            no method of electronic storage or transmission is completely
            secure.
          </p>
        ),
      },
      {
        title: "Your choices and requests",
        content: (
          <p>
            You can email <a href={emailHref}>{business.email}</a> to request
            access to or correction of your information, ask about its use,
            withdraw consent where applicable, or object to direct marketing.
            You can also request deletion, subject to information that must be
            retained for lawful purposes. Identity verification may be needed to
            protect your information, and applicable legal conditions may affect
            how a request is handled.
          </p>
        ),
      },
      {
        title: "Changes to this notice",
        content: (
          <p>
            Material changes to how information is handled should be reflected
            on this page, with an updated date. This draft describes the current
            portfolio and must be reviewed if forms, checkout, analytics or
            other data-processing features are added.
          </p>
        ),
      },
    ],
  },
  "shipping-returns": {
    intro:
      "How software projects are delivered, what happens at handover and how to raise a delivery or return issue.",
    sections: [
      {
        title: "Digital services and physical shipping",
        content: (
          <p>
            This draft assumes that {business.name} provides software
            development services and digital deliverables only. Under that
            service model, no physical goods are shipped, and courier charges,
            physical returns and return shipping addresses do not apply. If
            physical products are offered, this policy must be replaced with the
            actual shipping and return terms before those products are sold.
          </p>
        ),
      },
      {
        title: "Delivery method and timing",
        content: (
          <>
            <p>
              Project deliverables are provided digitally by email, a secure
              download, access to an agreed repository, or deployment to an
              agreed hosting environment. The delivery method, milestones and
              expected completion dates are confirmed in writing before payment.
            </p>
            <p>
              Project kickoff is scheduled within 3 business days after the
              agreement, initial payment and required materials are received,
              unless a different start date is agreed in writing. Completion
              time depends on the project scope; your quotation will include an
              estimated delivery schedule. Business days are Monday to Friday,
              excluding Malaysian public holidays.
            </p>
          </>
        ),
      },
      {
        title: "Project handover",
        content: (
          <p>
            The written agreement should list the items included at handover,
            such as source code, deployment access, documentation or a
            walkthrough. Hosting, domains, ongoing maintenance and third-party
            licences are included only when expressly listed in the quotation.
            Any separate costs should be disclosed before you agree to them.
          </p>
        ),
      },
      {
        title: "Delays or access problems",
        content: (
          <p>
            If a delivery date changes, we should explain the reason and agree
            on the next steps with you. If you cannot access a delivered file or
            environment, email <a href={emailHref}>{business.email}</a> with the
            project reference and a description of the problem so delivery can
            be checked.
          </p>
        ),
      },
      {
        title: "Returns, corrections and refunds",
        content: (
          <p>
            Digital services cannot be physically returned. If a delivered item
            is missing, inaccessible or does not meet the agreed scope, contact
            us to discuss a correction or other appropriate remedy. Revisions
            and acceptance criteria should be stated in your project agreement.
            Cancellation and refund requests are handled under the{" "}
            <a href="#policies/refund">Refund policy</a>, without limiting
            rights provided by applicable law.
          </p>
        ),
      },
    ],
  },
}

export function PolicyPage({ slug }: { slug: PolicySlug }) {
  const page = policyLinks.find((link) => link.slug === slug)!
  const policy = slug === "business-contact" ? undefined : policies[slug]

  return (
    <section className="policy-page" aria-labelledby="policy-heading">
      <PageContainer>
        <a href="#home" className="policy-back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to portfolio
        </a>
        <div className="policy-layout">
          <aside className="policy-sidebar">
            <p className="detail-label">Policies & information</p>
            <nav aria-label="Policy pages">
              {policyLinks.map(({ slug: itemSlug, label }) => (
                <a
                  key={itemSlug}
                  href={`#policies/${itemSlug}`}
                  aria-current={slug === itemSlug ? "page" : undefined}
                >
                  {label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="policy-help">
              <Mail size={20} aria-hidden="true" />
              <p>Need a little clarity?</p>
              <a href={emailHref}>
                Get in touch
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </aside>
          <article className="policy-article">
            <h1 id="policy-heading" tabIndex={-1}>
              {page.label}
            </h1>
            <p className="policy-intro">
              {policy?.intro ||
                "The person behind the work, business details and a direct way to get in touch."}
            </p>
            <p className="policy-updated">
              {business.policiesConfirmed ? "Last updated" : "Draft prepared"} ·{" "}
              {business.updated}
            </p>
            {!business.policiesConfirmed && (
              <div className="policy-draft" role="note">
                <strong>Draft — awaiting business confirmation</strong>
                <p>
                  These proposed terms assume software development services.
                  Business details, delivery and refund terms, and privacy
                  practices must be confirmed before these policies are
                  published as final.
                </p>
              </div>
            )}
            {policy ? (
              policy.sections.map(({ title, content }, index) => (
                <section className="policy-section" key={title}>
                  <h2>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {title}
                  </h2>
                  {content}
                </section>
              ))
            ) : (
              <>
                <section className="policy-section">
                  <h2>Business information</h2>
                  <dl className="business-identity">
                    <div>
                      <dt>Portfolio / trading name</dt>
                      <dd>{business.name}</dd>
                    </div>
                    <div>
                      <dt>Owner</dt>
                      <dd>{business.owner}</dd>
                    </div>
                    {business.registrationNumber && (
                      <div>
                        <dt>Business registration</dt>
                        <dd>{business.registrationNumber}</dd>
                      </div>
                    )}
                    <div>
                      <dt>Services</dt>
                      <dd>
                        Software development and digital project delivery
                        (pending confirmation).
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="policy-section">
                  <h2>Address & contact details</h2>
                  <BusinessDetails />
                </section>
                <section className="policy-section">
                  <h2>Project and policy enquiries</h2>
                  <p>
                    For a new project, delivery question, privacy request or
                    refund enquiry, email{" "}
                    <a href={emailHref}>{business.email}</a>. Include your
                    project or invoice reference if your enquiry relates to
                    existing work.
                  </p>
                </section>
              </>
            )}
            <div className="policy-contact">
              <div>
                <h2>Have a question?</h2>
                <p>Let’s make sure everything is clear.</p>
              </div>
              <a href={emailHref}>
                Contact by email
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  )
}
