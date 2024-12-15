// ModalSuccess.js
import React from 'react';
import './ModalSuccess.css'; // Assurez-vous de styliser la modale.

const ModalSuccess = ({ message, onClose }) => {
  return (
    <div className="modal-success-overlay">
      <div className="modal-success">
        <span className="close" onClick={onClose}>×</span>
        <p>{message}</p>
        <button className="btn-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ModalSuccess;
