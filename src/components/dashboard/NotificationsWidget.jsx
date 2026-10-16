import React from 'react';
import { Bell, AlarmClock, CalendarDays, NotebookPen } from 'lucide-react';


export default function NotificationsWidget() {
  return (
    <div className="notifications-widget-container">
      {/* Card de Notificaciones */}
      <div className="card">
        <h3 className="card-title"><Bell size={18} /> Notificaciones</h3>
        <div className="widget-item">
          <div>
            <strong>Nuevas actividades asignadas</strong>
            <p style={{ margin: '2px 0 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
              Se agregaron ejercicios prácticos adaptados a tu nivel actual.
            </p>
          </div>
        </div>
        <div className="widget-item">
          <div>
            <strong>Evaluación disponible</strong>
            <p style={{ margin: '2px 0 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
              El examen corto sobre condicionales está listo.
            </p>
          </div>
        </div>
      </div>

      {/* Card de Recordatorios */}
      <div className="card">
        <h3 className="card-title"><AlarmClock size={18} /> Recordatorios</h3>
        <div className="widget-item">
          <div>
            <strong><CalendarDays size={18} /> Meta diaria de estudio</strong>
            <p style={{ margin: '2px 0 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
              Completa 15 minutos hoy para mantener tu racha activa.
            </p>
          </div>
        </div>
        <div className="widget-item">
          <div>
            <strong><NotebookPen size={18} /> Práctica de POO</strong>
            <p style={{ margin: '2px 0 0', color: 'var(--text-secondary)', fontSize: '13px' }}>
              Fecha límite sugerida: Próximo viernes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}