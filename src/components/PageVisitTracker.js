import React, { useEffect } from 'react';
import axios from 'axios';

const PageVisitTracker = ({ pageUrl }) => {

  useEffect(() => {
    // Envoyer une requête POST pour enregistrer la visite
    const trackVisit = async () => {
        const encodedPageUrl = encodeURIComponent(pageUrl); // Encodage du pageUrl
        console.log("Request URL:", `/api/visit/${encodedPageUrl}`);  // Log de l'URL
      
        try {
          const response = await axios.post(`/api/visit/${encodedPageUrl}`);
          console.log('Page visit recorded:', response.data);
        } catch (error) {
          console.error('Error recording page visit:', error);
        }
      };
      
      
      

    trackVisit();
  }, [pageUrl]);  // Le hook useEffect se déclenche à chaque fois que `pageUrl` change

  return null;
};

export default PageVisitTracker;
