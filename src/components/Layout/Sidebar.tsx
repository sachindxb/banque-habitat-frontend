import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <aside className={`sidebar-drawer${open ? " open" : ""}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close menu">&times;</button>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/about-us" onClick={onClose}>ABOUT US</Link></li>
          <li><Link to="/services-tools" onClick={onClose}>SERVICES & TOOLS</Link></li>
          <li><Link to="/housing-projects" onClick={onClose}>HOUSING PROJECTS</Link></li>
          <li><Link to="/media-center" onClick={onClose}>MEDIA CENTER</Link></li>
        </ul>
      </nav>
    </aside>
  );
} 