import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <div>
          <p className="footer-title">Paroz Consultancy</p>
          <p>Resource management, staffing, and operational consulting for modern teams.</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Get in Touch</Link>
        </div>
      </div>
    </footer>
  );
}
