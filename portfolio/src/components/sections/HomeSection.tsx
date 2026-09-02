import AnimatedContent from "@/components/AnimatedContent"
import DotField from "@/components/DotField"
import BlurText from "@/components/BlurText"
import GlareHover from "@/components/GlareHover"
import { PageContainer } from "@/components/PageContainer"
import ShinyText from "@/components/ShinyText"
import SplitText from "@/components/SplitText"
import StarBorder from "@/components/StarBorder"

export function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <DotField
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        dotRadius={1.4}
        dotSpacing={16}
        cursorRadius={280}
        cursorForce={0.08}
        glowRadius={220}
        gradientFrom="rgba(76, 201, 240, 0.42)"
        gradientTo="rgba(123, 97, 255, 0.16)"
        glowColor="#4CC9F0"
        waveAmplitude={0.35}
        sparkle
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_22%,rgba(76,201,240,0.14),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(123,97,255,0.12),transparent_28%)]" />
      <PageContainer className="relative z-[1] flex min-h-screen items-end pt-32 pb-16">
        <div className="pointer-events-auto absolute top-[10%] right-[-5rem] z-[2] w-[min(76vw,20rem)] opacity-55 sm:top-[8%] sm:right-[-2rem] sm:w-[min(52vw,22rem)] sm:opacity-75 lg:top-1/2 lg:right-20 lg:w-[min(26vw,23rem)] lg:-translate-y-1/2 lg:opacity-100">
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
            <GlareHover
              width="100%"
              height="auto"
              background="#0E1B2A"
              borderRadius="28px"
              borderColor="rgba(199, 213, 226, 0.18)"
              glareColor="#4CC9F0"
              glareOpacity={0.5}
              glareAngle={-35}
              glareSize={140}
              transitionDuration={900}
              className="aspect-[4/5] shadow-[0_24px_80px_rgba(7,17,31,0.55)]"
            >
              <img
                src="/professionalProfile1.png"
                alt="Muhammad Aiman"
                className="h-full w-full object-cover"
              />
            </GlareHover>
          </AnimatedContent>
        </div>
        <div className="pointer-events-none relative z-10 max-w-5xl">
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
            className="max-w-5xl text-5xl leading-[0.95] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl"
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
            text="React · TypeScript · Node.js · PostgreSQL · Laravel · DB2 · Next.js"
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
