// import React, { useState, useRef } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     {
//         title: 'Les sites vitrines',
//         details: [
//             {
//                 subtitle: 'Caractéristiques principales',
//                 content: [
//                     { title: 'Présentation de l\'activité', description: 'Un site vitrine met en avant les informations essentielles sur une entreprise, son activité et ses services.' },
//                     { title: 'Navigation simple', description: 'Le site est conçu avec une structure claire pour que les visiteurs trouvent rapidement les informations dont ils ont besoin.' },
//                     { title: 'Pas de vente en ligne', description: 'Ce type de site ne propose pas d\'outils pour acheter des produits ou services directement en ligne.' },
//                     { title: 'Accessible à tous', description: 'Un site vitrine est facile d\'accès et fonctionne sur différents appareils, comme les ordinateurs ou smartphones.' },
//                 ],
//             },
//             {
//                 subtitle: 'À quoi sert un site vitrine ?',
//                 content: [
//                     { title: 'Donner une image professionnelle', description: 'Un site vitrine offre une présence en ligne sérieuse et soignée qui renforce la crédibilité de l\'entreprise.' },
//                     { title: 'Informer', description: 'Il permet de fournir des informations essentielles sur l\'entreprise, ses services, ou ses produits.' },
//                     { title: 'Gagner en visibilité', description: 'Le site aide à attirer de nouveaux visiteurs et à accroître la notoriété de l\'entreprise sur internet.' },
//                     { title: 'Faciliter le contact', description: 'Le site permet aux visiteurs de contacter facilement l\'entreprise via des formulaires ou des coordonnées.' },
//                 ],
//             },
//         ],
//     },
//     {
//         title: 'Les sites e-commerce',
//         details: [
//             {
//                 subtitle: 'Caractéristiques principales',
//                 content: [
//                     { title: 'Boutique en ligne', description: 'Permet de vendre des produits ou services en ligne grâce à une plateforme dédiée.' },
//                     { title: 'Paiements sécurisés', description: 'Intégration de systèmes de paiement sécurisés pour garantir des transactions fiables.' },
//                     { title: 'Gestion des stocks', description: 'Inclut des outils pour gérer les stocks en temps réel.' },
//                     { title: 'Interface intuitive', description: 'Conçue pour offrir une expérience utilisateur optimale.' },
//                 ],
//             },
//             {
//                 subtitle: 'À quoi sert un site e-commerce ?',
//                 content: [
//                     { title: 'Augmenter les ventes', description: 'Permet d\'atteindre une clientèle plus large et d\'augmenter les ventes.' },
//                     { title: 'Faciliter les transactions', description: 'Offre une plateforme où les clients peuvent acheter facilement, 24h/24.' },
//                     { title: 'Renforcer la visibilité', description: 'Améliore la présence en ligne de l\'entreprise et attire de nouveaux clients.' },
//                     { title: 'Offrir une expérience personnalisée', description: 'Propose des recommandations et des promotions ciblées pour les utilisateurs.' },
//                 ],
//             },
//         ],
//     },
//     {
//         title: 'Référencement SEO',
//         details: [
//             {
//                 subtitle: 'Caractéristiques principales',
//                 content: [
//                     { title: 'Optimisation pour les moteurs de recherche', description: 'Améliore la visibilité du site sur des moteurs comme Google.' },
//                     { title: 'Optimisation des mots-clés', description: 'Utilisation de mots-clés pertinents pour améliorer le classement.' },
//                     { title: 'Amélioration de la vitesse', description: 'Rend le site plus rapide, essentiel pour le référencement et l\'expérience utilisateur.' },
//                     { title: 'Analyse de la concurrence', description: 'Identifie les meilleures stratégies grâce à une étude approfondie des concurrents.' },
//                 ],
//             },
//             {
//                 subtitle: 'À quoi sert le référencement SEO ?',
//                 content: [
//                     { title: 'Accroître la visibilité', description: 'Permet à votre site de se positionner en haut des résultats de recherche.' },
//                     { title: 'Générer du trafic qualifié', description: 'Attire des visiteurs intéressés par vos produits ou services.' },
//                     { title: 'Augmenter les conversions', description: 'Un trafic qualifié conduit à de meilleurs taux de conversion.' },
//                     { title: 'Renforcer la crédibilité', description: 'Les sites bien positionnés sont perçus comme crédibles et professionnels.' },
//                 ],
//             },
//         ],
//     },
//     {
//         title: 'Hébergement sécurisé',
//         details: [
//             {
//                 subtitle: 'Caractéristiques principales',
//                 content: [
//                     { title: 'Sécurisation des données', description: 'Protection des données sensibles grâce à des technologies avancées.' },
//                     { title: 'Backups réguliers', description: 'Sauvegardes fréquentes pour garantir la récupération en cas de problème.' },
//                     { title: 'Certificat SSL', description: 'Sécurise la communication entre le serveur et les utilisateurs.' },
//                     { title: 'Protection contre les attaques', description: 'Protège les serveurs contre les attaques DDoS et autres.' },
//                 ],
//             },
//             {
//                 subtitle: 'À quoi sert l\'hébergement sécurisé ?',
//                 content: [
//                     { title: 'Protéger les données', description: 'Assure la sécurité des informations personnelles des utilisateurs.' },
//                     { title: 'Assurer la disponibilité', description: 'Garantit un site toujours en ligne, même en cas de forte demande.' },
//                     { title: 'Renforcer la confiance', description: 'Améliore la confiance grâce à une infrastructure sécurisée.' },
//                     { title: 'Optimiser les performances', description: 'Offre une vitesse et des performances optimales.' },
//                 ],
//             },
//         ],
//     },
//     {
//         title: 'Gestion et maintenance',
//         details: [
//             {
//                 subtitle: 'Caractéristiques principales',
//                 content: [
//                     { title: 'Maintenance continue', description: 'Garantit la sécurité et les performances du site.' },
//                     { title: 'Mises à jour régulières', description: 'Permet au site de rester fonctionnel et performant.' },
//                     { title: 'Sauvegardes régulières', description: 'Évite toute perte de données grâce à des sauvegardes fréquentes.' },
//                 ],
//             },
//             {
//                 subtitle: 'À quoi sert la gestion et maintenance ?',
//                 content: [
//                     { title: 'Assurer la sécurité', description: 'Détecte et corrige les vulnérabilités pour un site sécurisé.' },
//                     { title: 'Optimiser les performances', description: 'Garantit un site rapide et performant.' },
//                     { title: 'Support technique', description: 'Offre une assistance rapide en cas de problème.' },
//                 ],
//             },
//         ],
//     },
// ];

