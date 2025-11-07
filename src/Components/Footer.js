import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Effet de particules bleues en arrière-plan */}
      <div className="footer-background"></div>
      
      {/* Électrons en orbite dans le footer */}
      <div className="footer-electrons">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className={`electron electron-footer-${index + 1}`}
          ></div>
        ))}
      </div>

      <div className="footer-content">
        {/* Section principale du footer */}
        <div className="footer-sections">
          {/* Colonne Logo et description */}
          <div className="footer-column">
            <div className="footer-logo">
              <h3 className="flaming-text-footer">
                HACK-G7
              </h3>
              <p className="footer-description">
                Créons ensemble l'avenir numérique avec innovation 
                et passion. Rejoignez notre communauté visionnaire.
              </p>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="social-links">
              <button className="social-btn">
                <span className="social-icon">📘</span>
              </button>
              <button className="social-btn">
                <span className="social-icon">🐦</span>
              </button>
              <button className="social-btn">
                <span className="social-icon">📷</span>
              </button>
              <button className="social-btn">
                <span className="social-icon">💼</span>
              </button>
            </div>
          </div>

          {/* Colonne Liens rapides */}
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#accueil" className="footer-link">Accueil</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#projets" className="footer-link">Projets</a></li>
              <li><a href="#apropos" className="footer-link">À propos</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Colonne Services */}
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#developpement" className="footer-link">Développement Web</a></li>
              <li><a href="#design" className="footer-link">Design UI/UX</a></li>
              <li><a href="#mobile" className="footer-link">Apps Mobile</a></li>
              <li><a href="#consulting" className="footer-link">Consulting</a></li>
              <li><a href="#formation" className="footer-link">Formation</a></li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                giovannikamdem7@gmail.com
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                +237 658 03 66 48
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Cameroun Yaounde
              </p>
            </div>
            
            {/* Bouton Newsletter */}
            <div className="newsletter">
              <input 
                type="email" 
                placeholder="Votre email"
                className="newsletter-input"
              />
              <button className="btn-primary newsletter-btn">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Section de copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright-section">
            <p className="copyright-text">
              © 2025 giovanni@HACK-G7. Tous droits réservés.
            </p>
            <div className="legal-links">
              <a href="#confidentialite" className="legal-link">
                Confidentialité
              </a>
              <a href="#conditions" className="legal-link">
                Conditions d'utilisation
              </a>
              <a href="#cookies" className="legal-link">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;