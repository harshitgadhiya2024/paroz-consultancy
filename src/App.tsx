import { appDirectories } from './data/appDirectories'
import './styles/app.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">React + Vite initialized</p>
        <h1 id="app-title">Paroz Consultancy frontend foundation is ready.</h1>
        <p className="description">
          This starter uses React 18, TypeScript, Vite, ESLint, and Prettier with the
          required project structure in place for upcoming feature work.
        </p>
      </section>

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

export default App
