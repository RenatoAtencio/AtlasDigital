import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchBar from '../components/Pagina_Principal/Barra_Busqueda';
import Login from '../components/Pagina_Principal/Ventana_Login';
import logo from '../images/Logo_images/hoja(1).png';
import tuLogo from '../images/Logo_images/logo(2).png';
import tulogo from '../images/Logo_images/papel.png';
import '../styles/Pagina_Principal/PaginaPrincipal.css';

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal-container">
      <div className="header-container">
        <div className="header-line"> </div>
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

      <div className="search-bar-container">
        <SearchBar label="Buscador de Biodiversidad Chilena" />
      </div>

      <div className="imagen-container-principal">
        <div
          className="botones-inferiores-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <div
            className="cuadrado-contenedorIS"
            style={{
              backgroundColor: '#333333',
              borderRadius: '20px',
              padding: '10%',
              marginRight: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '300px',
              height: '120px',
            }}
          >
            <img
              src={tuLogo}
              alt="Logo"
              style={{ width: '30px', height: '30px', marginBottom: '10px' }}
            />
            <label
              style={{
                color: '#ffffff',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Ingreso de usuarios certificados o Crear cuenta
            </label>
            <Link
              to="/login"
              className="cuadrado-contenedorIS
            "
            >
              <label style={{ color: '#ffffff', textAlign: 'center' }}>
                Iniciar Sesión o Registrase
              </label>
            </Link>
          </div>
          <div
            className="cuadrado-contenedorID"
            style={{
              backgroundColor: '#294724',
              borderRadius: '20px',
              padding: '10%',
              marginRight: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '300px',
              height: '120px',
            }}
          >
            <img
              src={tulogo}
              alt="Logo"
              style={{ width: '30px', height: '30px', marginBottom: '10px' }}
            />
            <label
              style={{
                color: '#fff',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              ¿Desea Ingresar algun Documento?
            </label>

            <Link to="/ingresodocumentos" className="cuadrado-contenedorID">
              <label style={{ color: '#ffffff' }}>Ingrese Aquí</label>
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default PaginaPrincipal;
