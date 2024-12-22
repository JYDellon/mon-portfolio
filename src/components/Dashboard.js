import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [pageVisits, setPageVisits] = useState([]);

  // Charger les données des visites depuis l'API
  useEffect(() => {
    axios
      .get('https://aeonixbackendsynfomy.vercel.app/api/visit') // Vérifiez que l'URL correspond à votre configuration Symfony
      .then((response) => {
        const filteredVisits = response.data.filter(
          (pageVisit) => pageVisit.pageUrl !== "/dashboard"
        );
        setPageVisits(filteredVisits);
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des données des visites :',
          error
        );
      });
  }, []);

  // Réinitialiser les données des visites
  const handleReset = () => {
    axios
      .delete('https://aeonixbackendsynfomy.vercel.app/api/visit')
      .then(() => {
        axios
          .get('https://aeonixbackendsynfomy.vercel.app/api/visit')
          .then((response) => {
            const filteredVisits = response.data.filter(
              (pageVisit) => pageVisit.pageUrl !== "/dashboard"
            );
            setPageVisits(filteredVisits);
          })
          .catch((error) => {
            console.error(
              'Erreur lors de la récupération des données après réinitialisation :',
              error
            );
          });
      })
      .catch((error) => {
        console.error('Erreur lors de la réinitialisation des données :', error);
      });
  };

  return (
    <div className="dashboard-container">
      <h1>Tableau de bord des visites de pages</h1>

      <button className="reset-button" onClick={handleReset}>
        Réinitialiser
      </button>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Nom de la page</th>
            <th>Nombre de visites</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.length > 0 ? (
            pageVisits.map((pageVisit) => {
              let displayName = pageVisit.pageUrl;

              // Correspondance des noms des pages
              switch (pageVisit.pageUrl) {
                case 'nos-services':
                  displayName = 'Nos services web';
                  break;
                case 'portfolio':
                  displayName = 'Études de cas';
                  break;
                case 'apropos':
                  displayName = 'À propos de';
                  break;
                case 'accueil':
                  displayName = 'Accueil';
                  break;
                case 'a-contact':
                  displayName = 'Contact';
                  break;
                case 'rgpd':
                  displayName = 'RGPD';
                  break;
                case 'etapesDansLaCreationDunSite':
                  displayName = 'Votre site web clés en main';
                  break;
                case 'devis':
                  displayName = 'Devis';
                  break;
                default:
                  displayName = pageVisit.pageUrl;
                  break;
              }

              return (
                <tr key={pageVisit.pageUrl}>
                  <td>{displayName}</td>
                  <td>{pageVisit.visitCount}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="2">Aucune donnée disponible</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;












