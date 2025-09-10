import React, { useState } from 'react';
import { questions } from '../data/questions';
import type { UserInfo } from '../data/questions';
import Logo from './Logo';
import './QuizScreen.css';

interface QuizScreenProps {
  userInfo: UserInfo;
  onComplete: (score: number, correctAnswers: number, categoryResults: { [category: string]: { correct: number; total: number } }) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleAnswerSelect = (answerKey: string) => {
    setSelectedAnswer(answerKey);
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      // Проверяем правильность ответа
      const currentQ = questions[currentQuestion];
      if (selectedAnswer === currentQ.correct_option) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowNextButton(false);
      } else {
        // Тест завершен - подсчитываем результаты по категориям
        const categoryResults: { [category: string]: { correct: number; total: number } } = {};
        
        questions.forEach((question, index) => {
          const category = question.category;
          if (!categoryResults[category]) {
            categoryResults[category] = { correct: 0, total: 0 };
          }
          categoryResults[category].total += 1;
          if (newAnswers[index] === question.correct_option) {
            categoryResults[category].correct += 1;
          }
        });

        const correctAnswers = newAnswers.filter((answer, index) => 
          answer === questions[index].correct_option
        ).length;
        
        onComplete(score + (selectedAnswer === currentQ.correct_option ? 1 : 0), correctAnswers, categoryResults);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
      setShowNextButton(answers[currentQuestion - 1] !== null);
    }
  };


  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-screen">
      <Logo size="medium" />
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-info">
              Сұрақ {currentQuestion + 1} / {questions.length}
            </div>
          </div>
        </div>

        <div className="quiz-content">
          <div className="question-section">
            <h2 className="question-text">{currentQ.text}</h2>
            <p className="question-hint">Бір жауапты таңдаңыз</p>
          </div>

          <div className="answers-section">
            {Object.entries(currentQ.options).map(([key, option]) => (
              <div
                key={key}
                className={`answer-option ${selectedAnswer === key ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(key)}
              >
                <div className="answer-radio">
                  <div className={`radio-circle ${selectedAnswer === key ? 'selected' : ''}`}></div>
                </div>
                <span className="answer-text">{option}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="quiz-footer">
          <button 
            className="prev-button" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Алдыңғы
          </button>
          <button 
            className="next-button" 
            onClick={handleNext}
            disabled={!showNextButton}
          >
            {currentQuestion === questions.length - 1 ? 'Аяқтау' : 'Келесі'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen; 