import SectionHeading from '../../components/SectionHeading'
import ModuleRow from '../../components/ModuleRow'
import MockPanel from '../../components/MockPanel'
import CTASection from '../../components/CTASection'
import {
  IconGauge, IconShield, IconBell, IconFolder, IconTasks, IconUsers, IconBolt, IconScan,
} from '../../components/Icons'

export const metadata = {
  title: 'Features — CompliancePilot',
  description: 'Every module inside CompliancePilot: dashboard, tracker, renewal calendar, document vault, tasks, consultant portal, rule engine, AI assistant, and OCR.',
}

function DashboardVisual() {
  return (
    <MockPanel title="dashboard.tsx">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Total Licenses', value: '128' },
          { label: 'Expiring Soon', value: '9', tone: 'text-saffron-dark' },
          { label: 'Overdue', value: '3', tone: 'text-signal-red' },
          { label: 'Open Tasks', value: '14' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border p-3">
            <div className="font-mono text-[10px] uppercase tracking-wide text-muted">{s.label}</div>
            <div className={`mt-1 font-display text-xl font-semibold ${s.tone || 'text-navy'}`}>{s.value}</div>
          </div>
        ))}
      </div>
    </MockPanel>
  )
}

function TrackerVisual() {
  const rows = [
    { c: 'Sanskriti Textiles', t: 'GST', s: 'Active', tone: 'bg-signal-greenBg text-signal-green' },
    { c: 'Bharat Auto', t: 'Pollution NOC', s: 'Overdue', tone: 'bg-signal-redBg text-signal-red' },
    { c: 'Orbit Precision', t: 'Factory License', s: 'Expiring', tone: 'bg-signal-amberBg text-saffron-dark' },
  ]
  return (
    <MockPanel title="compliance-tracker.tsx">
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.c + r.t} className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5 text-sm">
            <div>
              <div className="font-medium text-ink">{r.c}</div>
              <div className="text-xs text-muted">{r.t}</div>
            </div>
            <span className={`rounded-full px-2.5 py-1 font-mono text-[10.5px] font-semibold ${r.tone}`}>{r.s}</span>
          </div>
        ))}
      </div>
    </MockPanel>
  )
}

function CalendarVisual() {
  const rows = [
    { l: 'Factory License — Orbit', d: '3d left', w: '92%', c: 'bg-signal-red' },
    { l: 'GST Return — Sanskriti', d: '12d left', w: '68%', c: 'bg-saffron' },
    { l: 'ESI Filing — Bharat Auto', d: '60d left', w: '35%', c: 'bg-signal-green' },
  ]
  return (
    <MockPanel title="renewal-calendar.tsx">
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.l}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-ink/80">{r.l}</span>
              <span className="font-mono text-muted">{r.d}</span>
            </div>
            <div className="h-2 rounded-full bg-navy/[0.06]">
              <div className={`h-full rounded-full ${r.c}`} style={{ width: r.w }} />
            </div>
          </div>
        ))}
      </div>
    </MockPanel>
  )
}

function VaultVisual() {
  return (
    <MockPanel title="document-vault.tsx">
      <div className="font-mono text-[13px] leading-[2.1] text-ink/75">
        <div className="font-semibold text-navy">▸ Sanskriti Textiles</div>
        <div className="pl-4">├ GST <span className="text-muted">/ 3 files</span></div>
        <div className="pl-4">├ Factory License <span className="text-muted">/ v2</span></div>
        <div className="pl-4 text-saffron-dark">├ Fire NOC <span className="text-muted">/ v1</span></div>
        <div className="font-semibold text-navy">▸ Bharat Auto Components</div>
        <div className="pl-4">└ Pollution NOC <span className="text-muted">/ v1</span></div>
      </div>
    </MockPanel>
  )
}

