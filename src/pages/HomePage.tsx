import { Section } from '../components/Section'
import { services } from '../data/company'

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="hero-kicker">Paroz Consultancy</p>
          <h1>Your trusted partner in workforce and business operations.</h1>
          <p className="hero-copy">
            This Vite + React foundation is ready for the multi-page corporate site
            planned in the PRD.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Project Setup"
        title="Frontend foundation is in place"
        description="The app uses React 18, Vite, TypeScript, ESLint, Prettier, and a scalable src structure."
      >
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <h3>{service}</h3>
              <p>Ready for detailed service copy, routing, and branded UI implementation.</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
