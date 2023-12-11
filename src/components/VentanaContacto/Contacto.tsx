//Contacto.tsx
import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../styles/Pagina_Contacto/Contacto.css'

const CuadrosTexto: React.FC = () => {
  const [problema, setProblema] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <div className="pagina-contacto-container">
        <Header/>
      <div className="cuadrado-contacto">
        <label>Problema:</label>
        <input
          type="text"
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
        />
        <label>Descripción del Problema:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CuadrosTexto;
