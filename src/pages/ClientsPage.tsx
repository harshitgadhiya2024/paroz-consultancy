import { PageHeader } from '../components/PageHeader';
import { clients } from '../data/site';

export function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Our Clients"
        description="Trusted by leading organizations across insurance, financial services, and operations-led sectors."
      />
      <section className="section">
        <div className="container logo-grid">
          {clients.map((client) => (
            <article className="logo-card tall" key={client.name}>
              <img src={client.image} alt={client.name} loading="lazy" />
              <p>{client.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
