import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { openPositions } from '../data/site';

export function CareerPage() {
  return (
    <>
      <PageHeader
        title="Career"
        description="Join a team focused on building dependable workforce solutions for ambitious organizations."
      />
      <section className="section">
        <div className="container content-stack">
          <article className="panel">
            <h2>Why work with us</h2>
            <p>Growth opportunities, collaborative delivery, and meaningful client impact define our work.</p>
          </article>
          <div className="card-grid">
            {openPositions.length > 0 ? (
              openPositions.map((role) => (
                <article className="service-card" key={`${role.title}-${role.location}`}>
                  <h3>{role.title}</h3>
                  <p>
                    {role.location} · {role.type}
                  </p>
                  <Link to="/contact">Apply Now</Link>
                </article>
              ))
            ) : (
              <article className="panel">
                <p>No current openings — check back soon!</p>
              </article>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
