import React, { useState } from 'react';

export default function ColdStart({ onCompleteColdStart }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    experience: '',
    score: 0,
    objective: '',
    interest: '',
    time: ''
  });

  const totalSteps = 5;

  const handleExperience = (exp) => {
    if (exp === 'No sé nada') {
      // Asigna Principiante directo si no tiene conocimientos previos
      setAnswers(prev => ({ ...prev, experience: exp, score: 0 }));
      setStep(3); // Salta ejercicios técnicos
    } else {
      setAnswers(prev => ({ ...prev, experience: exp }));
      setStep(2);
    }
  };

  const handleTechQuiz = (correct) => {
    setAnswers(prev => ({ ...prev, score: prev.score + (correct ? 1 : 0) }));
    setStep(3);
  };

  const handleObjective = (obj) => {
    setAnswers(prev => ({ ...prev, objective: obj }));
    setStep(4);
  };

  const handleInterest = (interest) => {
    setAnswers(prev => ({ ...prev, interest: interest }));
    setStep(5);
  };

  const handleTime = (time) => {
    const finalAnswers = { ...answers, time };
    
    // Determinación automática del nivel
    let assignedLevel = 'Principiante';
    if (finalAnswers.score >= 4) assignedLevel = 'Avanzado';
    else if (finalAnswers.score >= 2) assignedLevel = 'Intermedio';

    onCompleteColdStart(assignedLevel);
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
      </div>

      {step === 1 && (
        <div>
          <h3>¿Cuál es tu nivel de familiaridad con Python?</h3>
          <div className="quiz-options">
            <button className="option-btn" onClick={() => handleExperience('No sé nada')}>No sé nada</button>
            <button className="option-btn" onClick={() => handleExperience('Apenas inicio')}>Apenas inicio</button>
            <button className="option-btn" onClick={() => handleExperience('Estructuras básicas')}>Conozco estructuras básicas</button>
            <button className="option-btn" onClick={() => handleExperience('Domino POO')}>Domino estructuras complejas (POO)</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Ejercicio de Evaluación Técnica 💻</h3>
          <p><code>x = "5" + "5"<br/>print(x)</code></p>
          <p>¿Cuál es la salida de este código?</p>
          <div className="quiz-options">
            <button className="option-btn" onClick={() => handleTechQuiz(false)}>10</button>
            <button className="option-btn" onClick={() => handleTechQuiz(true)}>"55"</button>
            <button className="option-btn" onClick={() => handleTechQuiz(false)}>Error</button>
            <button className="option-btn" onClick={() => handleTechQuiz(false)}>55 (int)</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>¿Cuál es tu objetivo principal?</h3>
          <div className="quiz-options">
            <button className="option-btn" onClick={() => handleObjective('Aprobar materia')}>Aprobar materias universitarias</button>
            <button className="option-btn" onClick={() => handleObjective('Automatizar')}>Automatizar tareas y cálculos</button>
            <button className="option-btn" onClick={() => handleObjective('Ciencia de datos')}>Análisis de datos</button>
            <button className="option-btn" onClick={() => handleObjective('Curiosidad')}>Pura curiosidad</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>¿Qué tema te interesa aprender primero?</h3>
          <div className="quiz-options">
            <button className="option-btn" onClick={() => handleInterest('Fundamentos')}>Fundamentos de programación</button>
            <button className="option-btn" onClick={() => handleInterest('Estructuras de datos')}>Estructuras de datos (listas, diccionarios)</button>
            <button className="option-btn" onClick={() => handleInterest('POO')}>Programación Orientada a Objetos</button>
            <button className="option-btn" onClick={() => handleInterest('IA')}>Inteligencia Artificial</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>¿Cuánto tiempo diario puedes dedicarle?</h3>
          <div className="quiz-options">
            <button className="option-btn" onClick={() => handleTime('5-10 min')}>5 a 10 minutos al día</button>
            <button className="option-btn" onClick={() => handleTime('1 hora')}>1 hora diaria</button>
            <button className="option-btn" onClick={() => handleTime('Fines de semana')}>Solo fines de semana</button>
          </div>
        </div>
      )}
    </div>
  );
}