import { ArrowUpRight, Code2, Link2, Mail } from "lucide-react"

import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import SplitText from "@/components/SplitText"

const contactLinks = [
  {
    label: "Email",
    value: "aimanasrn@gmail.com",
    href: "mailto:aimanasrn@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/aimanasrn",
    href: "https://github.com/aimanasrn",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Aiman Bin Kanasronsham",
    href: "https://www.linkedin.com/in/muhammad-aiman-bin-kanasronsham-2130431b0",
    icon: Link2,
  },
] as const

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-[#C7D5E2]/10 bg-[#0B1726] py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(76,201,240,0.15),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(123,97,255,0.12),transparent_30%)]" />
      <PageContainer className="relative">
        <SplitText
          text="05 / Contact"
          tag="p"
          splitType="words"
          textAlign="left"
          delay={24}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="text-xs tracking-[0.35em] text-[#9CAFC3] uppercase"
        />
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-end">
          <div>
            <BlurText
              id="contact-heading"
              text="Let’s make something meaningful."
              tag="h2"
              animateBy="words"
              direction="bottom"
              delay={90}
              stepDuration={0.8}
              threshold={0.1}
              className="max-w-4xl text-4xl leading-[1.04] font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            />
            <p className="mt-7 max-w-xl text-base leading-7 text-[#9CAFC3] sm:text-lg">
              Have a product idea, a platform to improve, or a system challenge
              to solve? I’d be happy to talk through it.
            </p>
            <a
              href="mailto:aimanasrn@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4CC9F0] px-5 py-3 text-sm font-medium text-[#07111F] transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-[#72D5F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0]"
            >
              Start a conversation{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <AnimatedContent
            distance={40}
            duration={0.8}
            threshold={0.1}
            className="h-full"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-[#C7D5E2]/15 bg-[#0E1B2A]/95 shadow-[0_26px_80px_rgba(0,0,0,0.25)]">
              {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`group flex items-center gap-4 p-5 transition-colors hover:bg-[#102A43] sm:p-6 ${index > 0 ? "border-t border-[#C7D5E2]/10" : ""}`}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#4CC9F0]/25 bg-[#4CC9F0]/10 text-[#4CC9F0]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs tracking-[0.15em] text-[#9CAFC3] uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-sm text-[#F4F7FB] sm:text-base">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-[#4CC9F0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </PageContainer>
    </section>
  )
}