function TasksVisual() {
  return (
    <MockPanel title="tasks.tsx">
      <div className="grid grid-cols-3 gap-2 text-xs">
        {[
          { title: 'Open', items: ['File PF ECR'] },
          { title: 'In Progress', items: ['Renew Factory License'] },
          { title: 'Completed', items: ['Upload Fire NOC photos'] },
        ].map((col) => (
          <div key={col.title} className="rounded-xl border border-border bg-navy/[0.02] p-2.5">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-wide text-muted">{col.title}</div>
            {col.items.map((i) => (
              <div key={i} className="rounded-lg border border-border bg-paper p-2 text-[11.5px] leading-snug text-ink/80">{i}</div>
            ))}
          </div>
        ))}
      </div>
    </MockPanel>
  )
}

function ConsultantVisual() {
  const rows = [
    { n: 'Bharat Auto Components', tag: '2 overdue', tone: 'text-signal-red' },
    { n: 'Sanskriti Textiles', tag: '1 expiring', tone: 'text-saffron-dark' },
    { n: 'Nilgiri Foods & Bev.', tag: 'On track', tone: 'text-signal-green' },
    { n: 'Orbit Precision Tools', tag: 'On track', tone: 'text-signal-green' },
  ]
  return (
    <MockPanel title="consultant-portal.tsx">
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center justify-between rounded-xl border border-border px-3.5 py-2.5 text-sm">
            <span className="font-medium text-ink">{r.n}</span>
            <span className={`font-mono text-xs font-semibold ${r.tone}`}>{r.tag}</span>
          </div>
        ))}
      </div>
    </MockPanel>
  )
}

function RuleEngineVisual() {
  return (
    <MockPanel title="rule-engine.tsx">
      <div className="font-mono text-[12.5px] leading-relaxed">
        <div className="rounded-lg bg-navy/[0.04] p-3 text-ink/70">
          {'{ "industry": "Manufacturing", "employees": 25, "state": "Uttar Pradesh" }'}
        </div>
        <div className="my-2 text-center text-muted">↓</div>
        <div className="space-y-1.5">
          {['GST Required', 'PF Required', 'ESI Required', 'Factory License Required', 'Pollution NOC Required'].map((r) => (
            <div key={r} className="rounded-lg bg-signal-greenBg px-3 py-1.5 text-[12px] font-semibold text-signal-green">{r}</div>
          ))}
        </div>
      </div>
    </MockPanel>
  )
}

function AIVisual() {
  return (
    <MockPanel title="ai-assistant.tsx">
      <div className="space-y-3">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-navy px-4 py-2.5 text-sm text-white">
          PF kab mandatory hota hai?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-paper px-4 py-2.5 text-sm text-ink/80">
          PF applies once a company crosses 20 employees. Sanskriti Textiles is at 42 — filing is required.
        </div>
      </div>
    </MockPanel>
  )
}

function OCRVisual() {
  return (
    <MockPanel title="audit-pack.tsx">
      <div className="flex items-center gap-4">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
          <IconScan width={26} height={26} />
        </span>
        <div className="text-sm">
          <div className="font-medium text-ink">Certificate_Factory_License.jpg</div>
          <div className="mt-1 text-xs text-muted">Extracted: Cert No. UP/FL/2291 · Expiry 14 Aug 2026</div>
          <button className="mt-2 rounded-full bg-saffron px-3.5 py-1.5 font-mono text-[11px] font-semibold text-navy-deep">
            Generate Audit Pack.zip
          </button>
        </div>
      </div>
    </MockPanel>
  )
}

