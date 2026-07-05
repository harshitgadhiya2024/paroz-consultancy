import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const aboutSections = [
  'CompanyStory',
  'MissionVision',
  'CoreValues',
  'LeadershipTeam',
  'WhyChooseUs',
]

const AboutPage = () => {
  return (
    <section className="page-section" aria-labelledby="about-page-title">
      <PageHeader
        title="AboutPage"
        description="Initial shell matching the PRD component tree."
      />
      <div className="container">
        <div className="card-grid">
          {aboutSections.map((section) => (
            <SectionCard key={section} title={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPage
