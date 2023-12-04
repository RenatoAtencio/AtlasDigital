// VentanaPerfilUsuario.tsx
import React from 'react';
import Header from '../Header';
import CuadradosArriba from './CuadradosArriba';
import SeccionInformacion from './SeccionInformacion';
import { useNavigate } from 'react-router-dom';
import '../styles/VentanaPerfilUsuario.css'

const VentanaPerfilUsuario: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navega a la página del perfil del usuario al hacer clic
    navigate('/perfil-usuario');
  };

  return (
    <div className="ventana-perfil-usuario">
      {/* Header */}
      <Header />

      {/* Sección Cuadrados Arriba */}
      <CuadradosArriba />

      {/* Sección de Publicaciones, Solicitudes e Informes */}
      <SeccionInformacion />
    </div>
  );
};

export default VentanaPerfilUsuario;
