<<<<<<< HEAD
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
=======
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
>>>>>>> aaae452eba0fc23a3209bccf8ab8fa4d027689da
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route path="/nuevousuario" element={<VentanaNuevoUsuario />} />
      <Route path="/perfil-usuario" element={<VentanaPerfilUsuario />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/ingresodocumentos" element={<IngresoDocumentos />} />
      <Route path="/cambiar-perfil-usuario" element={<CambiarPerfilUsuario />} />
      <Route path="/ejemplo" element={<Ejemplo />} />
=======
      <Route path="/perfil-usuario" element={<VentanaPerfilUsuario />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/ingresodocumentos" element={<IngresoDocumentos />} />
      <Route path="/cambiar-perfil-usuario" element={<CambiarPerfilUsuario />} />
>>>>>>> aaae452eba0fc23a3209bccf8ab8fa4d027689da
    </Routes>
  );
};

<<<<<<< HEAD
export default AllRoutes;
=======
export default AppRoutes;
>>>>>>> aaae452eba0fc23a3209bccf8ab8fa4d027689da
