// Header.tsx
import React from 'react';
import './styles/Header.css'; // Importa tus estilos CSS

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="left-section">
        <h1>Atlas Digital</h1>
      </div>
      <div className="right-section">
        <a href="/">Inicio</a>
        <a href="/galeria">Galería</a>
        <a href="/contacto">Contacto</a>
        {/* Agrega más enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default Header;
