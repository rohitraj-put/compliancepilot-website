export function ComplianceChip({ label }) {
  return (
    <span className="rounded-full border border-border bg-paper px-3.5 py-1.5 font-mono text-xs text-ink/70 shadow-card">
      {label}
    </span>
  )
}

export function AudienceCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-paper p-6 shadow-card">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-parchment">
        <Icon width={18} height={18} />
      </span>
      <h3 className="font-display text-base font-semibold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}
