import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="dashboard-container">
            <h1 className="mb-4 text-center fw-bold">Gestión de Inventario</h1>
            <p className="text-center text-muted mb-5">Selecciona una de las opciones para empezar.</p>

            <div className="row g-4">
              <div className="col-md-6">
              
                <Link to="/inventario" className="card-link">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-list-ul card-icon text-primary" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-4-1a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1z" />
                      </svg>
                      <h5 className="card-title fw-bold">Inventario</h5>
                      <p className="card-text text-muted">Accede al inventario completo y filtra por nombre, categoría o SKU.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
          
                <Link to="/productos" className="card-link">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-plus-square card-icon text-info" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" /><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                      <h5 className="card-title fw-bold">Productos</h5>
                      <p className="card-text text-muted">Añade o edita nuevos productos en tu catálogo.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
      
                <Link to="/ingreso" className="card-link">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-up-square card-icon text-success" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                      <h5 className="card-title fw-bold">Registrar Ingreso</h5>
                      <p className="card-text text-muted">Añade nuevos productos o repón el stock en el inventario.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
        
                <Link to="/egreso" className="card-link">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-down-square card-icon text-danger" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                      <h5 className="card-title fw-bold">Registrar Egreso</h5>
                      <p className="card-text text-muted">Registra la salida de productos del inventario.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;