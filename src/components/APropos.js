// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const chapitres = [
//         "Notre histoire",
//         "Notre mission",
//         "Nos valeurs",
//         "Notre équipe",
//         "Ce qui nous distingue",
//         "Pourquoi nous choisir ?",
//     ];

//     const chapitresDetails = [
//         "Passionnés par le web design et les nouvelles technologies, nous avons créé cette société pour offrir des solutions web innovantes, modernes et adaptées aux besoins de chaque client",
//         "Créer des sites web intuitifs, modernes et performants, tout en proposant un suivi complet allant de la conception à l'hébergement, la maintenance et le suivi après la livraison.",
//         "🔹 Innovation : Créer des sites web modernes et performants.🔹 Écoute & Proximité : Comprendre vos besoins pour mieux vous accompagner.🔹 Qualité & Satisfaction : Votre réussite est notre priorité.",
//         "Une équipe de professionnels passionnés spécialisée en design, développement, SEO et support pour vous offrir un service complet et adapté",
//         "✅ Approche sur mesure.✅ Service clé en main : de la conception au suivi.✅ Expérience utilisateur optimale & expertise technique.",
//         "Des solutions adaptées, un suivi personnalisé et une équipe passionnée pour créer votre site web avec qualité et efficacité.",
//     ];

//     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

//     const toggleChapitre = (index) => {
//         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
//     };

//     return (
//         <>     
//         <div className="apropos-container">
//             {chapitres.map((chapitre, index) => (
//                 <div
//                     key={index}
//                     className={`chapitre-toggle-container ${
//                         index % 2 === 0 ? 'gauche' : 'droite'
//                     }`}
//                     style={{
//                         animationDelay: `${index * 0.1}s`
//                     }}
//                 >
//                     {/* En-tête avec gestion de l'état */}
//                     <div
//                         className="chapitre-toggle-header"
//                         onClick={() => toggleChapitre(index)}
//                     >
//                         <h3>{chapitre}</h3>
//                     </div>

//                     {/* Contenu avec état dynamique pour l'animation */}
//                     <div
//                         className={`chapitre-toggle-details ${
//                             chapitreSelectionne === index ? 'show' : 'hide'
//                         }`}
//                     >
//                         <p className="texte">{chapitresDetails[index]}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </>
//     );
// }

// export default APropos;














// import React, { useState } from 'react';
// import './APropos.css';

// function APropos() {
//     const chapitres = [
//         "Notre histoire",
//         "Notre mission",
//         "Nos valeurs",
//         "Notre équipe",
//         "Ce qui nous distingue",
//         "Pourquoi nous choisir ?",
//     ];

//     const chapitresDetails = [
//         "Passionnés par le web design et les nouvelles technologies, nous avons créé cette société pour offrir des solutions web innovantes, modernes et adaptées aux besoins de chaque client.",
//         "Créer des sites web intuitifs, modernes et performants, tout en proposant un suivi complet allant de la conception à l'hébergement, la maintenance et le suivi après la livraison.",
//         "🔹 Innovation : Créer des sites web modernes et performants.🔹 Écoute & Proximité : Comprendre vos besoins pour mieux vous accompagner.🔹 Qualité & Satisfaction : Votre réussite est notre priorité.",
//         "Une équipe de professionnels passionnés spécialisée en design, développement, SEO et support pour vous offrir un service complet et adapté.",
//         "✅ Approche sur mesure.✅ Service clé en main : de la conception au suivi.✅ Expérience utilisateur optimale & expertise technique.",
//         "Des solutions adaptées, un suivi personnalisé et une équipe passionnée pour créer votre site web avec qualité et efficacité.",
//     ];

//     const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

//     const toggleChapitre = (index) => {
//         setChapitreSelectionne(chapitreSelectionne === index ? null : index);
//     };

//     return (
//         <div className="apropos-container">
//             {chapitres.map((chapitre, index) => (
//                 <div
//                     key={index}
//                     className={`chapitre-toggle-container ${
//                         index % 2 === 0 ? 'gauche' : 'droite'
//                     }`}
//                     style={{
//                         animationDelay: `${index * 0.1}s`,
//                     }}
//                 >
//                     {/* En-tête du chapitre */}
//                     <div
//                         className="chapitre-toggle-header"
//                         onClick={() => toggleChapitre(index)}
//                         aria-expanded={chapitreSelectionne === index}
//                         role="button"
//                         tabIndex="0"
//                     >
//                         <h3>{chapitre}</h3>
//                     </div>

