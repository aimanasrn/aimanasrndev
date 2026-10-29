import {
  Building2,
  Code2,
  Link2,
  Monitor,
  Rocket,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react"
import type { DevelopmentService } from "@/content/services"

export const serviceIcons: Record<DevelopmentService["icon"], LucideIcon> = {
  link: Link2,
  rocket: Rocket,
  business: Monitor,
  building: Building2,
  shopping: ShoppingCart,
  system: Code2,
}
