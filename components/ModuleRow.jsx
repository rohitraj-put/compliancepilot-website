import { IconCheckCircle } from './Icons'

export default function ModuleRow({ icon: Icon, verb, title, description, points = [], reverse = false, visual }) {
  return (
    <div className={`grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 ${reverse ? '' : ''}`}>
      <div className={reverse ? 'md:order-2' : ''}>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
          <Icon width={20} height={20} />
        </span>
        <div className="eyebrow mt-4">{verb}</div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
        {points.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-sm text-ink/85">
                <IconCheckCircle width={17} height={17} className="mt-0.5 shrink-0 text-signal-green" />
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={reverse ? 'md:order-1' : ''}>{visual}</div>
    </div>
  )
}
