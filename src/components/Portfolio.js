import React from 'react';
import JRAUTO from '../assets/images/PORTFOLIO.jpg';
import SECOND_SITE from '../assets/images/hebergement-deploiement.jpg';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-items">
                {/* Étude de cas 1 */}
                <section className="portfolio-item">
                    <div className="portfolio-content">
                        <div className="portfolio-text">
                            <h3 className="portfolio-titre">JR Auto</h3>
                            <p className="portfolio-description">
                                JR Auto nous a sollicités pour réaliser leur site web afin de soutenir le démarrage de leur activité.
                            </p>
                            <p className="portfolio-description">
                                Le défi était de créer un site vitrine en seulement une semaine. Nous avons redéfini le design du site avec une expérience utilisateur UX/UI de qualité...
                            </p>
                            <div className="portfolio-cta-container">
                                <a href="https://jydellon.github.io/JRAuto/" target="_blank" rel="noopener noreferrer" className="portfolio-cta">
                                    Visiter le site
                                </a>
                            </div>
                        </div>
                        <div className="image-container">
                            <a href="https://jydellon.github.io/JRAuto/" target="_blank" rel="noopener noreferrer">
                                <img src={JRAUTO} alt="Aperçu du site JR Auto" className="portfolio-image" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Étude de cas 2 */}
                <section className="portfolio-item">
                    <div className="portfolio-content">
                        <div className="portfolio-text">
                            <h3 className="portfolio-titre">Ashanti Beauty</h3>
                            <p className="portfolio-description">
                                Ashanti Beauty nous a sollicités alors que j'étais en formation pour réaliser un site web afin de soutenir le démarrage de son activité...
                            </p>
                            <p className="portfolio-description">
                                Le défi était de créer un site vitrine en seulement une semaine. Nous avons redéfini le design du site avec une expérience utilisateur UX/UI de qualité...
                            </p>
                            <div className="portfolio-cta-container">
                                <a href="https://jydellon.github.io/JRAuto/" target="_blank" rel="noopener noreferrer" className="portfolio-cta">
                                    Visiter le site
                                </a>
                            </div>
                        </div>
                        <div className="image-container">
                            <a href="https://jydellon.github.io/JRAuto/" target="_blank" rel="noopener noreferrer">
                                <img src={SECOND_SITE} alt="Aperçu du site Ashanti Beauty" className="portfolio-image" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Portfolio;
