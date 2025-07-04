import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-inner">
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <Link to="/" className="navbar-brand">
          <img src="/logo.svg" alt="Banque De L'habitat" className="logo" />
        </Link>
        <nav className="nav-menu-wrapper">
          <ul className="nav-menu">
            <li className="nav-item"><Link to="/about-us" className="nav-link">ABOUT US</Link></li>
            <li className="nav-item"><Link to="/services-tools" className="nav-link">SERVICES & TOOLS</Link></li>
            <li className="nav-item"><Link to="/housing-projects" className="nav-link">HOUSING PROJECTS</Link></li>
            <li className="nav-item"><Link to="/media-center" className="nav-link">MEDIA CENTER</Link></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a className="icon-link" href="#">عربي</a>
          <a className="icon-link" href="#"><svg className="icon" width="22" height="22" viewBox="0 0 22 22"><circle cx="10" cy="10" r="8" stroke="#222" strokeWidth="2" fill="none"/><line x1="16" y1="16" x2="21" y2="21" stroke="#222" strokeWidth="2"/></svg></a>
          <a className="icon-link" href="#"><svg className="icon" width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#222" strokeWidth="2" fill="none"/><circle cx="11" cy="9" r="3" stroke="#222" strokeWidth="2" fill="none"/><path d="M4 18c1.5-3 6.5-3 7-3s5.5 0 7 3" stroke="#222" strokeWidth="2" fill="none"/></svg></a>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && <div className="menu-overlay" onClick={() => setSidebarOpen(false)} />}
    </header>
  );
}
