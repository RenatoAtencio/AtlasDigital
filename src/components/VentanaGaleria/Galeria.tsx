// Galeria.tsx
import React from 'react';
import Header from '../Header'
import '../../styles/Galeria.css';

const Galeria: React.FC = () => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí puedes manejar la lógica de subida de imágenes
    const files = event.target.files;
    console.log('Imágenes subidas:', files);
  };

  return (
    <div className="galeria-container">
        <Header/>

      <h2>Galería de Imágenes</h2>
      <div className="imagenes-container-galeria">
        {/* Cuadrados para ingresar imágenes */}
        <div className="cuadrado-galeria" onClick={() => alert('Haz clic en la primera imagen')}>
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div className="cuadrado-galeria" onClick={() => alert('Haz clic en la segunda imagen')}>
          <input type="file" onChange={handleImageUpload} />
        </div>
        
      </div>
    </div>
  );
};

export default Galeria;
