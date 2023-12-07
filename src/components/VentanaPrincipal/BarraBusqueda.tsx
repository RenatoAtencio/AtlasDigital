// SearchBar.tsx
import React from 'react';
import '../../styles/BarraBusqueda.css';

interface SearchBarProps {
  label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ label }) => {
  return (
    <div className="search-bar-container">
      <label className="search-bar-label">{label}</label>
      <input className="search-bar-input" type="text" placeholder="Buscar..." />
      <button className="search-bar-button">Buscar</button>
    </div>
  );
};

export default SearchBar;