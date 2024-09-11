import React from 'react';

const ProfilPage = () => {
  console.log('ProfilPage loaded'); // Vérifie si ce message s'affiche
  return (
    <div className="profil-container">
      <h1>Mon Profil</h1>
      <div className="profil-details">
        <p>Nom d'utilisateur: <strong>John Doe</strong></p>
        <p>Email: <strong>john.doe@example.com</strong></p>
        <button className="edit-button">Modifier le profil</button>
      </div>
    </div>
  );
};

export default ProfilPage;
