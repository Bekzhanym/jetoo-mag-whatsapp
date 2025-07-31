import React from 'react';
import { getLevel, getLevelDescription } from '../data/questions';
import type { UserInfo } from '../data/questions';
import Logo from './Logo';
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
      case "Upper-intermediate":
        return "Сіздің ағылшын тіліңіз өте жақсы! Келесі қадам - кәсіби ағылшын тілін дамыту және сертификат алу.";
      case "Intermediate":
        return "Жақсы деңгей! Көбірек тәжірибе жинау үшін ағылшын тілінде сөйлесу тобына қосылыңыз.";
      case "Pre-intermediate":
        return "Орташа деңгей. Грамматиканы күшейту және сөздік қорыңызды кеңейту керек.";
      case "Elementary":
        return "Негізгі деңгей. Көбірек оқу және тәжірибе жинау керек.";
      case "Beginner":
        return "Бастапқы деңгей. Жүйелі оқу және тәжірибе жинау керек.";
      default:
        return "Жалпы ағылшын тілін үйренуге кеңес береміз.";
    }
  };

  return (
    <div className="result-screen">
      <div className="result-container">
        <div className="result-header">
          <Logo size="medium" />
          <h1 className="result-title">Нәтижеңіз</h1>
        </div>

        <div className="result-content">
          <div className="score-section">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-label">балл</div>
            </div>
            <div className="level-info">
              <h2 className="level-title">{level}</h2>
              <p className="level-description">{levelDescription}</p>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-label">Дұрыс жауаптар:</span>
              <span className="stat-value">{correctAnswers}/{totalQuestions}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Пайыз:</span>
              <span className="stat-value">{percentage}%</span>
            </div>
          </div>

          <div className="user-info-section">
            <h3 className="section-title">Сіздің мәліметтеріңіз</h3>
            <div className="info-grid">
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

          <button className="restart-button" onClick={onRestart}>
            Қайта бастау
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen; 