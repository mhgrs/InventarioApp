import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RutaPrivada = () => {
  const estaAutenticada = localStorage.getItem('authToken');


  return estaAutenticada ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RutaPrivada;