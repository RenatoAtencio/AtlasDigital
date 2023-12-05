// CuadradosArriba.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CuadradosArriba.css'; // Importa tu archivo de estilos CSS

const CuadradosArriba: React.FC = () => {
  const navigate = useNavigate();

  const handleCuadradoClick = (cuadrado: string) => {
    // Navega a la ventana correspondiente al hacer clic en el cuadrado
    if (cuadrado === 'cuadrado1') {
      navigate('/ruta-de-la-ventana-cuadrado1');
    } else if (cuadrado === 'cuadrado2') {
      navigate('/cambiar-perfil-usuario');
    }
    // Agrega más casos según sea necesario para otros cuadrados
  };

  return (
    <div className="cuadrados-arriba">
      {/* Primer Cuadrado */}
      <div className="cuadrado" onClick={() => handleCuadradoClick('cuadrado1')}>
        <h3>Inicio perfil investigador</h3>
      </div>

      {/* Segundo Cuadrado */}
      <div className="cuadrado" onClick={() => handleCuadradoClick('cuadrado2')}>
        <div className="perfil-icon">

          <span>Nombre de Usuario</span>
        </div>
      </div>
    </div>
  );
};

export default CuadradosArriba;
