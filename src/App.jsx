import React, { useState } from 'react';
// Rutas actualizadas con la carpeta components/
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ColdStart from './components/coldstart/Coldstart'; // O ColdStart según el nombre de tu archivo
import Dashboard from './components/dashboard/Dashboard';

// Ruta actualizada con la carpeta styles/
import './styles/styles.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [userLevel, setUserLevel] = useState('Principiante');

  // Flujo tras completar registro
  const handleRegisterSuccess = () => {
    setIsFirstLogin(true);
    setCurrentPage('login');
  };

  // Flujo al iniciar sesión
  const handleLogin = () => {
    if (isFirstLogin) {
      setCurrentPage('coldstart');
    } else {
      setCurrentPage('dashboard');
    }
  };

  // Flujo tras terminar cuestionario Cold Start
  const handleCompleteColdStart = (assignedLevel) => {
    setUserLevel(assignedLevel);
    setIsFirstLogin(false);
    setCurrentPage('dashboard');
  };

  return (
    <div>
      {currentPage === 'login' && (
        <Login 
          onLogin={handleLogin} 
          onNavigateRegister={() => setCurrentPage('register')} 
        />
      )}

      {currentPage === 'register' && (
        <Register 
          onRegisterSuccess={handleRegisterSuccess} 
          onNavigateLogin={() => setCurrentPage('login')} 
        />
      )}

      {currentPage === 'coldstart' && (
        <ColdStart onCompleteColdStart={handleCompleteColdStart} />
      )}

      {currentPage === 'dashboard' && (
        <Dashboard 
          userLevel={userLevel} 
          onLogout={() => setCurrentPage('login')} 
        />
      )}
    </div>
  );
}