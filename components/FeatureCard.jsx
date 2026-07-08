export default function FeatureCard({ icon: Icon, verb, title, description }) {
  return (
    <div className="group rounded-2xl border border-border bg-paper p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lifted">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy group-hover:bg-saffron/15 group-hover:text-saffron-dark">
          <Icon width={19} height={19} />
        </span>
        {verb && <span className="eyebrow">{verb}</span>}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}
