'use client'

import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { IconMail, IconPhone, IconPin, IconCheckCircle } from '../../components/Icons'

const INTERESTS = ['Starter', 'Professional', 'Enterprise', 'Not sure yet']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', interest: 'Not sure yet', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please share your name and email so we can get back to you.')
      return
    }
    setError('')
    // This demo form is front-end only. Wire this up to your API route,
    // form service, or CRM of choice to actually receive submissions.
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <div className="eyebrow !text-saffron">Get in touch</div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Let&rsquo;s look at your client register together.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Book a 20-minute walkthrough, or send a message and we&rsquo;ll reply within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-5">
          <div className="md:col-span-2">
            <SectionHeading eyebrow="Reach us directly" title="Prefer email or a call?" />
            <div className="mt-6 space-y-4">
              <a href="mailto:hello@CompliancePilot.app" className="flex items-center gap-3 text-sm text-ink/80 hover:text-navy">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy"><IconMail width={16} height={16} /></span>
                hello@CompliancePilot.app
              </a>
              <a href="tel:+911140001234" className="flex items-center gap-3 text-sm text-ink/80 hover:text-navy">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy"><IconPhone width={16} height={16} /></span>
                +91 11 4000 1234
              </a>
              <span className="flex items-center gap-3 text-sm text-ink/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy"><IconPin width={16} height={16} /></span>
                New Delhi, India
              </span>
            </div>
            <div className="mt-10 rounded-2xl border border-border bg-paper p-6 shadow-card">
              <div className="eyebrow">Response time</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We reply to every demo request within one business day, Monday through Saturday.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl border border-border bg-paper p-7 shadow-card sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-start gap-3 py-10 text-center sm:items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal-greenBg text-signal-green">
                    <IconCheckCircle width={24} height={24} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy">Message received.</h3>
                  <p className="max-w-sm text-sm text-muted">
                    Thanks, {form.name.split(' ')[0]}. We&rsquo;ll be in touch at {form.email} within one business day.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-muted">Full name</label>
                      <input
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Anita Rao"
                        className="w-full rounded-lg border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink outline-none focus:border-saffron"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-muted">Company</label>
                      <input
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Sanskriti Textiles Pvt Ltd"
                        className="w-full rounded-lg border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink outline-none focus:border-saffron"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-muted">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="anita@sanskritextiles.in"
                        className="w-full rounded-lg border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink outline-none focus:border-saffron"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-muted">Phone</label>
                      <input
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 98xxxxxxxx"
                        className="w-full rounded-lg border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink outline-none focus:border-saffron"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-muted">Which plan interests you?</label>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map((i) => (
                        <button
                          type="button"
                          key={i}
                          onClick={() => setForm((f) => ({ ...f, interest: i }))}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                            form.interest === i ? 'border-saffron bg-saffron/15 text-saffron-dark' : 'border-border text-ink/70 hover:border-navy/30'
                          }`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-muted">Message</label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="How many clients are you managing today, and what's slipping through?"
                      className="w-full resize-none rounded-lg border border-border bg-parchment px-3.5 py-2.5 text-sm text-ink outline-none focus:border-saffron"
                    />
                  </div>
                  {error && <p className="text-sm text-signal-red">{error}</p>}
                  <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
