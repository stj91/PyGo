import React, { useState } from "react";

export default function Login({ onLogin, onNavigateRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Lee la cuenta registrada en el navegador
    const savedData = localStorage.getItem("user_account");

    if (!savedData) {
      setErrorMessage("No hay usuarios registrados. Regístrate primero.");
      return;
    }

    const savedUser = JSON.parse(savedData);

    // Valida credenciales
    if ((savedUser.email === email) && (savedUser.password === password)) {
      onLogin(email);
    } else {
      setErrorMessage("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">¡Hola de nuevo!</h2>
        <p className="auth-subtitle">Ingresa a tu plataforma de aprendizaje de Python</p>
        
        {errorMessage && (
          <div style={{
            background: "#fee2e2",
            color: "var(--danger)",
            padding: "10px",
            borderRadius: "var(--radius-sm)",
            marginBottom: "16px",
            fontSize: "13px",
            textAlign: "center"
          }}>
            {errorMessage}
          </div>
        )}

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