import { useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Cloud,
  FileText,
  GraduationCap,
  Layers,
  Plus,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import {
  aftercareOptions,
  developmentProcess,
  developmentServices,
  formatRM,
  serviceAddonGroups,
  serviceFAQs,
} from "@/content/services"
import { serviceIcons } from "./service-icons"
import { refreshServiceLayout } from "./disclosure"
import type { SelectService } from "./ServiceDetail"

export function ServicesOverview() {
  return (
    <section
      id="services-overview"
      className="section services-overview"
      aria-labelledby="services-overview-heading"
    >
      <PageContainer>
        <SectionHeading
          id="services-overview-heading"
          label="01 / Find your fit"
          description="Start with what your business needs. We’ll shape the scope together."
        >
          A small website.
          <br />
          Or your next big thing<span className="yellow-dot">.</span>
        </SectionHeading>
        <div className="services-overview-grid">
          {developmentServices.map((service, index) => {
            const Icon = serviceIcons[service.icon]
            return (
              <AnimatedContent
                as="article"
                className="services-overview-card"
                key={service.id}
                staggerIndex={index % 3}
              >
                <div className="services-overview-card-heading">
                  <span className="services-icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{service.name}</h3>
                </div>
                <p className="services-card-description">{service.summary}</p>
                <div className="services-overview-meta">
                  <div>
                    <span>From</span>
                    <strong>{formatRM(service.startingPrice)}</strong>
                  </div>
                  <p>
                    <Clock size={17} aria-hidden="true" />
                    {service.timeline}
                  </p>
                </div>
                <a
                  href={`#${service.id}`}
                  className="services-text-link"
                  aria-label={`View packages for ${service.name}`}
                >
                  View packages
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </AnimatedContent>
            )
          })}
        </div>
      </PageContainer>
    </section>
  )
}

export function LearningSolution({ onSelect }: { onSelect: SelectService }) {
  return (
    <section
      id="mini-lms"
      className="section services-learning"
      aria-labelledby="learning-heading"
    >
      <PageContainer className="services-learning-layout">
        <AnimatedContent className="services-learning-copy">
          <span className="services-icon">
            <GraduationCap size={27} aria-hidden="true" />
          </span>
          <p className="section-label">03 / A special solution · Mini LMS</p>
          <h2 id="learning-heading">
            A learning platform that fits your workflow.
          </h2>
          <p>
            Let’s scope a focused learning workspace around your learners,
            content and day-to-day administration.
          </p>
          <p className="services-learning-audience">
            For tutors, training providers and small learning teams.
          </p>
          <a
            href="#project-enquiry"
            className="button button-dark"
            onClick={() => onSelect("mini-lms")}
          >
            Discuss a learning system
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <span className="services-quote-label">
            Scope, features and pricing by quotation.
          </span>
        </AnimatedContent>
        <AnimatedContent
          as="div"
          className="services-learning-preview"
          staggerIndex={1}
        >
          <div className="project-browser">
            <div className="project-browser-toolbar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <img
              src="/projects/didikflow/didikflowdashboard.webp"
              alt="Related work: DidikFlow education management dashboard"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
          <p>
            Related work: <strong>DidikFlow</strong> · Education management SaaS
          </p>
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}

export function ServiceAddons({ onSelect }: { onSelect: SelectService }) {
  const [selectedGroup, setSelectedGroup] = useState<string>(
    serviceAddonGroups[0].serviceId
  )
  const group =
    serviceAddonGroups.find((item) => item.serviceId === selectedGroup) ??
    serviceAddonGroups[0]
  return (
    <section
      id="service-addons"
      className="section services-addons"
      aria-labelledby="addons-heading"
    >
      <PageContainer className="services-split-layout">
        <AnimatedContent className="services-section-intro">
          <p className="section-label">04 / Make it yours</p>
          <h2 id="addons-heading">
            A little extra.
            <br />A better fit<span className="yellow-dot">.</span>
          </h2>
          <p>
            Extend the scope with the content, features and connections your
            website needs.
          </p>
          <p className="services-addon-note">
            Indicative add-on rates. Final scope and costs are confirmed in your
            quotation.
          </p>
        </AnimatedContent>
        <div className="services-addon-catalog">
          <div className="services-addon-filter">
            <label htmlFor="service-addon-category">Add-ons for</label>
            <select
              id="service-addon-category"
              value={selectedGroup}
              onChange={(event) => {
                setSelectedGroup(event.target.value)
                refreshServiceLayout()
              }}
            >
              {serviceAddonGroups.map((item) => (
                <option key={item.serviceId} value={item.serviceId}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="services-addon-grid" key={group.serviceId}>
            {group.items.map((addon, index) => (
              <AnimatedContent
                as="article"
                className="services-addon"
                key={addon.title}
                staggerIndex={index % 2}
              >
                <span className="services-addon-icon">
                  {index < 2 ? (
                    <FileText size={22} aria-hidden="true" />
                  ) : index < 4 ? (
                    <Layers size={22} aria-hidden="true" />
                  ) : (
                    <Wrench size={22} aria-hidden="true" />
                  )}
                </span>
                <div>
                  <h3>{addon.title}</h3>
                  <p className="services-addon-price">{addon.price}</p>
                  <a
                    className="services-text-link"
                    href="#project-enquiry"
                    onClick={() => onSelect(group.serviceId, "", addon.title)}
                  >
                    Discuss this add-on
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

export function ServiceAftercare({ onSelect }: { onSelect: SelectService }) {
  const icons = {
    hosting: Cloud,
    maintenance: ShieldCheck,
    improvements: Wrench,
  }
  return (
    <section
      id="service-aftercare"
      className="section services-aftercare"
      aria-labelledby="aftercare-heading"
    >
      <PageContainer>
        <SectionHeading
          id="aftercare-heading"
          label="05 / After launch"
          description="Hosting, maintenance and future improvements, shaped around your needs."
        >
          Go live.
          <br />
          Keep moving<span className="yellow-dot">.</span>
        </SectionHeading>
        <div className="services-aftercare-grid">
          {aftercareOptions.map((option, index) => {
            const Icon = icons[option.icon]
            return (
              <AnimatedContent
                as="article"
                className="services-aftercare-card"
                key={option.title}
                staggerIndex={index}
              >
                <span className="services-addon-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <dl className="services-aftercare-rates">
                  {option.rates.map((rate) => (
                    <div key={rate.label}>
                      <dt>{rate.label}</dt>
                      <dd>{rate.price}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#project-enquiry"
                  className="services-text-link"
                  onClick={() => onSelect("maintenance")}
                >
                  Discuss your needs
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </AnimatedContent>
            )
          })}
        </div>
        <p className="services-aftercare-note">
          These are separate recurring costs. E-commerce, custom system and Mini
          LMS hosting and maintenance are quoted to scope.
        </p>
      </PageContainer>
    </section>
  )
}

export function ServiceProcess() {
  return (
    <section
      id="service-process"
      className="section services-process"
      aria-labelledby="process-heading"
    >
      <PageContainer>
        <SectionHeading id="process-heading" label="06 / How we work">
          From first hello
          <br />
          to go-live<span className="yellow-dot">.</span>
        </SectionHeading>
        <ol className="services-process-steps">
          {developmentProcess.map((step, index) => (
            <AnimatedContent as="li" key={step.title} staggerIndex={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < developmentProcess.length - 1 && (
                <ArrowRight
                  className="services-process-arrow"
                  size={18}
                  aria-hidden="true"
                />
              )}
            </AnimatedContent>
          ))}
        </ol>
      </PageContainer>
    </section>
  )
}

export function ServiceFAQ() {
  return (
    <section
      id="services-faq"
      className="section services-faq"
      aria-labelledby="services-faq-heading"
    >
      <PageContainer className="services-split-layout">
        <AnimatedContent className="services-section-intro">
          <p className="section-label">07 / A little clarity</p>
          <h2 id="services-faq-heading">
            Good questions.
            <br />
            Clear answers<span className="yellow-dot">.</span>
          </h2>
          <p>A few useful things to know before we begin.</p>
        </AnimatedContent>
        <AnimatedContent className="services-faq-list" staggerIndex={1}>
          {serviceFAQs.map((faq) => (
            <details key={faq.question} onToggle={refreshServiceLayout}>
              <summary>
                {faq.question}
                <span>
                  <Plus size={17} aria-hidden="true" />
                </span>
              </summary>
              <div className="services-disclosure-body">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}
