import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Donante');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <header>
      <nav>
        <ul>
          <li className={activeTab === 'Donante' ? 'active' : ''} onClick={() => handleTabClick('Donante')}>
            <Link to="/">Donante</Link>
          </li>
          <li className={activeTab === 'Compra' ? 'active' : ''} onClick={() => handleTabClick('Compra')}>
            <Link to="/compra">Compra</Link>
          </li>
          <li className={activeTab === 'Mapa' ? 'active' : ''} onClick={() => handleTabClick('Mapa')}>
            <Link to="/mapa">Mapa</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
