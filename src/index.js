import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de 'react-dom/client' pour React 18 et plus
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Créer un "root" avec React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application dans le root sans React.StrictMode
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
