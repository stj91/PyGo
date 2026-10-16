import React, { useState } from 'react';

export default function Register({ onRegisterSuccess, onNavigateLogin }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Registra al usuario marcándolo como nuevo para activar el Cold Start tras el login
      onRegisterSuccess(formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta 🚀</h2>
        <p className="auth-subtitle">Aprende Python adaptado a tu ritmo académico</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ej. Juan Pérez"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Crea una contraseña segura"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Registrarme</button>
        </form>
        <div className="auth-link">
          ¿Ya tienes cuenta? <span onClick={onNavigateLogin}>Inicia sesión</span>
        </div>
      </div>
    </div>
  );
}