import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProgressWidget from './ProgressWidget';
import NotificationsWidget from './NotificationsWidget';
import Settings from '../settings/Settings';
import { Search, FaceGrinning } from 'lucide-react';

export default function Dashboard({ userLevel, userScore = 68, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-layout">
      {/* Sidebar Adaptativa */}
      <Sidebar 
        userLevel={userLevel} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={onLogout} 
      />

      {/* Contenido Principal */}
      <main className="main-content">
        {/* Header con Buscador y Nivel del Usuario */}
        <header className="header-search">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Buscar temas (Funciones, Bucles, POO, etc)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="user-badge">
            Nivel: {userLevel}
          </div>
        </header>

        {/* Banner de Inducción para Usuarios Principiantes */}
        {activeTab === 'dashboard' && (
          <>
            {userLevel === 'Principiante' && (
            <div className="card" style={{ background: '#e0e7ff', borderColor: '#c7d2fe' }}>
              <h3><FaceGrinning size={18} /> ¡Bienvenido al Curso de Python!</h3>
              <p>Te recomendamos revisar el tutorial de inducción y las referencias de apoyo antes de iniciar tus evaluaciones.</p>
              <button className="btn-primary" style={{ width: 'auto', padding: '8px 16px' }}>
                Ver Tutorial de Inducción
              </button>
            </div>
          )}

            {/* Cuadrícula Principal con Widgets */}
            <div className="grid-2">
              <ProgressWidget userLevel={userLevel} userScore={userScore} />
              <NotificationsWidget />
            </div>
          </>
        )}

        {/* Vista Adaptativa de Configuraciones */}
        {activeTab === 'settings' && (
          <Settings userLevel={userLevel} />
        )}
      </main>
    </div>
  );
}