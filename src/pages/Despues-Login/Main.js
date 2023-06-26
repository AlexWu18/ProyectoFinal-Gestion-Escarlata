import '../../Css/DespuesCss/Main.css'
import React, { useState } from 'react';

const Main = () => {
  const [informacionVisible, setInformacionVisible] = useState(false);
  const [informacionTitulo, setInformacionTitulo] = useState('');
  const [informacionDescripcion, setInformacionDescripcion] = useState('');

  const mostrarInformacion = (titulo, descripcion) => {
    setInformacionTitulo(titulo);
    setInformacionDescripcion(descripcion);
    setInformacionVisible(true);
  };

  return (
    <main>
      <h2 style={{ fontSize: '30px' }}>Novedades</h2>

      <div className="news-container">
        <div className="news-box" onClick={() => mostrarInformacion('Puedes Agendar tu Cita', 'Actualmente...')}>
          <h3>Puedes Agendar tu Cita</h3>
          <p>Actualmente...</p>
        </div>

        <div className="news-box" onClick={() => mostrarInformacion('Mapas cercanos', 'Existe posibilidad de que...')}>
          <h3>Mapas cercanos</h3>
          <p>Existe posibilidad de que...</p>
        </div>

        <div className="news-box" onClick={() => mostrarInformacion('Ser Donante', 'La nueva función de...')}>
          <h3>Ser Donante</h3>
          <p>La nueva función de...</p>
        </div>
      </div>

      {informacionVisible && (
        <div id="informacion">
          <h3 id="info-titulo">{informacionTitulo}</h3>
          <p id="info-descripcion">{informacionDescripcion}</p>
        </div>
      )}
    </main>
  );
};

export default Main;

