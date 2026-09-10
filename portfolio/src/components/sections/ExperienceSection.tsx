import { BriefcaseBusiness } from "lucide-react"

import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import SplitText from "@/components/SplitText"

const experience = [
  {
    number: "01",
    period: "Current",
    project: "Jabatan Pendaftaran Negara project environment",
    role: "Mainframe Backend Developer",
    company: "Infomina Berhad",
    description:
      "Developing and maintaining backend systems while supporting production enhancements and delivery coordination.",
    skills: ["C", "SQL", "DB2", "CICS", "Data migration"],
  },
  {
    number: "02",
    period: "Previous role",
    project: "E-Vetting 3.0 · Chief Government Security Office Malaysia",
    role: "Frontend Developer",
    company: "Fotia Solutions Sdn. Bhd.",
    description:
      "Delivered responsive Angular interfaces, API integration and usability improvements for a government-grade application.",
    skills: ["Angular", "REST APIs", "Responsive UI"],
  },
  {
    number: "03",
    period: "Previous role",
    project: "Fintech and e-commerce workflows",
    role: "Full-Stack Developer",
    company: "ToyyibPay Sdn. Bhd.",
    description:
      "Built product features across web and mobile, including payment-related workflows and delivery-platform functionality.",
    skills: ["Vue.js", "React", "React Native", "Node.js", "PHP", "MySQL"],
  },
  {
    number: "04",
    period: "Previous role",
    project: "Government system development",
    role: "Mainframe Backend Developer",
    company: "HeiTech Padu Berhad",
    description:
      "Contributed to enterprise backend maintenance, support and knowledge sharing under SLA requirements.",
    skills: ["C", "SQL", "DB2", "CICS"],
  },
] as const

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[#C7D5E2]/10 bg-[#0B1726] bg-[linear-gradient(rgba(76,201,240,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(76,201,240,0.035)_1px,transparent_1px)] bg-[size:48px_48px] py-20 sm:py-24 lg:py-32"
    >
      <PageContainer>
        <SplitText
          text="03 / Experience"
          tag="p"
          splitType="words"
          textAlign="left"
          delay={24}
          duration={1}
          threshold={0.1}
          rootMargin="0px"
          className="text-xs tracking-[0.22em] text-[#4CC9F0] uppercase"
        />
        <BlurText
          id="experience-heading"
          text="Experience across products and platforms."
          tag="h2"
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.8}
          threshold={0.1}
          className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.04em] sm:text-6xl"
        />
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#9CAFC3] sm:text-lg">
          A practical path through government systems, fintech products, and
          full-stack delivery.
        </p>

        <div className="relative mt-14 space-y-7 before:absolute before:top-6 before:bottom-6 before:left-5 before:w-px before:bg-gradient-to-b before:from-[#4CC9F0] before:via-[#4CC9F0]/35 before:to-transparent sm:before:left-8">
          {experience.map((item, index) => (
            <AnimatedContent
              key={item.company}
              distance={36}
              duration={0.75}
              delay={index * 0.08}
              threshold={0.08}
              className="relative pl-14 sm:pl-20"
            >
              <span className="absolute top-7 left-0 z-10 flex size-10 items-center justify-center rounded-full border border-[#4CC9F0]/70 bg-[#07111F] font-mono text-xs font-semibold tracking-[0.1em] text-[#4CC9F0] shadow-[0_0_0_6px_#0B1726] sm:left-3 sm:size-11">
                {item.number}
              </span>
              <article className="group flex min-h-64 flex-col rounded-[1.75rem] border border-[#C7D5E2]/15 bg-[#0E1B2A]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-[border-color,transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#4CC9F0]/50 hover:bg-[#102A43] hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)] motion-reduce:transform-none sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.16em] text-[#4CC9F0] uppercase">
                    {item.project}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] text-[#72D5F5] uppercase">
                    <BriefcaseBusiness
                      className="size-3.5"
                      aria-hidden="true"
                    />
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.035em] text-[#F4F7FB] transition-colors group-hover:text-[#4CC9F0] sm:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-2 w-fit text-base font-medium text-[#5BA9FF] underline decoration-[#5BA9FF]/30 underline-offset-4 transition-colors hover:text-[#8CC7FF] hover:decoration-[#8CC7FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4CC9F0]">
                  {item.company}
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#9CAFC3] sm:text-base">
                  {item.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-[#4CC9F0]/25 bg-[#07111F]/60 px-2.5 py-1.5 text-[11px] tracking-[0.04em] text-[#C7D5E2]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
