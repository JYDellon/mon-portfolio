import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function Navbar({ onLinkClick }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPersonalPc, setIsPersonalPc] = useState(false);

  // Votre IP publique (à personnaliser)
  const personalPcIp = '109.9.43.34';

  const isActiveLink = (path) => location.pathname === path;
  const [isModalOpen, setIsModalOpen] = useState(false);


  // const toggleMenu = () => setIsMenuOpen((prev) => !prev);



  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Vérifie l'adresse IP et met à jour l'état
  useEffect(() => {
    axios
      .get('http://api.ipify.org?format=json')
      .then((response) => {
        const clientIp = response.data.ip;
        setIsPersonalPc(clientIp === personalPcIp);
      })
      .catch((error) => console.error('Erreur lors de la récupération de l\'IP:', error));
  }, []);

  return (
    <div className="navbar-container">

      {/* Menu Burger */}
      <div className="miseEnPage">
        <div className="navbar-header">
          <button
            className="menu-toggle"
            onClick={openModal}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

{/* Modale pour les petits écrans */}
      {isModalOpen && (
        <div className="modalXXX" onClick={closeModal}>
          <div className="modalXXX-content">
            <nav className="modalXXX-menu">
              <ul>
                <li>
                  <Link
                    to="/"
                    className={isActiveLink('/') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className={isActiveLink('/a-propos') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    A propos de
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nos-services"
                    className={isActiveLink('/nos-services') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    Nos solutions web
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className={isActiveLink('/portfolio') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    Etudes de cas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={isActiveLink('/contact') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rgpd"
                    className={isActiveLink('/rgpd') ? 'active' : ''}
                    onClick={closeModal}
                  >
                    RGPD
                  </Link>
                </li>
                {isPersonalPc && (
                  <li>
                    <Link
                      to="/dashboard"
                      className={isActiveLink('/dashboard') ? 'active' : ''}
                      onClick={closeModal}
                    >
                      Tableau de bord
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}



      {/* <nav
        className={`navbar-menu ${isMenuOpen ? 'open' : ''} ${isPersonalPc ? 'personal-ip' : ''}`}
      >
        <ul>
          <li>
            <Link
              to="/"
              className={isActiveLink('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={isActiveLink('/a-propos') ? 'active' : ''}
              onClick={closeMenu}
            >
              À propos de
            </Link>
          </li>
          <li>
            <Link
              to="/nos-services"
              className={isActiveLink('/nos-services') ? 'active' : ''}
              onClick={closeMenu}
            >
              Nos solutions web
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={isActiveLink('/portfolio') ? 'active' : ''}
              onClick={closeMenu}
            >
              Études de cas
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActiveLink('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/rgpd"
              className={isActiveLink('/rgpd') ? 'active' : ''}
              onClick={closeMenu}
            >
              RGPD
            </Link>
          </li>
          {isPersonalPc && (
            <li>
              <Link
                to="/dashboard"
                className={isActiveLink('/dashboard') ? 'active' : ''}
                onClick={closeMenu}
              >
                Tableau de bord
              </Link>
            </li>
          )}
        </ul>
      </nav> */}


<nav
  className={`navbar-menu ${isMenuOpen ? 'open' : ''} ${isPersonalPc ? 'personal-ip' : ''}`}
>
  <ul>
    <li>
      <Link
        to="/"
        className={isActiveLink('/') ? 'active' : ''}
        onClick={closeMenu}
      >
        Accueil
      </Link>
    </li>
    <li>
      <Link
        to="/a-propos"
        className={isActiveLink('/a-propos') ? 'active' : ''}
        onClick={closeMenu}
      >
        À propos de
      </Link>
    </li>
    <li>
      <Link
        to="/nos-services"
        className={isActiveLink('/nos-services') ? 'active' : ''}
        onClick={closeMenu}
      >
        Nos solutions web
      </Link>
    </li>
    <li>
      <Link
        to="/portfolio"
        className={isActiveLink('/portfolio') ? 'active' : ''}
        onClick={closeMenu}
      >
        Études de cas
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className={isActiveLink('/contact') ? 'active' : ''}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </li>
    <li>
      <Link
        to="/rgpd"
        className={isActiveLink('/rgpd') ? 'active' : ''}
        onClick={closeMenu}
      >
        RGPD
      </Link>
    </li>
    {isPersonalPc && (
      <li>
        <Link
          to="/dashboard"
          className={isActiveLink('/dashboard') ? 'active' : ''}
          onClick={closeMenu}
        >
          Tableau de bord
        </Link>
      </li>
    )}
  </ul>
</nav>




    </div>
  );
}

export default Navbar;
