// PaginaPrincipal.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../Header';
import SearchBar from './BarraBusqueda';
import Login from '../VentanaLogin/Login';
import '../styles/PaginaPrincipal.css'; // Importa tu archivo de estilos CSS

const PaginaPrincipal: React.FC = () => {
  return (
    <div className="pagina-principal-container">
      <Header />

      {/* Contenedor de la barra de búsqueda */}
      <div className="search-bar-container">
        <SearchBar label='Buscador de Biodiversidad Chilena'/>
      </div>
      
      <div className="imagen-container-principal">
        
        <Link to="/login" className="cuadrado-pagina-principal">
          <label>Ingreso Sesion</label>
        </Link>
        
        <Link to="/ingresodocumentos" className="cuadrado-pagina-principal">
          <label>Ingreso Documentos</label>
        </Link>

      </div>

      {/* Rutas adicionales o componentes según sea necesario */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Otras rutas y componentes según sea necesario */}
      </Routes>
    </div>
  );
};

export default PaginaPrincipal;
