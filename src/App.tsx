const breakpoints = [
  {
    label: 'Mobile',
    alias: 'mobile',
    width: '320px',
    notes: 'Base layout with stacked content and 48px section padding.'
  },
  {
    label: 'Tablet',
    alias: 'tablet',
    width: '768px',
    notes: 'Two-column layouts and more generous spacing begin here.'
  },
  {
    label: 'Desktop',
    alias: 'desktop',
    width: '1200px',
    notes: 'The content container caps at 1200px with 80px vertical sections.'
  },
  {
    label: 'Large',
    alias: 'large',
    width: '2560px',
    notes: 'The layout remains centered while the viewport scales for large displays.'
  }
];

const swatches = [
  { name: 'Primary', value: '#1a365d', classes: 'bg-primary text-neutral-white' },
  { name: 'Secondary', value: '#2d8a6e', classes: 'bg-secondary text-neutral-white' },
  {
    name: 'Neutral White',
    value: '#ffffff',
    classes: 'border border-slate-200 bg-neutral-white text-neutral-900'
  },
  {
    name: 'Neutral 50',
    value: '#f7fafc',
    classes: 'border border-slate-200 bg-neutral-50 text-neutral-900'
  },
  { name: 'Neutral 700', value: '#2d3748', classes: 'bg-neutral-700 text-neutral-white' },
  { name: 'Neutral 900', value: '#1a202c', classes: 'bg-neutral-900 text-neutral-white' }
];

const sections = [
  'Brand palette exposed through Tailwind utility classes',
  'Inter body type with Poppins display headings',
  'Responsive breakpoints for 320 / 768 / 1200 / 2560',
  'Max content width constrained to 1200px',
  'Section spacing mapped to 48px mobile and 80px desktop'
];

function App() {
  return (
    <main className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <section className="px-5 py-section mobile:px-5 tablet:px-8 desktop:px-12 desktop:py-section-desktop">
        <div className="mx-auto flex max-w-content flex-col gap-12">
          <header className="overflow-hidden rounded-[2rem] bg-primary text-neutral-white shadow-soft">
            <div className="grid gap-8 px-6 py-10 tablet:grid-cols-[1.2fr_0.8fr] tablet:px-10 tablet:py-12 desktop:px-14 desktop:py-16">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Tailwind Token Test Page
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight tablet:text-5xl desktop:text-6xl">
                  Paroz Consultancy design tokens are wired and responsive.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/80 tablet:text-lg">
                  This page validates the brand palette, typography, spacing, content width, and
                  breakpoints from the PRD with production-ready Tailwind utilities.
                </p>
                <div className="flex flex-col gap-3 mobile:flex-row">
                  <a
                    href="#tokens"
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-neutral-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Review Tokens
                  </a>
                  <a
                    href="#breakpoints"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-neutral-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Check Breakpoints
                  </a>
                </div>
              </div>

              <aside className="grid gap-4 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                <div className="rounded-[1.25rem] bg-white/90 p-5 text-neutral-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                    Typography
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold">Poppins for headings</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Inter powers body copy, labels, and utility text for clean readability.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/15 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                    Layout Tokens
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>Max content width: 1200px</li>
                    <li>Section padding: 48px mobile / 80px desktop</li>
                    <li>Breakpoints: 320 / 768 / 1200 / 2560</li>
                  </ul>
                </div>
              </aside>
            </div>
          </header>

          <section aria-labelledby="token-heading" id="tokens" className="space-y-6">
            <div className="flex flex-col gap-3 tablet:flex-row tablet:items-end tablet:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Brand Palette
                </p>
                <h2 id="token-heading" className="font-display text-3xl font-bold text-neutral-900">
                  Color tokens
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-neutral-700 tablet:text-right">
                Every swatch is powered by reusable Tailwind utility classes from the configured
                theme tokens.
              </p>
            </div>
            <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
              {swatches.map((swatch) => (
                <article
                  key={swatch.name}
                  className={`rounded-[1.5rem] p-6 shadow-soft ${swatch.classes}`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-80">
                    {swatch.name}
                  </p>
                  <p className="mt-8 font-display text-2xl font-bold">{swatch.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="breakpoint-heading" id="breakpoints" className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Responsive System
              </p>
              <h2
                id="breakpoint-heading"
                className="font-display text-3xl font-bold text-neutral-900"
              >
                Breakpoint preview
              </h2>
            </div>
            <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
              {breakpoints.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.5rem] border border-slate-200 bg-neutral-white p-6 shadow-soft"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-bold text-primary">{item.width}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-700">
                    {item.alias}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.notes}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="checklist-heading" className="rounded-[2rem] bg-neutral-white p-6 shadow-soft tablet:p-8">
            <div className="flex flex-col gap-6 desktop:flex-row desktop:items-start desktop:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Acceptance Checklist
                </p>
                <h2 id="checklist-heading" className="font-display text-3xl font-bold text-neutral-900">
                  Required tokens are active in the UI
                </h2>
                <p className="text-sm leading-6 text-neutral-700">
                  Resize the viewport to confirm each breakpoint, section rhythm, and content width.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-neutral-50 p-5 text-sm text-neutral-700">
                <p className="font-semibold text-primary">Content container</p>
                <p className="mt-2">Max width utility: <span className="font-semibold">max-w-content</span></p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 tablet:grid-cols-2">
              {sections.map((section) => (
                <li
                  key={section}
                  className="rounded-[1.25rem] border border-slate-200 bg-neutral-50 px-4 py-4 text-sm leading-6 text-neutral-700"
                >
                  {section}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
