import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

function CareerPage() {
  return (
    <div className="page-stack">
      <PageHeader title="Career" description="Discover opportunities and reasons to work with us." />
      <div className="container page-stack">
        <SectionPlaceholder title="WhyWorkWithUs" description="Employer value proposition and work culture overview." />
        <SectionPlaceholder title="OpenPositions" description="Open roles and application guidance." />
      </div>
    </div>
  )
}

export default CareerPage
