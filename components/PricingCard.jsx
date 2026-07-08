import { IconCheckCircle } from './Icons'
import Button from './Button'

export default function PricingCard({ plan, featured = false }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${
        featured ? 'border-saffron bg-navy text-white shadow-lifted' : 'border-border bg-paper shadow-card'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-saffron px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wide text-navy-deep">
          Most filed
        </span>
      )}
      <div className={`eyebrow ${featured ? '!text-saffron' : ''}`}>{plan.name}</div>
      <div className={`mt-3 font-display text-4xl font-semibold ${featured ? 'text-white' : 'text-navy'}`}>
        ₹{plan.price.toLocaleString('en-IN')}
        <span className={`text-base font-normal ${featured ? 'text-white/50' : 'text-muted'}`}> /month</span>
      </div>
      <p className={`mt-2 text-sm ${featured ? 'text-white/60' : 'text-muted'}`}>{plan.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <IconCheckCircle width={17} height={17} className={`mt-0.5 shrink-0 ${featured ? 'text-saffron' : 'text-signal-green'}`} />
            <span className={featured ? 'text-white/85' : 'text-ink/85'}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={featured ? 'primary' : 'outline'}
        className="mt-7 w-full justify-center"
      >
        {plan.cta}
      </Button>
    </div>
  )
}
