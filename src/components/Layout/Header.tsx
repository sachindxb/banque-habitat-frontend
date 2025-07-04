// Header.tsx
import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this next

const Header: FC = () => {
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
          </div>

          <Link to="/housing-loans" className="nav-item">Housing Loans</Link>
          <Link to="/loan-calculator" className="nav-item">Loan Calculator</Link>
        </nav>

        <div className="right-section">
          <Link to="/contact" className="nav-item">Contact</Link>
          <div className="language-selector">
            <span>EN</span>
            <span className="language-divider">|</span>
            <span>AR</span>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;