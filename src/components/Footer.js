import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/nos-services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email : <a href="mailto:contact@monsite.com">contact@monsite.com</a></p>
          <p>Téléphone : +33 1 23 45 67 89</p>
          <p>Adresse : 123 Rue de l'Exemple, Paris, France</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright et Mentions légales */}
      <div className="footer-bottom">
        <p>&copy; 2024 MonSiteWeb. Tous droits réservés.</p>
        <Link to="/rgpd">Mentions légales</Link> | <Link to="/rgpd">Politique de confidentialité</Link>
      </div>
    </footer>
  );
};

export default Footer;
