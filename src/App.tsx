import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import UserForm from './components/UserForm';
import ResultScreen from './components/ResultScreen';
import type { UserInfo } from './data/questions';
import { openWhatsApp, createBonusMessage } from './utils/whatsapp';
import { WHATSAPP_CONFIG } from './config/whatsapp';
import './App.css';

type Screen = 'welcome' | 'quiz' | 'userForm' | 'result';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userInfo] = useState<UserInfo>({
    goal: "ҰБТ-да таңдау пәнім",
    difficulty: "Грамматика үйрену керек",
    experience: "1 жылдан көп"
  });
  const [quizScore, setQuizScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [categoryResults, setCategoryResults] = useState<{ [category: string]: { correct: number; total: number } }>({});

  const handleWelcomeStart = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score: number, correct: number, categoryResults: { [category: string]: { correct: number; total: number } }) => {
    setQuizScore(score);
    setCorrectAnswers(correct);
    setCategoryResults(categoryResults);
    setCurrentScreen('userForm'); // теперь показываем UserForm, а не result
  };

  const handleUserFormSubmit = () => {
    setCurrentScreen('result');
  };

  const handleUserFormBack = () => {
    setCurrentScreen('quiz');
  };

  const handleGetBonus = () => {
    // Создаем сообщение для WhatsApp
    const message = createBonusMessage();
    
    // Открываем WhatsApp с настроенным номером телефона
    openWhatsApp(message, WHATSAPP_CONFIG.phoneNumber);
  };


  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleWelcomeStart} />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          userInfo={userInfo} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {currentScreen === 'userForm' && (
        <UserForm
          onSubmit={handleUserFormSubmit}
          onBack={handleUserFormBack}
          score={quizScore}
          correctAnswers={correctAnswers}
        />
      )}
      
      {currentScreen === 'result' && (
        <ResultScreen
          score={quizScore}
          correctAnswers={correctAnswers}
          totalQuestions={15}
          categoryResults={categoryResults}
          onGetBonus={handleGetBonus}
        />
      )}
      
    </div>
  );
}

export default App;
