import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import React from 'react';

const AllRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    );
  };

export default AllRoutes;