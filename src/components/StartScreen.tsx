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
      const userInfo: UserInfo = {
        goal: selectedGoal,
        difficulty: selectedDifficulty,
        experience: selectedExperience
      };
      onStart(userInfo);
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

        <div className="form-group">
          <label>Ағылшын үйренуде мақсатыңыз</label>
          <div className="options-container">
            {goals.map((goal, index) => (
              <div
                key={index}
                className={`option ${selectedGoal === goal ? 'selected' : ''}`}
                onClick={() => setSelectedGoal(goal)}
              >
                <input
                  type="radio"
                  name="goal"
                  value={goal}
                  checked={selectedGoal === goal}
                  onChange={() => setSelectedGoal(goal)}
                />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Қиындық деңгейі</label>
          <div className="options-container">
            {difficulties.map((difficulty, index) => (
              <div
                key={index}
                className={`option ${selectedDifficulty === difficulty ? 'selected' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                <input
                  type="radio"
                  name="difficulty"
                  value={difficulty}
                  checked={selectedDifficulty === difficulty}
                  onChange={() => setSelectedDifficulty(difficulty)}
                />
                <span>{difficulty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Тәжірибе деңгейі</label>
          <div className="options-container">
            {experienceLevels.map((experience, index) => (
              <div
                key={index}
                className={`option ${selectedExperience === experience ? 'selected' : ''}`}
                onClick={() => setSelectedExperience(experience)}
              >
                <input
                  type="radio"
                  name="experience"
                  value={experience}
                  checked={selectedExperience === experience}
                  onChange={() => setSelectedExperience(experience)}
                />
                <span>{experience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="start-button">
        <button 
          onClick={handleStart}
          disabled={!isFormComplete}
        >
          Тестті бастау
        </button>
      </div>
    </div>
  );
};

export default StartScreen; 