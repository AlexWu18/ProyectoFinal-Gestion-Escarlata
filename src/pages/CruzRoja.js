import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../Css/CruzRoja.css';
import { Grid } from '@mui/material';

const CruzRoja = () => {
  return (
    <Grid className="container">
      <Grid className="background-image container">
        <RouterLink to="/Home" className="btn">¡Haz click aqui!</RouterLink>
      </Grid>
    </Grid>
  );
};

export default CruzRoja;
