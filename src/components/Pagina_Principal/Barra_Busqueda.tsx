// SearchBar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Pagina_Principal/BarraBusqueda.css';

interface SearchBarProps {
  label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ label }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim().toLowerCase() === 'laurel') {
      // Puedes cambiar '/pagina-de-especie' a la ruta real de la página de la especie
      navigate('/ejemplo');
    }
  };

  return (
    <div className="search-bar-container">
      <label className="search-bar-label">{label}</label>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Ingresar nombre de especie que desea buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-bar-button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
