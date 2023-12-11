import React from 'react';
import '../../styles/Perfil_Usuario/SeccionInformacion.css';

const SeccionInformacion = () => {
  return (
    <div className="seccion-informacion">
      <div className="cuadrado">
        <h3>Mis publicaciones</h3>
        <div className="publicacion">
          <p>Titulo de la Publicación 1</p>
        </div>
      </div>

      <div className="cuadrado">
        <h3>Mis solicitudes</h3>
        <div className="solicitud">
          <p>Nombre de la Solicitud 1</p>
        </div>
      </div>

      <div className="cuadrado">
        <h3>Mis informes</h3>
        <div className="informe">
          <p>Especie 1</p>
          <p>Especie 2</p>
        </div>
      </div>
    </div>
  );
};

export default SeccionInformacion;
