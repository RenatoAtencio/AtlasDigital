// CambiarPerfilUsuario.tsx
import React, { useState } from 'react';
import '../styles/Cambiar_Perfil_Usuario/CambiarPerfilUsuario.css'
import Header from '../components/Header/Header'

const CambiarPerfilUsuario = () => {
  const [userData, setUserData] = useState({
    nombre: 'Nombre Ejemplo',
    apellido: 'Apellido Ejemplo',
    correo: 'correo@example.com',
    imagen: 'ruta-de-la-imagen.jpg',
  });

  const handleModificarPerfil = () => {
    console.log('Perfil modificado:', userData);
  };

  return (
    <div className="cambiar-perfil-usuario">
      <Header/>
      <h2>Cambiar Perfil del Usuario</h2>

      <div className="perfil-info">
        <img src={userData.imagen} alt="Imagen de Perfil" />
        <p>Nombre: {userData.nombre}</p>
        <p>Apellido: {userData.apellido}</p>
        <p>Correo: {userData.correo}</p>
      </div>

      <button onClick={handleModificarPerfil}>Modificar Perfil</button>
    </div>
  );
};

export default CambiarPerfilUsuario;
