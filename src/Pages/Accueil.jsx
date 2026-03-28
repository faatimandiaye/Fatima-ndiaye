import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag"> Bienvenue sur mon portfolio</p>
          <h1 className="hero-title">
            Je suis <span className="highlight-coral">Fatima</span>,<br />
            Développeuse Web
          </h1>
          <p className="hero-desc">
            Passionnée par la création d'interfaces modernes, accessibles et
            agréables à utiliser. Je transforme vos idées en expériences
            digitales.
          </p>
          <div className="hero-btns">
            <Link to="/projets" className="btn-coral">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn-outline-coral">
              Me contacter
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-coral">
            <img
              src="https://placehold.co/260x260/ff6b35/ffffff?text=F"
              alt="Photo de Fatima"
            />
          </div>
          <div className="hero-deco-circle hc1"></div>
          <div className="hero-deco-circle hc2"></div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;