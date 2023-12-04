// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './styles/Header.css'; // Importa tus estilos CSS

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="left-section">
        <h1>Atlas Digital</h1>
      </div>
      <div className="right-section">
        <Link to="/">Inicio</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/contacto">Contacto</Link>
        {/* Agrega más enlaces según sea necesario */}
      </div>
    </div>
  );
};

export default Header;
