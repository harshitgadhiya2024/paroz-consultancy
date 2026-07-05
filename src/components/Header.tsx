import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Paroz Consultancy home">
          <img src={logo} alt="Paroz Consultancy logo" className="brand-logo" />
          <span>Paroz Consultancy</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
