import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { services } from '../data/site';

export function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Explore the consultancy services we deliver to support staffing, compliance, and business operations."
      />
      <section className="section">
        <div className="container content-stack">
          {services.map((service) => (
            <article className="panel" id={service.id} key={service.id}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <ul className="bullet-list">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/contact?service=${encodeURIComponent(service.name)}`}>
                Request a Consultation
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
