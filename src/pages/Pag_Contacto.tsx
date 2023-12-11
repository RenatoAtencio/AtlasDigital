import React, { useState } from 'react';
import Header from '../components/Header/Header';
import '../styles/Pagina_Contacto/Contacto.css';

const Contacto = () => {
  const [problema, setProblema] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [motivoContacto, setMotivoContacto] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fono, setFono] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [verificador, setVerificador] = useState('');

  const handleEnviarMensaje = () => {
    console.log('Enviando mensaje con los siguientes datos:', {
      problema,
      descripcion,
      motivoContacto,
      nombre,
      direccion,
      fono,
      email,
      comentario,
      verificador,
    });
  };

  return (
    <div className="pagina-contacto-container">
      <Header />
      <div className="cuadrado-contacto">
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Dirección:</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <label>Fono:</label>
        <input
          type="text"
          value={fono}
          onChange={(e) => setFono(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Comentario:</label>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button type="button" onClick={handleEnviarMensaje}>
          Enviar mensaje
        </button>
      </div>
    </div>
  );
};

export default Contacto;
