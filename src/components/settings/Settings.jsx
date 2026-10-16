import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Goal, Bell, Palette, BookOpen } from 'lucide-react';

export default function Settings({ userLevel, onSave }) {
  // Datos de cuenta (Todos los niveles)
  const [profile, setProfile] = useState({
    name: 'Homero Ramírez',
    email: 'homero.ramirez@alumnos.udg.mx',
    career: 'Ingeniería Informática',
    section: 'D01 - CUCEI'
  });

  // Preferencias de estudio (Todos los niveles)
  const [studyTime, setStudyTime] = useState('1 hora');

  // Notificaciones (Todos los niveles)
  const [notifications, setNotifications] = useState({
    examAlerts: true,
    streakReminders: true,
    reinforcementAlerts: true
  });

  // Personalización e Interfaz (Solo Intermedio y Avanzado)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [difficulty, setDifficulty] = useState('Medio');

  // Métodos de Evaluación Especializados (Solo Avanzado)
  const [evalMethods, setEvalMethods] = useState({
    practicalProjects: true,
    multipleChoice: true,
    timeChallenges: false
  });

  // Cambio de Tema en Tiempo Real
  const handleThemeToggle = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Configuración guardada correctamente.');
    if (onSave) onSave();
  };

  return (
    <div className="settings-container" style={{ maxWidth: '800px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '22px', fontWeight: '800' }}>
        <SettingsIcon size={18} /> Configuraciones de la Cuenta
      </h2>

      <form onSubmit={handleSubmit}>
        {/* SECCIÓN 1: Perfil y Datos de Cuenta (Todos los niveles) */}
        <div className="card">
          <h3 className="card-title"><User size={18} /> Perfil y Datos Universitarios</h3>
          <div className="grid-2" style={{ gap: '16px', marginBottom: '12px' }}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input 
                type="text" 
                className="form-input" 
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                className="form-input" 
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid-2" style={{ gap: '16px' }}>
            <div className="form-group">
              <label>Carrera</label>
              <input 
                type="text" 
                className="form-input" 
                value={profile.career}
                onChange={(e) => setProfile({ ...profile, career: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Sección / Centro</label>
              <input 
                type="text" 
                className="form-input" 
                value={profile.section}
                onChange={(e) => setProfile({ ...profile, section: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: Preferencia de Estudio (Todos los niveles) */}
        <div className="card">
          <h3 className="card-title"><Goal size={18} /> Preferencia de Estudio</h3>
          <div className="setting-row">
            <div className="setting-info">
              <h4>Meta diaria de tiempo</h4>
              <p>El sistema adaptará la duración de los temas según tu disponibilidad.</p>
            </div>
            <select 
              className="setting-select" 
              value={studyTime}
              onChange={(e) => setStudyTime(e.target.value)}
            >
              <option value="5-10 min">5 a 10 minutos al día</option>
              <option value="1 hora">1 hora diaria</option>
              <option value="Fines de semana">Solo fines de semana</option>
            </select>
          </div>
        </div>

        {/* SECCIÓN 3: Notificaciones y Recordatorios (Todos los niveles) */}
        <div className="card">
          <h3 className="card-title"><Bell size={18} /> Notificaciones y Alertas</h3>
          <div className="setting-row">
            <div className="setting-info">
              <h4>Alertas de exámenes y entregas</h4>
              <p>Recibir notificaciones previas a las fechas de evaluación.</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.examAlerts}
                onChange={(e) => setNotifications({ ...notifications, examAlerts: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <h4>Recordatorios de racha diaria</h4>
              <p>Avisos para mantener tu ritmo diario de estudio.</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.streakReminders}
                onChange={(e) => setNotifications({ ...notifications, streakReminders: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <h4>Avisos de actividades de refuerzo</h4>
              <p>Notificar cuando el sistema detecte temas por repasar (rendimiento &le; 70%).</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.reinforcementAlerts}
                onChange={(e) => setNotifications({ ...notifications, reinforcementAlerts: e.target.checked })}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* SECCIÓN 4: Personalización e Interfaz (SOLO Intermedio y Avanzado) */}
        {(userLevel === 'Intermedio' || userLevel === 'Avanzado') && (
          <div className="card">
            <h3 className="card-title"><Palette size={18} /> Personalización e Interfaz</h3>
            
            <div className="setting-row">
              <div className="setting-info">
                <h4>Modo Oscuro</h4>
                <p>Cambia el tema visual de la plataforma en tiempo real.</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={isDarkMode}
                  onChange={handleThemeToggle}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h4>Ajuste Manual de Dificultad</h4>
                <p>Regula la complejidad de las lecturas y ejercicios técnicos.</p>
              </div>
              <select 
                className="setting-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="Fácil">Fácil</option>
                <option value="Medio">Medio</option>
                <option value="Difícil">Difícil</option>
              </select>
            </div>
          </div>
        )}

        {/* SECCIÓN 5: Métodos de Evaluación Especializados (SOLO Avanzado) */}
        {userLevel === 'Avanzado' && (
          <div className="card">
            <h3 className="card-title"><BookOpen size={18} /> Métodos de Evaluación Especializados</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Selecciona qué tipos de pruebas deseas recibir para certificar tu nivel técnico.
            </p>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox"
                  checked={evalMethods.practicalProjects}
                  onChange={(e) => setEvalMethods({ ...evalMethods, practicalProjects: e.target.checked })}
                />
                Proyectos prácticos con código
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox"
                  checked={evalMethods.multipleChoice}
                  onChange={(e) => setEvalMethods({ ...evalMethods, multipleChoice: e.target.checked })}
                />
                Exámenes de opción múltiple
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox"
                  checked={evalMethods.timeChallenges}
                  onChange={(e) => setEvalMethods({ ...evalMethods, timeChallenges: e.target.checked })}
                />
                Retos con tiempo límite
              </label>
            </div>
          </div>
        )}

        <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '12px 32px' }}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}