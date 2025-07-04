// src/components/home/Hero/page.tsx

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Banque Habitat</h1>
        <p>Your trusted partner in housing loans and financial solutions.</p>
        <Link to="/housing-loans" className="btn btn-primary">
          Explore Housing Loans
        </Link>
      </div>
      <div className="mouse-indicator">
        <div className="wheel"></div>
      </div>
    </div>
  );
}
