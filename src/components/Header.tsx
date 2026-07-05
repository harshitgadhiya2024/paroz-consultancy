import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-row">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Paroz Consultancy logo" />
          <span>Paroz Consultancy</span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Primary">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
