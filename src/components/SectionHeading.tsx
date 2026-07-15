interface SectionHeadingProps {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, lead, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fizz-cyan">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl text-paper sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-paper/65 sm:text-lg">{lead}</p>}
    </div>
  )
}
