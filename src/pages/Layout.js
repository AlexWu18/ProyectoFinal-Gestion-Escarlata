import React from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const Layout = ({ close, onClose }) => {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Grid container spacing={0}>
        <Grid item xs={12} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopBar />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "0",
              }}
            >
              <Outlet />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
