import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <div>
    <header className="header">
    <img src= "public/logo_stragite.jpg" id="logo" alt="logo"></img>
      <nav>
        <a href="#rooms">Nos chambres</a>
        <a href="#reservations">Mes réservations</a>
        <a href="#contact">Contact</a>
        <button className="btn">Se connecter</button>
      </nav>

      </header>
      <div className="image_header">
        <img src="public/chateau.jpeg" id="chateau" alt="chateau"></img>
        <h1 className="StraGite">StraGite</h1>
        <p>Séjournez au cœur de Strasbourg, à quelques pas du Parlement Européen, et profitez de nos chambres d’hôtes confortables et accueillantes, idéales pour vos déplacements professionnels. Un lieu de détente et de convivialité, pensé pour vos besoins.</p>
        </div>
        </div>

  )
}

export default Header;
