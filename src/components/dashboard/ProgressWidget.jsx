import React from 'react';
import { ChartLine, BookOpenText, TriangleAlert, Trophy, Check, Hourglass, Lock } from 'lucide-react';

export default function ProgressWidget({ userLevel, userScore = 68 }) {
  return (
    <div className="progress-widget-container">
      {/* Widget de Progreso del Módulo Actual */}
      <div className="card">
        <h3 className="card-title"><ChartLine size={18} /> Progreso del Curso</h3>
        <p>Módulo Actual: <strong>Estructuras de Control y Condicionales</strong></p>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: '65%' }}></div>
        </div>
        <small>65% completado del nivel actual</small>
      </div>

      {/* Módulo Adaptativo de Reforzamiento (Intermedio y Avanzado con rendimiento <= 70%) */}
      {(userLevel === 'Intermedio' || userLevel === 'Avanzado') && userScore <= 70 && (
        <div className="card" style={{ borderLeft: '4px solid var(--warning)' }}>
          <h3 className="card-title" style={{ color: 'var(--warning)' }}><TriangleAlert size={18} /> Actividad de Refuerzo Asignada</h3>
          <p>Se detectó un promedio general del {userScore}%. Completa las actividades de repaso sobre "Ciclos For & While" antes de avanzar.</p>
          <button className="btn-primary">Iniciar Repaso de Refuerzo</button>
        </div>
      )}

      {/* Módulo de Certificación para Nivel Avanzado con promedio >= 80% */}
      {userLevel === 'Avanzado' && userScore >= 80 && (
        <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
          <h3 className="card-title" style={{ color: 'var(--success)' }}><Trophy size={18} /> Certificación Disponible</h3>
          <p>¡Felicidades! Has alcanzado un promedio destacado ({userScore}%). Puedes emitir tu certificación formal.</p>
          <button className="btn-primary">Ver / Descargar Certificado</button>
        </div>
      )}

      {/* Estado del Temario y Control de Avance */}
      <div className="card">
        <h3 className="card-title"><BookOpenText size={18} />Temas de la Unidad</h3>
        <div className="widget-item">
          <span>1. Sintaxis Básica y Variables</span>
          <span style={{ marginLeft: 'auto', color: 'var(--success)', fontWeight: '600' }}>Completado <Check size={18} /></span>
        </div>
        <div className="widget-item">
          <span>2. Estructuras Condicionales (if, elif, else)</span>
          <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontWeight: '600' }}>En Curso <Hourglass size={18} /></span>
        </div>
        <div className="widget-item">
          <span>3. Estructuras de Repetición (for, while)</span>
          <span style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }}>Bloqueado <Lock size={18} /></span>
        </div>
      </div>
    </div>
  );
}