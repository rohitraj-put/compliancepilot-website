import Link from 'next/link'

const VARIANTS = {
  primary: 'bg-saffron text-navy-deep hover:brightness-105 shadow-card',
  outline: 'bg-transparent border border-navy/20 text-navy hover:bg-navy/5',
  outlineLight: 'bg-transparent border border-white/30 text-white hover:bg-white/10',
  ghost: 'bg-transparent text-navy hover:text-saffron-dark',
}

export default function Button({ href, children, variant = 'primary', className = '', ...props }) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:translate-y-px ${VARIANTS[variant]} ${className}`
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
