import React, { useState } from 'react';
import { goals, difficulties, experienceLevels } from '../data/questions';
import type { UserInfo } from '../data/questions';
import Logo from './Logo';
import './StartScreen.css';

interface StartScreenProps {
  onStart: (userInfo: UserInfo) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedExperience, setSelectedExperience] = useState<string>('');

  const handleStart = () => {
    if (selectedGoal && selectedDifficulty && selectedExperience) {
      onStart({
        goal: selectedGoal,
        difficulty: selectedDifficulty,
        experience: selectedExperience
      });
    }
  };

  const isFormComplete = selectedGoal && selectedDifficulty && selectedExperience;

  return (
    <div className="start-screen">
      <div className="start-container">
        <div className="start-header">
          <Logo size="large" />
          <h1 className="title">Ағылшын тілі деңгейіңізді анықтаңыз</h1>
          <p className="subtitle">12 сұраққа жауап беріп, өзіңіздің деңгейіңізді біліңіз</p>
          <p className="subtitle-2">Тест 5-10 минутқа созылады</p>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label className="subtitle-3">Ағылшын үйренуде мақсатыңыз</label>
            <div className="options-grid">
              {goals.map((goal, index) => (
                <label key={index} className={`option ${selectedGoal === goal ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="goal"
                    value={goal}
                    checked={selectedGoal === goal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="subtitle-3">Тіл үйренуде сізге не қиындықтан тудырады</label>
            <div className="options-grid">
              {difficulties.map((difficulty, index) => (
                <label key={index} className={`option ${selectedDifficulty === difficulty ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="difficulty"
                    value={difficulty}
                    checked={selectedDifficulty === difficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  />
                  <span>{difficulty}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="subtitle-3">Қашаннан бері ағылшын тілін үйреніп жүрсіз?</label>
            <div className="options-grid">
              {experienceLevels.map((experience, index) => (
                <label key={index} className={`option ${selectedExperience === experience ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="experience"
                    value={experience}
                    checked={selectedExperience === experience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                  />
                  <span>{experience}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            className="start-button" 
            onClick={handleStart}
            disabled={!isFormComplete}
          >
            Тестті бастау
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen; 