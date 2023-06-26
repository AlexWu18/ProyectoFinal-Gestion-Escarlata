import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/CruzRoja.css';
import { Grid } from '@mui/material';

const App = () => {
  return (
    <Grid className="container">
      <Grid className="background-image container">
        <Link to="/Nosotros" className="btn">¡Haz clic!</Link>
      </Grid>
    </Grid>
  );
};

export default App;
