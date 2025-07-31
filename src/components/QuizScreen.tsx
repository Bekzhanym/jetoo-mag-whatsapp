import React, { useState } from 'react';
import { questions } from '../data/questions';
import type { UserInfo } from '../data/questions';
import Logo from './Logo';
import Instagram from './Instagram';
import './QuizScreen.css';

interface QuizScreenProps {
  userInfo: UserInfo;
  onComplete: (score: number, correctAnswers: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      // Проверяем правильность ответа
      const currentQ = questions[currentQuestion];
      if (selectedAnswer === currentQ.correctAnswerIndex) {
        setScore(score + currentQ.points);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowNextButton(false);
      } else {
        // Тест завершен
        const correctAnswers = newAnswers.filter((answer, index) => 
          answer === questions[index].correctAnswerIndex
        ).length;
        onComplete(score + (selectedAnswer === currentQ.correctAnswerIndex ? currentQ.points : 0), correctAnswers);
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
      <Instagram size="medium" />
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
            <h2 className="question-text">{currentQ.question}</h2>
            <p className="question-hint">Бір жауапты таңдаңыз</p>
          </div>

          <div className="answers-section">
            {currentQ.options.map((option, index) => (
              <div
                key={index}
                className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="answer-radio">
                  <div className={`radio-circle ${selectedAnswer === index ? 'selected' : ''}`}></div>
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