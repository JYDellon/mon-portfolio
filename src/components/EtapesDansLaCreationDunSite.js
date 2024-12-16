import React, { useState } from 'react';
import './EtapesDansLaCreationDunSite.css';

function EtapesDansLaCreationDunSite() {
    const etapes = [
        "Vos besoins",
        "Maquettes & Propositions",
        "Développement web",
        "Mise en ligne",
        "Accompagnement continu",
    ];

    const etapesDetails = [
        "Nous commencerons par une discussion pour comprendre vos attentes et objectifs. Cette étape essentielle nous permettra de poser les bases d’un site qui correspond parfaitement à vos besoins.",
        "À partir de vos idées, nous concevons des maquettes ou des schémas détaillés, accompagnés d’une proposition sur-mesure. Vous aurez ainsi une vision claire du futur site et pourrez valider son design avant de passer au développement.",
        "Une fois la maquette validée, nous développons votre site avec soin, en intégrant chaque fonctionnalité selon vos besoins. Chaque étape est minutieusement testée pour garantir un rendu performant et conforme à vos attentes.",
        "Une fois votre site finalisé, nous le mettons en ligne et veillons à ce qu’il soit parfaitement fonctionnel, prêt à offrir la meilleure expérience à vos visiteurs.",
        "Après la mise en ligne, nous restons à vos côtés pour un suivi personnalisé. Nous vous accompagnons dans l’évolution de votre site, en effectuant des mises à jour, des ajustements, ou en répondant à vos besoins changeants.",
    ];

    const [etapeSelectionnee, setEtapeSelectionnee] = useState(null);

    const toggleEtape = (index) => {
        setEtapeSelectionnee(etapeSelectionnee === index ? null : index);
    };

    return (
        <>
            <div>
                {/* Texte d'introduction */}
            <div className="intro-text">
                <h2>
                Votre site web clés en main
                </h2>
            </div>
            </div>
            <div className="etapes-container">
                
                {etapes.map((etape, index) => (
                    <div key={index} className="etape-toggle-container">
                        
                        <div
                            className={`etape-toggle-header ${
                                etapeSelectionnee === index ? 'active' : ''
                            }`}
                            onClick={() => toggleEtape(index)}
                        >
                            
                            
                            <div>
                                <h3>{etape}</h3>
                            </div>
                            
                        </div>
                        {etapeSelectionnee === index && (
                            <div className="etape-toggle-details">
                                <p className="texte">{etapesDetails[index]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default EtapesDansLaCreationDunSite;
