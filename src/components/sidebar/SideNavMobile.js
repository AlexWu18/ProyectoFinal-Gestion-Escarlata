import React from "react";

import { Grid, Divider } from "@mui/material";
import SideNavItem from "./SideNavItem";

//Icons

const NavItem = [
  {
    id: 1,
    title: "Avisos",
    link: "/Advice",
  },
  {
    id: 2,
    title: "Creación de avisos",
    link: "/CreateAdvice",
  },
  {
    id: 3,
    title: "Descargar avisos",
    link: "/DownloadAdvice",
  },
  {
    id: 4,
    title: "Notificaciones",
    link: "/Notification",
  },
  {
    id: 5,
    title: "Creación de notificaciones",
    link: "/CreateNotification",
  },
  {
    id: 6,
    title: "Descargar notificaciones",
    link: "/DownloadNotification",
  },
];

const SideNavMobile = ({ open, mobileOpen, setMobileOpen }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        height: "100%",
        paddingTop: "1.75rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
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
            close={false}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
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

      <Grid item xs={12}></Grid>
      <Grid item xs={12} sx={{ justifyContent: "end", display: "flex" }}></Grid>
    </Grid>
  );
};
export default SideNavMobile;
