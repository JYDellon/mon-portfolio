import React, { useState } from 'react';
import Formulaire from './Formulaire';  // Importation du formulaire de devis

function Devis() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Fonction appelée lorsque le formulaire est soumis
    const handleFormSubmit = () => {
        setIsFormSubmitted(true);  // Marque que le formulaire a été soumis
    };

    return (
        <div>
            
            {isFormSubmitted ? (
                <div>
                    <h2>Merci pour votre demande de devis !</h2>
                    <p>Nous reviendrons vers vous rapidement.</p>
                </div>
            ) : (
                <Formulaire onSubmit={handleFormSubmit} />
            )}
        </div>
    );
}

export default Devis;
