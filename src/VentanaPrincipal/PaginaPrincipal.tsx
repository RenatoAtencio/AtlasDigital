// PaginaPrincipal.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import SearchBar from './BarraBusqueda';
import SquareBox from './IngresoInvestigadores';
import Login from '../VentanaLogin/Login';
import '../styles/PaginaPrincipal.css'; // Importa tu archivo de estilos CSS

const PaginaPrincipal: React.FC = () => {
  return (
    <div className="pagina-principal-container">

      <Header/>

      {/* Sección de la barra de búsqueda */}
      <SearchBar />

      {/* Sección de las imágenes */}
      <div className="imagen-container">
        {/* Otra imagen con un link */}
        <div className="otra-imagen">
          <a href="/ruta-del-link">
            <img src="/ruta-de-otra-imagen.jpg" alt="Otra Imagen" />
          </a>
        </div>

        {/* Imagen para ir al login */}
        <div className="cuadrado">
          <SquareBox />
        </div>
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
