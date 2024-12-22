import React, { useEffect, useState } from 'react';

function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);

  // Fonction pour récupérer le compteur de visites
  const fetchVisitCount = async () => {
    try {
        const response = axios.get('http://localhost:8000/api/visit') // Assurez-vous que l'URL est correcte
        const text = await response.text(); // Utilisez .text() pour voir la réponse brute
        console.log("Réponse brute:", text); // Affichez la réponse brute pour déboguer
        
        // Vérifiez si la réponse est en JSON valide
        const data = JSON.parse(text);

        if (response.ok) {
          setVisitCount(data.count); // Mettre à jour l'état avec le nombre de visites
        } else {
          console.error('Erreur lors de la récupération des données');
        }
    } catch (error) {
      console.error('Une erreur s\'est produite:', error);
    }
  };

  // Utilisation de useEffect pour récupérer les données dès que le composant est monté
  useEffect(() => {
    fetchVisitCount();
  }, []); // Le tableau vide signifie que cela se produit une seule fois à l'initialisation du composant

  return (
    <div>
      <h1>Compteur de Visites</h1>
      <p>Nombre de visites : {visitCount}</p>
    </div>
  );
}

export default VisitCounter;
