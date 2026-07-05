import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

function ClientsPage() {
  return (
    <div className="page-stack">
      <PageHeader title="Our Clients" description="A snapshot of trusted partners across industries." />
      <div className="container page-stack">
        <SectionPlaceholder title="ClientLogoGrid" description="Responsive client logo showcase." />
      </div>
    </div>
  )
}

export default ClientsPage
