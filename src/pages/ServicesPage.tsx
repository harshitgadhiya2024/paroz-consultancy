import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

const sections = [
  'Resource Handling & Staffing',
  'Recruitment & Talent Acquisition',
  'HR Operations & Compliance',
  'Payroll Management',
  'Training & Development',
  'Operational Consulting',
]

function ServicesPage() {
  return (
    <div className="page-stack">
      <PageHeader title="Services" description="Explore the consultancy and workforce services we provide." />
      <div className="container page-stack">
        {sections.map((section) => (
          <SectionPlaceholder
            key={section}
            title="ServiceSection"
            description={section}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesPage
