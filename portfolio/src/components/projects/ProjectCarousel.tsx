import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  type PanInfo,
  type Variants,
} from "motion/react"

import { ProjectCard, type Project } from "@/components/projects/ProjectCard"
import { ProjectDetailsModal } from "@/components/projects/ProjectDetailsModal"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  projects: readonly Project[]
}

type ViewportMode = "mobile" | "tablet" | "desktop"

interface DepthPose {
  x: string
  y: number
  scale: number
  rotate: number
  opacity: number
  zIndex: number
  filter: string
  interactive: boolean
}

const entranceContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.14,
    },
  },
}

const entranceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 72,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const reducedEntranceVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length
}

function getRelativeIndex(index: number, activeIndex: number, length: number) {
  let relativeIndex = wrapIndex(index - activeIndex, length)

  if (relativeIndex > length / 2) relativeIndex -= length
  if (length % 2 === 0 && relativeIndex === length / 2) {
    relativeIndex *= -1
  }

  return relativeIndex
}

function getViewportMode(): ViewportMode {
  if (typeof window === "undefined") return "desktop"
  if (window.matchMedia("(min-width: 1200px)").matches) return "desktop"
  if (window.matchMedia("(min-width: 768px)").matches) return "tablet"
  return "mobile"
}

function useViewportMode() {
  const [mode, setMode] = useState<ViewportMode>(getViewportMode)

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1200px)")
    const tabletQuery = window.matchMedia("(min-width: 768px)")
    const updateMode = () => setMode(getViewportMode())

    desktopQuery.addEventListener("change", updateMode)
    tabletQuery.addEventListener("change", updateMode)

    return () => {
      desktopQuery.removeEventListener("change", updateMode)
      tabletQuery.removeEventListener("change", updateMode)
    }
  }, [])

  return mode
}

