import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ClientsPage />
        <CareerPage />
        <ContactPage />
        <PrivacyPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
