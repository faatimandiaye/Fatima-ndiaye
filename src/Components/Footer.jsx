import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-dot"></span> Fatima
          </div>
          <p>Créé avec passion et curiosité.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p> faatimandiaye@gmail.com</p>
          <p> Dakar, Sénégal</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fatima Ndiaye — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;