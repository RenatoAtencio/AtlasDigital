// Perfil.tsx
import React from 'react';
import Header from '../../components/Header/Header';
import PerfilUsuario from '../../pages/Pag_Perfil_Usuario';
import InformacionCuadros from './InformacionCuadros';

const Perfil = () => {
  return (
    <div className="dashboard">
      <PerfilUsuario />

      <InformacionCuadros />
    </div>
  );
};

export default Perfil;
