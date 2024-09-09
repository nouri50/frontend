import React from 'react';
import './styles/Footer.css'; // Assurez-vous de bien importer le fichier CSS

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li><a href="/confidentialite">Politique de confidentialité</a></li>
                <li><a href="/conditions">Conditions de service</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