const MODULES = [
  {
    icon: IconGauge, verb: 'See', title: 'Compliance Dashboard',
    description: 'The first screen every login sees: what’s active, what needs attention, and a single compliance score to sort clients by urgency.',
    points: ['Total licenses, expiring, and overdue counts', 'Monthly renewal volume and risk distribution', 'Scoped to one client or your whole portfolio'],
    visual: <DashboardVisual />,
  },
  {
    icon: IconShield, verb: 'Track', title: 'Compliance Tracker',
    description: 'One record per filing — GST, PF, ESI, Factory License, Fire NOC, Pollution NOC, Trade License — with status derived automatically from the expiry date.',
    points: ['Add, edit, or retire a compliance record in seconds', 'Status moves itself: Active → Expiring Soon → Overdue', 'Filter any client’s register by status'],
    visual: <TrackerVisual />, reverse: true,
  },
  {
    icon: IconBell, verb: 'Remind', title: 'Renewal Calendar',
    description: 'Every renewal, ordered by urgency, with alerts fired automatically before a deadline is missed.',
    points: ['Alerts at 90, 60, 30, and 7 days before expiry', 'A single timeline across every client', 'Nothing depends on someone remembering to check'],
    visual: <CalendarVisual />,
  },
  {
    icon: IconFolder, verb: 'Store', title: 'Document Vault',
    description: 'Every certificate and renewal form, filed under the right client and compliance type, with full version history.',
    points: ['Upload PDF, DOCX, JPG, or PNG', 'Automatic versioning — never overwrite the original', 'Folder structure mirrors your client register'],
    visual: <VaultVisual />, reverse: true,
  },
  {
    icon: IconTasks, verb: 'Assign', title: 'Task Management',
    description: 'Turn any renewal or filing into a task with a clear owner and a due date, and watch it move from open to done.',
    points: ['Assign to a consultant, HR, or an admin', 'Open → In Progress → Completed', 'Every task is tied back to its client and filing'],
    visual: <TasksVisual />,
  },
  {
    icon: IconUsers, verb: 'Manage', title: 'Consultant Portal',
    description: 'For firms managing many clients: one dashboard that ranks every company by how urgently it needs you.',
    points: ['Portfolio-wide expiring and overdue counts', 'One click to drop into a single client’s full register', 'Built for the day you’re managing a hundred clients, not ten'],
    visual: <ConsultantVisual />, reverse: true,
  },
  {
    icon: IconBolt, verb: 'Determine', title: 'Compliance Rule Engine',
    description: 'Tell it the industry, state, and headcount — it tells you exactly which filings apply, before you’ve opened a single regulation.',
    points: ['Rules stored per industry, state, and employee threshold', 'Removes guesswork for a new client onboarding', 'Feeds directly into the Compliance Tracker'],
    visual: <RuleEngineVisual />,
  },
  {
    icon: IconBolt, verb: 'Ask', title: 'AI Compliance Assistant',
    description: 'A plain-language assistant, grounded in the Rule Engine, for the questions that come up every day — in the language your team actually asks them in.',
    points: ['Answers questions like when PF or ESI applies', 'Grounded in each client’s actual data, not generic advice', 'Available inside every module, not a separate app'],
    visual: <AIVisual />, reverse: true,
  },
  {
    icon: IconScan, verb: 'Prepare', title: 'OCR & Audit Pack',
    description: 'Upload a scanned certificate and the details are pulled out automatically — and when an inspector calls, the whole file is one click away.',
    points: ['OCR extracts certificate number, license number, and expiry date', 'Compliance Score reflects what’s actually on file', 'One click generates a complete, downloadable Audit Pack'],
    visual: <OCRVisual />,
  },
]

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <div className="eyebrow !text-saffron">Every module, in detail</div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            One register. Nine ways to stay ahead of it.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Each module below writes to the same client record — so a renewal filed in the
            Tracker shows up on the Dashboard, the Calendar, and the Consultant Portal, instantly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl divide-y divide-border px-5 sm:px-8">
        {MODULES.map((m) => <ModuleRow key={m.title} {...m} />)}
      </section>

      <CTASection
        eyebrow="See it on your own clients"
        title="Bring your client list. We’ll show you the register."
        subtitle="A 20-minute walkthrough, using the compliance types you actually file."
      />
    </>
  )
}
