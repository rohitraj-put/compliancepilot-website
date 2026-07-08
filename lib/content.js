export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 999,
    tagline: 'For a single company keeping its own register.',
    cta: 'Start with Starter',
    companies: '1 company',
    users: '5 users',
    features: [
      '1 company',
      'Up to 5 users',
      'Compliance Dashboard',
      'Compliance Tracker',
      'Renewal Calendar & alerts',
      'Document Vault (5 GB)',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 2999,
    tagline: 'For consultants and firms managing several clients.',
    cta: 'Start with Professional',
    companies: 'Up to 10 companies',
    users: 'Unlimited users',
    features: [
      'Up to 10 companies',
      'Unlimited users',
      'Everything in Starter',
      'Consultant Portal',
      'Task Management & assignment',
      'Document Vault (50 GB)',
      'Compliance Score per client',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 9999,
    tagline: 'For firms running compliance at real scale.',
    cta: 'Talk to us',
    companies: 'Unlimited companies',
    users: 'Unlimited users',
    features: [
      'Unlimited companies & users',
      'Everything in Professional',
      'Compliance Rule Engine',
      'AI Compliance Assistant',
      'OCR document extraction',
      'One-click Audit Pack export',
      'Priority support',
    ],
  },
]

export const COMPARISON_ROWS = [
  { label: 'Companies', starter: '1', professional: 'Up to 10', enterprise: 'Unlimited' },
  { label: 'Users', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Compliance Dashboard', starter: true, professional: true, enterprise: true },
  { label: 'Compliance Tracker', starter: true, professional: true, enterprise: true },
  { label: 'Renewal Calendar (90/60/30/7-day alerts)', starter: true, professional: true, enterprise: true },
  { label: 'Document Vault', starter: '5 GB', professional: '50 GB', enterprise: 'Unlimited' },
  { label: 'Task Management', starter: false, professional: true, enterprise: true },
  { label: 'Consultant Portal', starter: false, professional: true, enterprise: true },
  { label: 'Compliance Score', starter: false, professional: true, enterprise: true },
  { label: 'Compliance Rule Engine', starter: false, professional: false, enterprise: true },
  { label: 'AI Compliance Assistant', starter: false, professional: false, enterprise: true },
  { label: 'OCR & Audit Pack export', starter: false, professional: false, enterprise: true },
  { label: 'Support', starter: 'Email', professional: 'Email & chat', enterprise: 'Priority + onboarding' },
]

export const PRICING_FAQ = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Move between Starter, Professional, and Enterprise at any time \u2014 your data, clients, and history carry over.',
  },
  {
    q: 'What counts as a \u201ccompany\u201d?',
    a: 'Each client entity you manage compliance for \u2014 your own firm, or one of the businesses you consult for.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. Every plan includes onboarding support to import your existing clients and licenses.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes, annual billing is available on request with a discount versus monthly pricing \u2014 ask us when you book a demo.',
  },
]
