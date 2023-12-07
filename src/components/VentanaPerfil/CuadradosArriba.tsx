// CuadradosArriba.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../styles/CuadradosArriba.css'; // Importa tu archivo de estilos CSS

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
      <div className="cuadrado-perfil-usuario" onClick={() => handleCuadradoClick('cuadrado1')}>
        <h3>Inicio perfil investigador</h3>
      </div>

      {/* Segundo Cuadrado */}
      <div className="cuadrado-perfil-usuario" onClick={() => handleCuadradoClick('cuadrado2')}>
        <div className="perfil-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default CuadradosArriba;
