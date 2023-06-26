import React from 'react';
import '../Css/Nosotros.css';
import TopBar from '../components/TopBar';

function AboutUs() {
  return (
    <>
    <TopBar/>
    <section id="Quienes_Somos">
      <div className="container">
        <h3>Quienes Somos?</h3>
        <p>
          Institución cuyo propósito es crear una propuesta de valor que reemplace el sistema operandi de la CruzRoja y al mismo tiempo motivea la creación de nuevas tecnologías que contribuyan al crecimiento tecnológico en el área de la salud.
        </p>

        <h3>Objetivos</h3>
        <ul>
          <li>Crear un sistema que permita gestionar los datos del banco de sangre de forma eficaz.</li>
          <li>Ofrecer un sistema que permite agendar citas para donantes nuevos o activos.</li>
          <li>Ofrecer sugerencias de clínicas y hospitales en base a la localización del usuario.</li>
        </ul>

        <h3>Qué beneficios tiene Gestion Escalarta?</h3>
        <ul>
          <li>Optimización de los registros de los hospitales mediante la implementación de un sistema de gestión para el ingreso de pacientes.</li>
          <li>Creación de un sistema con funcionalidades que permitan una gestión de la cantidad de sangre que se registra en los bancos de sangre.</li>
          <li>Creación de un sistema de gestión de ingresos a un hospital.</li>
          <li>Creación de una base de datos que ofrezca la información de la cantidad de sangre de cada tipo existente en el almacén del hospital e indicar los distintos tipos de transacciones ocurridas.</li>
        </ul>
      </div>
    </section>
    </>
  );
}

export default AboutUs;
