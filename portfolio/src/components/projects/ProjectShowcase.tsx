import { useCallback, useId, useState, useSyncExternalStore } from "react"
import { preload } from "react-dom"
import { ArrowRight, ChevronDown } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import type { Project } from "@/components/projects/ProjectCard"
import { ProjectDetailsModal } from "@/components/projects/ProjectDetailsModal"
import { ProjectPreview } from "@/components/projects/ProjectPreview"

interface ProjectShowcaseProps {
  projects: readonly Project[]
}

const desktopQuery = "(min-width: 1024px)"
const getDesktopSnapshot = () => window.matchMedia(desktopQuery).matches
const getServerSnapshot = () => false

function subscribeToViewport(callback: () => void) {
  const query = window.matchMedia(desktopQuery)
  query.addEventListener("change", callback)
  return () => query.removeEventListener("change", callback)
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const reduceMotion = useReducedMotion() ?? false
  const id = useId()
  const isDesktop = useSyncExternalStore(
    subscribeToViewport,
    getDesktopSnapshot,
    getServerSnapshot
  )
  const activeProject = projects[activeIndex] ?? projects[0]
  const closeDetails = useCallback(() => setSelectedProject(null), [])

  if (!activeProject) return null

  return (
    <div className="project-showcase" data-project-showcase>
      <ol className="project-index" aria-label="Choose a project">
        {projects.map((project, index) => {
          const isActive = project === activeProject
          const triggerId = `${id}-project-${index}`
          const panelId = `${id}-preview-${index}`

          return (
            <li key={project.name} data-active={isActive}>
              <button
                id={triggerId}
                type="button"
                className="project-index-button"
                aria-label={`Preview ${project.name}`}
                aria-expanded={isDesktop ? undefined : isActive}
                aria-current={isDesktop && isActive ? "true" : undefined}
                aria-controls={isDesktop ? `${id}-desktop-preview` : panelId}
                onClick={() => setActiveIndex(index)}
                onPointerEnter={() => preload(project.image, { as: "image" })}
                onFocus={() => preload(project.image, { as: "image" })}
              >
                <span className="project-index-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-index-copy">
                  <span className="project-index-name">{project.name}</span>
                  <span className="project-index-category">
                    {project.showcaseCategory ?? project.category}
                  </span>
                </span>
                <ArrowRight
                  className="project-index-arrow"
                  aria-hidden="true"
                />
                <ChevronDown
                  className="project-index-chevron"
                  aria-hidden="true"
                />
              </button>

              {!isDesktop ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isActive}
                  className="project-mobile-preview"
                >
                  {isActive ? (
                    <ProjectPreview
                      project={project}
                      onExplore={() => setSelectedProject(project)}
                      reduceMotion={reduceMotion}
                    />
                  ) : null}
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>

      {isDesktop ? (
        <div
          id={`${id}-desktop-preview`}
          className="project-desktop-preview"
          role="region"
          aria-labelledby={`${id}-project-${activeIndex}`}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeProject.name}
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: reduceMotion ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
            >
              <ProjectPreview
                project={activeProject}
                onExplore={() => setSelectedProject(activeProject)}
                reduceMotion={reduceMotion}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}

      <p
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Showing {activeProject.name}. {activeProject.summary}
      </p>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectDetailsModal
            key={selectedProject.name}
            project={selectedProject}
            layoutIdPrefix={`${id}-details`}
            onClose={closeDetails}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
