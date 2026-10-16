import React, { useState } from 'react';

export default function Login({ onLogin, onNavigateRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">¡Hola de nuevo! 🐍</h2>
        <p className="auth-subtitle">Ingresa a tu plataforma de aprendizaje de Python</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="tu_usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Iniciar Sesión</button>
        </form>
        <div className="auth-link">
          ¿No tienes una cuenta? <span onClick={onNavigateRegister}>Regístrate aquí</span>
        </div>
      </div>
    </div>
  );
}