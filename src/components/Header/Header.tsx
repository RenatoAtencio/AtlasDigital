// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header/Header.css';
import logo from '../../images/Logo_images/hoja(1).png';

const Header = () => {
  return (
    <div className="header-container">
      <div
        className="header-line"
        style={{
          height: '5px',
          backgroundColor: '#294724',
          width: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '1000',
        }}
      ></div>

      <div
        className="header"
        style={{ backgroundColor: '#ffffff', padding: '10px' }}
      >
        <h1 style={{ display: 'flex', alignItems: 'center', margin: '0' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          Atlas Digital
        </h1>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Inicio
          </Link>
          <Link to="/galeria" className="nav-button">
            Galería
          </Link>
          <Link to="/contacto" className="nav-button">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
