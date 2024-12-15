import React, { useState } from 'react';
import './EtapesDansLaCreationDunSite.css';

function EtapesDansLaCreationDunSite() {
    const etapes = [
        "La compréhension de vos besoins",
        "Propositions et maquettes",
        "Le développement",
        "Livraison",
        "Suivi",
    ];

    const etapesDetails = [
        "Nous commencerons par une discussion pour comprendre vos attentes, vos objectifs, et les particularités de votre projet. Cette étape est essentielle pour poser les bases d’un site qui répond parfaitement à vos besoins.",
        "À partir de vos idées, nous concevrons une proposition accompagnée de maquettes ou de schémas. Cela vous permettra d'obtenir une vision claire du futur site et de valider son design avant le développement.",
        "Une fois la maquette approuvée, nous développons votre site avec soin. Chaque fonctionnalité est intégrée et testée pour garantir un rendu optimal et conforme à vos attentes.",
        "Une fois le site finalisé, nous procédons à sa mise en ligne. Nous vérifions qu’il est parfaitement fonctionnel et prêt à être utilisé par vos visiteurs.",
        "Après la livraison, nous restons disponibles pour vous accompagner. Nous proposons un suivi personnalisé pour effectuer des mises à jour, des ajustements ou répondre à vos besoins évolutifs.",
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
