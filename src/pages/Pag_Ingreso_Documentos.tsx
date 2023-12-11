import React from 'react';
import '../styles/Ingreso_Documentos/IngresoDocumentos.css';
import Header from '../components/Header/Header'

const IngresoDocumentos = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log('Archivos subidos:', files);
  };

  return (
    <div className="ingreso-documentos-container">
      <Header/>
      <h2>Ingreso de Documentos</h2>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default IngresoDocumentos;
