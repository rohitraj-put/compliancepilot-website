import Link from 'next/link'
import { IconMail, IconPhone, IconPin } from './Icons'

const COMPLIANCE_TYPES = ['GST', 'PF', 'ESI', 'Factory License', 'Fire NOC', 'Pollution NOC', 'Trade License']

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/#modules', label: 'Modules' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="stamp-mark h-9 w-9 text-saffron text-[13px] font-bold">CP</span>
              <span className="font-display text-lg font-semibold text-white">CompliancePilot</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              One register for every license, renewal, document, and regulatory task — built for
              CA firms, compliance consultants, manufacturers, and growing MSMEs across India.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:rohittech128@gmail.com" className="flex items-center gap-2 hover:text-white">
                <IconMail width={15} height={15} /> rohittech128@gmail.com
              </a>
              <a href="tel:+911140001234" className="flex items-center gap-2 hover:text-white">
                <IconPhone width={15} height={15} /> +91 858 606 5128
              </a>
              <span className="flex items-center gap-2">
                <IconPin width={15} height={15} /> Noida, India
              </span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="eyebrow !text-white/40">{col.title}</div>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/70 hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <div className="eyebrow !text-white/40">Filed under</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {COMPLIANCE_TYPES.map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-mono text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} CompliancePilot. All rights reserved.</span>
          <span className="font-mono">A product built with Agile Regulatory</span>
        </div>
      </div>
    </footer>
  )
}
