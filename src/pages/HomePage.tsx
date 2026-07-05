import SectionPlaceholder from '../components/SectionPlaceholder'

function HomePage() {
  return (
    <div className="page-stack container">
      <SectionPlaceholder title="HeroBanner" description="Primary landing hero with core calls to action." />
      <SectionPlaceholder title="AboutSnapshot" description="Short company overview introducing Paroz Consultancy." />
      <SectionPlaceholder title="ServicesOverview" description="Highlights of the main consulting and staffing services." />
      <SectionPlaceholder title="StatsCounters" description="Key operating metrics and trust-building numbers." />
      <SectionPlaceholder title="ClientLogoCarousel" description="Featured client logos sourced from repository assets." />
      <SectionPlaceholder title="Testimonials" description="Social proof and client feedback preview." />
      <SectionPlaceholder title="CTABanner" description="Conversion-focused banner driving contact inquiries." />
    </div>
  )
}

export default HomePage
