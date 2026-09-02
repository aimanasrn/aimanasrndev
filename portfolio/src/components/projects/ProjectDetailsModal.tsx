import { useEffect, useId, useRef } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, X } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import type { Project } from "@/components/projects/ProjectCard"

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

  const projectType = [project.category, project.status]
    .filter(Boolean)
    .join(" · ")

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

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          []
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)

      if (!firstElement || !lastElement) {
        event.preventDefault()
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  const springTransition = reduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 260,
        damping: 32,
        mass: 0.9,
      }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] grid overflow-y-auto px-4 py-6 sm:px-6 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
      data-project-modal
    >
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 cursor-default bg-[rgba(5,5,5,0.6)] backdrop-blur-[12px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
      />

      <motion.article
        ref={dialogRef}
        layoutId={`${layoutIdPrefix}-card`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 26 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={
          reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 14 }
        }
        transition={springTransition}
        className="relative z-10 m-auto w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-[#C7D5E2]/20 bg-[#0B1726] shadow-[0_40px_120px_rgba(0,0,0,0.58)] outline-none"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 grid size-11 place-items-center rounded-full border border-white/18 bg-[#07111F]/80 text-[#F4F7FB] backdrop-blur-md transition-[border-color,color,transform] duration-300 hover:scale-105 hover:border-[#4CC9F0]/55 hover:text-[#4CC9F0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4CC9F0] motion-reduce:transform-none motion-reduce:transition-none"
        >
          <X aria-hidden="true" className="size-4" />
        </button>

        <motion.div
          layoutId={`${layoutIdPrefix}-image`}
          className="relative aspect-[16/9] overflow-hidden border-b border-[#C7D5E2]/14 bg-[#07111F] sm:aspect-[16/8]"
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            draggable={false}
            className="h-full w-full object-cover object-top select-none [-webkit-user-drag:none]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B1726]/80 to-transparent"
          />
        </motion.div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)] lg:gap-12 lg:p-10">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <motion.h2
                  id={titleId}
                  layoutId={`${layoutIdPrefix}-title`}
                  className="text-3xl leading-none font-semibold tracking-[-0.045em] text-[#F4F7FB] sm:text-5xl"
                >
                  {project.name}
                </motion.h2>
                <p className="mt-3 font-mono text-[0.68rem] tracking-[0.1em] text-[#4CC9F0] uppercase sm:text-xs">
                  {projectType} · {project.year}
                </p>
              </div>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C7D5E2]/20 px-4 py-2.5 text-sm font-medium text-[#F4F7FB] transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#4CC9F0]/55 hover:text-[#4CC9F0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4CC9F0] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  Visit project
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              ) : null}
            </div>

            <div className="mt-8">
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-[#6F859C] uppercase">
                Main capabilities
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#C7D5E2] sm:grid-cols-2 sm:text-base">
                {project.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4CC9F0]"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C7D5E2]/12 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-[#6F859C] uppercase">
              Technology
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[#C7D5E2]/14 bg-[#07111F] px-3 py-1.5 font-mono text-[0.68rem] text-[#9CAFC3]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </motion.div>,
    document.body
  )
}
