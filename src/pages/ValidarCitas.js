import React, { useState } from 'react';
import '../Css/DonationForm.css'; 

const DonationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor o realizar alguna acción adicional

    // Reiniciar los campos después de enviar el formulario
    setName('');
    setAge('');
    setBloodType('');
    setContactNumber('');
    setEmail('');
    setWeight('');
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="age">Edad:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <label htmlFor="bloodType">Tipo de Sangre:</label>
      <select
        id="bloodType"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
        required
      >
        <option value="">Selecciona un tipo de sangre</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>

      <label htmlFor="contactNumber">Número de Contacto:</label>
      <input
        type="tel"
        id="contactNumber"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        required
      />

      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="weight">Peso (en kg):</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />

      <button type="submit">Donar sangre</button>
    </form>
  );
};

export default DonationForm;
