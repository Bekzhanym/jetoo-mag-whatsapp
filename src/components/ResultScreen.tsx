import React from 'react';
import { getLevel, getLevelDescription } from '../data/questions';
import type { UserInfo } from '../data/questions';
import Logo from './Logo';
import Instagram from './Instagram';
import './ResultScreen.css';

interface ResultScreenProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  userInfo: UserInfo;
  onRestart: () => void;
  onGetBonus: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  correctAnswers,
  totalQuestions,
  userInfo,
  onRestart,
  onGetBonus
}) => {
  const level = getLevel(score);
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const levelDescription = getLevelDescription(level);

  const getRecommendation = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'Бастапқы деңгей. Жүйелі оқу және тәжірибе жинау керек.';
      case 'Elementary':
        return 'Бастапқы деңгей. Негізгі грамматика және сөздік қорын кеңейту керек.';
      case 'Pre-intermediate':
        return 'Орта деңгей. Күрделі грамматика және сөйлеу дағдыларын дамыту керек.';
      case 'Intermediate':
        return 'Жоғары орта деңгей. Кең аудитория алдында сөйлеу және жазу дағдыларын жетілдіру керек.';
      case 'Upper-intermediate':
        return 'Жоғары деңгей. Кәсіби деңгейдегі дағдыларды дамыту керек.';
      default:
        return 'Жүйелі оқу және тәжірибе жинау керек.';
    }
  };

  return (
    <div className="result-screen">
      <Logo size="medium" />
      <Instagram size="medium" />
      <div className="result-container">
        <div className="result-header">
          <h1 className="result-title">Нәтижеңіз</h1>
        </div>

        <div className="result-content">
          <div className="score-section">
            <div className="score-circle">
              {score}
            </div>
            <div className="score-info">
              <h2 className="level-title">{level}</h2>
              <p className="level-description">{levelDescription}</p>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <div className="stat-label">Дұрыс жауаптар</div>
              <div className="stat-value">{correctAnswers}/{totalQuestions}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Пайыз</div>
              <div className="stat-value">{percentage}%</div>
            </div>
          </div>

          <div className="user-info-section">
            <h3 className="section-title">Сіздің ақпаратыңыз</h3>
            <div className="info-item">
              <span className="info-label">Мақсат:</span>
              <span className="info-value">{userInfo.goal}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Қиындық:</span>
              <span className="info-value">{userInfo.difficulty}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Тәжірибе:</span>
              <span className="info-value">{userInfo.experience}</span>
            </div>
          </div>

          <div className="recommendation-section">
            <h3 className="section-title">Ұсыныс</h3>
            <p className="recommendation-text">{getRecommendation(level)}</p>
          </div>

          <div className="bonus-section">
            <h3 className="section-title">Бонустық сыйлық</h3>
            <p className="bonus-description">
              Сіздің деңгейіңізге арналған арнайы видеосабақты тегін алыңыз!
            </p>
            <button className="bonus-button" onClick={onGetBonus}>
              <span className="bonus-icon">🎁</span>
              Бонусты алу
            </button>
          </div>
        </div>
      </div>

      <div className="result-actions">
        <button className="restart-button" onClick={onRestart}>
          Қайта бастау
        </button>
      </div>
    </div>
  );
};

export default ResultScreen; 