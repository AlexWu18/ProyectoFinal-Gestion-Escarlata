import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Link,
// import axios from "../services/axiosInstance";

import InputText from "../components/InputText";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fieldValidationError, setfieldValidationError] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (username === "" || password === "") {
      setfieldValidationError(true);
    } else {
      setfieldValidationError(false);
    }
  }, [username, password]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    return navigate("/Home");

    // const data = { username, password };

    // setLoading(true);

    // axios
    //   .post("/auth/login", data)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data);
    //     setLoading(false);
    //     setRedirect(true);
    //   })
    //   .catch((err) => {
    //     console.log("error => ", err);
    //     setOpen(true);
    //     setLoading(false);
    //   });
  };

  if (redirect) {
    return navigate("/Home");
  }

  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      <Grid
        container
        maxWidth="xxl"
        style={{
          minHeight: "90vh",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            borderRadius: "24px",
            width: "489px",
            height: "646px",
            backgroundColor: "#2B2B2B",
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            alignItems: "center",
          }}
        >
          <Grid item sx={{ width: 500, height: 150 }}></Grid>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "2.062rem",
              paddingX: 4,
              alignSelf: "center",
            }}
          >
            Gestion Escarlata
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1rem",
              width: "20rem",
              lineHeight: "1.25rem",
              color: "#fff",
              paddingX: 4,
              alignSelf: "center",
            }}
          >
            Llene el siguiente formulario para ingresar a la plataforma.
          </Typography>

          <form onSubmit={HandleSubmit}>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
                marginX: 1,
                width: "425px",
              }}
            >
              <InputText
                label={"Usuario"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                fullWidth
                sx={{
                  borderRadius: ".625rem",
                  borderColor: "#D0D6E1",
                  borderWidth: "1px",
                }}
              />
              <InputText
                label={"Contraseña"}
                name="password"
                value={password}
                type={showPassword ? "text" : "password"}
                values={showPassword}
                fullWidth
                setType={"password"}
                onChange={(e) => setPassword(e.target.value)}
                handleClickShowPassword={(e) => handleClickShowPassword(1)}
                handleMouseDownPassword={handleMouseDownPassword}
              />

              <Button
                variant="contained"
                type="submit"
                fullWidth
                // disabled={fieldValidationError}
                sx={{
                  height: "60px",
                  background: "#E1BC22",
                  // background: "#E1BC22",
                  borderRadius: "10px",
                  textTransform: "inherit",
                  textAlign: "center",
                  fontSize: 16,
                  color: "#000",
                  width: "40",
                }}
              >
                Iniciar sesión
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Grid
        container
        item
        alignItems="center"
        direction="column"
        style={{
          justifyContent: "center",
          placeContent: "center",
        }}
      >
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert severity="error">
            Nombre de usuario y/o Contraseña incorectos
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default Login;
