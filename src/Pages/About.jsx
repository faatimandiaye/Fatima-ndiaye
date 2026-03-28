import React from "react";

function About() {
  const skills = [
    "HTML / CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "Responsive Design",
    "Figma",
  ];

  return (
    <div className="about-page">

      <div className="about-hero-banner">
        <div className="about-banner-circle c1"></div>
        <div className="about-banner-circle c2"></div>
        <div className="about-banner-circle c3"></div>
        <div className="about-banner-content">
          <p className="about-banner-tag">À propos</p>
          <h1 className="about-banner-title">Qui suis-je ?</h1>
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <p className="about-desc">
              Je suis <strong>Fatima</strong>, étudiante en développement web et
              mobil, passionnée par la création d'interfaces modernes et
              intuitives. J'aime apprendre de nouvelles technologies et relever
              des défis créatifs.
            </p>
            <p className="about-desc">
              Mon objectif est de créer des expériences web qui combinent
              esthétique et performance, tout en restant accessibles à tous.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">6+</span>
                <span className="stat-label">Compétences</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projets</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <p className="section-tag-coral">Compétences</p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge-coral">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;