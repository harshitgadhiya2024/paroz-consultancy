import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const contactSections = ['ContactForm', 'ContactInfo', 'MapEmbed']

const ContactPage = () => {
  return (
    <section className="page-section" aria-labelledby="contact-page-title">
      <PageHeader
        title="ContactPage"
        description="Initial contact shell for form and location details."
      />
      <div className="container">
        <div className="card-grid">
          {contactSections.map((section) => (
            <SectionCard key={section} title={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactPage
