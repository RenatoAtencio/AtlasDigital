// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import '../../styles/Login.css'; // Importa tu archivo de estilos CSS

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);

    if(username == "admin" && password=="admin"){
      navigate('/perfil-usuario');
    }
  };

  return (
    <div className="login-wrapper">
      <Header/>
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
