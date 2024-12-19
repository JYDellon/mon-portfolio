import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios'; // Importation d'Axios
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NosServices from './components/NosServices';
import Rgpd from './components/Rgpd';
import EtapesDansLaCreationDunSite from './components/EtapesDansLaCreationDunSite';
import './App.css';
import Formulaire from './components/Formulaire';
import FormulaireContact from './components/FormulaireContact';
import Devis from './components/Devis';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; 

// Importation du logo
import logo1 from './assets/images/logo05.1.png';
import logo3 from './assets/images/Sans titre-2.1.png';




// Importation des fonds 
import fondAccueil from './assets/images/fondecran/fond12.jpg';
import fondAPropos from './assets/images/fondecran/fond12.jpg';
import fondServices from './assets/images/fondecran/fond12.jpg';
import fondPortfolio from './assets/images/fondecran/fond12.jpg';
import fondContact from './assets/images/fondecran/fond12.jpg';
import fondRgpd from './assets/images/fondecran/fond12.jpg';
import fondDevis from './assets/images/fondecran/fond12.jpg';

// Mappage des routes aux fonds
const fondsRoutes = {
  '/': fondAccueil,
  '/a-propos': fondAPropos,
  '/nos-services': fondServices,
  '/portfolio': fondPortfolio,
  '/contact': fondContact,
  '/rgpd': fondRgpd,
  '/devis': fondDevis,
};

function App() {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState(fondAccueil);
  const [nextBackground, setNextBackground] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  // Effect pour envoyer la requête POST de visite chaque fois que la page change
  useEffect(() => {
    const incrementVisitCounter = async () => {
      const pageUrl = location.pathname.replace('/', ''); // Extraire l'URL de la page actuelle sans le '/'
      try {
        const response = await axios.post(`https://aeonixbackendsynfomy.vercel.app/api/visit/${pageUrl}`);
        console.log('Compteur de visites incrémenté:', response.data.count);
      } catch (error) {
        console.error('Erreur lors de l\'incrémentation du compteur de visites:', error);
      }
    };

    incrementVisitCounter();
  }, [location]);  // Le tableau [location] permet d'exécuter l'effet à chaque changement de route

  // Utilisation de useEffect pour changer l'arrière-plan selon la route
  useEffect(() => {
    const newBackground = fondsRoutes[location.pathname] || fondAccueil;
    if (newBackground !== currentBackground) {
      setNextBackground(newBackground);
      setTransitioning(true);
    }
  }, [location, currentBackground]);

  // Transition de l'arrière-plan
  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setCurrentBackground(nextBackground);
        setNextBackground(null);
        setTransitioning(false);
      }, 1000); // Durée de transition (en ms)
      return () => clearTimeout(timeout);
    }
  }, [transitioning, nextBackground]);

  return (
    <div className="app-container">
      <div className="background-container">
        <div
          className="background current"
          style={{
            backgroundImage: `url(${currentBackground})`,
          }}
        ></div>
        {nextBackground && (
          <div
            className="background next"
            style={{
              backgroundImage: `url(${nextBackground})`,
            }}
          ></div>
        )}
      </div>

      <header className="header">
        <div className="gros">
          <div className="logo-container">
            <img src={logo1} alt="Logo" className="logo" />
            <div className="MiseEnPage02">
              <div><img src={logo3} alt="Logo" className="logo3" /></div>
            </div>
          </div>
        </div>
      </header>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-services" element={<NosServices />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="/etapesCreationSite" element={<EtapesDansLaCreationDunSite />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formulaire-devis" element={<Formulaire />} />
        <Route path="/formulaire-contact" element={<FormulaireContact />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
