import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

function AboutPage() {
  return (
    <div className="page-stack">
      <PageHeader title="About Us" description="Learn about our company story, values, and leadership." />
      <div className="container page-stack">
        <SectionPlaceholder title="CompanyStory" description="Narrative about Paroz Consultancy and its journey." />
        <SectionPlaceholder title="MissionVision" description="Mission and vision statements for the organization." />
        <SectionPlaceholder title="CoreValues" description="Principles that guide client partnerships and delivery." />
        <SectionPlaceholder title="LeadershipTeam" description="Profiles of leadership and key team members." />
        <SectionPlaceholder title="WhyChooseUs" description="Differentiators that position the company in the market." />
      </div>
    </div>
  )
}

export default AboutPage
