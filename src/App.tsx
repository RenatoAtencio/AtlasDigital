// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';

const App: React.FC = () => {
  return (
      <AppRoutes />
  );
};

export default App;
