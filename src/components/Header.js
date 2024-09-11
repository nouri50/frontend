import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/taches.png'; // Chemin vers le logo dans le dossier images
import '../styles/Header.css'; 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Logique de déconnexion ici
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
          <li><Link to="/tache" onClick={() => setMenuOpen(false)}>Tâches</Link></li> {/* Modifié ici */}
          <li><Link to="/gestion-utilisateurs" onClick={() => setMenuOpen(false)}>Gestion des Utilisateurs</Link></li>
          <li><Link to="/profil" onClick={() => setMenuOpen(false)}>Profil</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Déconnexion</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


