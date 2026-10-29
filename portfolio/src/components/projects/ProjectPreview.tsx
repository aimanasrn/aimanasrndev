import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import type { Project } from "@/components/projects/ProjectCard"
import { Button } from "@/components/ui/button"
import AnimatedContent from "@/components/AnimatedContent"

interface ProjectPreviewProps {
  project: Project
  onExplore: () => void
  reduceMotion: boolean
}

export function ProjectPreview({
  project,
  onExplore,
  reduceMotion,
}: ProjectPreviewProps) {
  return (
    <AnimatedContent
      as="article"
      className="project-preview"
      aria-label={`${project.name} preview`}
    >
      <div className="project-browser">
        <div className="project-browser-toolbar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          decoding="async"
          draggable={false}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className="project-preview-details">
        <div className="project-preview-heading">
          <div>
            <h3>{project.name}</h3>
            <p className="project-preview-category">
              {project.showcaseCategory ?? project.category}
            </p>
          </div>
          <Button
            variant="default"
            className="project-explore"
            onClick={onExplore}
          >
            Explore project
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>
        <p className="project-preview-summary">
          {project.summary ?? project.description}
        </p>
        <p className="project-preview-stack">
          {project.technologies.join(" / ")}
        </p>
      </div>
    </AnimatedContent>
  )
}
