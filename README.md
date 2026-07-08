# CompliancePilot — Marketing Website

A responsive, branded marketing site for CompliancePilot, built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Pages

- `/` — Home: hero, target audiences, the problem, all 8 modules, how it works, compliance score spotlight, consultant portal spotlight, pricing preview, CTA
- `/features` — Deep dive on every module (Dashboard, Tracker, Renewal Calendar, Document Vault, Task Management, Consultant Portal, Rule Engine, AI Assistant, OCR & Audit Pack)
- `/pricing` — Starter / Professional / Enterprise plans, full feature comparison table, pricing FAQ
- `/about` — Product vision, values, and who it's built for
- `/contact` — Contact details + a working front-end form (see note below)

## Design system

- **Colors** — deep navy (`#14213D`) + parchment (`#F7F5EF`) as the base, saffron (`#E8963C`) as the single accent, with green/amber/red used only for compliance status.
- **Type** — Fraunces (display/serif headlines), Inter (body), IBM Plex Mono (labels, data, eyebrows) — loaded via `next/font/google`.
- **Signature element** — the "Master Register" ledger card in the hero: a stamp animates onto a row on page load, tying the visual directly to the product's core promise ("nothing expires quietly").

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

This is a fully static-friendly Next.js app — deploy to Vercel, Netlify, or any Node host.

## Wiring up the contact form

`app/contact/page.jsx` currently only manages form state in the browser (no data is sent anywhere). To make it functional:

1. Add a Next.js API route (e.g. `app/api/contact/route.js`) that emails you or writes to a database/CRM.
2. In `handleSubmit`, replace the `setSubmitted(true)` call with a `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` call, and only show the success state once that request resolves.
3. Alternatively, point the form at a third-party form service (Formspree, Resend, etc.) using their submission endpoint.

## Project structure

```
app/
  layout.jsx        Root layout, fonts, header/footer
  page.jsx           Home
  features/page.jsx
  pricing/page.jsx
  about/page.jsx
  contact/page.jsx
  globals.css
components/          Header, Footer, Button, SectionHeading, LedgerHero,
                     FeatureCard, ModuleRow, MockPanel, PricingCard,
                     ComplianceChip, CTASection, Icons
lib/content.js       Shared pricing/plan data used across pages
```
