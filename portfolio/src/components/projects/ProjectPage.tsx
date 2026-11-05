import { ArrowLeft, ArrowRight } from "lucide-react"

import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import { ProjectGallery } from "@/components/projects/ProjectGallery"
import { ProjectLinks } from "@/components/projects/ProjectLinks"
import {
  getProjectBySlug,
  getProjectMedia,
  projectPath,
  projects,
} from "@/content/projects"

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <PageContainer className="project-page project-missing">
        <p className="section-label">Project not found</p>
        <h1 id="project-heading" tabIndex={-1}>
          This project doesn’t exist.
        </h1>
        <a className="button button-dark" href="/#projects">
          <ArrowLeft size={16} aria-hidden="true" />
          See all projects
        </a>
      </PageContainer>
    )
  }

  const index = projects.indexOf(project)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const number = (i: number) => String(i + 1).padStart(2, "0")

  return (
    <article className="project-page" aria-labelledby="project-heading">
      <PageContainer>
        <a className="project-back" href="/#projects">
          <ArrowLeft aria-hidden="true" />
          All projects
        </a>

        <AnimatedContent as="header" className="project-hero">
          <p className="section-label">
            Project {number(index)} / {number(projects.length - 1)}
          </p>
          <h1 id="project-heading" tabIndex={-1}>
            {project.name}
          </h1>
          <p className="project-hero-meta">
            {[project.category, project.status, project.year]
              .filter(Boolean)
              .join(" · ")}
          </p>
          <p className="project-hero-summary">{project.summary}</p>
          <ProjectLinks project={project} variant="buttons" />
        </AnimatedContent>

        <AnimatedContent staggerIndex={1}>
          <ProjectGallery
            media={getProjectMedia(project)}
            name={project.name}
            coverAlt={project.imageAlt}
          />
        </AnimatedContent>

        <div className="project-body">
          <div className="project-main">
            <AnimatedContent as="section" aria-labelledby="project-overview">
              <h2 id="project-overview">Overview</h2>
              <p className="project-description">{project.description}</p>
            </AnimatedContent>

            <AnimatedContent as="section" aria-labelledby="project-flow">
              <h2 id="project-flow">How it works</h2>
              <ol className="project-flow">
                {project.flow.map((step, i) => (
                  <li key={step.title}>
                    <span className="project-flow-number" aria-hidden="true">
                      {number(i)}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </AnimatedContent>

            {Boolean(project.plannedEnhancements?.length) && (
              <AnimatedContent
                as="section"
                aria-labelledby="project-planned"
                className="project-planned"
              >
                <h2 id="project-planned">Planned next</h2>
                <ul>
                  {project.plannedEnhancements!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AnimatedContent>
            )}
          </div>

          <AnimatedContent
            as="aside"
            className="project-aside"
            staggerIndex={1}
          >
            <dl className="project-facts">
              <div>
                <dt>Type</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              {project.status && (
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
              )}
            </dl>
            {project.technologies.length > 0 && (
              <>
                <h2>Tech stack</h2>
                <ul className="tag-list">
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </AnimatedContent>
        </div>

        <nav className="project-pager" aria-label="More projects">
          <a href={projectPath(previous)} data-direction="previous">
            <span>
              <ArrowLeft aria-hidden="true" />
              Previous
            </span>
            <strong>{previous.name}</strong>
          </a>
          <a href={projectPath(next)} data-direction="next">
            <span>
              Next
              <ArrowRight aria-hidden="true" />
            </span>
            <strong>{next.name}</strong>
          </a>
        </nav>
      </PageContainer>
    </article>
  )
}
