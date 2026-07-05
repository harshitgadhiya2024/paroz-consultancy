import SectionCard from '../components/SectionCard'

const homeSections = [
  'HeroBanner',
  'AboutSnapshot',
  'ServicesOverview',
  'StatsCounters',
  'ClientLogoCarousel',
  'Testimonials',
  'CTABanner',
]

const HomePage = () => {
  return (
    <section className="page-section" aria-labelledby="home-page-title">
      <div className="container">
        <h2 id="home-page-title">HomePage</h2>
        <div className="card-grid">
          {homeSections.map((section) => (
            <SectionCard key={section} title={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage
