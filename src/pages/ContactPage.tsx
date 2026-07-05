import PageHeader from '../components/PageHeader'
import SectionPlaceholder from '../components/SectionPlaceholder'

function ContactPage() {
  return (
    <div className="page-stack">
      <PageHeader title="Contact Us" description="Reach out to discuss staffing, HR, and consulting needs." />
      <div className="container page-stack">
        <SectionPlaceholder title="ContactForm" description="Lead capture form for inquiries." />
        <SectionPlaceholder title="ContactInfo" description="Business contact details and operating hours." />
        <SectionPlaceholder title="MapEmbed" description="Location and map embedding area." />
      </div>
    </div>
  )
}

export default ContactPage
