import services from './data/services.json'
import clients from './data/clients.json'
import team from './data/team.json'
import testimonials from './data/testimonials.json'
import stats from './data/stats.json'
import positions from './data/positions.json'
import company from './data/company.json'
import navigation from './data/navigation.json'
import contact from './data/contact.json'
import social from './data/social.json'
import './styles/app.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="app-title">
        <p className="eyebrow">Content data import verification</p>
        <h1 id="app-title">Paroz Consultancy content datasets are wired.</h1>
        <p className="description">
          This test component confirms all content JSON files under <code>src/data</code>{' '}
          import successfully and expose realistic placeholder content for future sections.
        </p>
      </section>

      <section className="structure-card" aria-labelledby="content-check-title">
        <h2 id="content-check-title">Imported datasets</h2>
        <ul className="directory-list">
          <li>{services.length} services</li>
          <li>{clients.length} clients</li>
          <li>{team.length} team members</li>
          <li>{testimonials.length} testimonials</li>
          <li>{stats.length} stats</li>
          <li>{positions.length} positions</li>
          <li>{company.values.length} company values</li>
          <li>{navigation.length} navigation items</li>
          <li>{contact.email} contact email</li>
          <li>{social.length} social links</li>
        </ul>
      </section>
    </main>
  )
}

export default App
