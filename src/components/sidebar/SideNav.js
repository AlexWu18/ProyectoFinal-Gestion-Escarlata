import React from "react";
import Box from "@mui/material/Box";
import SideNavContainer from "./SideNavContainer";

const SideNav = ({ onClose, close }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "black",
        boxShadow: "0px 4px 19px rgba(0, 0, 0, 0.25)",
        "& > :not(style)": {
          width: "100%",
          height: "100vh",
        },
      }}
    >
      <SideNavContainer close={close} onClose={onClose} />
    </Box>
  );
};
export default SideNav;
