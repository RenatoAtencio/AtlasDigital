import React from 'react';
import Header from '../components/Header/Header';
import CuadradosArriba from '../components/Perfil_Usuario/CuadradosArriba';
import SeccionInformacion from '../components/Perfil_Usuario/SeccionInformacion';
import { useNavigate } from 'react-router-dom';
import '../styles/Perfil_Usuario/VentanaPerfilUsuario.css';

const VentanaPerfilUsuario = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/perfil-usuario');
  };

  return (
    <div className="ventana-perfil-usuario">
      <Header />
      <CuadradosArriba />
      <SeccionInformacion />
    </div>
  );
};

export default VentanaPerfilUsuario;
