import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css'; 

//componentes
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard';
import InventarioList from './componentes/InventarioList';
import ProductoList from './componentes/ProductoList';
import ProductoForm from './componentes/ProductoForm';
import IngresoForm from './componentes/IngresoForm';
import EgresoForm from './componentes/EgresoForm';
import RutaPrivada from './componentes/RutaPrivada';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/login" element={<Login />} />


        <Route element={<RutaPrivada />}> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventario" element={<InventarioList />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/productos/nuevo" element={<ProductoForm />} />
          <Route path="/productos/editar/:id" element={<ProductoForm />} />
          <Route path="/ingreso" element={<IngresoForm />} />
          <Route path="/egreso" element={<EgresoForm />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;