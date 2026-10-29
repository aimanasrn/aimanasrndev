import type { ReactNode } from "react"
import AnimatedContent from "@/components/AnimatedContent"

export function SectionHeading({
  label,
  id,
  children,
  description,
}: {
  label: string
  id: string
  children: ReactNode
  description?: string
}) {
  return (
    <AnimatedContent className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2 id={id}>{children}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </AnimatedContent>
  )
}
