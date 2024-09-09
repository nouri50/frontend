import React, { useState } from 'react';
import '../styles/Header.css'; // Chemin vers le fichier CSS
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import logo from '../images/logo.png'; // Chemin vers le logo dans le dossier images

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

  const handleLogout = () => {
    // Ajouter la logique de déconnexion ici
    console.log('Déconnexion réussie');
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" /> {/* Afficher le logo */}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Symbole hamburger */}
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/tasks" onClick={() => setMenuOpen(false)}>Tâches</Link></li>
          <li><Link to="/user-management" onClick={() => setMenuOpen(false)}>Gestion des Utilisateurs</Link></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profil</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Déconnexion</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
