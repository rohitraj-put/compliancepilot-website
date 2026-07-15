import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import LedgerHero from '../components/LedgerHero'
import FeatureCard from '../components/FeatureCard'
import MockPanel from '../components/MockPanel'
import PricingCard from '../components/PricingCard'
import CTASection from '../components/CTASection'
import { ComplianceChip, AudienceCard } from '../components/ComplianceChip'
import {
  IconShield, IconBell, IconFolder, IconTasks, IconUsers, IconBolt, IconScan, IconGauge,
  IconBuilding, IconFactory, IconArrowRight,
} from '../components/Icons'
import { PLANS } from '../lib/content'

const AUDIENCES = [
  { icon: IconUsers, title: 'CA Firms', description: 'Run every client’s filings from one register instead of a folder per client.' },
  { icon: IconShield, title: 'Compliance Consultants', description: 'See which client needs you today, not which spreadsheet you last opened.' },
  { icon: IconFactory, title: 'Manufacturers', description: 'Factory license, Fire NOC, Pollution NOC — tracked against real inspection dates.' },
  { icon: IconBuilding, title: 'SMEs & MSMEs', description: 'Stay audit-ready without hiring a full-time compliance officer.' },
]

const PAIN_POINTS = [
  { title: 'It lives in someone’s inbox', description: 'Renewal notices arrive by email, WhatsApp, and courier — and get lost the same three ways.' },
  { title: 'No one sees the whole picture', description: 'A partner can’t tell which of 40 clients has something overdue without calling around.' },
  { title: 'Audits start in a panic', description: 'Assembling documents for an inspector becomes a week of searching folders and forwarding emails.' },
]

const MODULES = [
  { icon: IconGauge, verb: 'See', title: 'Compliance Dashboard', description: 'Total licenses, what’s expiring, what’s overdue, and a compliance score — at a glance.' },
  { icon: IconShield, verb: 'Track', title: 'Compliance Tracker', description: 'GST, PF, ESI, Factory License, Fire NOC, Pollution NOC, Trade License — one record per filing.' },
  { icon: IconBell, verb: 'Remind', title: 'Renewal Calendar', description: 'Automatic alerts at 90, 60, 30, and 7 days before anything expires.' },
  { icon: IconFolder, verb: 'Store', title: 'Document Vault', description: 'Every certificate, versioned, organised by client and compliance type.' },
  { icon: IconTasks, verb: 'Assign', title: 'Task Management', description: 'Turn a renewal into a task with an owner, a due date, and a status.' },
  { icon: IconUsers, verb: 'Manage', title: 'Consultant Portal', description: 'One dashboard across every client you manage, ranked by urgency.' },
  { icon: IconBolt, verb: 'Determine', title: 'Compliance Rule Engine', description: 'Enter industry, state, and headcount — get the exact filings required.' },
  { icon: IconScan, verb: 'Extract', title: 'OCR & Audit Pack', description: 'Pull certificate numbers from scans and export an inspection-ready ZIP in one click.' },
]

const STEPS = [
  { n: '01', title: 'Add your clients and their licenses', description: 'Bring in every company, and log what they’re already holding — GST, PF, factory license, and the rest.' },
  { n: '02', title: 'Get alerted before anything expires', description: 'CompliancePilot watches every expiry date and tells you at 90, 60, 30, and 7 days out.' },
  { n: '03', title: 'Stay audit-ready, always', description: 'When an inspector calls, generate a complete document pack in one click instead of one week.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
          <div className="fade-up">
            <div className="eyebrow !text-saffron">Compliance, on the record</div>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              Nothing expires quietly.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">
              One platform to manage every license, renewal, document, and regulatory task
              — across every client your firm looks after.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Book a demo <IconArrowRight width={16} height={16} />
              </Button>
              <Button href="/pricing" variant="outlineLight">See pricing</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {['GST', 'PF', 'ESI', 'Factory License', 'Fire NOC', 'Pollution NOC', 'Trade License'].map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-white/55">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: '150ms' }}>
            <LedgerHero />
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Built for"
          title="Whoever owns the deadline, this is their register."
          subtitle="From a solo consultant tracking ten clients to a firm managing hundreds of filings a month."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => <AudienceCard key={a.title} {...a} />)}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-border bg-paper/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading
            eyebrow="The problem"
            title="Compliance rarely fails at the filing. It fails before that."
            subtitle="Not from not knowing the rules — from not knowing, on any given Tuesday, what's due."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-paper p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Inside CompliancePilot"
          title="Eight modules. One register."
          subtitle="Every module writes to the same client record, so nothing is ever out of sync."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => <FeatureCard key={m.title} {...m} />)}
        </div>
        <div className="mt-8">
          <Button href="/features" variant="ghost">
            See every module in detail <IconArrowRight width={16} height={16} />
          </Button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-navy/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading
            eyebrow="Getting started"
            title="Live in three steps, not three months."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                <span className="font-display text-5xl font-semibold text-navy/10">{s.n}</span>
                <h3 className="-mt-3 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-5 top-6 hidden text-navy/20 md:block">
                    <IconArrowRight width={20} height={20} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE SCORE SPOTLIGHT */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <div className="eyebrow">Know where you stand</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
              A single Compliance Score for every client.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              Missing documents, expired licenses, and overdue filings all pull the number down —
              so a partner can triage forty clients in the time it takes to open one spreadsheet.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink/85">
              <li>— Deducts for missing documents and lapsed licenses</li>
              <li>— Recalculates the moment a renewal is filed</li>
              <li>— Rolls up into the Consultant Portal across every client</li>
            </ul>
          </div>
          <MockPanel title="compliance-score.tsx">
            <div className="flex items-center gap-6">
              <div
                className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'conic-gradient(#3F7D58 0% 78%, #E3DFD3 78% 100%)' }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-paper">
                  <span className="font-display text-3xl font-semibold text-navy">78</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal-green" /> Active — 6 licenses</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-saffron" /> Expiring soon — 2</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal-red" /> Overdue — 1</div>
              </div>
            </div>
          </MockPanel>
        </div>
      </section>

      {/* CONSULTANT SPOTLIGHT */}
      <section className="border-y border-border bg-navy/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <MockPanel title="consultant-portal.tsx">
              <div className="space-y-3">
                {[
                  { name: 'Bharat Auto Components', tag: '2 overdue', tone: 'text-signal-red' },
                  { name: 'India Textiles', tag: '1 expiring', tone: 'text-saffron-dark' },
                  { name: 'Nilgiri Foods & Bev.', tag: 'On track', tone: 'text-signal-green' },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm">
                    <span className="font-medium text-ink">{row.name}</span>
                    <span className={`font-mono text-xs font-semibold ${row.tone}`}>{row.tag}</span>
                  </div>
                ))}
              </div>
            </MockPanel>
            <div>
              <div className="eyebrow">For firms &amp; consultants</div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">
                This is where a firm stops managing clients one spreadsheet at a time.
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                The Consultant Portal rolls up every client into one ranked list — who’s
                overdue, who’s expiring, and who’s simply on track — so you always know
                where to spend the next hour.
              </p>
              <Button href="/features" variant="outline" className="mt-6">
                Explore the Consultant Portal <IconArrowRight width={16} height={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Pricing" title="Plans that scale with your client list." align="center" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => <PricingCard key={p.id} plan={p} featured={p.id === 'professional'} />)}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Need something larger? <a href="/pricing" className="font-medium text-saffron-dark">Compare all plans →</a>
        </p>
      </section>

      <CTASection />
    </>
  )
}
