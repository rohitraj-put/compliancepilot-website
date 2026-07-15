import SectionHeading from '../../components/SectionHeading'
import CTASection from '../../components/CTASection'
import { AudienceCard } from '../../components/ComplianceChip'
import { IconUsers, IconShield, IconFactory, IconBuilding, IconGauge, IconLayers } from '../../components/Icons'

export const metadata = {
  title: 'About — CompliancePilot',
  description: 'Why CompliancePilot exists: one register for every license, renewal, and filing, built out of years of hands-on regulatory filing work.',
}

const AUDIENCES = [
  { icon: IconUsers, title: 'CA Firms', description: 'Firms running compliance for dozens of clients, tired of one spreadsheet per client.' },
  { icon: IconShield, title: 'Compliance Consultants', description: 'Independent consultants who need to know, every morning, exactly who needs them.' },
  { icon: IconFactory, title: 'Manufacturers', description: 'Factories juggling Factory License, Fire NOC, and Pollution NOC against real inspection cycles.' },
  { icon: IconBuilding, title: 'SMEs & MSMEs', description: 'Growing businesses that need to look audit-ready without a full compliance department.' },
]

const VALUES = [
  { icon: IconGauge, title: 'Visibility over volume', description: 'A dashboard is only useful if it tells you what to do next. Every screen in CompliancePilot is built around that one question.' },
  { icon: IconLayers, title: 'One register, not five tools', description: 'Licenses, documents, tasks, and clients live in the same system — so nothing is ever true in one place and stale in another.' },
  { icon: IconShield, title: 'Built for how filings actually work', description: 'Renewal cycles, inspection timelines, and document versions — modelled on real regulatory work, not a generic project tracker.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <div className="eyebrow !text-saffron">Why CompliancePilot</div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Built by people who’ve filed these renewals by hand.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            CompliancePilot grew out of our own work managing GST, BIS certification,
            and EPR filings for Indian manufacturers — built first to solve our internal client register,
            then opened up to other firms facing the same challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="The vision"
          title="One platform to manage every license, renewal, document, and regulatory task."
        />
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted">
          Regulatory compliance in India rarely fails because a rule was misunderstood. It fails
          because a renewal notice sat in the wrong inbox, a certificate lived on someone’s laptop,
          or a partner had no way to see, across forty clients, which one needed attention today.
          CompliancePilot exists to make that visibility the default, not a monthly scramble.
        </p>
      </section>

      <section className="border-y border-border bg-paper/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow="What we believe" title="Three ideas the product is built around." />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-paper p-6 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <v.icon width={19} height={19} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Who it's for" title="If a deadline is your responsibility, this is your register." align="center" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => <AudienceCard key={a.title} {...a} />)}
        </div>
      </section>

      <CTASection
        eyebrow="Come see it"
        title="Bring your hardest client. We'll show you where it fits."
        subtitle="No slide deck — a working walkthrough on your own compliance types."
      />
    </>
  )
}
