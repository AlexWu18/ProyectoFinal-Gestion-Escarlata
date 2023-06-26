import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import logo from "../assets/Nueva_Gestion-preview.png";

// Estilos personalizados para los enlaces del menú
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  color: black;
  font-weight: 800;

  &:hover {
    color: #888;
  }
`;

const TopBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Grid sx={{ paddingLeft: "1rem" }}>
          <img src={logo} alt="Logo de la marca" style={{ height: "3rem", width: "3rem" }} />
        </Grid>

        <Grid sx={{ display: "flex", gap: 4, paddingLeft: "10rem" }}>
          <StyledLink to="/Home">Inicio</StyledLink>
          <StyledLink to="/Nosotros">Quienes Somos</StyledLink>
          <StyledLink to="/Contactos">Contactos</StyledLink>
        </Grid>

        <Toolbar sx={{ display: "flex", gap: 10, alignSelf: "self-end" }}>
          <Typography component="div" sx={{ color: "#E1BC22" }}>
            Nombre Usuario
          </Typography>
          <StyledLink to="/Login">Login</StyledLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
