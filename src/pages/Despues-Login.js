import React from 'react';
import '../Css/Despues-Login.css';
const Header = () => {
  return (
    <header>
      <nav>
        <div className="left-menu">
          <div className="logo">
            <img src="/public/fotos/Nueva_Gestion.jpeg" alt="Logo" />
          </div>
          <a href="/public/Donaciones.html" className="pi">Donantes</a>
          <a href="/public/Mapa/Mapa.html" className="pi">Mapas</a>
          <a href="./Comprar.js" className="pi">Comprar</a>
          <a href="/public/Contactos.html" className="pi">Contactos</a>
        </div>
        <div className="right-menu">
          <div className="perfil">
            <a href="#" id="perfil-link" className="pi">Perfil</a>
            <ul className="dropdown-menu" id="dropdown-menu">
              <li><a href="#">Información</a></li>
              <li><a href="/public/ejeplo/Ayuda.html">Ayuda</a></li>
              <li><a href="/public/Login.html" id="logout">Cerrar Sesión</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <h2>Citas</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </aside>
  );
};

const Main = () => {
  const mostrarInformacion = (id) => {
    // Lógica para mostrar la información según el ID
  };

  return (
    <main>
      <h2 style={{ fontSize: '30px' }}>Novedades</h2>

      <div className="news-container">
        <div className="news-box" onClick={() => mostrarInformacion(1)}>
          <h3>Puedes Agendar tu Cita</h3>
          <p>Actualmente...</p>
        </div>

        <div className="news-box" onClick={() => mostrarInformacion(2)}>
          <h3>Mapas cercanos</h3>
          <p>Existe posibilidad de que...</p>
        </div>

        <div className="news-box" onClick={() => mostrarInformacion(3)}>
          <h3>Ser Donante</h3>
          <p>La nueva función de...</p>
        </div>
      </div>

      <div id="informacion" style={{ display: 'none' }}>
        <h3 id="info-titulo"></h3>
        <p id="info-descripcion"></p>
      </div>
    </main>
  );
};

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <h2>Calendario</h2>
      <div id="calendar"></div>
      <div id="nota">
        <h3>Fecha Seleccionada:</h3>
        <p id="fecha-seleccionada"></p>
        <h3>Nota:</h3>
        <p id="nota-contenido"></p>
      </div>
    </aside>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Derechos de autor &copy; 2023 | Gestion Escalarta</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="container-wrapper">
      <Header />
      <LeftSidebar />
      <Main />
      <RightSidebar />
      <Footer />
    </div>
  );
};

export default App;
