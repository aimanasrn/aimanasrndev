import { Check } from "lucide-react"

import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import SplitText from "@/components/SplitText"

const expertiseAreas = [
  {
    number: "01",
    title: "Modern application development",
    description:
      "Responsive product interfaces, full-stack web applications, and practical API integrations.",
    details: [
      "React, Next.js, and TypeScript",
      "Laravel, Node.js, PHP, and REST APIs",
      "PostgreSQL, MySQL, SQLite, and Supabase",
    ],
  },
  {
    number: "02",
    title: "Enterprise & mainframe engineering",
    description:
      "Reliable backend maintenance and enhancement work in production-critical environments.",
    details: [
      "C, SQL, DB2, and CICS",
      "Data migration and production support",
      "SLA-based delivery and investigation",
    ],
  },
]

function ExpertiseColumn({
  area,
  side,
}: {
  area: (typeof expertiseAreas)[number]
  side: "left" | "right"
}) {
  return (
    <article
      className={`group/expertise relative flex min-h-0 flex-col p-7 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#102A43]/70 hover:shadow-[inset_0_0_0_1px_rgba(76,201,240,0.12)] motion-reduce:transition-none sm:p-10 lg:p-12 xl:min-h-[29rem] ${
        side === "left" ? "xl:pr-24" : "xl:pl-24"
      }`}
    >
      <SplitText
        text={area.number}
        tag="p"
        splitType="chars"
        textAlign="left"
        delay={36}
        duration={1}
        threshold={0.1}
        rootMargin="0px"
        className="text-xs font-semibold tracking-[0.28em] text-[#4CC9F0] transition-colors duration-300 group-hover/expertise:text-[#72D5F5] motion-reduce:transition-none"
      />

      <div className="mt-6">
        <SplitText
          text={area.title}
          tag="h3"
          splitType="words"
          textAlign="left"
          delay={28}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="max-w-lg text-2xl leading-tight font-medium tracking-[-0.035em] text-[#F4F7FB] transition-colors duration-300 group-hover/expertise:text-[#4CC9F0] motion-reduce:transition-none lg:text-3xl"
        />
      </div>

      <div className="mt-5">
        <SplitText
          text={area.description}
          tag="p"
          splitType="words"
          textAlign="left"
          delay={18}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="max-w-xl text-base leading-7 text-[#9CAFC3] transition-colors duration-300 group-hover/expertise:text-[#C7D5E2] motion-reduce:transition-none"
        />
      </div>

      <ul className="mt-8 space-y-4 xl:mt-auto xl:pt-10">
        {area.details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-3 text-sm leading-6 text-[#C7D5E2] transition-colors duration-300 group-hover/expertise:text-[#F4F7FB] motion-reduce:transition-none sm:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-[#4CC9F0]/35 bg-[#4CC9F0]/10 text-[#4CC9F0] transition-colors duration-300 group-hover/expertise:border-[#4CC9F0]/75 group-hover/expertise:bg-[#4CC9F0]/20 group-hover/expertise:text-[#72D5F5] motion-reduce:transition-none"
            >
              <Check className="size-3" strokeWidth={2.5} />
            </span>
            <SplitText
              text={detail}
              tag="span"
              splitType="words"
              textAlign="left"
              delay={16}
              duration={1}
              threshold={0.1}
              rootMargin="0px"
              className="min-w-0 flex-1"
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="min-h-[70vh] border-t border-[#C7D5E2]/10 py-20 lg:py-32"
    >
      <PageContainer>
        <SplitText
          text="02 · Expertise"
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
          text="Two connected strengths."
          tag="h2"
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.8}
          threshold={0.1}
          className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl"
        />

        <AnimatedContent
          distance={56}
          duration={1}
          ease="power3.out"
          scale={0.98}
          threshold={0.08}
          className="mt-12"
        >
          <div className="grid overflow-hidden rounded-[2rem] border border-[#C7D5E2]/15 bg-[#0E1B2A]/95 shadow-[0_30px_100px_rgba(0,0,0,0.22)] xl:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]">
            <ExpertiseColumn area={expertiseAreas[0]} side="left" />

            <div className="relative z-20 h-24 xl:h-auto xl:w-px">
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-0 h-px w-full bg-[#C7D5E2]/15 xl:top-0 xl:left-1/2 xl:h-full xl:w-px"
              />
              <div
                role="img"
                aria-label="Building the bridge — Product to production"
                className="absolute top-1/2 left-1/2 z-10 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#4CC9F0]/45 bg-[#07111F] px-3 text-center shadow-[0_0_0_10px_rgba(14,27,42,0.95),0_14px_40px_rgba(0,0,0,0.35)] sm:size-36"
              >
                <span className="whitespace-nowrap text-[10px] leading-tight font-medium text-[#9CAFC3] sm:text-xs">
                  Building the bridge
                </span>
                <span className="mt-1 whitespace-nowrap text-[10px] leading-tight font-semibold text-[#4CC9F0] sm:text-xs">
                  Product to Production
                </span>
              </div>
            </div>

            <ExpertiseColumn area={expertiseAreas[1]} side="right" />
          </div>
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}
