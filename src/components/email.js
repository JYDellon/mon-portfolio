// ComposantEmail.jsx
import React from "react";

export const ComposantEmail = ({ nom, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
    <h1>Bonjour, {nom} !</h1>
    <p>{message}</p>
    <footer style={{ marginTop: "20px", fontSize: "0.9em" }}>
      Merci de nous avoir contactés !
    </footer>
  </div>
);