function getDepthPose(relativeIndex: number, mode: ViewportMode): DepthPose {
  const direction = relativeIndex < 0 ? -1 : 1
  const distance = Math.abs(relativeIndex)

  if (distance === 0) {
    return {
      x: "0%",
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 50,
      filter: "brightness(1)",
      interactive: true,
    }
  }

  if (mode === "mobile") {
    if (distance === 1) {
      return {
        x: `${direction * 58}%`,
        y: 16,
        scale: 0.88,
        rotate: direction * 2.4,
        opacity: 0.56,
        zIndex: 25,
        filter: "brightness(0.64)",
        interactive: true,
      }
    }

    return {
      x: `${direction * 78}%`,
      y: 30,
      scale: 0.8,
      rotate: direction * 3.4,
      opacity: 0,
      zIndex: 5,
      filter: "brightness(0.5)",
      interactive: false,
    }
  }

  if (mode === "tablet") {
    if (distance === 1) {
      return {
        x: `${direction * 35}%`,
        y: 20,
        scale: 0.9,
        rotate: direction * 3.2,
        opacity: 0.72,
        zIndex: 30,
        filter: "brightness(0.72)",
        interactive: true,
      }
    }

    return {
      x: `${direction * 58}%`,
      y: 34,
      scale: 0.82,
      rotate: direction * 5,
      opacity: 0.38,
      zIndex: 15,
      filter: "brightness(0.58)",
      interactive: true,
    }
  }

  if (distance === 1) {
    return {
      x: `${direction * 46}%`,
      y: 20,
      scale: 0.9,
      rotate: direction * 4.2,
      opacity: 0.74,
      zIndex: 30,
      filter: "brightness(0.75)",
      interactive: true,
    }
  }

  if (distance === 2) {
    return {
      x: `${direction * 65}%`,
      y: 36,
      scale: 0.82,
      rotate: direction * 6,
      opacity: 0.42,
      zIndex: 15,
      filter: "brightness(0.58)",
      interactive: true,
    }
  }

  return {
    x: `${direction * 78}%`,
    y: 48,
    scale: 0.74,
    rotate: direction * 7,
    opacity: 0,
    zIndex: 5,
    filter: "brightness(0.48)",
    interactive: false,
  }
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const reduceMotion = useReducedMotion() ?? false
  const viewportMode = useViewportMode()
  const [activeIndex, setActiveIndex] = useState(0)
  const [entranceComplete, setEntranceComplete] = useState(reduceMotion)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null)
  const didDragRef = useRef(false)

  const projectCount = projects.length
  const normalizedActiveIndex = projectCount
    ? wrapIndex(activeIndex, projectCount)
    : 0
  const activeProject = projects[normalizedActiveIndex]
  const selectedProject =
    selectedProjectIndex === null ? null : projects[selectedProjectIndex]
  const interactionsEnabled = reduceMotion || entranceComplete

  const showPreviousProject = useCallback(() => {
    if (!interactionsEnabled || projectCount < 2) return
    setActiveIndex((index) => wrapIndex(index - 1, projectCount))
  }, [interactionsEnabled, projectCount])

  const showNextProject = useCallback(() => {
    if (!interactionsEnabled || projectCount < 2) return
    setActiveIndex((index) => wrapIndex(index + 1, projectCount))
  }, [interactionsEnabled, projectCount])

  const showProject = useCallback(
    (index: number) => {
      if (!interactionsEnabled) return
      setActiveIndex(wrapIndex(index, projectCount))
    },
    [interactionsEnabled, projectCount]
  )

  const handleCarouselKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      showPreviousProject()
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      showNextProject()
    }
  }

  const handleInactiveCardKeyDown = (
    event: ReactKeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      showProject(index)
    }
  }

  const handleDragEnd = (_event: PointerEvent, info: PanInfo) => {
    const movedFarEnough = Math.abs(info.offset.x) > 52
    const movedFastEnough = Math.abs(info.velocity.x) > 500

    if (movedFarEnough || movedFastEnough) {
      if (info.offset.x < 0) showNextProject()
      if (info.offset.x > 0) showPreviousProject()
    }

    window.setTimeout(() => {
      didDragRef.current = false
    }, 0)
  }

  const preventClickAfterDrag = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return
    event.preventDefault()
    event.stopPropagation()
  }

  const closeProjectDetails = useCallback(() => {
    setSelectedProjectIndex(null)
  }, [])

  if (!projectCount || !activeProject) return null

  return (
    <LayoutGroup id="project-showcase">
      <div className="relative" data-project-carousel>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Project {normalizedActiveIndex + 1} of {projectCount}:{" "}
          {activeProject.name}.
        </p>

        <motion.div
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected projects"
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
          variants={entranceContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative h-[29rem] touch-pan-y outline-none focus-visible:rounded-[1.5rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0] sm:h-[39rem] lg:h-[42rem] xl:h-[44rem]"
        >
          {projects.map((project, index) => {
            const relativeIndex = getRelativeIndex(
              index,
              normalizedActiveIndex,
              projectCount
            )
            const pose = getDepthPose(relativeIndex, viewportMode)
            const isActive = relativeIndex === 0
            const isHidden = !pose.interactive && pose.opacity === 0
            const isCardInteractive = pose.interactive && interactionsEnabled

            return (
              <div
                key={project.name}
                className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
              >
                <motion.div
                  variants={
                    reduceMotion
                      ? reducedEntranceVariants
                      : entranceCardVariants
                  }
                  onAnimationComplete={() => {
                    if (index === projectCount - 1) setEntranceComplete(true)
                  }}
                  className="pointer-events-none w-[calc(100%-2.75rem)] sm:w-[min(78vw,40rem)] lg:w-[min(58vw,42rem)] xl:w-[min(48vw,42rem)]"
                >
                  <motion.div
                    data-carousel-index={index}
                    data-carousel-offset={relativeIndex}
                    data-carousel-active={isActive ? "true" : "false"}
                    role={isCardInteractive ? "button" : undefined}
                    aria-label={
                      isCardInteractive
                        ? isActive
                          ? `Open ${project.name} project details`
                          : `Show ${project.name} project`
                        : undefined
                    }
                    aria-hidden={isHidden || undefined}
                    tabIndex={isCardInteractive ? 0 : -1}
                    drag={interactionsEnabled && isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.14}
                    dragMomentum={false}
                    onDragStart={() => {
                      didDragRef.current = true
                    }}
                    onDragEnd={handleDragEnd}
                    onClickCapture={preventClickAfterDrag}
                    onClick={() => {
                      if (!isCardInteractive) return
                      if (isActive) {
                        setSelectedProjectIndex(index)
                      } else {
                        showProject(index)
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return
                      event.preventDefault()

                      if (isActive) {
                        setSelectedProjectIndex(index)
                      } else {
                        handleInactiveCardKeyDown(event, index)
                      }
                    }}
                    animate={{
                      x: pose.x,
                      y: pose.y,
                      scale: pose.scale,
                      rotate: pose.rotate,
                      opacity: pose.opacity,
                      filter: pose.filter,
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 250,
                            damping: 34,
                            mass: 0.88,
                          }
                    }
                    style={{
                      zIndex: pose.zIndex,
                      pointerEvents: isCardInteractive ? "auto" : "none",
                      willChange: "transform, opacity, filter",
                    }}
                    className={cn(
                      "relative cursor-pointer focus-visible:rounded-[1.35rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0]",
                      isActive &&
                        interactionsEnabled &&
                        "cursor-grab active:cursor-grabbing"
                    )}
                  >
                    <ProjectCard
                      project={project}
                      reduceMotion={reduceMotion}
                      isActive={isActive}
                      linkEnabled={false}
                      layoutIdPrefix={`project-${index}`}
                    />
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>

        <div className="mx-auto mt-2 flex max-w-2xl items-center justify-between gap-5 px-1 sm:mt-3">
          <button
            type="button"
            onClick={showPreviousProject}
            disabled={!interactionsEnabled || projectCount < 2}
            aria-label="Previous project"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#C7D5E2]/18 bg-[#0B1726] text-[#C7D5E2] transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#4CC9F0]/50 hover:text-[#4CC9F0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4CC9F0] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>

          <div
            className="flex flex-wrap items-center justify-center gap-2.5"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => {
              const isActive = index === normalizedActiveIndex

              return (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => showProject(index)}
                  disabled={!interactionsEnabled}
                  aria-label={`Show ${project.name} project`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "h-1.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0] motion-reduce:transition-none",
                    isActive
                      ? "w-8 bg-[#4CC9F0]"
                      : "w-3 bg-[#C7D5E2]/30 hover:bg-[#C7D5E2]/55"
                  )}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={showNextProject}
            disabled={!interactionsEnabled || projectCount < 2}
            aria-label="Next project"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#C7D5E2]/18 bg-[#0B1726] text-[#C7D5E2] transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#4CC9F0]/50 hover:text-[#4CC9F0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4CC9F0] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
        <AnimatePresence>
          {selectedProject ? (
            <ProjectDetailsModal
              project={selectedProject}
              layoutIdPrefix={`project-${selectedProjectIndex}`}
              onClose={closeProjectDetails}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  )
}
