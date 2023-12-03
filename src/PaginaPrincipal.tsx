// PaginaPrincipal.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import SearchBar from './BarraBusqueda';
import SquareBox from './IngresoInvestigadores';
import Login from './Login';

const PaginaPrincipal: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* Sección del encabezado */}
      <Header />

      {/* Sección de la barra de búsqueda */}
      <SearchBar />

      {/* Sección de las imágenes */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, marginTop: '20px' }}>
        {/* Otra imagen con un link */}
        <div style={{ marginBottom: '20px' }}>
          <a href="/ruta-del-link">
            <img src="/ruta-de-otra-imagen.jpg" alt="Otra Imagen" />
          </a>
        </div>

        {/* Imagen para ir al login */}
        <div>
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
