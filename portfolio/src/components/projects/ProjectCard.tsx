import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface Project {
  name: string
  category: string
  status?: string
  year: number
  capabilities: readonly string[]
  technologies: readonly string[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  href?: string
}

interface ProjectCardProps {
  project: Project
  rotationClassName?: string
  reduceMotion: boolean
  isActive?: boolean
  linkEnabled?: boolean
  layoutIdPrefix?: string
}

export function ProjectCard({
  project,
  rotationClassName = "",
  reduceMotion,
  isActive = true,
  linkEnabled = true,
  layoutIdPrefix,
}: ProjectCardProps) {
  const projectType = [project.category, project.status]
    .filter(Boolean)
    .join(" · ")
  const shouldRenderLink = Boolean(project.href && linkEnabled)

  const content = (
    <>
      <motion.div
        layoutId={layoutIdPrefix ? `${layoutIdPrefix}-image` : undefined}
        className="relative aspect-[16/10] overflow-hidden border-b border-[#C7D5E2]/14 bg-[#07111F]"
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={cn(
            "h-full w-full object-cover object-top transition-transform duration-700 ease-out select-none [-webkit-user-drag:none] motion-reduce:transition-none",
            isActive &&
              "group-focus-within:scale-[1.035] group-hover:scale-[1.035]"
          )}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#07111F]/35 to-transparent"
        />
      </motion.div>

      <div className="min-h-[9.25rem] bg-[#0B1726] px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <motion.h3
              layoutId={layoutIdPrefix ? `${layoutIdPrefix}-title` : undefined}
              className="truncate text-xl leading-none font-semibold tracking-[-0.035em] text-[#F4F7FB] sm:text-2xl"
            >
              {project.name}
            </motion.h3>
            <p className="mt-2 font-mono text-[0.68rem] leading-5 tracking-[0.08em] text-[#9CAFC3] uppercase sm:text-xs">
              {projectType}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 font-mono text-xs tracking-[0.12em] text-[#9CAFC3]">
            <span>{project.year}</span>
            {shouldRenderLink ? (
              <ArrowUpRight aria-hidden="true" className="size-4" />
            ) : null}
          </div>
        </div>

        <p className="mt-4 line-clamp-1 text-xs leading-5 text-[#C7D5E2] sm:text-sm">
          {project.capabilities.join(" · ")}
        </p>
        <p className="mt-1.5 line-clamp-1 font-mono text-[0.65rem] leading-4 text-[#6F859C] sm:text-[0.7rem]">
          {project.technologies.join(" / ")}
        </p>
      </div>
    </>
  )

  return (
    <motion.article
      layoutId={layoutIdPrefix ? `${layoutIdPrefix}-card` : undefined}
      data-project-card={project.name}
      data-project-active={isActive ? "true" : "false"}
      whileHover={
        reduceMotion || !isActive
          ? undefined
          : {
              y: -10,
              scale: 1.018,
              rotate: 0,
            }
      }
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative transform-gpu overflow-hidden rounded-[1.35rem] border border-[#C7D5E2]/18 bg-[#0B1726] shadow-[0_28px_70px_rgba(0,0,0,0.34)] transition-[border-color,box-shadow] duration-300 hover:border-[#4CC9F0]/38 hover:shadow-[0_34px_85px_rgba(0,0,0,0.42)] motion-reduce:transform-none motion-reduce:transition-none",
        rotationClassName
      )}
    >
      {shouldRenderLink ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} project`}
          className="block rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#4CC9F0]"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  )
}
