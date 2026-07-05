const clientLogos = [
  'aditya_birla_issurance.jpeg',
  'aditya_capital.jpeg',
  'axis_max_life.jpeg',
  'bharti.jpeg',
  'cars24.jpeg',
  'kotak_life.jpeg',
  'niva.jpeg',
];

const breakpoints = [
  { label: 'Mobile', value: '320px', note: 'Single-column layout and 48px section padding.' },
  { label: 'Tablet', value: '768px', note: 'Two-column content with wider gutters.' },
  { label: 'Desktop', value: '1200px', note: 'Max content width locks at 1200px.' },
  { label: 'Large', value: '2560px', note: 'Content remains centered and readable.' },
];

const services = [
  'Resource Handling & Staffing',
  'Recruitment & Talent Acquisition',
  'HR Operations & Compliance',
  'Payroll Management',
];

function App() {
  return (
    <main>
      <section className="section-shell bg-hero text-neutral-white">
        <div className="container-shell">
          <div className="grid items-center gap-10 desktop:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="eyebrow text-neutral-white/80">Paroz Consultancy</p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-neutral-white tablet:text-5xl desktop:text-6xl">
                  Tailwind-powered brand system for a modern consultancy website.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-neutral-white/82 tablet:text-lg">
                  This verification page proves the configured design tokens for color, typography,
                  spacing, and breakpoints behave consistently from 320px mobile through 2560px large screens.
                </p>
              </div>
              <div className="flex flex-col gap-3 mobile:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-neutral-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-neutral-light"
                  href="#tokens"
                >
                  Review tokens
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-neutral-white/40 px-6 py-3 text-sm font-semibold text-neutral-white transition hover:bg-neutral-white/10"
                  href="#breakpoints"
                >
                  Check breakpoints
                </a>
              </div>
            </div>

            <div className="token-card bg-neutral-white text-neutral-dark">
              <p className="eyebrow">Configured defaults</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
                  <dt className="font-medium">Heading stack</dt>
                  <dd className="text-right">Poppins / Inter</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
                  <dt className="font-medium">Body stack</dt>
                  <dd className="text-right">Inter</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
                  <dt className="font-medium">Section padding</dt>
                  <dd className="text-right">48px → 80px</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-medium">Content width</dt>
                  <dd className="text-right">1200px max</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="tokens" className="section-shell">
        <div className="container-shell space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">Design tokens</p>
            <h2 className="text-3xl font-bold tablet:text-4xl">Brand colors, type, and spacing</h2>
            <p className="max-w-2xl text-base leading-7 text-neutral-dark/80">
              Custom Tailwind utilities expose PRD-defined tokens so product sections can reuse them without custom CSS.
            </p>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {[
              ['Primary', '#1a365d', 'bg-primary text-neutral-white'],
              ['Secondary', '#2d8a6e', 'bg-secondary text-neutral-white'],
              ['Neutral Dark', '#2d3748', 'bg-neutral-dark text-neutral-white'],
              ['Neutral Light', '#f7fafc', 'bg-neutral-light text-primary'],
            ].map(([name, hex, classes]) => (
              <article key={name} className={`token-card ${classes}`}>
                <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-80">{name}</p>
                <p className="mt-10 text-2xl font-semibold">{hex}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 desktop:grid-cols-2">
            <article className="token-card space-y-4">
              <p className="eyebrow">Typography</p>
              <h3 className="text-3xl font-bold">Poppins drives strong, executive headlines.</h3>
              <p className="text-base leading-7 text-neutral-dark/80">
                Inter supports readable body copy, interface labels, and long-form content across all breakpoints.
              </p>
            </article>

            <article className="token-card space-y-5">
              <p className="eyebrow">Spacing</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-primary">Mobile section padding — 48px</p>
                  <div className="mt-2 h-3 rounded-full bg-secondary/20">
                    <div className="h-3 w-[48%] rounded-full bg-secondary" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Desktop section padding — 80px</p>
                  <div className="mt-2 h-3 rounded-full bg-primary/15">
                    <div className="h-3 w-4/5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="breakpoints" className="section-shell bg-neutral-white">
        <div className="container-shell space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">Responsive checks</p>
            <h2 className="text-3xl font-bold tablet:text-4xl">Breakpoint behavior is explicit</h2>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {breakpoints.map((item) => (
              <article key={item.label} className="token-card">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{item.label}</p>
                <h3 className="mt-4 text-3xl font-bold">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-dark/75">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid gap-6 desktop:grid-cols-[0.9fr_1.1fr]">
          <article className="token-card">
            <p className="eyebrow">Utility usage</p>
            <h2 className="mt-3 text-3xl font-bold">Example service cards</h2>
            <div className="mt-6 grid gap-4">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-primary/10 bg-neutral-light p-5 transition hover:-translate-y-0.5 hover:shadow-card">
                  <h3 className="text-xl font-semibold">{service}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-dark/80">
                    Built with `bg-primary`, `text-secondary`, `font-heading`, and section/container utilities.
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="token-card">
            <p className="eyebrow">Client asset rendering</p>
            <h2 className="mt-3 text-3xl font-bold">Logo grid stays balanced at every size</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
              {clientLogos.map((logo) => (
                <div key={logo} className="flex min-h-28 items-center justify-center rounded-2xl border border-primary/10 bg-neutral-white p-4">
                  <img className="max-h-16 w-auto object-contain" src={`/${logo}`} alt={logo.replace(/[_.-]/g, ' ')} loading="lazy" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
