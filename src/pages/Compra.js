import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BloodPurchaseForm = () => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [donors, setDonors] = useState([
    {
      name: '',
      bloodGroup: '',
      age: '',
    }
  ]);

  const handleDonorChange = (index, field, value) => {
    const updatedDonors = [...donors];
    updatedDonors[index][field] = value;
    setDonors(updatedDonors);
  };

  const handleAddDonor = () => {
    setDonors([...donors, {
      name: '',
      bloodGroup: '',
      age: '',
    }]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Verificar si al menos un donante tiene información completa
    const isDonorComplete = donors.some((donor) => Object.values(donor).every((value) => value !== ''));
    if (!isDonorComplete) {
      alert('Por favor, complete la información de al menos un donante');
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a un servidor o realizar cualquier otra acción necesaria
    console.log('Formulario enviado');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
      onSubmit={handleFormSubmit}
    >
      <h2 style={{ textAlign: 'center' }}>Formulario de Compra de Sangre</h2>

      <TextField
        label="Nombre del Comprador"
        value={buyerName}
        onChange={(e) => setBuyerName(e.target.value)}
      />

      <TextField
        label="Correo Electrónico"
        type="email"
        value={buyerEmail}
        onChange={(e) => setBuyerEmail(e.target.value)}
      />

      <TextField
        label="Teléfono"
        value={buyerPhone}
        onChange={(e) => setBuyerPhone(e.target.value)}
      />

      <Select
        label="Grupo Sanguíneo"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
        displayEmpty
        placeholder="Seleccione un grupo sanguíneo"
      >
        <MenuItem value="">Seleccione un grupo sanguíneo</MenuItem>
        <MenuItem value="A+">A+</MenuItem>
        <MenuItem value="A-">A-</MenuItem>
        <MenuItem value="B+">B+</MenuItem>
        <MenuItem value="B-">B-</MenuItem>
        <MenuItem value="AB+">AB+</MenuItem>
        <MenuItem value="AB-">AB-</MenuItem>
        <MenuItem value="O+">O+</MenuItem>
        <MenuItem value="O-">O-</MenuItem>
      </Select>

      <TextField
        label="Cantidad Requerida"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <h2>Donantes:</h2>

      <Box
        sx={{
          marginBottom: '1rem',
          border: '1px solid #ccc',
          padding: '1rem',
        }}
      >
        {donors.map((donor, index) => (
          <Box key={index} sx={{ marginBottom: '1rem' }}>
            <h4>Donante #{index + 1}</h4>

            <TextField
              label="Nombre"
              value={donor.name}
              onChange={(e) => handleDonorChange(index, 'name', e.target.value)}
            />

            <Select
              label="Grupo Sanguíneo"
              value={donor.bloodGroup}
              onChange={(e) => handleDonorChange(index, 'bloodGroup', e.target.value)}
              displayEmpty
              placeholder="Seleccione un grupo sanguíneo"
            >
              <MenuItem value="">Seleccione un grupo sanguíneo</MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
            </Select>

            <TextField
              label="Edad"
              type="number"
              value={donor.age}
              onChange={(e) => handleDonorChange(index, 'age', e.target.value)}
            />

          </Box>
        ))}

        {donors.length === 1 && (
          <Button variant="contained" onClick={handleAddDonor} sx={{ backgroundColor: '#ff6d67', color: 'white' }}>
            Agregar Donante
          </Button>
        )}
      </Box>

      <Button variant="contained" type="submit" sx={{ backgroundColor: '#ff6d67', color: 'white' }}>
        Enviar Formulario
      </Button>
    </Box>
  );
};

export default BloodPurchaseForm;
