import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import { SectionHeading } from "@/components/SectionHeading"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { projects } from "@/content/projects"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <PageContainer className="projects-container">
        <SectionHeading
          id="projects-heading"
          label="Selected work"
          description="Products shaped around clear problems, thoughtful interfaces, and dependable engineering. Open any project to see how it works."
        >
          Less talk.
          <br />
          <span className="text-gradient">More shipped.</span>
        </SectionHeading>

        <ul className="project-grid">
          {projects.map((project, index) => (
            <AnimatedContent
              as="li"
              key={project.slug}
              staggerIndex={index % 2}
            >
              <ProjectCard project={project} />
            </AnimatedContent>
          ))}
        </ul>
      </PageContainer>
    </section>
  )
}
