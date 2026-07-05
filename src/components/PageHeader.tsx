type PageHeaderProps = {
  title: string
  description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container narrow">
        <p className="eyebrow">Paroz Consultancy</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default PageHeader
