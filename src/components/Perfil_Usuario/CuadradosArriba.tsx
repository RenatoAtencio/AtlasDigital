import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Perfil_Usuario/CuadradosArriba.css';

const CuadradosArriba = () => {
  const navigate = useNavigate();

  const handleCuadradoClick = (cuadrado: string) => {
    if (cuadrado === 'cuadrado1') {
      navigate('/ruta-de-la-ventana-cuadrado1');
    } else if (cuadrado === 'cuadrado2') {
      navigate('/cambiar-perfil-usuario');
    }
  };

  return (
    <div className="cuadrados-arriba">
      <div
        className="cuadrado"
        onClick={() => handleCuadradoClick('cuadrado1')}
      >
        <h3>Inicio perfil investigador</h3>
      </div>

      <div
        className="cuadrado"
        onClick={() => handleCuadradoClick('cuadrado2')}
      >
        <div className="perfil-icon">
          <span>Nombre de Usuario</span>
        </div>
      </div>
    </div>
  );
};

export default CuadradosArriba;
