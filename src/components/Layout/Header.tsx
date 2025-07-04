// Header.tsx
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this next

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/about" className="nav-item">About Us</Link>
          
          <div className="nav-item services-dropdown">
            <span>Services</span>
            <div className="dropdown-icon" />
            <div className="dropdown-menu">
              <Link to="/purchase" className="dropdown-item">PURCHASE</Link>
              <Link to="/renovation-usd" className="dropdown-item">RENOVATION USD</Link>
              <Link to="/construction" className="dropdown-item">Construction</Link>
              <Link to="/renovation-lbp" className="dropdown-item">RENOVATION LBP</Link>
            </div>
          </div>

          <Link to="/housing-loans" className="nav-item">Housing Loans</Link>
          <Link to="/loan-calculator" className="nav-item">Loan Calculator</Link>
        </nav>

        <div className="right-section">
          <Link to="/contact" className="nav-item">Contact</Link>
          <div className="language-selector">
            <span className="language-emoji"></span>
            <span>EN</span>
            <div className="dropdown-icon" />
            <div className="dropdown-menu">
              <span className="dropdown-item">English</span>
              <span className="dropdown-item">العربية</span>
            </div>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;