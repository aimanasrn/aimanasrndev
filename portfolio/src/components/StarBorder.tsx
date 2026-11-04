import type {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type StarBorderProps<T extends ElementType> = Omit<
  ComponentPropsWithRef<T>,
  "as" | "color"
> & {
  as?: T
  className?: string
  children?: ReactNode
  color?: string
  secondaryColor?: string
  speed?: CSSProperties["animationDuration"]
  thickness?: number
  backgroundColor?: string
  textColor?: string
  borderColor?: string
}

export default function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color = "var(--accent)",
  secondaryColor = color,
  speed = "6s",
  thickness = 2,
  backgroundColor = "var(--surface)",
  textColor = "var(--fg)",
  borderColor = "var(--border-strong)",
  children,
  style,
  ...rest
}: StarBorderProps<T>) {
  const Component: ElementType = as || "button"
  return (
    <Component
      {...(Component === "button" ? { type: "button" } : {})}
      {...rest}
      className={cn("star-border", className)}
      style={
        {
          "--star-border-color": color,
          "--star-border-secondary-color": secondaryColor,
          "--star-border-speed": speed,
          "--star-border-thickness": `${thickness}px`,
          "--star-border-background": backgroundColor,
          "--star-border-text": textColor,
          "--star-border-base": borderColor,
          ...style,
        } as CSSProperties
      }
    >
      <span aria-hidden="true" className="star-border-glow" />
      <span className="star-border-content">{children}</span>
    </Component>
  )
}
