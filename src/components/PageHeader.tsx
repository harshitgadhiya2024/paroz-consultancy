type PageHeaderProps = {
  title: string
  description: string
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="section-block">
      <div className="container narrow">
        <p className="eyebrow">Page Header</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default PageHeader
