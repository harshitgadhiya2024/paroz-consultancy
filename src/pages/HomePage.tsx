import { Link } from 'react-router-dom';
import { clients, services, stats } from '../data/site';

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Trusted workforce partner</p>
            <h1>Your trusted partner in resource management and consultancy.</h1>
            <p className="lead">
              Paroz Consultancy helps organizations hire smarter, operate smoothly, and scale with
              confidence.
            </p>
            <div className="button-row">
              <Link className="button primary" to="/contact">
                Get in Touch
              </Link>
              <Link className="button secondary" to="/services">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img src="/logo.png" alt="Paroz Consultancy mark" />
            <p>Professional staffing, recruitment, payroll, and compliance support for growth-ready teams.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">About snapshot</p>
            <h2>Built for organizations that need dependable people operations.</h2>
            <p>
              We partner with businesses across insurance, finance, automotive, and operations-led
              industries to solve staffing and workforce challenges with clarity and care.
            </p>
          </div>
          <Link className="feature-card" to="/about">
            <h3>Learn more about Paroz Consultancy</h3>
            <p>Discover our story, mission, values, and the expertise behind every engagement.</p>
          </Link>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Services overview</p>
              <h2>Specialized support across the full people-operations lifecycle.</h2>
            </div>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={`/services#${service.id}`}>Learn more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Client network</p>
              <h2>Trusted by growing and established organizations.</h2>
            </div>
          </div>
          <div className="logo-grid">
            {clients.map((client) => (
              <article className="logo-card" key={client.name}>
                <img src={client.image} alt={client.name} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <article className="testimonial-card">
            <p className="eyebrow">Testimonials</p>
            <p>
              “Paroz Consultancy brings responsiveness, professionalism, and practical guidance to
              every engagement.”
            </p>
            <span>— Client partner feedback</span>
          </article>
          <article className="cta-card">
            <p className="eyebrow">Let’s talk</p>
            <h2>Need a hiring or operations partner?</h2>
            <p>We help teams solve urgent workforce needs with scalable consulting support.</p>
            <Link className="button primary" to="/contact">
              Request a Consultation
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
