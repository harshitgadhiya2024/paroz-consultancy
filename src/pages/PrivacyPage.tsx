import { PageHeader } from '../components/PageHeader';

export function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Overview of how Paroz Consultancy collects, uses, and protects contact information."
      />
      <section className="section">
        <div className="container content-stack">
          <article className="panel">
            <p>
              We collect information submitted through our contact forms to respond to inquiries,
              provide services, and improve communication. Data is handled with care and shared only
              as needed to deliver our services.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
