// IngresoDocumentos.tsx
import React from 'react';
import '../styles/IngresoDocumentos.css';
import Header from '../Header'

const IngresoDocumentos: React.FC = () => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí puedes manejar la lógica de subida de archivos
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
