// SeccionInformacion.tsx
import React from 'react';
import '../styles/SeccionInformacion.css'
const SeccionInformacion: React.FC = () => {
  return (
    <div className="seccion-informacion">
      {/* Publicaciones, Solicitudes e Informes en fila */}
      <div className="cuadrado">
        <h3>Publicaciones del Usuario</h3>
        {/* Ejemplo de contenido de publicación */}
        <div className="publicacion">
          <p>Titulo de la Publicación 1</p>
        </div>
        {/* Puedes agregar más publicaciones dentro del mismo cuadrado */}
      </div>

      <div className="cuadrado">
        <h3>Solicitudes del Usuario</h3>
        {/* Ejemplo de contenido de solicitud */}
        <div className="solicitud">
          <p>Nombre de la Solicitud 1</p>
        </div>
        {/* Puedes agregar más solicitudes dentro del mismo cuadrado */}
      </div>

      <div className="cuadrado">
        <h3>Informes del Usuario</h3>
        {/* Ejemplo de contenido de informe */}
        <div className="informe">
          <p>Titulo del Informe 1</p>
        </div>
      </div>
    </div>
  );
};

export default SeccionInformacion;
