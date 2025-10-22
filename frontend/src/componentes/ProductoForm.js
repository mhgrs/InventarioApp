import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import apiClient from '../api/apiClient';

function ProductoForm() {
  const nav = useNavigate();
  const { id } = useParams();
  const [datosForm, setDatosForm] = useState({
    codigo_barras: '',
    nombre: '',
    categoria: '',
    formato: ''
  });


  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await apiClient.get(`/api/productos/${id}/`);

        setDatosForm(respuesta.data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);

        nav('/productos');
      }
    };
    if (id) {
      obtenerProducto();
    } else {

      setDatosForm({
        codigo_barras: '',
        nombre: '',
        categoria: '',
        formato: ''
      });
    }
  }, [id, nav]);


  const Cambios = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
    });
  };


  const enviar = async (e) => {
    e.preventDefault();
    try {
      if (id) {

        await apiClient.patch(`/api/productos/${id}/`, datosForm);
      } else {
        await apiClient.post('/api/productos/', datosForm);
      }

      nav('/productos');
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };


  return (
    <div className="container position-relative">
      <Link to="/productos" className="btn btn-link position-absolute top-0 start-0 mt-3 ms-3 text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
        </svg>
        Regresar
      </Link>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="register-container">
            <h2 className="mb-5 text-center">
              {id ? "Editar Producto" : "Agregar Nuevo Producto"}
            </h2>
            <form onSubmit={enviar}>
              <div className="mb-3">
                <label htmlFor="codigo_barras" className="form-label">Código de barras</label>
                <input
                  type="text"
                  className="form-control"
                  id="codigo_barras"
                  name="codigo_barras"
                  placeholder="Ej: 2584524747457"
                  value={datosForm.codigo_barras}
                  onChange={Cambios}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej: Harina de trigo"
                  value={datosForm.nombre}
                  onChange={Cambios}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoría</label>
                <select
                  className="form-select"
                  id="categoria"
                  name="categoria"
                  value={datosForm.categoria}
                  onChange={Cambios}
                  required
                >
                  <option disabled value="">Seleccionar...</option>
                  <option>Comestible</option>
                  <option>Limpieza</option>
                  <option>Herramientas</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="formato" className="form-label">Formato</label>
                <input
                  type="text"
                  className="form-control"
                  id="formato"
                  name="formato"
                  placeholder="Ej: Bolsa de 1kg"
                  value={datosForm.formato}
                  onChange={Cambios}
                  required
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <Link to="/productos" className="btn btn-secondary me-md-2">Cancelar</Link>
                <button type="submit" className="btn btn-primary">
                  {id ? "Actualizar Producto" : "Guardar Producto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoForm;