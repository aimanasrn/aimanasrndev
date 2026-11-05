import { ArrowRight, Images, Play } from "lucide-react"

import { ProjectLinks } from "@/components/projects/ProjectLinks"
import {
  getProjectImages,
  getProjectMedia,
  projectPath,
  type Project,
} from "@/content/projects"

const visibleTechnologies = 4

export function ProjectCard({ project }: { project: Project }) {
  const images = getProjectImages(project)
  const cover = images[0]
  const hasVideo = getProjectMedia(project).some(
    (item) => item.type === "video"
  )
  const extraTechnologies = project.technologies.length - visibleTechnologies

  return (
    <article className="project-card" data-spotlight>
      <div className="project-card-media">
        {cover ? (
          <img
            src={cover}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span className="project-card-placeholder">{project.name}</span>
        )}
        {(hasVideo || images.length > 1) && (
          <div className="project-card-badges">
            {hasVideo && (
              <span className="project-card-badge">
                <Play aria-hidden="true" />
                Video
              </span>
            )}
            {images.length > 1 && (
              <span className="project-card-badge">
                <Images aria-hidden="true" />
                {images.length}
                <span className="sr-only"> screenshots</span>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="project-card-body">
        <p className="project-card-meta">
          {[project.category, project.status, project.year]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <h3>
          {/* The title link covers the whole card; other links sit above it. */}
          <a href={projectPath(project)} className="project-card-link">
            {project.name}
          </a>
        </h3>
        <p className="project-card-summary">{project.summary}</p>

        {project.technologies.length > 0 && (
          <ul className="project-card-stack" aria-label="Technologies">
            {project.technologies.slice(0, visibleTechnologies).map((item) => (
              <li key={item}>{item}</li>
            ))}
            {extraTechnologies > 0 && (
              <li aria-label={`and ${extraTechnologies} more`}>
                +{extraTechnologies}
              </li>
            )}
          </ul>
        )}

        <div className="project-card-footer">
          <span className="project-card-cta" aria-hidden="true">
            View project
            <ArrowRight />
          </span>
          <ProjectLinks project={project} variant="icons" />
        </div>
      </div>
    </article>
  )
}
