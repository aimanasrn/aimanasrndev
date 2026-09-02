import { PageContainer } from "@/components/PageContainer"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] border-t border-[#C7D5E2]/10 py-20 lg:py-32"
    >
      <PageContainer>
        <p className="text-xs tracking-[0.35em] text-[#9CAFC3] uppercase">
          05 · Contact
        </p>
        <h2 className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.05em] sm:text-7xl">
          <a
            className="text-[#4CC9F0] transition-colors hover:text-[#F4F7FB]"
            href="mailto:hello@aimanasrndev.com"
          >
            Let&apos;s make something meaningful.
          </a>
        </h2>
      </PageContainer>
    </section>
  )
}
