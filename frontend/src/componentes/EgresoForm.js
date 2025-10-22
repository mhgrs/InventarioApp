import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

function EgresoForm() {
  const nav = useNavigate();


  const [sku, setSku] = useState('');
  const [cantidad, setCantidad] = useState(1);


  const [loteEncontrado, setLoteEncontrado] = useState(null);

  const [cargando, setCargando] = useState(false);

  const [errorBusqueda, setErrorBusqueda] = useState('');


  const manejarBusqueda = async (e) => {

    e.preventDefault();

    setCargando(true);
    setErrorBusqueda('');
    setLoteEncontrado(null);

    if (!sku) {
      setErrorBusqueda('Por favor, ingrese un SKU.');
      setCargando(false);
      return;
    }

    try {
      const respuesta = await apiClient.get(`/api/inventario/${sku}/`);
      setLoteEncontrado(respuesta.data);
    } catch (error) {
      setErrorBusqueda('SKU no encontrado o error al buscar.');
      console.error("Error buscando SKU:", error);
    } finally {
      setCargando(false);
    }
  };


  const enviar = async (e) => {
    e.preventDefault();
    if (!loteEncontrado) {
      alert("Por favor, primero busque y encuentre un SKU válido.");
      return;
    }
    const cantidadActual = loteEncontrado.cantidad;
    const nuevaCantidad = cantidadActual - parseInt(cantidad, 10);
    if (nuevaCantidad < 0) {
      alert(`Stock insuficiente. Cantidad actual: ${cantidadActual}.`);
      return;
    }
    try {
      
      await apiClient.patch(`/api/inventario/${loteEncontrado.sku}/`, { cantidad: nuevaCantidad });
      nav('/inventario');
    } catch (error) {
      console.error("Error al registrar el egreso:", error);
      alert("Ocurrió un error al guardar el egreso.");
    }
  };


  return (
    <div className="container position-relative">

      <Link to="/" className="btn btn-link position-absolute top-0 start-0 mt-3 ms-3 text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg>
        Regresar
      </Link>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="register-container">
            <h2 className="mb-4 text-center">Registrar Egreso de Producto</h2>

            <form onSubmit={enviar}>


              <label htmlFor="skuProducto" className="form-label">SKU</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="skuProducto"
                  placeholder="Ej: 1 "
                  value={sku}
                  onChange={(e) => {
                    setSku(e.target.value);
                    setLoteEncontrado(null);
                    setErrorBusqueda('');
                  }}
                  required
                />

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={manejarBusqueda}
                  disabled={cargando}
                >
                  {cargando ? 'Buscando...' : 'Buscar SKU'}
                </button>
              </div>


              {errorBusqueda && (
                <div className="alert alert-danger" role="alert">
                  {errorBusqueda}
                </div>
              )}
              {loteEncontrado && (
                <div className="alert alert-success" role="alert">
                  <h5 className="alert-heading">{loteEncontrado.nombre}</h5>
                  <p className="mb-0">
                    <strong>Categoría:</strong> {loteEncontrado.categoria} <br />
                    <strong>Cantidad Actual:</strong> {loteEncontrado.cantidad}
                  </p>
                </div>
              )}




              {loteEncontrado && (
                <>
                  <div className="mb-3">
                    <label htmlFor="cantidadEgreso" className="form-label">Cantidad a Egresar</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidadEgreso"
                      placeholder="Ej: 5"
                      min="1"
                      value={cantidad}
                      onChange={(e) => setCantidad(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fechaEgreso" className="form-label">Fecha de Egreso</label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaEgreso"
                      required
                    />
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <Link to="/" className="btn btn-secondary me-md-2">Cancelar</Link>
                    <button type="submit" className="btn btn-danger">
                      Registrar Egreso
                    </button>
                  </div>
                </>
              )}

              {!loteEncontrado && (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <Link to="/" className="btn btn-secondary me-md-2">Cancelar</Link>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgresoForm;