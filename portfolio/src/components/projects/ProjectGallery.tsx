import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import type { ProjectMedia } from "@/content/projects"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  media: readonly ProjectMedia[]
  name: string
  coverAlt: string
}

export function ProjectGallery({ media, name, coverAlt }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion() ?? false
  const count = media.length
  const poster = media.find((item) => item.type === "image")?.src

  if (!count) return null

  const current = media[index]
  const show = (next: number) => setIndex((next + count) % count)
  const labelFor = (item: ProjectMedia, i: number) =>
    item.type === "video"
      ? `${name} video walkthrough`
      : item.src === poster
        ? coverAlt
        : `${name} screenshot ${i + 1} of ${count}`

  return (
    <div
      className="project-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots and video`}
      onKeyDown={(event) => {
        // Arrow keys on a focused video seek it instead of changing slides.
        if (count < 2 || event.target instanceof HTMLVideoElement) return
        if (event.key === "ArrowLeft") show(index - 1)
        if (event.key === "ArrowRight") show(index + 1)
      }}
    >
      <div className="project-gallery-stage">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={current.src}
            className="project-gallery-slide"
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduceMotion ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={poster}
                aria-label={labelFor(current, index)}
                controls
                playsInline
                muted
                loop
                // Autoplay silently like a preview, unless motion is reduced.
                autoPlay={!reduceMotion}
                preload="metadata"
              />
            ) : (
              <a
                href={current.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open screenshot ${index + 1} at full size`}
              >
                <img
                  src={current.src}
                  alt={labelFor(current, index)}
                  draggable={false}
                />
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              className="project-gallery-arrow"
              data-side="left"
              onClick={() => show(index - 1)}
              aria-label="Previous slide"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="project-gallery-arrow"
              data-side="right"
              onClick={() => show(index + 1)}
              aria-label="Next slide"
            >
              <ChevronRight aria-hidden="true" />
            </button>
            <p className="project-gallery-counter" aria-live="polite">
              {index + 1} / {count}
            </p>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="project-gallery-thumbs" aria-label="Choose a slide">
          {media.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={
                  item.type === "video"
                    ? "Show video"
                    : `Show screenshot ${i + 1}`
                }
                aria-current={i === index ? "true" : undefined}
                className={cn(i === index && "is-active")}
              >
                {item.type === "video" ? (
                  <>
                    {poster ? (
                      <img
                        src={poster}
                        alt=""
                        loading="lazy"
                        draggable={false}
                      />
                    ) : (
                      <video src={item.src} muted preload="metadata" />
                    )}
                    <span className="project-gallery-play" aria-hidden="true">
                      <Play />
                    </span>
                  </>
                ) : (
                  <img src={item.src} alt="" loading="lazy" draggable={false} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
