import { PageHeader } from '../components/PageHeader';

export function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn how Paroz Consultancy supports organizations with practical workforce and operational expertise."
      />
      <section className="section">
        <div className="container content-stack">
          <article className="panel">
            <h2>Company story</h2>
            <p>
              Paroz Consultancy was built to give businesses a reliable partner for staffing,
              compliance, and people operations support.
            </p>
          </article>
          <article className="panel">
            <h2>Mission & vision</h2>
            <p>
              We help organizations operate with confidence by building dependable teams and
              scalable processes.
            </p>
          </article>
          <article className="panel">
            <h2>Why choose us</h2>
            <p>Industry expertise, dedicated support, and compliance-first execution guide every project.</p>
          </article>
        </div>
      </section>
    </>
  );
}
