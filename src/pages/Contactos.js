import React from 'react';
import '../Css/Contactos.css'
function Contactos() {
  return (
    <div className="content">
      <div className="container1">
        <div className="img-container"></div>
      </div>
      <h1 className="logo">
        <span style={{ color: '#000' }}>Contactanos</span> <span>Gestion Escalata</span>
      </h1>

      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h2 style={{ margin: 'auto', marginLeft: '10px' }}>Contactanos</h2>
          <form action="">
            <p>
              <label>Nombre <span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="fullname" placeholder="ej: Juan" required />
            </p>
            <p>
              <label>Correo Electronico <span style={{ color: 'red' }}>*</span></label>
              <input type="email" name="email" placeholder="ej: juan@gmail.com" required />
            </p>
            <p>
              <label>Telefono <span style={{ color: 'red' }}>*</span></label>
              <input type="tel" name="phone" placeholder="809-999-999" required />
            </p>
            <p>
              <label>Tema <span style={{ color: 'red' }}>*</span></label>
              <select
                id="Tema"
                name="Tema"
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  boxSizing: 'border-box',
                }}
              >
                <option value="Donaciones">Donaciones</option>
                <option value="Sobre nosotros">Sobre nosotros</option>
                <option value="Pregunta-D">Pregunta o Duda</option>
              </select>
            </p>
            <p className="block">
              <label>Mensaje <span style={{ color: 'red' }}>*</span></label>
              <textarea name="message" rows="4" required></textarea>
            </p>
            <p className="block">
              <button>Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Mas Informacion</h4>
          <ul>
            <li>
              <i></i> Santo Domingo
            </li>
            <li>
              <i>Republica Dominicana</i>
            </li>
            <li>
              <i></i> (809)-999-9999
            </li>
            <li>
              <i></i> GestionEscalata@gmail.com
            </li>
          </ul>
          <p>
            Institucion cuyo propósito es crear una propuesta de valor que reemplace el sistema operandi de la CruzRoja.
          </p>
          <br />
          <p>©GESTION ESCALARTA 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
