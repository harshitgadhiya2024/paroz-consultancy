import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const ClientsPage = () => {
  return (
    <section className="page-section" aria-labelledby="clients-page-title">
      <PageHeader
        title="ClientsPage"
        description="Initial clients shell with a ClientLogoGrid placeholder."
      />
      <div className="container">
        <SectionCard title="ClientLogoGrid" />
      </div>
    </section>
  )
}

export default ClientsPage
