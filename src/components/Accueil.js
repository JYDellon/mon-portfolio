import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import axios from 'axios'; // Importation d'Axios pour envoyer la requête
import './Accueil.css';
import siteVitrine from '../assets/images/developpement-front.jpg';
import siteEcommerce from '../assets/images/siteVitrine.jpg';
import sitePersonnalise from '../assets/images/together.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Accueil() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };


useEffect(() => {
    console.log("Visite enregistrée pour la page d'accueil");  // Ajoutez un log ici
    axios.post('http://localhost:8000/api/visit/accueil', {
        page: 'accueil', // Le nom de la page à enregistrer
    })
    .then(response => {
        console.log("Visite enregistrée avec succès", response.data);
    })
    .catch(error => {
        console.error("Erreur lors de l'enregistrement de la visite", error);
    });
}, []); // Le tableau vide fait en sorte que cela ne se déclenche qu'une fois au premier rendu





    return (
        <>
        <div className="intro-textAccueil">
            <h2>Bienvenue chez AeoniX</h2>
        </div>
        <div className='centrage'>
            <div className="accueil-container">
                <div className="cardm" onClick={() => navigate('/etapesCreationSite')}>
                    <h3>VOTRE SITE WEB </h3>
                    <h3>CLES EN MAIN</h3>
                </div>

                <div className="cardmDevis" onClick={() => navigate('/devis')}>
                    <h3> DEVIS</h3><h3>GRATUIT</h3>   
                </div>

                <div className="carousel-container">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-content">
                                <img src={siteVitrine} alt="Site Vitrine" className="carousel-image" />
                                <h3>Des sites vitrines professionnels pour votre entreprise.</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-content">
                                <img src={siteEcommerce} alt="Site Ecommerce" className="carousel-image" />
                                <h3>Lancez votre boutique en ligne avec un site e-commerce performant et sécurisé.</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-content">
                                <img src={sitePersonnalise} alt="Site Personnalise" className="carousel-image" />
                                <h3>Créez le site web de vos rêves avec AeoniX.</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        </>    
    );
}

export default Accueil;