//                     {/* Détails du chapitre */}
//                     <div
//                         className={`chapitre-toggle-details ${
//                             chapitreSelectionne === index ? 'show' : ''
//                         }`}
//                     >
//                         <p className="texte">{chapitresDetails[index]}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default APropos;












import React, { useState } from 'react';
import './APropos.css';

function APropos() {
    const chapitres = [
        "Qui sommes-nous ?",
        "Notre mission",
        "Nos valeurs",
        "Notre vision pour l’avenir",
        "Pourquoi nous choisir ?"
    ];

    const chapitresDetails = [
        // Détails pour chaque chapitre
        "Créée en 2025, notre société s’engage à accompagner les entreprises dans leur transformation digitale grâce à des solutions web modernes, esthétiques et performantes.\n\nSpécialisés dans la conception de sites vitrines et e-commerce, nous mettons notre expertise au service des entreprises de toutes tailles, pour les aider à se démarquer et à atteindre leurs objectifs en ligne.\n\nDepuis notre lancement, nous avons déjà collaboré avec [nombre ou type de clients, ex. : plusieurs TPE, PME ou artisans] et avons à cœur de construire des relations durables basées sur la qualité, la confiance et l’innovation.",

        "Notre mission est claire :\n\n- Fournir des sites web sur mesure, à la fois beaux et fonctionnels.\n- Aider nos clients à développer leur visibilité et leur notoriété en ligne.\n- Simplifier la création et la gestion de leur présence numérique grâce à des outils adaptés.\n\nNous savons qu’un site internet n’est pas seulement une vitrine : c’est un levier essentiel pour atteindre vos prospects et fidéliser vos clients.",

        "Nos valeurs sont au cœur de tout ce que nous entreprenons :\n\n- Innovation : Nous utilisons des technologies modernes pour offrir des solutions durables et évolutives.\n- Proximité : Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et dépasser leurs attentes.\n- Excellence : Nous mettons un point d’honneur à livrer des projets de haute qualité, dans les délais impartis.\n- Simplicité : Nous créons des solutions faciles à prendre en main pour garantir votre autonomie.",

        "Nous avons l’ambition de devenir un partenaire clé pour les entreprises souhaitant se démarquer en ligne.\n\nDans les prochaines années, nous souhaitons :\n\n- Collaborer avec un réseau élargi de clients dans divers secteurs.\n- Proposer des services innovants pour anticiper les nouvelles attentes du marché.\n- Continuer à offrir un service client irréprochable, afin de bâtir une réputation solide et durable.",

        "Depuis notre création, nous avons fait nos preuves en accompagnant des entreprises ambitieuses dans leurs projets numériques. Voici pourquoi nos clients nous font confiance :\n\n- Une approche personnalisée : Chaque projet est unique, et nous prenons le temps de comprendre vos besoins.\n- Des solutions modernes et performantes : Nous utilisons des technologies récentes pour garantir la qualité et la longévité de vos sites.\n- Un accompagnement complet : De l’idée initiale à la mise en ligne, nous vous guidons à chaque étape.\n- Un excellent rapport qualité-prix : Nous offrons des prestations de qualité à des tarifs compétitifs."
    ];

    const [chapitreSelectionne, setChapitreSelectionne] = useState(null);

    const toggleChapitre = (index) => {
        setChapitreSelectionne(chapitreSelectionne === index ? null : index);
    };

    return (
        <div className="apropos-container">
            {chapitres.map((chapitre, index) => (
                <div
                    key={index}
                    className={`chapitre-toggle-container ${
                        index % 2 === 0 ? 'gauche' : 'droite'
                    }`}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {/* En-tête du chapitre */}
                    <div
                        className="chapitre-toggle-header"
                        onClick={() => toggleChapitre(index)}
                        aria-expanded={chapitreSelectionne === index}
                        role="button"
                        tabIndex="0"
                    >
                        <h3>{chapitre}</h3>
                    </div>

                    {/* Détails du chapitre */}
                    <div
                        className={`chapitre-toggle-details ${
                            chapitreSelectionne === index ? 'show' : ''
                        }`}
                    >
                        <p className="texte">{chapitresDetails[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default APropos;
