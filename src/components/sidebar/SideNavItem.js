import React from "react";
import { Button, IconButton, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
const SideNavItem = ({
  title,
  link,
  icon,
  close,
  mobileOpen,
  setMobileOpen,
}) => {
  const handleDrawerToggle = (e) => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <NavLink
      to={link}
      onClick={handleDrawerToggle}
      style={({ isActive, close }) => ({
        borderRadius: "0.625rem ",
        marginBottom: "0.5rem",
        textDecoration: "none",

        display: close ? "grid" : "",
        padding: close ? "0.75rem" : "",
        paddingTop: close ? "" : "1.5rem",
        paddingBottom: close ? "" : "1.5rem",

        fill: isActive ? "white" : "#E1BC22",
        color: isActive ? "black" : "white",
        backgroundColor: isActive ? "#E1BC22" : "black",
      })}
    >
      {close ? (
        <Link
          component={IconButton}
          key={title}
          sx={{
            textDecoration: "none",
            borderRadius: "0.625rem ",
            padding: "1.5rem",
            marginBottom: "0.5rem",
            backgroundColor: "transparent",
            color: "black",
            fill: "black",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
          }}
        >
          {icon}
        </Link>
      ) : (
        <Link
          component={Button}
          key={title}
          href={link}
          startIcon={icon}
          sx={{
            textDecoration: "none",
            borderRadius: "0.625rem ",
            width: "100%",
            paddingLeft: "1.75rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            marginBottom: "0.5rem",
            fontSize: "1rem",
            textTransform: "inherit",
            backgroundColor: "transparent",
            color: "inherit",
            justifyContent: "inherit",
            lineHeight: "1.313rem",
            textAlign: "left",
          }}
        >
          {title}
        </Link>
      )}
    </NavLink>
  );
};
export default SideNavItem;
