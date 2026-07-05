type SectionCardProps = {
  title: string
}

const SectionCard = ({ title }: SectionCardProps) => {
  return <article className="section-card">{title}</article>
}

export default SectionCard
