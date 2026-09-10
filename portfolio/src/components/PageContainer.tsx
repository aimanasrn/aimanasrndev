import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function PageContainer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "page-container mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16",
        className
      )}
      {...props}
    />
  )
}
