import Button from './Button'

export default function CTASection({
  eyebrow = 'Get started',
  title = 'Stop chasing renewals. Start filing ahead of them.',
  subtitle = 'See how CompliancePilot fits your client register in a 20-minute walkthrough.',
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-navy-light/60 p-10 sm:p-14 md:flex-row md:items-center">
          <div className="max-w-lg">
            <div className="eyebrow !text-saffron">{eyebrow}</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 text-white/60">{subtitle}</p>
          </div>
          <div className="flex shrink-0 gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">Book a demo</Button>
            <Button href="/pricing" variant="outlineLight">See pricing</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
