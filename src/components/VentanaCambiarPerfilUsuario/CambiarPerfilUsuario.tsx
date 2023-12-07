// CambiarPerfilUsuario.tsx
import React, { useState } from 'react';
import Header from '../Header'
import '../../styles/CambiarPerfilUsuario.css'

const CambiarPerfilUsuario: React.FC = () => {
  const [userData, setUserData] = useState({
    nombre: 'Nombre Ejemplo',
    apellido: 'Apellido Ejemplo',
    correo: 'correo@example.com',
    imagen: 'ruta-de-la-imagen.jpg',
  });

  const handleModificarPerfil = () => {
    // Implementa la lógica para modificar el perfil aquí
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
