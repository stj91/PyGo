import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Register({ onRegisterSuccess, onNavigateLogin }) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      // Guarda en localStorage
      localStorage.setItem("user_account", JSON.stringify(formData));
      
      setIsSuccess(true);

      // Esperar 3 segundos para que el usuario lea el mensaje y luego redirige
      setTimeout(() => {
        onRegisterSuccess(formData);
      }, 3000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta</h2>
        <p className="auth-subtitle">Aprende Python adaptado a tu ritmo académico</p>

        {/* Tarjeta de notificación  */}
        {isSuccess && (
          <div style={{
            background: "#ecfdf5",
            border: "1px solid #a7f3d0",
            color: "var(--success)",
            padding: "12px 16px",
            borderRadius: "var(--radius-sm)",
            marginBottom: "20px",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "var(--shadow-sm)"
          }}>
            <CheckCircle2 size={20} />
            <div>
              <strong>¡Registro exitoso!</strong>
              <p style={{ margin: "2px 0 0", fontSize: "12px", color: "var(--text-secondary)" }}>
                Redirigiendo a inicio de sesión...
              </p>
            </div>
          </div>
        )}

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
              disabled={isSuccess}
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
              disabled={isSuccess}
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
              disabled={isSuccess}
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isSuccess}
          >
            {isSuccess ? "Registrando..." : "Registrarme"}
          </button>
        </form>
        <div className="auth-link">
          ¿Ya tienes cuenta? <span onClick={onNavigateLogin}>Inicia sesión</span>
        </div>
      </div>
    </div>
  );
}