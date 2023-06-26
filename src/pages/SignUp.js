import React, { useState } from 'react';
import { format, parseISO, differenceInYears } from 'date-fns';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../Css/SignUpForm.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post(
        'https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/POST',
        {
          Nombre_Persona: firstName,
          Apellido_Persona: lastName,
          Edad_Persona: calculateAge(birthdate),
          FechaNacimiento_Persona: birthdate,
          Correo_Persona: email,
          Numero_Persona: phoneNumber,
          Contrasena_Persona: password,
        }
      );

      // Registro exitoso
      setIsRegistered(true);

      // Envío de correo electrónico
      const emailResponse = await axios.post(
        'https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/send-email',
        {
          Email_Formulario: email,
          Nombre_Persona: firstName,
          Apellido_Persona: lastName,
        }
      );

      // Aquí puedes manejar la respuesta del envío de correo electrónico
      console.log(emailResponse.data);

      // Mostrar alerta de registro exitoso
      alert('Registro exitoso');
    } catch (error) {
      // Aquí puedes manejar el error de la API
      console.error(error);
    }
  };

  const calculateAge = (date) => {
    const formattedDate = format(parseISO(date), 'yyyy-MM-dd');
    const age = differenceInYears(new Date(), new Date(formattedDate));
    return age;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Formulario de Registro</h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label htmlFor="firstName" className="label">
          Nombre:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          className="input"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label htmlFor="lastName" className="label">
          Apellido:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          className="input"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label htmlFor="birthdate" className="label">
          Fecha de Nacimiento:
        </label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleBirthdateChange}
          className="input"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label htmlFor="email" className="label">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="input"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label htmlFor="phoneNumber" className="label">
          Número de Teléfono:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input password-input"
          />
          <button
            type="button"
            className="password-toggle-button"
            onClick={handleShowPasswordToggle}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <label htmlFor="confirmPassword" className="label">
          Confirmar Contraseña:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="input"
        />
      </motion.div>
      {error && <p className="error-message">{error}</p>}
      <Link to="/Login">
        <motion.button
          type="submit"
          className="submit-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          disabled={error || !isRegistered} // Disable the button if there's an error or registration is not complete
        >
          Registrarse
        </motion.button>
      </Link>
    </motion.form>
  );
};

export default SignUpForm;
