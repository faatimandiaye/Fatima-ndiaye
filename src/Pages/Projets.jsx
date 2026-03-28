import React from "react";

const projets = [
  {
    id: 1,
    titre: "Portfolio Personnel",
    desc: "Mon site portfolio développé avec React et déployé sur Vercel.",
    tech: ["React", "CSS", "Vercel"],
    lien: "#",
    image: "https://placehold.co/400x200/ff6b35/ffffff?text=Portfolio",
  },
  {
    id: 2,
    titre: "Application Todo",
    desc: "Une application de gestion de tâches avec ajout, suppression et filtrage.",
    tech: ["React", "LocalStorage"],
    lien: "#",
    image: "https://placehold.co/400x200/f7931e/ffffff?text=Todo+App",
  },
  {
    id: 3,
    titre: "Site Vitrine",
    desc: "Site vitrine responsive pour une petite entreprise locale.",
    tech: ["HTML", "CSS", "JavaScript"],
    lien: "#",
    image: "https://placehold.co/400x200/ff4e6a/ffffff?text=Site+Vitrine",
  },
];

function Projets() {
  return (
    <div className="projets-page">
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