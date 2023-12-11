import React from 'react';
import '../styles/Pagina_Galeria/Galeria.css';
import Header from '../components/Header/Header'

const Galeria = () => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log('Imágenes subidas:', files);
  };

  return (
    <div className="galeria-container">
        <Header/>

      <h2 style={{ color: 'brown', }}>Galería de Imágenes</h2>
      <div className="imagenes-container-galeria">
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
