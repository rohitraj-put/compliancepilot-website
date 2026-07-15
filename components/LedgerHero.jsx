const ROWS = [
  { company: 'India Textiles', type: 'Factory License', due: '12 Jul', tone: 'amber' },
  { company: 'Bharat Auto Components', type: 'Pollution NOC', due: 'Overdue', tone: 'red', stamped: true },
  { company: 'Nilgiri Foods & Bev.', type: 'Trade License', due: '9 Jul', tone: 'amber' },
  { company: 'Orbit Precision Tools', type: 'GST Return', due: '25 Jul', tone: 'green' },
]

const TONE = {
  amber: 'bg-signal-amberBg text-saffron-dark',
  red: 'bg-signal-redBg text-signal-red',
  green: 'bg-signal-greenBg text-signal-green',
}

export default function LedgerHero() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-border bg-paper p-5 shadow-lifted sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div>
          <div className="eyebrow">Master Register</div>
          <div className="font-display text-base font-semibold text-navy">This week, across clients</div>
        </div>
        <span className="stamp-mark hidden h-11 w-11 shrink-0 text-signal-green text-[8px] font-bold sm:flex">
          <span className="leading-tight">CP<br/>LIVE</span>
        </span>
      </div>

      <div className="mt-3 divide-y divide-border">
        {ROWS.map((row) => (
          <div key={row.company} className="flex items-center justify-between gap-3 py-3 text-sm">
            <div className="min-w-0">
              <div className="truncate font-medium text-ink">{row.company}</div>
              <div className="truncate text-xs text-muted">{row.type}</div>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ${TONE[row.tone]}`}>
              {row.due}
            </span>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[46%] z-10">
        <div className="stamp-drop -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-24 w-24 rotate-[-10deg] items-center justify-center rounded-full border-[3px] border-signal-green text-signal-green">
            <div className="text-center font-mono text-[10px] font-bold leading-tight">
              FILED<br />&amp; RENEWED
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
