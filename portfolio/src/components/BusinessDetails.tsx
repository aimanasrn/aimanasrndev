import { Mail, MapPin, Phone } from "lucide-react"

import { business, emailHref } from "@/content/business"

export function BusinessDetails() {
  return (
    <div className="business-details">
      <div className="business-detail">
        <MapPin aria-hidden="true" size={18} />
        <div>
          <p className="detail-label">Business address</p>
          <address>
            {business.address || "Full business address pending confirmation."}
          </address>
          {!business.address && (
            <p className="detail-note">
              Based in {business.country}. A full address is required before
              publication.
            </p>
          )}
        </div>
      </div>
      <div className="business-detail">
        <Mail aria-hidden="true" size={18} />
        <div>
          <p className="detail-label">Email enquiries</p>
          <a href={emailHref}>{business.email}</a>
        </div>
      </div>
      <div className="business-detail">
        <Phone aria-hidden="true" size={18} />
        <div>
          <p className="detail-label">Contact number</p>
          {business.phone ? (
            <a href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}>
              {business.phone}
            </a>
          ) : (
            <p>Contact number pending confirmation.</p>
          )}
        </div>
      </div>
    </div>
  )
}
