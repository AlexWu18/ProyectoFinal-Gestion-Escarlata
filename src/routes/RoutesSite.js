import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CruzRoja />} />
          <Route path="Home" element={<Home />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Contactos" element={<Contactos />} />
          <Route path="SignUp" element={<SignUp />} /> 
        </Route>

        {isLoggedIn ? (
          <>
            <Route path="/Login" element={<Header />} />
          </>
        ) : (
          <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
        )}
      </Routes>
    </Router>
  );
};

export default RoutesSite;
