import React from 'react';
import './ModalError.css'; // Assurez-vous d'avoir un fichier CSS pour le style de la modale.

const ModalError = ({ message, onClose }) => {
  return (
    <div className="modal-error-overlay">
      <div className="modal-error">
        <span className="close" onClick={onClose}>×</span>
        <p>{message}</p>
        <button className="btn-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ModalError;
