import { ArrowUpRight, Check, ChevronDown, Clock } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import { cn } from "@/lib/utils"
import {
  formatRM,
  formatPackagePrice,
  type DevelopmentService,
  type ServicePackage,
} from "@/content/services"
import { serviceIcons } from "./service-icons"
import { refreshServiceLayout } from "./disclosure"

export type SelectService = (
  service: string,
  packageName?: string,
  addonName?: string
) => void

function PackageCard({
  service,
  plan,
  index,
  onSelect,
}: {
  service: DevelopmentService
  plan: ServicePackage
  index: number
  onSelect: SelectService
}) {
  const Icon = serviceIcons[service.icon]
  return (
    <AnimatedContent
      as="article"
      className={cn(
        "services-price-card",
        plan.recommended && "services-price-card-accent"
      )}
      staggerIndex={index}
    >
      {plan.recommended && (
        <span className="services-package-recommended">Recommended</span>
      )}
      <div className="services-price-card-heading">
        <span className="services-icon">
          <Icon size={24} aria-hidden="true" />
        </span>
        <div>
          <h3>{plan.name}</h3>
          {plan.description && <p>{plan.description}</p>}
        </div>
      </div>
      <p className="services-package-price">{formatPackagePrice(plan)}</p>
      <p className="services-timeline">
        <Clock size={15} aria-hidden="true" />
        {plan.timeline ?? "Delivery confirmed in quotation"}
      </p>
      <ul className="services-feature-list">
        {plan.features.slice(0, 4).map((feature) => (
          <li key={feature}>
            <Check size={16} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <details
        className="services-feature-disclosure"
        onToggle={refreshServiceLayout}
      >
        <summary>
          <span className="services-disclosure-closed">
            View all {plan.features.length} features
          </span>
          <span className="services-disclosure-open">Show fewer features</span>
          <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <div className="services-disclosure-body">
          <ul className="services-feature-list">
            {plan.features.slice(4).map((feature) => (
              <li key={feature}>
                <Check size={16} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </details>
      <a
        className="button button-dark"
        href="#project-enquiry"
        onClick={() => onSelect(service.id, plan.name)}
      >
        Request a quotation
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </AnimatedContent>
  )
}

function PackageComparison({ service }: { service: DevelopmentService }) {
  const packages = service.packages ?? []
  const rows = [
    ["Price", ...packages.map(formatPackagePrice)],
    ...(service.comparison ?? []).map((row) => [row.label, ...row.values]),
    [
      "Estimated completion",
      ...packages.map((plan) => plan.timeline ?? "Confirmed in quotation"),
    ],
  ]
  return (
    <details className="services-comparison" onToggle={refreshServiceLayout}>
      <summary>
        Compare {service.shortName} packages
        <ChevronDown size={18} aria-hidden="true" />
      </summary>
      <div className="services-table-scroll services-disclosure-body">
        <table>
          <caption className="sr-only">
            {service.name} package comparison
          </caption>
          <thead>
            <tr>
              <th scope="col">What’s included</th>
              {packages.map((plan) => (
                <th key={plan.name} scope="col">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([title, ...values]) => (
              <tr key={title}>
                <th scope="row">{title}</th>
                {values.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  )
}

export function ServiceDetail({
  service,
  index,
  onSelect,
}: {
  service: DevelopmentService
  index: number
  onSelect: SelectService
}) {
  const Icon = serviceIcons[service.icon]
  return (
    <section
      id={service.id}
      className={cn(
        "services-detail",
        service.packages && "services-detail-packages"
      )}
      aria-labelledby={`${service.id}-heading`}
      data-service-detail
    >
      <PageContainer>
        <div
          className={
            service.packages
              ? "services-detail-intro"
              : "services-detail-layout"
          }
        >
          <AnimatedContent className="services-detail-copy">
            <div className="services-detail-title">
              <span className="services-detail-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 id={`${service.id}-heading`}>{service.name}</h2>
            </div>
            <p>{service.description}</p>
            <p className="services-ideal">
              <strong>Ideal for</strong>
              {service.audience.join(" · ")}
            </p>
            {!service.packages && (
              <ul className="services-benefits">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={16} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
          </AnimatedContent>
          {!service.packages && (
            <AnimatedContent
              as="article"
              className="services-scope-card"
              staggerIndex={1}
            >
              <span className="services-icon">
                <Icon size={25} aria-hidden="true" />
              </span>
              <p className="section-label">Starting from</p>
              <p className="services-scope-price">
                {formatRM(service.startingPrice)}
              </p>
              <p className="services-timeline">
                <Clock size={15} aria-hidden="true" />
                {service.timeline}
              </p>
              <p className="services-scope-note">
                Your features, delivery plan and final price are confirmed in
                your quotation.
              </p>
              <a
                className="button button-dark"
                href="#project-enquiry"
                onClick={() => onSelect(service.id)}
              >
                Request a quotation
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </AnimatedContent>
          )}
        </div>
        {service.packages && (
          <>
            <div className="services-pricing-grid">
              {service.packages.map((plan, planIndex) => (
                <PackageCard
                  key={plan.name}
                  service={service}
                  plan={plan}
                  index={planIndex}
                  onSelect={onSelect}
                />
              ))}
            </div>
            <PackageComparison service={service} />
          </>
        )}
        {(service.notes || service.technologies) && (
          <div className="services-package-notes">
            {service.notes?.map((note) => (
              <p key={note}>{note}</p>
            ))}
            {service.technologies && (
              <p>
                <strong>Technology options</strong>{" "}
                {service.technologies.join(" · ")}
              </p>
            )}
          </div>
        )}
      </PageContainer>
    </section>
  )
}
