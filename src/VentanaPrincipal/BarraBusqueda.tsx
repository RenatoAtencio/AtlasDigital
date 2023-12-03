// BarraBusqueda.tsx
import React from 'react';
import '../styles/BarraBusqueda.css'; // Importa tus estilos CSS

const BarraBusqueda: React.FC = () => {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Buscar..." />
      <button type="button">Buscar</button>
    </div>
  );
};

export default BarraBusqueda;
