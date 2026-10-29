import { useEffect, useId, useRef } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, Check, X } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { Project } from "@/components/projects/ProjectCard"
import AnimatedContent from "@/components/AnimatedContent"

interface ProjectDetailsModalProps {
  project: Project
  layoutIdPrefix: string
  onClose: () => void
}

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function ProjectDetailsModal({
  project,
  layoutIdPrefix,
  onClose,
}: ProjectDetailsModalProps) {
  const reduceMotion = useReducedMotion() ?? false
  const titleId = useId()
  const dialogRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== "Tab") return
      const elements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          []
      )
      const first = elements[0]
      const last = elements.at(-1)
      if (!first || !last) {
        event.preventDefault()
        return
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[250] grid overflow-y-auto px-4 py-6 sm:px-6 sm:py-10"
      data-project-modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <div
        className="project-dialog-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <motion.article
        ref={dialogRef}
        className="project-dialog"
        layoutId={`${layoutIdPrefix}-card`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25 }}
      >
        <button
          ref={closeButtonRef}
          className="project-dialog-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={19} aria-hidden="true" />
        </button>
        <AnimatedContent
          className="project-dialog-media"

          container="[data-project-modal]"
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            draggable={false}
          />
        </AnimatedContent>
        <AnimatedContent
          className="project-dialog-content"
          container="[data-project-modal]"
          staggerIndex={1}
        >
          <div>
            <h2 id={titleId}>{project.name}</h2>
            <p className="project-dialog-meta">
              {[project.category, project.status, project.year]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <p className="project-dialog-summary">
              {project.description ?? project.summary}
            </p>
            <h3>Main capabilities</h3>
            <ul className="project-capabilities">
              {project.capabilities.map((item) => (
                <li key={item}>
                  <Check size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {Boolean(project.plannedEnhancements?.length) && (
              <div className="project-planned">
                <h3>Planned enhancements</h3>
                <p>
                  Planned features; implementation has not yet been confirmed.
                </p>
                <ul>
                  {project.plannedEnhancements!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="project-dialog-technologies">
            <h3>Technology</h3>
            <ul className="tag-list">
              {project.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.href && (
              <a
                className="button button-dark"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit project
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </AnimatedContent>
      </motion.article>
    </motion.div>,
    document.body
  )
}
