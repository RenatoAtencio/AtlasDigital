// routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '../components/VentanaPrincipal/PaginaPrincipal';
import Login from '../components/VentanaLogin/Login';
import VentanaPerfilUsuario from '../components/VentanaPerfil/VentanaPerfilUsuario';
import CambiarPerfilUsuario from '../components/VentanaCambiarPerfilUsuario/CambiarPerfilUsuario';
import IngresoDocumentos from '../components/VentanaIngresoDocumentos/IngresoDocumentos';
import Galeria from '../components/VentanaGaleria/Galeria';
import Contacto from '../components/VentanaContacto/Contacto';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil-usuario" element={<VentanaPerfilUsuario />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/ingresodocumentos" element={<IngresoDocumentos />} />
      <Route path="/cambiar-perfil-usuario" element={<CambiarPerfilUsuario />} />
    </Routes>
  );
};

export default AppRoutes;
