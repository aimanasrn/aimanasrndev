import { Download } from "lucide-react"

import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import SplitText from "@/components/SplitText"

const professionalBackground = [
  "Software developer",
  "Government systems experience",
  "Fintech platform experience",
  "Responsive web application development",
  "Independently developed digital products",
]

const workingApproach = [
  "Translating business requirements into practical software",
  "Improving user experiences",
  "Using AI-assisted development to accelerate delivery",
  "Maintaining engineering quality",
]

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-7 text-[#C7D5E2]"
        >
          <span
            className="mt-3 size-1.5 shrink-0 rounded-full bg-[#4CC9F0]"
            aria-hidden="true"
          />
          <SplitText
            text={item}
            tag="span"
            splitType="words"
            textAlign="left"
            delay={18}
            duration={1}
            threshold={0.1}
            rootMargin="0px"
            className="min-w-0 flex-1"
          />
        </li>
      ))}
    </ul>
  )
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[70vh] border-t border-[#C7D5E2]/10 py-20 lg:py-32"
    >
      <PageContainer>
        <SplitText
          text="01 · About"
          tag="p"
          splitType="words"
          textAlign="left"
          delay={24}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="text-xs tracking-[0.35em] text-[#9CAFC3] uppercase"
        />
        <BlurText
          text="Clear thinking, maintainable systems, useful outcomes."
          tag="h2"
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.8}
          threshold={0.1}
          className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl"
        />

        <div className="mt-12 grid gap-10 border-y border-[#C7D5E2]/10 py-10 sm:grid-cols-2 sm:gap-12">
          <div>
            <SplitText
              text="Professional background"
              tag="h3"
              splitType="words"
              textAlign="left"
              delay={28}
              duration={1}
              threshold={0.1}
              rootMargin="0px"
              className="text-sm font-medium tracking-[0.18em] text-[#9CAFC3] uppercase"
            />
            <DetailList items={professionalBackground} />
          </div>

          <div>
            <SplitText
              text="Working approach"
              tag="h3"
              splitType="words"
              textAlign="left"
              delay={28}
              duration={1}
              threshold={0.1}
              rootMargin="0px"
              className="text-sm font-medium tracking-[0.18em] text-[#9CAFC3] uppercase"
            />
            <DetailList items={workingApproach} />
          </div>
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4CC9F0] px-5 py-3 text-sm font-medium text-[#07111F] transition-transform hover:-translate-y-0.5 hover:bg-[#72D5F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0]"
        >
          <SplitText
            text="Download resume"
            tag="span"
            splitType="words"
            textAlign="left"
            delay={24}
            duration={1}
            threshold={0.1}
            rootMargin="0px"
            className="leading-none"
          />
          <Download aria-hidden="true" className="size-4" strokeWidth={2} />
        </a>
      </PageContainer>
    </section>
  )
}
