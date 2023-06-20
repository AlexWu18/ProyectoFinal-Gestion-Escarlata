import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BloodPurchaseForm = () => {
  const history = useHistory();
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [donors, setDonors] = useState([
    {
      name: '',
      bloodGroup: '',
      age: '',
    }
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Verificar si al menos un donante tiene información completa
    const isDonorComplete = donors.some((donor) =>
      Object.values(donor).every((value) => value !== '')
    );
    if (!isDonorComplete) {
      alert('Por favor, complete la información de al menos un donante');
      return;
    }

    try {
      // Enviar datos a la API de Compra de Sangre
      const compraSangreResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/POST', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Nombre_Comprador": buyerName,
          "Correo_Compra": buyerEmail,
          "Telefono_Compra": buyerPhone,
          "Grupo_Sanguineo_Compra": bloodType,
          "Nombre_Donante": donors[0].name,
          "Grupo_Sanguineo_Donante": donors[0].bloodGroup,
          "Edad_Donante": donors[0].age,
        }),
      });

      if (compraSangreResponse.ok) {
        const compraSangreData = await compraSangreResponse.json();
        console.log('Respuesta de la API de Compra de Sangre:', compraSangreData);
      } else {
        console.error('Error al enviar el formulario a la API de Compra de Sangre:', compraSangreResponse.status);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }

      // Enviar datos a la API de envío de correo electrónico
      const sendEmailResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Email_Formulario": {
            "Nombre_Persona": buyerName,
            "Apellido_Persona": "Apellido del comprador", // Reemplaza con el apellido del comprador correspondiente
          },
        }),
      });

      if (sendEmailResponse.ok) {
        const sendEmailData = await sendEmailResponse.json();
        console.log('Respuesta de la API de envío de correo electrónico:', sendEmailData);
      } else {
        console.error('Error al enviar el formulario a la API de envío de correo electrónico:', sendEmailResponse.status);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí puedes manejar el error de acuerdo a tus necesidades
    }

    setFormSubmitted(true);
    // Redirigir a otra página de React
    history.push('/ruta'); // Reemplaza '/ruta' con la ruta de la página a la que deseas redirigir
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
