import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rgpd.css';

function Rgpd() {
  const sections = [
    "Quelles données collectons-nous ?",
    "Comment utilisons-nous vos données ?",
    "Vos droits concernant vos données",
    "Contactez-nous",
  ];

  const sectionsDetails = [
    "Nous collectons des données personnelles lorsque vous utilisez nos services.",
    "Nous utilisons vos données pour personnaliser votre expérience.",
    "Vous avez le droit d'accéder, de modifier, de supprimer vos données personnelles.",
    "Si vous avez des questions, contactez-nous via notre formulaire.",
  ];

  const [isMounted, setIsMounted] = useState(false);
  const [sectionSelectionnee, setSectionSelectionnee] = useState(null);

  // Fonction pour enregistrer la visite de la page
  const recordVisit = async () => {
    try {
      const response = await axios.post('https://aeonixbackendsynfomy.vercel.app/api/visit/rgpd', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Visite enregistrée avec succès :", response.data);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la visite :", error);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    recordVisit();
  }, []); // Appel au montage uniquement

  const toggleSection = (index) => {
    setSectionSelectionnee(sectionSelectionnee === index ? null : index);
  };

  const contenuRgpd = sections.map((section, index) => {
    const animationClass = index % 2 === 0 ? 'gauche' : 'droite';

    return (
      <div
        key={index}
        className={`rgpd-toggle-container ${animationClass}`}
      >
        <div
          className={`rgpd-toggle-header ${
            sectionSelectionnee === index ? 'active' : ''
          }`}
          onClick={() => toggleSection(index)}
        >
          <h3>{section}</h3>
        </div>
        <div
          className={`rgpd-toggle-details ${
            sectionSelectionnee === index ? 'show' : 'hide'
          }`}
        >
          <p className="texte">{sectionsDetails[index]}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="intro-textRgpd">
        <h2>La protection de vos données</h2>
      </div>

      <div className="rgpd-container">
        {/* Sections dynamiques */}
        {contenuRgpd}
      </div>
    </>
  );
}

export default Rgpd;














