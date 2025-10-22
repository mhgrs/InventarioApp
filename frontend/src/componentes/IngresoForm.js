import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

function IngresoForm() {
  const nav = useNavigate();


  const [datosForm, setDatosForm] = useState({
    producto: '', 
    cantidad: 0,
    lote_numero: '',
    fecha_ingreso: '',
    fecha_caducidad: null 
  });

  
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await apiClient.get('/api/productos/')
        setProductos(respuesta.data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    obtenerProductos();
  }, []); 

  const cambios = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
    });
  };


  const enviar = async (e) => {
    e.preventDefault();

    const datosParaEnviar = {
      ...datosForm,
 
      fecha_caducidad: datosForm.fecha_caducidad || null
    };

    try {

      await apiClient.post('/api/inventario/', datosParaEnviar)

      nav('/inventario');
    } catch (error) {
      console.error("Error al registrar el ingreso:", error);
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
        <div className="col-lg-8">
          <div className="register-container">
            <h2 className="mb-4 text-center">Registrar ingreso de productos</h2>

            <form onSubmit={enviar}>
              <div className="mb-3">
                <label htmlFor="producto" className="form-label">Producto</label>
            
                <select
                  className="form-select"
                  id="producto"
                  name="producto"
                  value={datosForm.producto}
                  onChange={cambios}
                  required
                >
                  <option value="" disabled>Seleccionar producto...</option>
             
                  {productos.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.nombre} ({p.formato})
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  id="cantidad"
                  name="cantidad"
                  placeholder="Ej: 50"
                  min="1"
                  value={datosForm.cantidad}
                  onChange={cambios}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lote_numero" className="form-label">Número de Lote</label>
                <input
                  type="text"
                  className="form-control"
                  id="lote_numero"
                  name="lote_numero"
                  placeholder="Ej: AB12345"
                  value={datosForm.lote_numero}
                  onChange={cambios}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaIngreso" className="form-label">Fecha de Ingreso</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha_ingreso"
                  name="fecha_ingreso"
                  value={datosForm.fecha_ingreso}
                  onChange={cambios}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaCaducidad" className="form-label">Fecha de Caducidad (Opcional)</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha_caducidad"
                  name="fecha_caducidad"
                  value={datosForm.fecha_caducidad}
                  onChange={cambios}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <Link to="/" className="btn btn-secondary me-md-2">Cancelar</Link>
                <button type="submit" className="btn btn-primary">Guardar Producto</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default IngresoForm;