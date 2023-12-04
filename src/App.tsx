// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './VentanaPrincipal/PaginaPrincipal';
import Login from './VentanaLogin/Login';
import VentanaPerfilUsuario from './VentanaPerfil/VentanaPerfilUsuario';
import CambiarPerfilUsuario from './VentanaCambiarPerfilUsuario/CambiarPerfilUsuario';
import IngresoDocumentos from './VentanaIngresoDocumentos/IngresoDocumentos';
import Galeria from './VentanaGaleria/Galeria';
const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil-usuario" element={<VentanaPerfilUsuario />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/ingresodocumentos" element={<IngresoDocumentos />} />
        <Route path="/cambiar-perfil-usuario" element={<CambiarPerfilUsuario />} />
      </Routes>
  );
};

export default App;
