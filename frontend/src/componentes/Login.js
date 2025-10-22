import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import './Login.css';

function Login() {
  const nav = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [pass, setpass] = useState('');
  const [error, setError] = useState('');

  const enviar = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const respuesta = await apiClient.post('/api-login/', { 
        username: usuario,
        password: pass
      });

      if (respuesta.data.token) {
      
        localStorage.setItem('authToken', respuesta.data.token);
        
        localStorage.setItem('userInfo', JSON.stringify({
          userId: respuesta.data.user_id,
          username: respuesta.data.username,
          isStaff: respuesta.data.is_staff 
        }));

        nav('/'); 
      }
    } catch (err) {
      
      setError('Usuario o contraseña incorrectos. Por favor, intente de nuevo.');
      console.error("Error de inicio de sesión:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="mb-4 text-center fw-bold">Iniciar Sesión</h2>
        <p className="text-center text-muted mb-4">Gestión de Inventario</p>
        
        <form onSubmit={enviar}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              required
            />
          </div>
          
 
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;