import React from 'react';
import '../../Css/DespuesCss/Header.css';
import Logo from './Logo';


const Header = () => {
  return (
    <header>
      <nav>
        <div className="left-menu">
          <div className="logo">
            <Logo/>
          </div>
          <a href="/donantes" className="pi">Donantes</a>
          <a href="/comprar-sangre" className="pi">Comprar Sangre</a>
          <a href="/mapa" className="pi">Mapa</a>
        </div>
        <div className="right-menu">
          <div className="perfil">
            <a href="/perfil" id="perfil-link" className="pi">Perfil</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

