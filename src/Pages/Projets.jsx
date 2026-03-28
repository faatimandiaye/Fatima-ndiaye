import React from "react";
import imgPortfolio from "../assets/portfolio.png";
import imgTodo from "../assets/todo.png";
import imgVitrine from "../assets/vitrine.png";

const projets = [
  {
    id: 1,
    titre: "Portfolio Personnel",
    desc: "Mon site portfolio développé avec React et déployé sur Vercel.",
    tech: ["React", "CSS", "Vercel"],
    lien: "#",
    image: imgPortfolio,
  },
  {
    id: 2,
    titre: "Application Todo",
    desc: "Une application de gestion de tâches avec ajout, suppression et filtrage.",
    tech: ["React", "LocalStorage"],
    lien: "#",
    image: imgTodo,
  },
  {
    id: 3,
    titre: "Site Vitrine",
    desc: "Site vitrine responsive pour une petite entreprise locale.",
    tech: ["HTML", "CSS", "JavaScript"],
    lien: "#",
    image: imgVitrine,
  },
];

function Projets() {
  return (
    <div className="projets-page">

      {/* Bannière */}
      <div className="projets-banner">
        <div className="projets-banner-circle p1"></div>
        <div className="projets-banner-circle p2"></div>
        <div className="projets-banner-circle p3"></div>
        <div className="projets-banner-content">
          <p className="projets-banner-tag">Mes réalisations</p>
          <h1 className="projets-banner-title">Projets</h1>
          <p className="projets-banner-sub">
            Voici quelques projets sur lesquels j'ai travaillé.
          </p>
        </div>
      </div>

      {/* Grille */}
      <section className="projets">
        <div className="projets-grid">
          {projets.map((projet) => (
            <div key={projet.id} className="projet-card-coral">
              <div className="projet-img">
                <img src={projet.image} alt={projet.titre} />
                <div className="projet-num-coral">0{projet.id}</div>
              </div>
              <div className="projet-body">
                <h3 className="projet-titre">{projet.titre}</h3>
                <p className="projet-desc">{projet.desc}</p>
                <div className="projet-tech">
                  {projet.tech.map((t) => (
                    <span key={t} className="tech-badge-coral">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={projet.lien} className="projet-lien-coral">
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projets;