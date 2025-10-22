import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/apiClient';


const stockBajo= 20;
const caducidadProxima = 30; 


function InventarioList() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    const obtenerLotes = async () => {
      try {
        const respuesta = await apiClient.get('/api/inventario/');
        setLotes(respuesta.data);
      } catch (error) {
        console.error("Error al cargar el inventario:", error);
      }
    };

    obtenerLotes();
  }, []); 


  const revisarCaducidad = (lote) => {
    if (lote.fecha_caducidad) {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

   
      const partesFecha = lote.fecha_caducidad.split('-');
      const fechaExp = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);

      const diffTiempo = fechaExp - hoy;
      const diffDias = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24));

      if (diffDias <= 0) {
        return 'table-danger'; // Rojo: caducado
      }
      if (diffDias <= caducidadProxima) {
        return 'table-warning'; // Naranja: proximo a caducar
      }
       if (lote.cantidad >stockBajo & diffDias > caducidadProxima){
      return 'table-success'; //Verde: en buen estado
    }
    }
    if (lote.cantidad < stockBajo) {
      return 'table-info'; // Azul: stock bajo
    }
    //sin color = sin existencias
    return ''; 
  };
  
  return (
    <div className="container position-relative">
      <Link to="/" className="btn btn-link position-absolute top-0 start-0 mt-3 ms-3 text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        Regresar
      </Link>

      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="busqueda-container">
            <h2 className="mb-4 text-center">Inventario de Productos</h2>
            
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="input-group">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="filter-dropdown-button">SKU</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">SKU</a></li>
                    <li><a className="dropdown-item" href="#">Código</a></li>
                    <li><a className="dropdown-item" href="#">Nombre</a></li>
                  </ul>
                  <input type="text" className="form-control" placeholder="Buscar por SKU..." id="search-input" />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select" id="categoria-filtro">
                  <option value="">Todas las categorías</option>
                  <option>Comestible</option>
                  <option>Limpieza</option>
                  <option>Herramientas</option>
                </select>
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-primary w-100">Aplicar Filtros</button>
              </div>
            </div>
            
            <div className="tablaInventario">
              <table className="table table-hover table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">SKU</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Fecha Ingreso</th>
                    <th scope="col">Fecha Caducidad</th>
                  </tr>
                </thead>
                <tbody id="product-table-body">
                  {lotes.map(lote => (
                    <tr key={lote.sku} className={revisarCaducidad(lote)}>
                      <td>{lote.sku}</td>
                      <td>{lote.nombre}</td>
                      <td>{lote.categoria}</td>
                      <td>{lote.cantidad}</td>
                      <td>{lote.fecha_ingreso}</td>
                      <td>{lote.fecha_caducidad ? lote.fecha_caducidad : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default InventarioList;