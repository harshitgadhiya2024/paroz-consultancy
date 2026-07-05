import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

function PrivacyPage() {
  return (
    <div className="page-stack">
      <PageHeader title="Privacy Policy" description="How Paroz Consultancy handles website visitor information." />
      <div className="container page-stack">
        <SectionPlaceholder title="PrivacyContent" description="Privacy policy content area." />
      </div>
    </div>
  )
}

export default PrivacyPage
