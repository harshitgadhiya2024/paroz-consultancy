const breakpoints = [
  { label: 'Mobile', token: 'mobile', value: '320px', note: 'Small phones and up' },
  { label: 'Tablet', token: 'tablet', value: '768px', note: 'Tablet layouts activate here' },
  { label: 'Desktop', token: 'desktop', value: '1200px', note: 'Content width caps at 1200px' },
  { label: 'Large', token: 'large', value: '2560px', note: 'Optimized for very wide displays' },
] as const

const colors = [
  { name: 'Primary', className: 'bg-primary', hex: '#1a365d', textClass: 'text-neutral-white' },
  { name: 'Secondary', className: 'bg-secondary', hex: '#2d8a6e', textClass: 'text-neutral-white' },
  { name: 'Neutral White', className: 'bg-neutral-white', hex: '#ffffff', textClass: 'text-neutral-900 border border-primary/10' },
  { name: 'Neutral 50', className: 'bg-neutral-50', hex: '#f7fafc', textClass: 'text-neutral-900 border border-primary/10' },
  { name: 'Neutral 700', className: 'bg-neutral-700', hex: '#2d3748', textClass: 'text-neutral-white' },
  { name: 'Neutral 900', className: 'bg-neutral-900', hex: '#1a202c', textClass: 'text-neutral-white' },
] as const

const sections = [
  'Brand colors and utility classes',
  'Typography using Inter and Poppins',
  'Section spacing at 48px mobile and 80px desktop',
  'Breakpoint-aware content blocks capped at 1200px',
] as const

export function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <header className="bg-hero-gradient text-neutral-white">
        <div className="container-content section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-neutral-white/80">Tailwind Configuration Preview</p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-neutral-white mobile:text-4xl tablet:text-5xl desktop:text-6xl">
              Paroz Consultancy design tokens are ready for production UI.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-white/85 tablet:text-lg">
              This page validates brand colors, typography, spacing, and responsive behavior across the required breakpoints.
            </p>
            <div className="mt-8 flex flex-col gap-4 tablet:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-neutral-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-neutral-50"
                href="#tokens"
              >
                Review Tokens
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-neutral-white/40 px-6 py-3 text-sm font-semibold text-neutral-white transition hover:bg-neutral-white/10"
                href="#breakpoints"
              >
                Check Breakpoints
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section-shell" id="tokens">
          <div className="container-content">
            <div className="flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:justify-between">
              <div>
                <p className="eyebrow">Section Padding</p>
                <h2 className="mt-3 text-3xl font-bold">Responsive spacing and color tokens</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-700">
                Sections use `py-section` on mobile (48px) and `desktop:py-section-desktop` (80px) from the shared Tailwind theme.
              </p>
            </div>

            <div className="mt-10 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
              {colors.map((color) => (
                <article key={color.name} className="token-card">
                  <div className={`flex h-24 items-end rounded-xl ${color.className} ${color.textClass} p-4`}>
                    <span className="text-sm font-semibold">{color.name}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-primary">{color.name}</span>
                    <code className="rounded bg-neutral-50 px-2 py-1 text-sm text-neutral-700">{color.hex}</code>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-neutral-white">
          <div className="container-content grid gap-8 desktop:grid-cols-[1.2fr,0.8fr] desktop:items-start">
            <article className="token-card">
              <p className="eyebrow">Typography</p>
              <h2 className="mt-3 text-3xl font-bold">Inter for body, Poppins for headings</h2>
              <p className="mt-4 text-base leading-7 text-neutral-700">
                Clean body copy improves readability, while bold headings create a confident corporate tone that matches the brand palette.
              </p>
              <div className="mt-6 space-y-4">
                <p className="font-heading text-2xl font-bold text-primary">Heading sample in Poppins Semibold/Bold</p>
                <p className="text-base leading-7 text-neutral-700">
                  Body text sample in Inter Regular/Medium. These utilities are available globally through `font-sans` and `font-heading`.
                </p>
              </div>
            </article>

            <article className="token-card">
              <p className="eyebrow">Utility Coverage</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                {sections.map((section) => (
                  <li key={section} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{section}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell" id="breakpoints">
          <div className="container-content">
            <div className="max-w-2xl">
              <p className="eyebrow">Breakpoints</p>
              <h2 className="mt-3 text-3xl font-bold">Preview behavior from 320px to 2560px</h2>
              <p className="mt-4 text-base leading-7 text-neutral-700">
                Cards stack on mobile, shift to two columns on tablet, three columns on desktop, and remain centered with a max content width on large screens.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
              {breakpoints.map((item) => (
                <article key={item.token} className="token-card">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{item.label}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {item.token}
                    </span>
                  </div>
                  <p className="mt-4 font-heading text-3xl font-bold text-secondary">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
