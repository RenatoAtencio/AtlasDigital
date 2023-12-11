import { Route, Routes} from 'react-router-dom';
import React from 'react';
import PaginaPrincipal from '../pages/Pag_Principal';
import Login from '../pages/Pag_Ingreso';
import VentanaNuevoUsuario from '../pages/Pag_Nuevo_Usuario'
import VentanaPerfilUsuario  from '../pages/Pag_Perfil_Usuario';
import Galeria from '../pages/Pag_Galeria'
import Contacto from '../pages/Pag_Contacto';
import IngresoDocumentos from '../pages/Pag_Ingreso_Documentos';
import CambiarPerfilUsuario from '../pages/Pag_Cambiar_Perfil';
import Ejemplo from '../pages/Ejemplo';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nuevousuario" element={<VentanaNuevoUsuario />} />
      <Route path="/perfil-usuario" element={<VentanaPerfilUsuario />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/ingresodocumentos" element={<IngresoDocumentos />} />
      <Route path="/cambiar-perfil-usuario" element={<CambiarPerfilUsuario />} />
      <Route path="/ejemplo" element={<Ejemplo />} />
    </Routes>
  );
};

export default AllRoutes;
