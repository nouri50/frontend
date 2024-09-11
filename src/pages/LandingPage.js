import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const handleStart = () => {
    // Logique pour le bouton Commencer
  };

  const handleLearnMore = () => {
    // Logique pour le bouton En savoir plus
  };

  return (
    <div className="landing-page">
      <h1>Gérez vos tâches facilement et efficacement</h1>
      <div className="paragraph-container">
        <p>
          Un outil simple pour vous aider à organiser et suivre vos tâches facilement. 
          Gagnez du temps et restez productif !
        </p>
      </div>
      <div className="buttons-container">
        <button className="start-button" onClick={handleStart}>Commencer</button>
        <button className="learn-more-button" onClick={handleLearnMore}>En savoir plus</button>
      </div>
    </div>
  );
};

export default LandingPage;
