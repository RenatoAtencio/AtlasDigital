import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Header from '../components/Header/Header';
import '../styles/Pagina_Ingreso/Pag_ingreso.css'; // Importa tu archivo de estilos CSS
import axios from 'axios';

Modal.setAppElement('#root'); // Necesario para la accesibilidad

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);
    const data = {
      nombre: username,
      contra: password,
    };
    axios
      .post('http://localhost:8081/login', data)
      .then((res) => {
        if (res.data === 'user found') {
          navigate('/perfil-usuario');
        } else {
          setError('Usuario o contraseña incorrectos.');
          setIsModalOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  return (
    <div className="login-wrapper">
      <Header />
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div className="forgot-password-link">
            <Link to="/nuevousuario">¿Desea crear una cuenta?</Link>
          </div>
          <br />
          <button type="button" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Error de inicio de sesión"
        className="modal"
        overlayClassName="overlay"
      >
        <div>
          <h2>Error de inicio de sesión</h2>
          <p>{error}</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
