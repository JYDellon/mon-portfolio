import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [pageVisits, setPageVisits] = useState([]);

  useEffect(() => {
    // Appeler l'API Symfony pour récupérer les données de visites de pages
    axios
      .get('http://localhost:8000/api/visit')  // Assurez-vous que l'URL est correcte selon votre configuration Symfony
      .then((response) => {
        // Filtrer les visites pour exclure celles concernant la page "/dashboard"
        const filteredVisits = response.data.filter(pageVisit => pageVisit.pageUrl !== "/dashboard");
        setPageVisits(filteredVisits);  // Enregistrer les données filtrées
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données des visites:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Tableau de bord des visites de pages</h1>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Nom de la page</th>
            <th>Nombre de visites</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.length >= 0 ? (
            pageVisits.map((pageVisit) => (
              <tr key={pageVisit.pageUrl}>
                <td>{pageVisit.pageUrl}</td>
                <td>{pageVisit.visitCount}</td>
              </tr>
            ))
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
