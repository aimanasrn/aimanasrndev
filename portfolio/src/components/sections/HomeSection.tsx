import DotField from "@/components/DotField"
import BlurText from "@/components/BlurText"
import ProfileCard from "@/components/ProfileCard"
import ShinyText from "@/components/ShinyText"
import SplitText from "@/components/SplitText"

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 sm:px-12 lg:px-20"
    >
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
      <div className="pointer-events-auto absolute right-[-5rem] top-[10%] z-[2] w-[min(76vw,20rem)] opacity-55 sm:right-[-2rem] sm:top-[8%] sm:w-[min(52vw,22rem)] sm:opacity-75 lg:right-8 lg:top-1/2 lg:w-[min(26vw,23rem)] lg:-translate-y-1/2 lg:opacity-100 xl:right-20">
        <ProfileCard
          avatarUrl="/portfolioprofile-polished.png"
          miniAvatarUrl="/portfolioprofile-polished.png"
          innerGradient="linear-gradient(145deg, #0E1B2A 0%, #172A46 48%, #07111F 100%)"
          behindGlowColor="rgba(76, 201, 240, 0.72)"
          behindGlowSize="58%"
          name="Muhammad Aiman"
          title="Software Developer"
          handle="aimanasrndev"
          status="Building modern systems"
          contactText="Contact"
          onContactClick={() => {
            window.location.hash = "contact"
          }}
          className="w-full"
        />
      </div>
      <div className="pointer-events-none relative z-10 max-w-5xl">
        <p className="mb-6 text-sm font-medium tracking-[0.02em] sm:text-base">
          <ShinyText
            text="Muhammad Aiman Bin Kanasronsham"
            className="font-medium tracking-[0.02em]"
            color="#9CAFC3"
            shineColor="#F4F7FB"
            speed={3}
            spread={100}
          />
        </p>
        <h1
          aria-label="Building modern products & enterprise-grade systems."
          className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
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
            className="align-baseline font-normal italic text-[#4CC9F0]"
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
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#4CC9F0] px-5 py-3 text-sm font-medium text-[#07111F] transition-transform hover:-translate-y-0.5 hover:bg-[#72D5F5]"
          >
            View selected work <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-[#C7D5E2]/25 px-5 py-3 text-sm font-medium text-[#F4F7FB] transition-colors hover:border-[#4CC9F0] hover:text-[#4CC9F0]"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <SplitText
          text="React · TypeScript · Node.js · PostgreSQL · Laravel · DB2 · Next.js"
          tag="p"
          splitType="words"
          textAlign="left"
          className="mt-12 text-xs font-medium uppercase tracking-[0.18em] text-white/40 sm:text-sm"
          delay={20}
          duration={0.8}
        />
      </div>
    </section>
  )
}
