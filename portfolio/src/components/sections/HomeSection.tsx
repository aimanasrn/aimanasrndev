import AnimatedContent from "@/components/AnimatedContent"
import PatternWaves from "@/components/PatternWaves"
import BlurText from "@/components/BlurText"
import { PageContainer } from "@/components/PageContainer"
import ShinyText from "@/components/ShinyText"
import SplitText from "@/components/SplitText"
import StarBorder from "@/components/StarBorder"

export function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <PatternWaves
          preset="silk"
          color="#4CC9F0"
          backgroundColor="#07111F"
          opacity={0.65}
          spacing={10}
          speed={0.3}
          fade="bottom"
          fadeSize={0.35}
          cursorStrength={0.35}
          intro={false}
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.65),rgba(7,17,31,0.12)),linear-gradient(0deg,#07111F,transparent_25%)]" />
      <PageContainer className="hero-layout relative z-[1]">
        <div className="hero-portrait pointer-events-auto">
          <AnimatedContent
            direction="horizontal"
            distance={96}
            duration={1.1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.94}
            threshold={0.1}
            delay={0.15}
            className="h-full w-full"
          >
            <div
              className="hero-photo aspect-square w-full overflow-hidden rounded-full border border-[#C7D5E2]/18 bg-[#0E1B2A] shadow-[0_24px_80px_rgba(7,17,31,0.55)]"
            >
              <img
                src="/aimanasrndevprofile.png"
                alt="Muhammad Aiman"
                width={1254}
                height={1254}
                fetchPriority="high"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </AnimatedContent>
        </div>
        <div className="hero-copy relative z-10 min-w-0">
          <p className="mb-6 text-sm font-medium tracking-[0.02em] sm:text-base">
            <ShinyText
              className="font-medium tracking-[0.02em]"
              color="#9CAFC3"
              shineColor="#F4F7FB"
              speed={3}
              spread={100}
            >
              <SplitText
                text="Muhammad Aiman Bin Kanasronsham"
                tag="span"
                splitType="words"
                textAlign="left"
                delay={30}
                duration={1}
                className="font-medium tracking-[0.02em]"
              />
            </ShinyText>
          </p>
          <h1
            aria-label="Building modern products & enterprise-grade systems."
            className="hero-title font-medium"
          >
            <BlurText
              text="Building"
              tag="span"
              className="align-baseline"
              delay={75}
              stepDuration={0.9}
            />{" "}
            <BlurText
              text="modern products"
              tag="span"
              className="align-baseline font-normal text-[#4CC9F0] italic"
              delay={75}
              stepDuration={0.9}
            />{" "}
            <BlurText
              text="& enterprise-grade systems."
              tag="span"
              className="align-baseline"
              delay={75}
              stepDuration={0.9}
            />
          </h1>
          <SplitText
            text="Software Developer, Full-Stack Developer, Mainframe Backend Developer and AI-Assisted System Builder based in Malaysia."
            tag="p"
            splitType="words"
            textAlign="left"
            className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            delay={25}
            duration={0.9}
          />
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
            <AnimatedContent
              distance={28}
              duration={0.8}
              ease="power3.out"
              threshold={0.1}
              delay={0.35}
              className="inline-flex"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#4CC9F0] px-5 py-3 text-sm font-medium text-[#07111F] transition-transform hover:-translate-y-0.5 hover:bg-[#72D5F5]"
              >
                View selected work <span aria-hidden="true">↗</span>
              </a>
            </AnimatedContent>
            <AnimatedContent
              distance={28}
              duration={0.8}
              ease="power3.out"
              threshold={0.1}
              delay={0.5}
              className="inline-flex"
            >
              <StarBorder
                as="a"
                href="#contact"
                color="#4CC9F0"
                secondaryColor="#7B61FF"
                speed="5s"
                backgroundColor="transparent"
                textColor="#F4F7FB"
                borderColor="rgba(199, 213, 226, 0.25)"
                className="rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </StarBorder>
            </AnimatedContent>
          </div>
          <SplitText
            text="React · Next.js · Vue · Nuxt · Angular · Laravel · PostgreSQL"
            tag="p"
            splitType="words"
            textAlign="left"
            className="mt-12 text-xs font-medium tracking-[0.18em] text-white/40 uppercase sm:text-sm"
            delay={20}
            duration={0.8}
          />
        </div>
      </PageContainer>
    </section>
  )
}
