//aqui va el otro cuadrado de imagen en la pantalla principal// IngresoInvestigadores.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IngresoInvestigadores.css';

const IngresoInvestigadores: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navega a la ventana de ingreso de usuarios al hacer clic en la imagen
    navigate('/basededatos');
  };

  return (
    <div className="square-box" onClick={handleImageClick}>
      <img src='../data/planta.png' alt="Base de Datos" />
    </div>
  );
};

export default IngresoInvestigadores;
