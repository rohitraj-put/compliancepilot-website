'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { IconMenu, IconClose } from './Icons'

const NAV = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="stamp-mark h-9 w-9 text-navy text-[13px] font-bold">CP</span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-navy">CompliancePilot</span>
            <span className="eyebrow !text-muted mt-0.5">Regulatory Register</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink/80 hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">Book a demo</Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-parchment px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 justify-center" onClick={() => setOpen(false)}>
              Book a demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
