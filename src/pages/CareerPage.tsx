import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const careerSections = ['WhyWorkWithUs', 'OpenPositions']

const CareerPage = () => {
  return (
    <section className="page-section" aria-labelledby="career-page-title">
      <PageHeader
        title="CareerPage"
        description="Initial career shell for recruiting content."
      />
      <div className="container">
        <div className="card-grid">
          {careerSections.map((section) => (
            <SectionCard key={section} title={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerPage
