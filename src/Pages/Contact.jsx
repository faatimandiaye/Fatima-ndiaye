import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* Bannière */}
      <div className="contact-banner">
        <div className="contact-banner-circle cb1"></div>
        <div className="contact-banner-circle cb2"></div>
        <div className="contact-banner-circle cb3"></div>
        <div className="contact-banner-content">
          <p className="contact-banner-tag">Me contacter</p>
          <h1 className="contact-banner-title">Travaillons ensemble</h1>
          <p className="contact-banner-sub">
            Vous avez un projet ? Écrivez-moi !
          </p>
        </div>
      </div>

      {/* Contenu */}
      <section className="contact">
        <div className="contact-container">

          {/* Infos */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon"></div>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">faatimandiaye@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"></div>
              <div>
                <p className="contact-info-label">Localisation</p>
                <p className="contact-info-value">Dakar, Sénégal</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"></div>
              <div>
                <p className="contact-info-label">Disponibilité</p>
                <p className="contact-info-value">Projets freelance</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="contact-form-wrapper">
            {envoye ? (
              <div className="success-msg-coral">
                <span className="success-icon"></span>
                <p>Message envoyé avec succès !</p>
                <span>Je vous répondrai dans les plus brefs délais.</span>
              </div>
            ) : (
              <form className="contact-form-coral" onSubmit={handleSubmit}>
                <div className="form-group-coral">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="form-group-coral">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="form-group-coral">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="btn-coral">
                  Envoyer le message 
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;