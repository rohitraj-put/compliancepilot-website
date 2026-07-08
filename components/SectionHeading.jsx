export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <div className={`eyebrow ${light ? '!text-saffron' : ''}`}>{eyebrow}</div>}
      <h2 className={`mt-2 font-display text-3xl font-semibold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${light ? 'text-white/65' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
