import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import FormulaireContact from './FormulaireContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faClock, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false); // État global pour basculer entre contact et formulaire
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setShowScrollToTop(position > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const openFormulaireContact = () => {
        setIsFormVisible(true); // Affiche le formulaire
    };

    const closeFormulaireContact = () => {
        setIsFormVisible(false); // Ferme le formulaire
    };

    return (
        <div className="contact-container">
            {showScrollToTop && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            )}

            {!isFormVisible && ( // Afficher Contact uniquement si le formulaire n'est pas visible
                <>
                    {/* En-tête */}
                    <div className="form-header">
                        <div className="cardmContact" onClick={openFormulaireContact}>
                            <h3>Formulaire</h3><h3>Contact</h3>
                        </div>

                        <div className="cardmDevis2" onClick={() => navigate('/devis')}>
                            <h3>DEVIS</h3><h3>GRATUIT</h3>
                        </div>
                    </div>

                    {/* Layout général */}
                    <div className="contact-layout">
                        {/* Colonne gauche */}
                        <div className="left-section">
                            <div className="availability-card">
                                <h3>Nos Heures d’Ouverture</h3>
                                <FontAwesomeIcon icon={faClock} className="availability-icon" />
                                <div className="availability-details">
                                    <div className="days">
                                        <div className="availability-item"><span>Lundi</span></div>
                                        <div className="availability-item"><span>Mardi</span></div>
                                        <div className="availability-item"><span>Mercredi</span></div>
                                        <div className="availability-item"><span>Jeudi</span></div>
                                        <div className="availability-item"><span>Vendredi</span></div>
                                    </div>
                                    <div className="hours">
                                        <div className="availability-item"><span>8:00 - 17:00</span></div>
                                        <div className="availability-item"><span>8:00 - 17:00</span></div>
                                        <div className="availability-item"><span>8:00 - 17:00</span></div>
                                        <div className="availability-item"><span>8:00 - 17:00</span></div>
                                        <div className="availability-item"><span>8:00 - 17:00</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="phone-card">
                                <h3>Appelez-nous</h3>
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <p>+33 6 12 34 56 78</p>
                            </div>
                        </div>

                        {/* Colonne centrale */}
                        <div className="center-section">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5058.516014730583!2d3.0529218769455255!3d50.65946997163289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a606e33a929%3A0x2ac6497882aa0b95!2s57%20Rue%20Pasteur%2C%2059350%20Saint-Andr%C3%A9-lez-Lille!5e0!3m2!1sfr!2sfr!4v1731661799409!5m2!1sfr!2sfr"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Colonne droite */}
                        <div className="right-section">
                            <div className="mail-card">
                                <h3>Envoyez-nous un E-mail</h3>
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <p>example@mail.com</p>
                            </div>

                            <div className="social-cardContact">
                                <h3>Suivez-nous sur les Réseaux</h3>
                                <div className="reseaux">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {isFormVisible && ( // Affiche le formulaire seulement si demandé
                <div className="formulaire-contact-section">
                    <FormulaireContact onClose={closeFormulaireContact} />
                </div>
            )}
        </div>
    );
}

export default Contact;
