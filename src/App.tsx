// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './PaginaPrincipal';
import Login from './Login';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default App;
