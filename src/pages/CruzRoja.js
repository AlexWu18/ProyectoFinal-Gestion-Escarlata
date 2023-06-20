import React from 'react';
import '../Css/CruzRoja.css';
import { Grid } from '@mui/material';


const App = () => {
  const handleClick = () => {
    window.location.href = './Home';
  };
  return (
    <Grid className="container">
      <Grid className="background-image container" >
      <button className="btn" onClick={handleClick}>¡Haz clic!</button>
      </Grid>
    </Grid>
  );
};

export default App;
