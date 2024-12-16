import ModalSuccess from './ModalSuccess';
import './Formulaire.css';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import ModalError from './ModalError';  // Import de la modale

const Formulaire = () => {
  const [etape, setEtape] = useState(1);
  const [typeDeProjet, setTypeDeProjet] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [urlSiteRefonte, setUrlSiteRefonte] = useState('');
  const [objectifs, setObjectifs] = useState('');
  const [fonctionnalites, setFonctionnalites] = useState([]);
  const [graphisme, setGraphisme] = useState('');
  const [nom, setNom] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();
  const [besoinsHébergement, setBesoinsHébergement] = useState({
    hebergement: false,
    seo: false,
    vitesse: false,
    nomDomaine: false,
    migration: false,
  });  const [etape3Sub, setEtape3Sub] = useState(1);
const [prenom, setPrenom] = useState('');
const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // État pour la modale de succès

  const [descriptionBesoins, setDescriptionBesoins] = useState('');
  const [prestation, setPrestation] = useState('');
  const [refonteChoisie, setRefonteChoisie] = useState(false);
  const [typeProjetSelectionne, setTypeProjetSelectionne] = useState('');
  const [progression, setProgression] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);  // État pour afficher la modale d'erreur
  const [errorMessage, setErrorMessage] = useState('');  // Message d'erreur à afficher

  const handleBesoinsChange = (e) => {
    const { name, checked } = e.target;
    setBesoinsHébergement((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleFonctionnaliteChange = (fonctionnalite) => {
    setFonctionnalites((prev) =>
      prev.includes(fonctionnalite)
        ? prev.filter((item) => item !== fonctionnalite)
        : [...prev, fonctionnalite]
    );
  };

  const handleNomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setNom(value);
    }
  };

  const handlePrenomChange = (e) => {
    const value = e.target.value;
    if (validateNomPrenom(value)) {
      setPrenom(value);
    }
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setTelephone(value);
  };


  const formatTelephone = () => {
    if (validateTelephone(telephone)) {
        const formatted = telephone.replace(/(\d{2})(?=\d)/g, '$1-'); // Ajoute un tiret tous les deux chiffres
        setTelephone(formatted);
    } else {
        // Afficher l'erreur dans la modale
        setErrorMessage("Le numéro de téléphone doit contenir exactement 10 chiffres.");
        setIsModalVisible(true); // Affiche la modale d'erreur
    }
};

  const validateNomPrenom = (value) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ \-]+$/.test(value); // Allowing letters, spaces, and hyphens
  };
  
  const validateTelephone = (value) => {
    return /^\d{10}$/.test(value); // Ensuring the telephone has exactly 10 digits
  };

  

  const handleSelection = (service) => {
    setPrestation(service);
    setEtape(2);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const calcProgression = () => {
      let progress = 0;
  
      if (etape === 1) {
        progress = 20;
      } else if (etape === 2) {
        progress = 40;
      } else if (etape === 3) {
        if (etape3Sub === 1) {
          progress = 60;
        } else if (etape3Sub === 2) {
          progress = 80;
        }
      } else if (etape === 4) {
        progress = 100;
      }
  
      setProgression(progress);
    };
  
    calcProgression();
  }, [etape, etape3Sub]);
  
