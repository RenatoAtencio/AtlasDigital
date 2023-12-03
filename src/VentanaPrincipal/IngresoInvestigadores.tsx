// IngresoInvestigadores.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IngresoInvestigadores.css';

const IngresoInvestigadores: React.FC = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navega a la ventana de ingreso de usuarios al hacer clic en la imagen
    navigate('/login');
  };

  return (
    <div className="square-box" onClick={handleImageClick}>
      <img src='../data/planta.png' alt="Ingreso Sesion" />
    </div>
  );
};

export default IngresoInvestigadores;
