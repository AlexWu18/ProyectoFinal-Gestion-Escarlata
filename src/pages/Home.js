import { Grid, Typography } from "@mui/material";
import React from "react";
import '../Css/home.css'
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <Grid >
      <Grid sx={{ backgroundColor: "#000000", }}>
        <Grid id="fondo" container
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "50vh",
            opacity: "60%"
          }}>  
            <Typography variant="h1" color="black">Gestión Escalarta</Typography>
            <Typography variant="h2" color="black">Salvar vidas es increíble</Typography>
        </Grid>
      </Grid>

      <Grid id="QuienesSomos" sx={{ paddingTop: "4rem", paddingLeft: "10rem", paddingRight: "10rem", backgroundColor: "#ff6d67" }}>

        <Grid container className="container">
          <Grid className="img-container" />
          <Grid className="texto">
            <h2 style={{color: "#000"}}> Somos <span className="color-acento"> Gestion Escalarta </span>
            </h2>
            <br />
            <p style={{ color: "#000" }}>
              Institucion cuyo propósito es crear una propuesta de valor que
              reemplace el sistema operandi de la CruzRoja y al mismo tiempo
              motive a la creación de nuevas tecnologías que contribuyan al
              crecimiento tecnológico en el área de la salud.
            </p>
          </Grid>
        </Grid>

        <Grid id="cartas">
          <Grid className="title-cards">
            <h2 style={{ color: "#fff" }}>Servicios que Ofrecemos</h2>
          </Grid>
          <Grid className="container-card">
            <Grid className="card">
              <figure>
                <img src="" alt="cosas" />
              </figure>
              <Grid className="contenido-card">
                <h4>Donacion</h4>
                <p>
                  {" "}
                  La sangre que se dona ayuda a personas que han perdido sangre
                  en un accidente o que tienen una enfermedad como cáncer, anemia
                  , enfermedad drepanocítica o hemofilia.
                </p>
                <a href="#">Leer Más</a>
              </Grid>
            </Grid>
            <Grid className="card">
              <figure>
                <img src="" alt="cosas" />
              </figure>
              <Grid className="contenido-card">
                <h4>Localidad</h4>
                <p>
                  Se caracteriza por la colaboración mutua entre los individuos,
                  lo que permite lograr la superación de los más terribles
                </p>
                <br />
                <a href="#">Leer Más</a>
              </Grid>
            </Grid>
            <Grid className="card">
              <figure>
                <img src="" alt="cosas" />
              </figure>
              <Grid className="contenido-card">
                <h4>Se Solidario</h4>
                <p>
                  Creamos tu página web utilizando las últimas tecnologías
                  disponibles. Una Web adaptativa a tu móvil o Tablet y con un
                  gestor de contenido fácil.
                </p>
                <a href="#">Leer Más</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

  n   </Grid>

      <section id="final">
        <h2>¿Qué esperas?</h2>
        <br />
        <Link to ="/SignUp" className="Finalboton">
          REGISTRATE YA!
        </Link>
      </section>

      <footer className="footer">
        <Grid className="container">
          <Grid className="footer-column">
            <h3>Sobre nosotros</h3>
            <p>Mas Informacion</p>
          </Grid>
          <Grid className="footer-column">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="Menu Principal.html">Inicio</a>
              </li>
              <br />
              <li>
                <a href="#">Servicios</a>
              </li>
              <br />
              <li>
                <a href="Contactos.html">Contactos</a>
              </li>
            </ul>
          </Grid>
          <Grid className="footer-column">
            <h4>Contactos</h4>
            <p>Email: GestionEscalata@gmail.com</p>
            <br />
            <p>Telefono: +1 (999) 999-9999</p>
            <br />
            <a href="#" className="fa fa-facebook" />
            <a href="#" className="fa fa-twitter" />
            <a href="#" className="fa fa-instagram" />
          </Grid>
        </Grid>
        <p style={{ paddingLeft: 250 }}>
          ©GESTION ESCALARTA 2023. All rights reserved
        </p>
      </footer>

    </Grid>


  );
};

export default Home;
