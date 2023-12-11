// PaginaPrincipal.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../Header';
import SearchBar from './BarraBusqueda';
import Login from '../VentanaLogin/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/PaginaPrincipal.css';

const PaginaPrincipal: React.FC = () => {
  return (
    <div className="pagina-principal-container">
      <Header />

      {/* Contenedor de la barra de búsqueda */}
      <div className="search-bar-container">
        <SearchBar label='Buscador de Biodiversidad Chilena'/>
      </div>
      
      <div className="imagen-container-principal">
        
        <Link to="/login" className="cuadrado-pagina-principal-ingreso-usuarios">
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        
        <Link to="/ingresodocumentos" className="cuadrado-pagina-principal-ingreso-datos">
          <FontAwesomeIcon icon={faToolbox} />    
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
