export default function MockPanel({ title, children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-paper shadow-card">
      <div className="flex items-center gap-2 border-b border-border bg-navy/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-signal-red/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-saffron/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-green/60" />
        {title && <span className="ml-2 font-mono text-[11px] text-muted">{title}</span>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}
