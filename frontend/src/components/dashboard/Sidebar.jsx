import React from 'react';
import { GraduationCap, BookOpen, SquareTerminal, Settings, NotebookPen, LogOut, NotebookText, House, CircleQuestionMark } from 'lucide-react';

export default function Sidebar({ userLevel, activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span>PyGo <SquareTerminal size={18} /></span>
        <small style={{ fontSize: '10px', color: 'var(--primary)', background: 'var(--primary-light)', padding: '2px 6px', borderRadius: '4px' }}>
          CUCEI
        </small>
      </div>
      <nav>
        <div 
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        ><House size={18} /> Dashboard</div>
        <div className="nav-item"> <BookOpen size={18} /> Mis Cursos</div>
        <div className="nav-item"> <NotebookText size={18} /> Temario</div>

        <div 
          className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={18} /> Configuración
        </div>

        {/* Nivel Avanzado: Métodos de Evaluación Especializados y Certificaciones */}
        {userLevel === 'Avanzado' && (
          <>
            <div className="nav-item"><NotebookPen size={18} /> Métodos de Evaluación</div>
            <div className="nav-item"><GraduationCap size={18} /> Certificaciones</div>
          </>
        )}

        <div className="nav-item"><CircleQuestionMark size={18} /> Ayuda y Soporte</div>
        
        <div 
          className="nav-item" 
          onClick={onLogout} 
          style={{ marginTop: '40px', color: '#ef4444' }}
        >
          <LogOut size={18} /> Cerrar Sesión
        </div>
      </nav>
    </aside>
  );
}