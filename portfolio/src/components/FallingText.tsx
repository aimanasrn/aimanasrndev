import { useEffect, useRef, type ReactNode } from "react"
import Matter from "matter-js"

function chipTextColor(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    ?.map((channel) => {
      const value = parseInt(channel, 16) / 255
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    }) ?? [0, 0, 0]
  const luminance =
    channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
  return luminance > 0.179 ? "#07111F" : "#FFFFFF"
}

interface FallingTextProps {
  text?: string
  items?: readonly { name: string; icon: ReactNode; color?: string }[]
  trigger?: "auto" | "scroll" | "click" | "hover"
  gravity?: number
}

export default function FallingText({
  text = "",
  items,
  trigger = "auto",
  gravity = 0.8,
}: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const chips = Array.from(
      container.querySelectorAll<HTMLElement>("[data-chip]")
    )
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let dispose = () => {}
    let activated = trigger === "auto"
    const reset = () => {
      dispose()
      chips.forEach((chip) => {
        chip.style.position = ""
        chip.style.left = ""
        chip.style.top = ""
        chip.style.transform = ""
        chip.style.width = ""
        chip.style.height = ""
        chip.style.willChange = ""
      })
      if (!activated || media.matches) return
      const bounds = container.getBoundingClientRect()
      const { width, height } = bounds
      if (!width || !height) return
      const engine = Matter.Engine.create({ enableSleeping: true })
      engine.gravity.y = gravity
      // Measure the complete grid before taking any cards out of flex layout.
      const layouts = chips.map((chip) => {
        const rect = chip.getBoundingClientRect()
        return {
          x: rect.left - bounds.left,
          y: rect.top - bounds.top,
          width: rect.width,
          height: rect.height,
        }
      })
      const bodies = layouts.map(({ x, y, width, height }, index) => {
        const body = Matter.Bodies.rectangle(
          x + width / 2,
          y + height / 2,
          width,
          height,
          {
            restitution: 0.2,
            friction: 0.65,
            frictionAir: 0.035,
            chamfer: { radius: 10 },
          }
        )
        // A small sideways drift keeps the drop from forming rigid columns.
        Matter.Body.setVelocity(body, { x: Math.sin(index * 1.7) * 0.35, y: 0 })
        return body
      })
      Matter.Composite.add(engine.world, [
        ...bodies,
        Matter.Bodies.rectangle(width / 2, height + 25, width + 100, 50, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(-25, height / 2, 50, height, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(width + 25, height / 2, 50, height, {
          isStatic: true,
        }),
        Matter.Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true }),
      ])
      chips.forEach((chip, index) => {
        Object.assign(chip.style, {
          position: "absolute",
          left: "0",
          top: "0",
          width: `${layouts[index].width}px`,
          height: `${layouts[index].height}px`,
          willChange: "transform",
        })
      })
      const draw = () =>
        bodies.forEach((body, index) => {
          const { width, height } = layouts[index]
          chips[index].style.transform =
            `translate3d(${body.position.x - width / 2}px, ${body.position.y - height / 2}px, 0) rotate(${body.angle}rad)`
        })
      draw()
      Matter.Events.on(engine, "afterUpdate", draw)
      let drag: Matter.Constraint | undefined
      const release = () => {
        if (drag) Matter.Composite.remove(engine.world, drag)
        drag = undefined
      }
      const point = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect()
        return { x: event.clientX - rect.left, y: event.clientY - rect.top }
      }
      const down = (event: PointerEvent) => {
        // Preserve touch scrolling through the box on mobile.
        if (event.pointerType !== "mouse" || event.button !== 0) return
        const position = point(event)
        const body = Matter.Query.point(bodies, position)[0]
        if (!body) return
        release()
        Matter.Sleeping.set(body, false)
        drag = Matter.Constraint.create({
          pointA: position,
          bodyB: body,
          stiffness: 0.15,
          length: 0,
        })
        Matter.Composite.add(engine.world, drag)
        container.setPointerCapture(event.pointerId)
      }
      const move = (event: PointerEvent) => {
        if (drag) drag.pointA = point(event)
      }
      container.addEventListener("pointerdown", down)
      container.addEventListener("pointermove", move)
      container.addEventListener("pointerup", release)
      container.addEventListener("pointercancel", release)
      container.addEventListener("lostpointercapture", release)
      const runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)
      dispose = () => {
        Matter.Runner.stop(runner)
        Matter.Events.off(engine, "afterUpdate", draw)
        Matter.Composite.clear(engine.world, false)
        Matter.Engine.clear(engine)
        container.removeEventListener("pointerdown", down)
        container.removeEventListener("pointermove", move)
        container.removeEventListener("pointerup", release)
        container.removeEventListener("pointercancel", release)
        container.removeEventListener("lostpointercapture", release)
      }
    }
    const activate = () => {
      if (activated) return
      activated = true
      reset()
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && trigger === "scroll") activate()
      },
      { threshold: 0.25 }
    )
    observer.observe(container)
    const resize = new ResizeObserver(reset)
    resize.observe(container)
    media.addEventListener("change", reset)
    if (trigger === "click") container.addEventListener("click", activate)
    if (trigger === "hover") container.addEventListener("mouseenter", activate)
    if (trigger === "hover") container.addEventListener("click", activate)
    return () => {
      dispose()
      observer.disconnect()
      resize.disconnect()
      media.removeEventListener("change", reset)
      container.removeEventListener("mouseenter", activate)
      container.removeEventListener("click", activate)
    }
  }, [text, items, trigger, gravity])
  const tokens: readonly { name: string; icon: ReactNode; color?: string }[] =
    items ??
    text
      .split(" ")
      .filter(Boolean)
      .map((name) => ({ name, icon: null }))
  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-wrap content-start justify-center gap-3 overflow-hidden p-5 sm:gap-4 sm:p-10"
      role="list"
      aria-label="Technologies I use"
    >
      {tokens.map(({ name, icon, color }, index) => (
        <div
          key={`${name}-${index}`}
          data-chip
          role="listitem"
          style={
            color
              ? {
                  backgroundColor: color,
                  borderColor: `${color}cc`,
                  color: chipTextColor(color),
                }
              : undefined
          }
          className="inline-flex shrink-0 cursor-grab items-center gap-2.5 rounded-2xl border bg-white px-4 py-3 text-sm font-medium whitespace-nowrap text-[#171714] select-none active:cursor-grabbing sm:text-base"
        >
          {icon}
          {name}
        </div>
      ))}
    </div>
  )
}
