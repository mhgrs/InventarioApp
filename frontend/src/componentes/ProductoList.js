import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/apiClient';

function ProductoList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
      
        const respuesta = await apiClient.get('/api/productos/');
        setProductos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        
      }
    };

    obtenerProductos();
  }, []); 


  const eliminar = async (id) => {
    const confirmado = window.confirm('¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.');

    if (confirmado) {
      try {
     
        await apiClient.delete(`/api/productos/${id}/`);
        
       
        setProductos(productos.filter(producto => producto.id !== id));

      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Hubo un error al eliminar el producto.");
      }
    }
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
            <h2 className="mb-4 text-center">Catálogo de productos</h2>
            
      
            <div className="row g-3 mb-4 align-items-center">
              <div className="col-md-5">
                <div className="input-group">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="filter-dropdown-button">Código</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Código de barras</a></li>
                    <li><a className="dropdown-item" href="#">Nombre</a></li>
                  </ul>
                  <input type="text" className="form-control" placeholder="Buscar por código..." id="search-input" />
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
              <div className="col-md-2">
                <button type="button" className="btn btn-primary w-100">Aplicar Filtros</button>
              </div>
              <div className="col-md-2">
                <Link to="/productos/nuevo" className="btn btn-success w-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                  Agregar
                </Link>
              </div>
            </div>

       
            <div className="table-inventario">
              <table className="table table-hover table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Formato</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody id="product-table-body">
                  {productos.map(producto => (
                    <tr key={producto.id}>
                      <td>{producto.codigo_barras}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.categoria}</td>
                      <td>{producto.formato}</td>
                      <td>
            
                        <Link to={`/productos/editar/${producto.id}`} className="btn btn-warning btn-sm me-2">
                          Editar
                        </Link>
                 
                        <button 
                          onClick={() => eliminar(producto.id)} 
                          className="btn btn-danger btn-sm"
                        >
                          Eliminar
                        </button>
                      </td>
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

export default ProductoList;