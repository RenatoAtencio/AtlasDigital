// BarraBusqueda.tsx
import React from 'react';
import '../styles/BarraBusqueda.css'

const BarraBusqueda: React.FC = () => {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-bar-input" placeholder="Buscar..." />
      <button className="search-bar-button">Buscar</button>
    </div>
  );
};

export default BarraBusqueda;