//   const [openService, setOpenService] = useState(null);
//   const [openSubCategory, setOpenSubCategory] = useState(null);
//   const containerRef = useRef(null);

//   const toggleService = (index) => {
//       setOpenService(openService === index ? null : index);
//   };

//   const toggleSubCategory = (serviceIndex, subIndex) => {
//       const key = `${serviceIndex}-${subIndex}`;
//       setOpenSubCategory(openSubCategory === key ? null : key);
//   };

//   const scrollToTop = (element) => {
//       const container = containerRef.current;
//       const offsetTop = element.offsetTop;
//       container.scrollTo({
//           top: offsetTop - container.offsetTop,
//           behavior: 'smooth',
//       });
//   };

//   return (
//       <>
        //   <div className="intro-textNosServices">
        //       <h2 className="titre-intro-nos-services">
        //           Une présence en ligne réussie
        //       </h2>
        //   </div>

//           <div className="toggle-container" ref={containerRef}>
//               {services.map((service, serviceIndex) => (
//                   <div key={serviceIndex} className="service-section">
//                       <div
//                           className={`service-card toggle-animation-${serviceIndex + 1} ${openService === serviceIndex ? 'active' : ''}`}
//                           onClick={(e) => {
//                               toggleService(serviceIndex);
//                               scrollToTop(e.target); // Ajuster la position du scroll
//                           }}
//                       >
//                           {service.title}
//                       </div>
//                       {openService === serviceIndex && (
//                           <div className="service-details">
//                               {service.details.map((detail, detailIndex) => (
//                                   <div
//                                       key={detailIndex}
//                                       className={`detail-card sub-toggle-animation-${detailIndex + 1} ${openSubCategory === `${serviceIndex}-${detailIndex}` ? 'active' : ''}`}
//                                       onClick={(e) => {
//                                           toggleSubCategory(serviceIndex, detailIndex);
//                                           scrollToTop(e.target); // Ajuster la position du scroll
//                                       }}
//                                   >
//                                       {detail.subtitle}
//                                       {openSubCategory === `${serviceIndex}-${detailIndex}` && (
//                                           <div className="info-cards-container">
//                                               {detail.content.map((item, itemIndex) => (
//                                                   <div key={itemIndex} className="info-card">
//                                                       <strong>{item.title} :</strong> {item.description}
//                                                   </div>
//                                               ))}
//                                           </div>
//                                       )}
//                                   </div>
//                               ))}
//                           </div>
//                       )}
//                   </div>
//               ))}
//           </div>
//       </>
//   );
// };

