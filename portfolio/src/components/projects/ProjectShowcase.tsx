import type { Project } from "@/components/projects/ProjectCard"
import { ProjectCarousel } from "@/components/projects/ProjectCarousel"

interface ProjectShowcaseProps {
  projects: readonly Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return <ProjectCarousel projects={projects} />
}
