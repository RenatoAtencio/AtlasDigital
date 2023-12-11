import React from 'react';
import '../styles/Pagina_Especie/ejemplo.css';
import Header from '../components/Header/Header';

const Ejemplo: React.FC = () => {
  return (
    <div className="ejemplo-container">
      <Header />
      <div className="titulo">
        <h1>Laurelia sempervirens (Laurel)</h1>
      </div>
      <div className="contenido-principal">
        <div className="columna-izquierda">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Laurelia-sempervirens-Enys1.jpg" className="imagen-izquierda" alt="Laurelia sempervirens" />
          <div className="informacion">
            <p>
              <strong>Resumen:</strong> La Laurelia sempervirens, comúnmente conocida como "Laurel" o "Laurel de Santiago",
              es un árbol perennifolio que pertenece al género Laurelia y a la familia Monimiaceae.
            </p>
          </div>
        </div>
        <div className="columna-derecha">
        <div className="clasificacion">
            <h3>Clasificación Taxonómica</h3>
                  <p>
                    -Reino: Plantae (Plantas)
                    <br />
                    -Filo: Angiospermae (Angiospermas)
                    <br />
                    -Clase: Magnoliopsida
                    <br />
                    -Subclase: Magnoliidae
                    <br />
                    -Superorden: Magnolianae
                    <br />
                    -Orden: Laurales
                    <br />
                    -Familia: Monimiaceae
                    <br />
                    -Género: Laurelia
                    <br />
                    -Especie: Laurelia sempervirens
                  </p>
          </div>
          <div className="caracteristicas">
            <h3>Características</h3>
                      <p>
                        -Follaje Perenne: Las hojas de Laurelia sempervirens son perennes, lo que significa que se mantienen en la
                        planta durante todo el año. Son opuestas, elípticas y tienen un brillo distintivo.
                        <br />
                        -Flores en Panículas: Las flores de este árbol se disponen en panículas, que son racimos de flores
                        ramificados. Estas flores son pequeñas y verdosas.
                        <br />
                        -Madera de Calidad: La madera de Laurelia sempervirens es apreciada por su calidad. Se utiliza en carpintería
                        y construcción debido a sus propiedades, y también puede tener aplicaciones en la fabricación de muebles u
                        otros productos de madera.
                      </p>
          </div>
          
        </div>
      </div>
    </div>
  );
  

}
export default Ejemplo;