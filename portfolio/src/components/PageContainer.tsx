import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function PageContainer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1600px] px-6 sm:px-12 lg:px-20",
        className
      )}
      {...props}
    />
  )
}
