// InformacionCuadros.tsx
import React from 'react';

const InformacionCuadros: React.FC = () => {
  return (
    <div className="informacion-cuadros">
      {/* Aquí puedes agregar tu lógica y contenido para los cuadros de información */}
      <div className="cuadro-informacion">
        <h3>Cuadro 1</h3>
        <p>Información del cuadro 1</p>
      </div>
      <div className="cuadro-informacion">
        <h3>Cuadro 2</h3>
        <p>Información del cuadro 2</p>
      </div>
      <div className="cuadro-informacion">
        <h3>Cuadro 3</h3>
        <p>Información del cuadro 3</p>
      </div>
    </div>
  );
};

export default InformacionCuadros;
