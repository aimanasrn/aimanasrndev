import { ArrowDown, ArrowUpRight, Code2, MessageCircle } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import { PageContainer } from "@/components/PageContainer"
import StarBorder from "@/components/StarBorder"
import { business } from "@/content/business"

export function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-heading">
      <PageContainer className="services-hero-layout">
        <AnimatedContent className="services-hero-copy">
          <p className="section-label">Web development services</p>
          <h1 id="services-heading" tabIndex={-1}>
            Digital solutions.
            <br />
            <span className="highlight">Built for your business.</span>
          </h1>
          <p className="services-hero-description">
            From personal websites and landing pages to e-commerce platforms and
            custom management systems, I build modern digital solutions that
            help businesses establish their online presence, streamline
            operations, and grow.
          </p>
          <p className="services-starting-price">
            Websites starting from <strong>RM199</strong>
          </p>
          <div className="services-hero-actions">
            <a
              className="button button-dark"
              href={business.whatsappUrl || "#contact"}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Discuss your project
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <StarBorder
              as="a"
              className="button button-outline"
              href="#services-overview"
            >
              Explore services
              <ArrowDown size={17} aria-hidden="true" />
            </StarBorder>
          </div>
          <p className="services-hero-audience">
            Personal brands<span aria-hidden="true">·</span>Growing businesses
            <span aria-hidden="true">·</span>Custom workflows
          </p>
        </AnimatedContent>
        <AnimatedContent className="services-hero-media" staggerIndex={1}>
          <div className="services-hero-halo" aria-hidden="true" />
          <p className="services-hero-note" aria-hidden="true">
            Your next chapter, online.
            <svg viewBox="0 0 100 50" fill="none">
              <path
                d="M94 7C56 2 23 13 13 39m0 0-5-13m5 13 15-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <figure className="services-hero-browser">
            <div className="services-browser-toolbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="services-browser-address">
                DidikFlow · Education management
              </span>
            </div>
            <img
              src="/projects/didikflowdashboard.webp"
              alt="DidikFlow, an education management dashboard built by Aiman"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <figcaption>Real work. Built around real needs.</figcaption>
          </figure>
          <div
            className="services-phone-preview"
            aria-label="Illustrative personal mini website preview"
          >
            <div className="services-phone-speaker" aria-hidden="true" />
            <Code2 size={20} aria-hidden="true" />
            <span className="services-phone-brand">aimanasrn.dev</span>
            <img
              src="/aimanasrndevprofile.webp"
              alt=""
              width={1254}
              height={1254}
            />
            <strong>Muhammad Aiman</strong>
            <span>Software Developer</span>
            <span className="services-phone-action">
              Selected work
              <ArrowUpRight size={12} aria-hidden="true" />
            </span>
            <span className="services-phone-link">Let’s build something.</span>
          </div>
        </AnimatedContent>
      </PageContainer>
    </section>
  )
}
