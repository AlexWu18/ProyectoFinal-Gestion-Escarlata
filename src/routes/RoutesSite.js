import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import CruzRoja from "../pages/CruzRoja";
import Contactos from "../pages/Contactos";
import Nosotros from "../pages/Nosotros";
import Header from "../pages/Header";
import SignUp from "../pages/SignUp";

const RoutesSite = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CruzRoja" element={<CruzRoja />} />
        
        {/* Ruta pública */}
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/SignUp" element={<SignUp />} /> 
        </Route>

        {/* Ruta privada */}
        {isLoggedIn ? (
          <>
            <Route path="/Login" element={<Navigate to="/Header" />} />
            <Route path="/Header" element={<Header />} />
          </>
        ) : (
          <Route
            path="/Login"
            element={<Login setLoggedIn={setLoggedIn} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSite;

