type SectionPlaceholderProps = {
  title: string
  description: string
}

function SectionPlaceholder({ title, description }: SectionPlaceholderProps) {
  return (
    <section className="content-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

export default SectionPlaceholder
