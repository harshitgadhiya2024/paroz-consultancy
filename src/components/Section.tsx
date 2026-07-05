import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  eyebrow?: string
  title: string
  description: string
}>

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="section">
      <div className="section-copy">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}
