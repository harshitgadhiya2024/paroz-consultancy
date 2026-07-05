import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { services } from '../data/site';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const selectedService = useMemo(() => searchParams.get('service') ?? '', [searchParams]);

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Share your staffing or operational needs and our team will get back to you promptly."
      />
      <section className="section">
        <div className="container contact-grid">
          <form className="panel form-grid">
            <label>
              Full Name
              <input name="fullName" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" />
            </label>
            <label>
              Company Name
              <input name="company" type="text" />
            </label>
            <label>
              Service Interested In
              <select defaultValue={selectedService} name="service">
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="full-width">
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="button primary" type="submit">
              Submit Inquiry
            </button>
          </form>
          <aside className="content-stack">
            <article className="panel">
              <h2>Contact information</h2>
              <p>Email: hello@parozconsultancy.com</p>
              <p>Phone: +91 99999 99999</p>
              <p>Address: Delhi NCR, India</p>
            </article>
            <article className="panel map-panel" aria-label="Office location map placeholder">
              <h2>Map</h2>
              <p>Office map can be embedded here with configurable production coordinates.</p>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
