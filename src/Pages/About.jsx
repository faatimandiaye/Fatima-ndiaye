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
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <p className="section-tag">À propos</p>
            <h2 className="section-title">Qui suis-je ?</h2>
            <p className="about-desc">
              Je suis <strong>Fatima</strong>, étudiante en développement web et mobil,
              passionnée par la création d'interfaces modernes et intuitives.
              J'aime apprendre de nouvelles technologies et relever des défis
              créatifs.
            </p>
            <p className="about-desc">
              Mon objectif est de créer des expériences web qui combinent
              esthétique et performance, tout en restant accessibles à tous.
            </p>
          </div>

          <div className="about-skills">
            <p className="section-tag">Compétences</p>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
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