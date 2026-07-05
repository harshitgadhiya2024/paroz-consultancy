import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const serviceSections = Array.from({ length: 6 }, (_, index) => `ServiceSection ${index + 1}`)

const ServicesPage = () => {
  return (
    <section className="page-section" aria-labelledby="services-page-title">
      <PageHeader
        title="ServicesPage"
        description="Service section shells for the six PRD offerings."
      />
      <div className="container">
        <div className="card-grid">
          {serviceSections.map((section) => (
            <SectionCard key={section} title={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
