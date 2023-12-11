// Perfil.tsx
import React from 'react';
import PerfilUsuario from './VentanaPerfilUsuario';
import InformacionCuadros from './InformacionCuadros';

const Perfil: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Enlace al perfil del usuario */}
      <PerfilUsuario />

      {/* Sección de Información */}
      <InformacionCuadros />
    </div>
  );
};

export default Perfil;
