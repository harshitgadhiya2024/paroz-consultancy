import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, Route, Routes } from 'react-router-dom'
import { appDirectories } from './data/appDirectories'
import './styles/app.css'

function FoundationHome() {
  return (
    <main className="app-shell">
      <motion.section
        className="hero-card"
        aria-labelledby="app-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <p className="eyebrow">React + Vite initialized</p>
        <h1 id="app-title">Paroz Consultancy frontend foundation is ready.</h1>
        <p className="description">
          This starter uses React 18, TypeScript, Vite, ESLint, and Prettier with the
          required project structure in place for upcoming feature work.
        </p>
        <p className="description">
          Dependency smoke test confirms React Router v6, Framer Motion, and Lucide React
          are installed, compatible, and importable.
        </p>
        <Link className="directory-link" to="/dependencies">
          Verify installed dependencies
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </motion.section>

      <section className="structure-card" aria-labelledby="structure-title">
        <h2 id="structure-title">Project structure</h2>
        <ul className="directory-list">
          {appDirectories.map((directory) => (
            <li key={directory}>{directory}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

function DependencySmokeTest() {
  return (
    <main className="app-shell">
      <motion.section
        className="hero-card"
        aria-labelledby="dependency-title"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="eyebrow">Dependency smoke test</p>
        <h1 id="dependency-title">Core frontend libraries are wired successfully.</h1>
        <ul className="directory-list" aria-label="Installed dependency checklist">
          <li>
            <CheckCircle2 aria-hidden="true" size={18} /> React Router DOM routes render in
            app context.
          </li>
          <li>
            <CheckCircle2 aria-hidden="true" size={18} /> Framer Motion animates page content.
          </li>
          <li>
            <CheckCircle2 aria-hidden="true" size={18} /> Lucide React icons render in UI.
          </li>
        </ul>
        <Link className="directory-link" to="/">
          Back to foundation
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </motion.section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoundationHome />} />
      <Route path="/dependencies" element={<DependencySmokeTest />} />
    </Routes>
  )
}

export default App
