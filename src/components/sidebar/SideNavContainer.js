import React from "react";
import { Grid, Divider } from "@mui/material";
// import MangiverLogo from "../assets/logo.png";
import SideNavItem from "./SideNavItem";

//Icons

const NavItem = [
  {
    id: 1,
    title: "Inicio",
    link: "/Home",
  },
  {
    id: 2,
    title: "Itinerario",
    link: "/Schedule",
  },
  {
    id: 3,
    title: "Agenda",
    link: "/Agenda",
  },
  {
    id: 4,
    title: "Preguntas",
    link: "/Preguntas",
  },
  {
    id: 5,
    title: "Encuesta",
    link: "/Encuesta",
  },
  {
    id: 6,
    title: "Lineamientos Generales",
    link: "/LienamientosGeneral",
  },
  {
    id: 7,
    title: "Reconocimientos",
    link: "/Reconocimientos",
  },
  {
    id: 8,
    title: "Ponentes",
    link: "/Ponentes",
  },
  {
    id: 9,
    title: "Buenas Prácticas",
    link: "/BuenasPracticas",
  },
];

const SideNavContainer = ({ onClose, close }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        height: "100%",
        paddingTop: "1.75rem",
        paddingLeft: { md: ".3rem", lg: "1.5rem" },
        paddingRight: { md: ".3rem", lg: "1.5rem" },
      }}
    >
      <Grid item xs={12}>
        {/* <img
          src={MangiverLogo}
          style={{ width: "100%" }}
          loading="lazy"
          alt="Mangiver"
        /> */}
      </Grid>
      <Grid item xs={12}>
        <Divider
          variant="middle"
          sx={{
            marginLeft: "0",
            marginRight: "0",
          }}
        />
      </Grid>

      <Grid item xs={12}>
        {NavItem.map((item) => (
          <SideNavItem
            key={item.id}
            title={item.title}
            link={item.link}
            icon={item.icon}
            close={close}
          />
        ))}
        <Divider
          variant="middle"
          sx={{
            marginLeft: "0",
            marginRight: "0",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SideNavContainer;
