import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import '../styles/Pagina_NuevoUsuario/NuevoUsuario.css';
import axios from 'axios';

const NuevoUsuario = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    userType: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleNuevoUsuario = () => {
    if (!values.name || !values.email || !values.userType || !values.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const data = {
      name: values.name,
      email: values.email,
      userType: values.userType,
      password: values.password,
    };

    axios
      .post('http://localhost:8081/nuevousuario', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(
      'Creando cuenta con:',
      values.name,
      values.email,
      values.userType,
      values.password,
    );
    navigate('/login');
  };

  return (
    <div className="create-account-wrapper">
      <Header />
      <div className="create-account-container">
        <h2>Crear Cuenta</h2>
        <form>
          <label>
            Nombre Completo:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Tipo de Usuario:
            <select
              name="userType"
              value={values.userType}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="investigador">Investigador</option>
              <option value="profesor">Profesor</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="button" onClick={handleNuevoUsuario}>
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevoUsuario;
