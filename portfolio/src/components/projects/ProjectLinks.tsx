import type { ReactNode } from "react"
import { ArrowUpRight, Globe } from "lucide-react"

import { GitHubIcon } from "@/components/SocialIcons"
import type { Project } from "@/content/projects"
import { cn } from "@/lib/utils"

interface ProjectLinksProps {
  project: Project
  /** "icons" for compact card links, "buttons" for the project page. */
  variant: "icons" | "buttons"
  className?: string
}

export function ProjectLinks({
  project,
  variant,
  className,
}: ProjectLinksProps) {
  const links = [
    project.website && {
      href: project.website,
      label: "Live website",
      icon: <Globe aria-hidden="true" />,
    },
    project.github && {
      href: project.github,
      label: "Source code",
      icon: <GitHubIcon aria-hidden="true" />,
    },
  ].filter(Boolean) as { href: string; label: string; icon: ReactNode }[]

  if (!links.length) return null

  return (
    <div className={cn(`project-links project-links-${variant}`, className)}>
      {links.map(({ href, label, icon }, index) =>
        variant === "icons" ? (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} ${label.toLowerCase()}`}
            title={label}
            className="project-link-icon"
          >
            {icon}
          </a>
        ) : (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "button",
              index === 0 ? "button-dark" : "button-outline"
            )}
          >
            {icon}
            {label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )
      )}
    </div>
  )
}
