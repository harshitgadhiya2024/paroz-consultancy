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
import './styles/app.css'

const routeMap: Record<string, JSX.Element> = {
  '/': <HomePage />,
  '/about': <AboutPage />,
  '/services': <ServicesPage />,
  '/clients': <ClientsPage />,
  '/career': <CareerPage />,
  '/contact': <ContactPage />,
  '/privacy': <PrivacyPage />,
}

function App() {
  const pathname = window.location.pathname
  const page = routeMap[pathname] ?? <HomePage />

  return (
    <div className="app-shell">
      <Header />
      <ScrollToTop />
      <main>{page}</main>
      <Footer />
    </div>
  )
}

export default App