const handleSuivant = (e) => {
  if (etape === 2) {
      if (!typeProjetSelectionne) {
          setErrorMessage("Veuillez choisir un type de projet avant de continuer.");
          setIsModalVisible(true); // Afficher la modale d'erreur
          return;
      }

      // Si le type de projet est "création" et que les objectifs ne sont pas renseignés
      if (typeProjetSelectionne === "création" && !objectifs.trim()) {
          setErrorMessage("Veuillez remplir 'Vos objectifs' avant de continuer.");
          setIsModalVisible(true);
          return;
      }

      if (
          typeProjetSelectionne === "refonte" &&
          (!urlSiteRefonte.trim() || !objectifs.trim())
      ) {
          setErrorMessage(
              "Pour une refonte, veuillez remplir l'URL du site à refondre ainsi que vos objectifs avant de continuer."
          );
          setIsModalVisible(true);
          return;
      }
  }

  if (etape === 3) {
      if (etape3Sub === 2 && !graphisme) {
          setErrorMessage("Veuillez sélectionner une option de graphisme avant de continuer.");
          setIsModalVisible(true);
          return;
      }
      if (etape3Sub < 2) {
          setEtape3Sub(etape3Sub + 1);
      } else {
          setEtape(etape + 1);
      }
  } else if (etape === 4) {
      if (!nom.trim() || !prenom.trim()) {
          setErrorMessage("Veuillez remplir votre nom et prénom avant de continuer.");
          setIsModalVisible(true);
          return;
      }
      if (!email.trim() || !validateEmail(email)) {
          setErrorMessage("Veuillez saisir un email valide avant de continuer.");
          setIsModalVisible(true);
          return;
      }

      // Le numéro de téléphone devient facultatif, pas de vérification ici.
      envoyerEmail(e);
  } else {
      setEtape(etape + 1);
  }
};


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const validatePhoneNumber = (telephone) => {
    const phoneRegex = /^(\+?\d{1,2}[-\s]?)?(\(?\d{1,3}\)?[-\s]?)?[\d\s-]{7,15}$/;
    return phoneRegex.test(telephone);
  };

  const handlePrecedent = () => {
    if (etape === 3) {
      if (etape3Sub > 1) {
        setEtape3Sub(etape3Sub - 1);
      } else {
        setEtape(etape - 1);
      }
    } else {
      setEtape(etape - 1);
    }
  };

  const envoyerEmail = async (e) => {
    e.preventDefault();
  
    const templateParams = {
      nom,
      email,
      telephone,
      nomEntreprise,
      prestation,
      descriptionBesoins,
      objectifs,
      urlSite: prestation === 'hébergement / nom de domaine' && urlSite.trim() !== '' ? urlSite : '-',
      fonctionnalites: fonctionnalites.join(', '),
      graphisme,
      typeProjet: typeProjetSelectionne === 'création' ? `Création d'un site ${prestation}` : `Refonte d'un site ${prestation}`,
      urlSiteRefonte: refonteChoisie ? urlSiteRefonte : '-',
      besoinsHebergement: Object.entries(besoinsHébergement)
        .filter(([_, checked]) => checked)
        .map(([key]) => key)
        .join(', ') || 'Aucun besoin spécifique',
    };
  
    try {
      const response = await fetch('https://mon-portfolio.vercel.app/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });
  
      if (response.ok) {
        setIsSuccessModalVisible(true); // Afficher la modale de succès
      } else {
        setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
        setIsModalVisible(true); // Afficher la modale d'erreur
      }
    } catch (error) {
      setErrorMessage("Une erreur est survenue lors de l'envoi de votre demande.");
      setIsModalVisible(true); // Afficher la modale d'erreur
    }
  };
  
  const closeSuccessModal = () => {
    setIsSuccessModalVisible(false);
    navigate('/'); // Redirection après fermeture.
  };
  

  return (
    <>
    
      {isModalVisible && <ModalError message={errorMessage} onClose={closeModal} />}
  {isSuccessModalVisible && <ModalSuccess message="Votre demande a été envoyée avec succès !" onClose={closeSuccessModal} />}
      <div className="formulaire-devisS">
            {etape === 1 && (
              <div>
                <p style={{ textAlign: 'center' }} className="mep">Quelle prestation vous intéresse ?</p>
                <div className="cards-container">
                  {['site vitrine', '>Site e-commerce', 'Site personnalisé', 'Hébergement / Nom de domaine'].map((service) => (
                    <div
                      key={service}
                      className={`card ${prestation === service ? 'selected' : ''}`}
                      onClick={() => handleSelection(service)}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {etape === 2 && (
              <div>
                {prestation === 'hébergement / nom de domaine' && (
                  <div>
                    <h1>Vos besoin :</h1>
                    <fieldset className="besoins-section">
                      <legend>Besoins spécifiques</legend>
                      <div className="conteneur-besoins">
                        <div className="colonne-gauche">
                          <div className="besoins-container">
                            {[
                              { name: "hebergement", label: "Hébergement" },
                              { name: "seo", label: "Référencement naturel (SEO)" },
                              { name: "vitesse", label: "Amélioration de la vitesse de chargement de mes pages" },
                              { name: "nomDomaine", label: "Nom de domaine" },
                              { name: "migration", label: "Migration d'hébergement" }
                            ].map(({ name, label }) => (
                              <div key={name} className="besoin-option">
                                <label className="ecart">
                                  <input
                                    type="checkbox"
                                    name={name}
                                    checked={besoinsHébergement[name]}
                                    onChange={handleBesoinsChange}
                                  />
                                  <span className="label-text">{label}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="colonne-droite">
                          <div className="url-container">
                            <label htmlFor="urlSite">Quelle est l'URL de votre site si vous en avez un ?</label>
                            <textarea
                              id="urlSite"
                              value={urlSite}
                              onChange={(e) => setUrlSite(e.target.value)}
                              className="tailleTextarea"
                            />
                          </div>

                          <div className="description-container">
                            <label htmlFor="descriptionBesoins">Description détaillée de votre besoin :</label>
                            <textarea
                              id="descriptionBesoins"
                              value={descriptionBesoins}
                              onChange={(e) => setDescriptionBesoins(e.target.value)}
                              className="tailleTextarea"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                )}

                {prestation !== 'hébergement / nom de domaine' && (
                  <div>
                    <div className="type-projet-container">
                    <fieldset className="type-projet-section">
                      <legend>Type de projet</legend>
                          <div className="type-projet-option">
                            <label>
                              <input
                                type="radio"
                                name="typeProjet"
                                value="création"
                                checked={typeProjetSelectionne === 'création'}
                                onChange={(e) => {
                                  setTypeProjetSelectionne(e.target.value);
                                  setRefonteChoisie(false);
                                }}
                              />
                              <span className="label-text">Création d'un {prestation}</span>
                            </label>
                          </div>
                          <div className="type-projet-option">
                            <label>
                              <input
                                type="radio"
                                name="typeProjet"
                                value="refonte"
                                checked={typeProjetSelectionne === 'refonte'}
                                onChange={(e) => {
                                  setTypeProjetSelectionne(e.target.value);
                                  setRefonteChoisie(true);
                                }}
                              />
                              <span className="label-text">Vous avez site à refondre</span>
                            </label>
                          </div>


                    {refonteChoisie && (
                      <div className="url-refonte-container">
                        <label htmlFor="urlSiteRefonte"> l'URL du site :</label>
                        <textarea
                          id="urlSiteRefonte"
                          value={urlSiteRefonte}
                          onChange={(e) => setUrlSiteRefonte(e.target.value)}
                          className="tailleTextarea"
                        />
                      </div>
                    )}


                    <div className="objectifs-container">
                      <label htmlFor="objectifs">Vos objectifs :</label>
                      <textarea
                        id="objectifs"
                        value={objectifs}
                        onChange={(e) => setObjectifs(e.target.value)}
                        required
                        className="tailleTextarea2"
                      />
                    </div>
                    </fieldset>    
                    </div>
                  </div>
                )}
              </div>
            )}

            {etape === 3 && (
              <div className="etape3-container">
                {etape3Sub === 1 && (
                  <div className="fonctionnalites-container">
                    <fieldset className="fonctionnalites-section">
                      <legend>Fonctionnalités</legend>
                      <div className="fonctionnalites-options">
                        {[
                          "Formulaires d'inscription,demande de devis",
                          'Blog ',
                          'Espace privé ou privilégié (accès client/membre)',
                          'Prise de rendez-vous',
                          'Réservation',
                          'Gestion de fichiers (téléchargement)',
                          'Carte dynamique type Google Maps (localisations )'
                        ].map((fonctionnalite) => (
                          <div key={fonctionnalite} className="fonctionnalite-option">
                            <label>
                              <input
                                type="checkbox"
                                value={fonctionnalite}
                                checked={fonctionnalites.includes(fonctionnalite)}
                                onChange={() => handleFonctionnaliteChange(fonctionnalite)}
                              />
                              <span className="label-text">{fonctionnalite}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                  </div>
                )}

                {etape3Sub === 2 && (
                  <div className="graphisme-container">
                    <fieldset className="graphisme-section">
                      <legend>Le graphisme</legend>
                      <div className="graphisme-options">
                        {[
                          "Je n'ai aucun élément",
                          'Je veux faire créer mon logo et ma charte graphique',
                          'Je fournis des instructions détaillées pour le graphisme (charte graphique, zoning, maquettes...)'
                        ].map((option) => (
                          <div key={option} className="graphisme-option">
                            <label>
                              <input
                                type="radio"
                                name="graphisme"
                                value={option}
                                checked={graphisme === option}
                                onChange={(e) => setGraphisme(e.target.value)}
                              />
                              <span className="label-text">{option}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                )}
              </div>
            )}

            {etape === 4 && (
              
                  <div className="etape4-container">
                  <fieldset className="coordonees-section">
                  <legend>Vos coordonnées</legend>
                    <div className="coordonnees-container">
                      {/* Ligne 1 : Nom et Prénom */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label1">Nom</label>
                          <input
                            type="text"
                            value={nom}
                            onChange={handleNomChange}
                            className="input1"
                          />
                        </div>
                        <div className="input-group">
                          <label className="label1">Prénom</label>
                          <input
                            type="text"
                            value={prenom}
                            onChange={handlePrenomChange}
                            className="input1"
                          />
                        </div>
                      </div>
                      
                      {/* Ligne 2 : Entreprise */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label2">Entreprise (facultatif)</label>
                          <input
                            type="text"
                            value={nomEntreprise}
                            onChange={(e) => setNomEntreprise(e.target.value)}
                            className="input2"
                          />
                        </div>
                      </div>
                      
                      {/* Ligne 3 : Email et Téléphone */}
                      <div className="input-row">
                        <div className="input-group">
                          <label className="label3">Email</label>
                          <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input3"
                          />
                        </div>
                        <div className="input-group">
                          <label className="label4">Téléphone</label>
                          <input
                            type="text"
                            value={telephone}
                            onChange={handleTelephoneChange}
                            onBlur={formatTelephone} // Formatage après la saisie
                            className="input4"
                          />
                        </div>
                      </div>
                    </div>
                    </fieldset>
                  </div> 
            )}
                
   
    {etape > 1 && (
            <div className="footerFormulaire">
              <button onClick={handlePrecedent}>Précédent</button>
              <button onClick={handleSuivant}>{etape === 4 ? 'Envoyer' : 'Suivant'}</button>
            </div>
          )}

        </div>
          
    </>
  );
};

export default Formulaire;
