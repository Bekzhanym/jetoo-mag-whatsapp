import React from 'react';
import './ResultScreen.css';
import WhatsAppIcon from './WhatsAppIcon';

interface ResultScreenProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  categoryResults: { [category: string]: { correct: number; total: number } };
  onGetBonus: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  correctAnswers,
  totalQuestions,
  categoryResults,
  onGetBonus
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const handleBonusClick = () => {
    onGetBonus();
  };

  return (
    <div className="result-screen">
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
              <h2 className="level-title">Тест аяқталды!</h2>
              <p className="level-description">Сіз {correctAnswers} сұраққа дұрыс жауап бердіңіз</p>
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

          <div className="category-results">
            <h3 className="category-title">Нәтижелер бойынша бөлімдер:</h3>
            {Object.entries(categoryResults).map(([category, result]) => {
              const categoryPercentage = Math.round((result.correct / result.total) * 100);
              return (
                <div key={category} className="category-item">
                  <div className="category-name">{category}</div>
                  <div className="category-stats">
                    <span className="category-score">{result.correct}/{result.total}</span>
                    <span className="category-percentage">({categoryPercentage}%)</span>
                  </div>
                  <div className="category-progress">
                    <div 
                      className="category-progress-fill" 
                      style={{ width: `${categoryPercentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bonus-section">
            <p className="bonus-description">
            Құттықтаймыз! Сіз деңгейлік тест тапсыру арқылы курсымызға 20% жеңілдік ұтып алдыңыз!
            </p>
            <button className="bonus-button" onClick={handleBonusClick}>
              <span className="bonus-icon"><WhatsAppIcon size={22} color="white" /></span>
              Толығырақ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen; 