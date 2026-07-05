const features = [
  'Brand colors exposed as Tailwind utilities',
  'Typography pairs Poppins headings with Inter body copy',
  'Responsive layout targets mobile, tablet, desktop, and wide screens',
  'Section spacing and content width follow the PRD defaults',
]

const palette = [
  { name: 'Primary', className: 'bg-brand-primary text-neutral-white', hex: '#1a365d' },
  { name: 'Secondary', className: 'bg-brand-secondary text-neutral-white', hex: '#2d8a6e' },
  { name: 'White', className: 'bg-neutral-white text-neutral-black border border-slate-200', hex: '#ffffff' },
  { name: 'Light', className: 'bg-neutral-light text-neutral-black border border-slate-200', hex: '#f7fafc' },
  { name: 'Dark', className: 'bg-neutral-dark text-neutral-white', hex: '#2d3748' },
  { name: 'Black', className: 'bg-neutral-black text-neutral-white', hex: '#1a202c' },
]

const breakpoints = [
  { label: 'Mobile', value: '320px', note: 'Base stack with compact spacing' },
  { label: 'Tablet', value: '768px', note: 'Two-column content opens up' },
  { label: 'Desktop', value: '1200px', note: 'Max content width locks in' },
  { label: 'Large', value: '2560px', note: 'Wide-screen rhythm stays balanced' },
]

export default function App() {
  return (
    <main>
      <section className="section bg-brand-gradient text-neutral-white">
        <div className="container-content grid items-center gap-10 desktop:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-neutral-white/15 px-4 py-2 text-sm font-medium tracking-[0.2em] text-neutral-white/90 uppercase">
              Tailwind Design System
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-neutral-white tablet:text-5xl desktop:text-6xl">
                Paroz Consultancy brand tokens are ready for production UI.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-neutral-white/85 tablet:text-lg">
                This verification page exercises the configured Tailwind theme with brand colors,
                typography, content width, and section spacing across every required breakpoint.
              </p>
            </div>
            <div className="flex flex-col gap-3 mobile:flex-row">
              <a
                href="#tokens"
                className="inline-flex items-center justify-center rounded-full bg-neutral-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                Review tokens
              </a>
              <a
                href="#breakpoints"
                className="inline-flex items-center justify-center rounded-full border border-neutral-white/40 px-6 py-3 text-sm font-semibold text-neutral-white transition hover:bg-neutral-white/10"
              >
                Test breakpoints
              </a>
            </div>
          </div>

          <div className="rounded-[32px] bg-neutral-white p-6 text-neutral-black shadow-soft tablet:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
              Token checklist
            </p>
            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-2xl bg-neutral-light p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-secondary" />
                  <span className="text-sm leading-7 text-neutral-dark tablet:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="tokens" className="section bg-neutral-white">
        <div className="container-content space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
              Color system
            </p>
            <h2 className="text-3xl font-bold tablet:text-4xl">Brand and neutral tokens</h2>
            <p className="max-w-2xl text-base leading-8 text-neutral-dark/80">
              Every swatch uses the configured Tailwind utilities, so designers and engineers can
              ship consistent surfaces, type, and calls to action without custom hex values.
            </p>
          </div>

          <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
            {palette.map((color) => (
              <article key={color.hex} className={`rounded-3xl p-6 shadow-soft ${color.className}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">{color.name}</p>
                <p className="mt-10 font-heading text-2xl font-semibold">{color.hex}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="breakpoints" className="section bg-neutral-light">
        <div className="container-content space-y-8">
          <div className="flex flex-col gap-4 desktop:flex-row desktop:items-end desktop:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                Responsive rules
              </p>
              <h2 className="text-3xl font-bold tablet:text-4xl">Breakpoint validation</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-neutral-dark/80">
              Resize the viewport to confirm the custom screen names, 1200px content container,
              and section padding values behave exactly as the PRD specifies.
            </p>
          </div>

          <div className="grid gap-5 tablet:grid-cols-2 wide:grid-cols-4">
            {breakpoints.map((item) => (
              <article key={item.label} className="rounded-3xl bg-neutral-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{item.value}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-dark/80">{item.note}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[32px] bg-brand-primary p-8 text-neutral-white shadow-soft desktop:p-10">
            <div className="grid gap-8 desktop:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-white/75">
                  Spacing scale
                </p>
                <h3 className="mt-3 text-3xl font-bold text-neutral-white">Section rhythm</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-neutral-white/80">
                  Mobile sections use 48px vertical padding; desktop sections switch to 80px via the
                  shared `.section` utility.
                </p>
              </div>
              <div className="grid gap-4 mobile:grid-cols-2">
                <div className="rounded-2xl bg-neutral-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-white/70">Mobile</p>
                  <p className="mt-3 text-2xl font-semibold">48px</p>
                </div>
                <div className="rounded-2xl bg-neutral-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-white/70">Desktop</p>
                  <p className="mt-3 text-2xl font-semibold">80px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