// export default NosServices;
























// import React from 'react';
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     { title: 'Les sites vitrines', description: 'Un site vitrine met en avant les informations essentielles d\'une entreprise, facile à naviguer.' },
//     { title: 'Les sites e-commerce', description: 'Créer une boutique en ligne avec des options de paiement sécurisées et une gestion de stock optimisée.' },
//     { title: 'Référencement SEO', description: 'Optimisation de votre site pour être bien référencé sur Google et augmenter la visibilité.' },
//     { title: 'Hébergement sécurisé', description: 'Assurez la sécurité de votre site avec un hébergement robuste et des sauvegardes régulières.' },
//     { title: 'Gestion et maintenance', description: 'Mise à jour continue et support technique pour que votre site fonctionne parfaitement.' },
//   ];

//   return (
//     <div className="services-container">
//       <h2 className="services-title">Nos Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//             <button className="learn-more-btn">En savoir plus</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NosServices;












































// import React, { useState } from 'react';
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     {
//       title: 'Les sites vitrines',
//       description: 'Un site vitrine met en avant les informations essentielles d\'une entreprise, facile à naviguer.',
//       details: [
//         { title: 'Caractéristiques', description: 'Mise en avant des informations clés, sans fonction e-commerce.' },
//         { title: 'Objectif', description: 'Renforcer la présence en ligne et faciliter la prise de contact.' },
//       ],
//     },
//     {
//       title: 'Les sites e-commerce',
//       description: 'Créer une boutique en ligne avec des options de paiement sécurisées et une gestion de stock optimisée.',
//       details: [
//         { title: 'Caractéristiques', description: 'Boutique en ligne, gestion des paiements et stocks en temps réel.' },
//         { title: 'Objectif', description: 'Faciliter la vente en ligne et offrir une expérience utilisateur optimisée.' },
//       ],
//     },
//     {
//       title: 'Référencement SEO',
//       description: 'Optimisation de votre site pour être bien référencé sur Google et augmenter la visibilité.',
//       details: [
//         { title: 'Caractéristiques', description: 'Optimisation des mots-clés et amélioration de la vitesse du site.' },
//         { title: 'Objectif', description: 'Augmenter la visibilité sur les moteurs de recherche et générer du trafic qualifié.' },
//       ],
//     },
//     {
//       title: 'Hébergement sécurisé',
//       description: 'Assurez la sécurité de votre site avec un hébergement robuste et des sauvegardes régulières.',
//       details: [
//         { title: 'Caractéristiques', description: 'Protection des données et hébergement avec des backups fréquents.' },
//         { title: 'Objectif', description: 'Assurer la disponibilité et la sécurité des données.' },
//       ],
//     },
//     {
//       title: 'Gestion et maintenance',
//       description: 'Mise à jour continue et support technique pour que votre site fonctionne parfaitement.',
//       details: [
//         { title: 'Caractéristiques', description: 'Maintenance régulière, mises à jour et support technique.' },
//         { title: 'Objectif', description: 'Garantir le bon fonctionnement et la sécurité du site.' },
//       ],
//     },
//   ];

//   const [openService, setOpenService] = useState(null);

//   const toggleService = (index) => {
//     setOpenService(openService === index ? null : index);
//   };

//   return (
//     <div className="services-container">
//       <h2 className="services-title">Nos Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//             <button className="learn-more-btn" onClick={() => toggleService(index)}>
//               {openService === index ? 'Réduire' : 'En savoir plus'}
//             </button>
//             {openService === index && (
//               <div className="service-details">
//                 {service.details.map((detail, detailIndex) => (
//                   <div key={detailIndex} className="service-detail">
//                     <strong>{detail.title}: </strong>{detail.description}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NosServices;





































// import React from 'react';
// import './NosServices.css';

// const NosServices = () => {
//   const services = [
//     {
//       title: 'Les sites vitrines',
//       description: 'Un site vitrine met en avant les informations essentielles d\'une entreprise, facile à naviguer.',
//       details: [
//         { title: 'Caractéristiques', description: 'Mise en avant des informations clés, sans fonction e-commerce.' },
//         { title: 'Objectif', description: 'Renforcer la présence en ligne et faciliter la prise de contact.' },
//       ],
//     },
//     {
//       title: 'Les sites e-commerce',
//       description: 'Créer une boutique en ligne avec des options de paiement sécurisées et une gestion de stock optimisée.',
//       details: [
//         { title: 'Caractéristiques', description: 'Boutique en ligne, gestion des paiements et stocks en temps réel.' },
//         { title: 'Objectif', description: 'Faciliter la vente en ligne et offrir une expérience utilisateur optimisée.' },
//       ],
//     },
//     {
//       title: 'Référencement SEO',
//       description: 'Optimisation de votre site pour être bien référencé sur Google et augmenter la visibilité.',
//       details: [
//         { title: 'Caractéristiques', description: 'Optimisation des mots-clés et amélioration de la vitesse du site.' },
//         { title: 'Objectif', description: 'Augmenter la visibilité sur les moteurs de recherche et générer du trafic qualifié.' },
//       ],
//     },
//     {
//       title: 'Hébergement sécurisé',
//       description: 'Assurez la sécurité de votre site avec un hébergement robuste et des sauvegardes régulières.',
//       details: [
//         { title: 'Caractéristiques', description: 'Protection des données et hébergement avec des backups fréquents.' },
//         { title: 'Objectif', description: 'Assurer la disponibilité et la sécurité des données.' },
//       ],
//     },
//     {
//       title: 'Gestion et maintenance',
//       description: 'Mise à jour continue et support technique pour que votre site fonctionne parfaitement.',
//       details: [
//         { title: 'Caractéristiques', description: 'Maintenance régulière, mises à jour et support technique.' },
//         { title: 'Objectif', description: 'Garantir le bon fonctionnement et la sécurité du site.' },
//       ],
//     },
//   ];

//   return (
//     <div className="services-container">
//       <h2 className="services-title">Nos Services</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-description">{service.description}</p>
//             <div className="service-details">
//               {service.details.map((detail, detailIndex) => (
//                 <div key={detailIndex} className="service-detail">
//                   <strong>{detail.title}: </strong>{detail.description}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NosServices;

































import React from 'react';
import './NosServices.css';

const NosServices = () => {
  const services = [
    {
      title: 'Les sites vitrines',
      description: 'Un site vitrine met en avant les informations essentielles d\'une entreprise, facile à naviguer.',
      details: [
        { title: 'Caractéristiques', description: 'Mise en avant des informations clés, sans fonction e-commerce.' },
        { title: 'Objectif', description: 'Renforcer la présence en ligne et faciliter la prise de contact.' },
      ],
    },
    {
      title: 'Les sites e-commerce',
      description: 'Créer une boutique en ligne avec des options de paiement sécurisées et une gestion de stock optimisée.',
      details: [
        { title: 'Caractéristiques', description: 'Boutique en ligne, gestion des paiements et stocks en temps réel.' },
        { title: 'Objectif', description: 'Faciliter la vente en ligne et offrir une expérience utilisateur optimisée.' },
      ],
    },
    {
      title: 'Référencement SEO',
      description: 'Optimisation de votre site pour être bien référencé sur Google et augmenter la visibilité.',
      details: [
        { title: 'Caractéristiques', description: 'Optimisation des mots-clés et amélioration de la vitesse du site.' },
        { title: 'Objectif', description: 'Augmenter la visibilité sur les moteurs de recherche et générer du trafic qualifié.' },
      ],
    },
    {
      title: 'Hébergement sécurisé',
      description: 'Assurez la sécurité de votre site avec un hébergement robuste et des sauvegardes régulières.',
      details: [
        { title: 'Caractéristiques', description: 'Protection des données et hébergement avec des backups fréquents.' },
        { title: 'Objectif', description: 'Assurer la disponibilité et la sécurité des données.' },
      ],
    },
    {
      title: 'Gestion et maintenance',
      description: 'Mise à jour continue et support technique pour que votre site fonctionne parfaitement.',
      details: [
        { title: 'Caractéristiques', description: 'Maintenance régulière, mises à jour et support technique.' },
        { title: 'Objectif', description: 'Garantir le bon fonctionnement et la sécurité du site.' },
      ],
    },
  ];

  return (
<>




            <div className="intro-textNosServices">
              <h2 className="titre-intro-nos-services">
                  Nos prestation
              </h2>
            </div>



    <div className="services-container">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <div className="service-description">{service.description}</div>
            <div className="service-details">
              {service.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="service-detail">
                  <strong>{detail.title}: </strong>{detail.description}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default NosServices;
