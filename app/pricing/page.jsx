import SectionHeading from '../../components/SectionHeading'
import PricingCard from '../../components/PricingCard'
import CTASection from '../../components/CTASection'
import { IconCheckCircle } from '../../components/Icons'
import { PLANS, COMPARISON_ROWS, PRICING_FAQ } from '../../lib/content'

export const metadata = {
  title: 'Pricing — CompliancePilot',
  description: 'CompliancePilot pricing: Starter at ₹999/month, Professional at ₹2,999/month, and Enterprise from ₹9,999/month.',
}

function Cell({ value }) {
  if (value === true) return <IconCheckCircle width={17} height={17} className="mx-auto text-signal-green" />
  if (value === false) return <span className="mx-auto block text-center text-border">—</span>
  return <span className="text-center text-sm text-ink/80">{value}</span>
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <div className="eyebrow !text-saffron">Pricing</div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            One register, priced by how many clients rely on it.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            No setup fees. No per-license surprises. Move up a tier the day your client list does.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => <PricingCard key={p.id} plan={p} featured={p.id === 'professional'} />)}
        </div>
      </section>

      <section className="border-y border-border bg-paper/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow="Compare" title="Every plan, side by side." align="center" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-paper shadow-card">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-navy/[0.02]">
                  <th className="px-5 py-4 text-left font-mono text-[11px] uppercase tracking-wide text-muted">Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className="px-5 py-4 text-center font-display text-base font-semibold text-navy">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 0 ? '' : 'bg-navy/[0.015]'}>
                    <td className="px-5 py-3.5 text-ink/85">{row.label}</td>
                    <td className="px-5 py-3.5"><Cell value={row.starter} /></td>
                    <td className="px-5 py-3.5"><Cell value={row.professional} /></td>
                    <td className="px-5 py-3.5"><Cell value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Pricing, answered." align="center" />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-paper shadow-card">
          {PRICING_FAQ.map((f) => (
            <div key={f.q} className="p-6">
              <h3 className="font-display text-base font-semibold text-navy">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Not sure which plan"
        title="Tell us your client count. We'll tell you the plan."
        subtitle="A quick call is faster than guessing between three tiers."
      />
    </>
  )
}
