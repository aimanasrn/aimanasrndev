import { Mail, MapPin, Phone } from "lucide-react"

import { business, emailHref } from "@/content/business"
import AnimatedContent from "@/components/AnimatedContent"

export function BusinessDetails() {
  return (
    <AnimatedContent className="business-details">
      <div className="business-detail">
        <MapPin aria-hidden="true" size={18} />
        <div>
          <p className="detail-label">
            {business.address ? "Business address" : "Based in"}
          </p>
          <address>{business.address || business.country}</address>
        </div>
      </div>
      <div className="business-detail">
        <Mail aria-hidden="true" size={18} />
        <div>
          <p className="detail-label">Email enquiries</p>
          <a href={emailHref}>{business.email}</a>
        </div>
      </div>
      {business.phone && (
        <div className="business-detail">
          <Phone aria-hidden="true" size={18} />
          <div>
            <p className="detail-label">Contact number</p>
            <a href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}>
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </AnimatedContent>
  )
}
