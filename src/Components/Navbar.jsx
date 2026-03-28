import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/about" },
    { label: "Projets", path: "/projets" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-dot"></span> Fatima Ndiaye
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="mobile-btn">
          <NavLink
            to="/contact"
            className="navbar-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contactez-nous
          </NavLink>
        </li>
      </ul>

     
    </nav>
  );
}

export default Navbar;