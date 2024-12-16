import './FormulaireContact.css';
import React, { useState } from 'react';

// Définition du composant ModalSuccess
const ModalSuccess = ({ onClose, closeForm }) => {
  const handleClose = () => {
    closeForm(); // Ferme le formulaire
    onClose();   // Ferme la modale
  };

  return (
    <div className="modal-success-overlay">
      <div className="modal-success">
        <p>Votre message a été envoyé avec succès !</p>
        <button onClick={handleClose} className="btn-close">Fermer</button>
      </div>
    </div>
  );
};

const FormulaireContact = ({ onClose }) => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // État pour afficher ou non la modale

  const envoyerMessage = async (data) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('https://mon-portfolio.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Réinitialiser les champs du formulaire après envoi
        setPrenom('');
        setNom('');
        setEmail('');
        setTelephone('');
        setMessage('');
        setShowModal(true); // Afficher la modale en cas de succès
      } else {
        const result = await response.json();
        setError(result.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setError('Erreur de connexion au serveur.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { prenom, nom, email, telephone, message };
    envoyerMessage(data);
  };

  const closeModal = () => {
    setShowModal(false); // Ferme la modale
  };

  const closeForm = () => {
    onClose(); // Ferme le formulaire
  };

  return (
    <div>
      {showModal && <ModalSuccess onClose={closeModal} closeForm={closeForm} />} {/* Modale affichée si showModal est true */}
      <form onSubmit={handleSubmit} className="form-contact-ui">
        <div className="ligne">
          <div className="champ">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Entrez votre prénom"
            />
          </div>
          <div className="champ">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez votre nom"
            />
          </div>
        </div>
        <div className="ligne">
          <div className="champ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@domaine.com"
            />
          </div>
          <div className="champ">
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="text"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="0123456789"
            />
          </div>
        </div>
        <div className="ligne">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    </div>
  );
};

export default FormulaireContact;
