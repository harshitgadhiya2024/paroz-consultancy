const breakpoints = [
  { label: 'Mobile', width: '320px', notes: 'Base layout, stacked content, 48px section padding' },
  { label: 'Tablet', width: '768px', notes: 'Two-column content and wider rhythm' },
  { label: 'Desktop', width: '1200px', notes: 'Max content width engaged at 1200px' },
  { label: 'Large', width: '2560px', notes: 'Expanded canvas with centered content container' }
];

const swatches = [
  { name: 'Primary', value: '#1a365d', classes: 'bg-primary text-neutral-white' },
  { name: 'Secondary', value: '#2d8a6e', classes: 'bg-secondary text-neutral-white' },
  { name: 'Neutral White', value: '#ffffff', classes: 'bg-neutral-white text-neutral-900 border border-neutral-200' },
  { name: 'Neutral 50', value: '#f7fafc', classes: 'bg-neutral-50 text-neutral-900 border border-slate-200' },
  { name: 'Neutral 700', value: '#2d3748', classes: 'bg-neutral-700 text-neutral-white' },
  { name: 'Neutral 900', value: '#1a202c', classes: 'bg-neutral-900 text-neutral-white' }
];

function App() {
  return (
    <main className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <section className="px-5 py-section md:px-8 xl:px-12 xl:py-section-desktop">
        <div className="mx-auto flex max-w-content flex-col gap-12">
          <header className="overflow-hidden rounded-[2rem] bg-primary text-neutral-white shadow-soft">
            <div className="grid gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-12 xl:px-14 xl:py-16">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Tailwind Token Test Page
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                  Paroz Consultancy design tokens are wired and responsive.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                  This page validates the brand palette, typography, spacing, content width, and
                  breakpoints from the PRD with production-ready Tailwind utilities.
                </p>
                <div className="flex flex-col gap-3 xs:flex-row">
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

          <section id="tokens" className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Brand Palette
                </p>
                <h2 className="font-display text-3xl font-bold text-neutral-900">Color tokens</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-neutral-700 md:text-right">
                Every swatch is powered by reusable Tailwind utility classes from the configured
                theme tokens.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {swatches.map((swatch) => (
                <article key={swatch.name} className={`rounded-[1.5rem] p-6 shadow-soft ${swatch.classes}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-80">{swatch.name}</p>
                  <p className="mt-8 font-display text-2xl font-bold">{swatch.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="breakpoints" className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Responsive System
              </p>
              <h2 className="font-display text-3xl font-bold text-neutral-900">Breakpoint preview</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {breakpoints.map((item) => (
                <article key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-neutral-white p-6 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">{item.label}</p>
                  <p className="mt-3 font-display text-3xl font-bold text-primary">{item.width}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.notes}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
