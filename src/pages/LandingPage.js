import React from 'react';
import '../styles/LandingPage.css'; // Assurez-vous que le fichier CSS existe

const LandingPage = () => {
  const handleStart = () => {
    // Logique pour commencer (par exemple, rediriger vers une page de connexion ou d'inscription)
    console.log('Commencer');
  };

  const handleLearnMore = () => {
    // Logique pour en savoir plus (par exemple, rediriger vers une page d'informations)
    console.log('En savoir plus');
  };

  return (
    <div className="landing-page">
      <h1>Gérez vos tâches facilement et efficacement</h1>
      <p>
        Un outil simple pour vous aider à organiser et suivre vos tâches facilement. 
        Gagnez du temps et restez productif !
      </p>
      <div className="button-container">
        <button className="start-button" onClick={handleStart}>Commencer</button>
        <button className="learn-more-button" onClick={handleLearnMore}>En savoir plus</button>
      </div>
    </div>
  );
};

export default LandingPage;
