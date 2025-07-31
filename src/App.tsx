import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import VideoScreen from './components/VideoScreen';
import type { UserInfo } from './data/questions';
import { getLevel } from './data/questions';
import './App.css';

type Screen = 'welcome' | 'start' | 'quiz' | 'result' | 'video';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentLevel, setCurrentLevel] = useState<string>('');

  const handleWelcomeStart = () => {
    setCurrentScreen('start');
  };

  const handleStart = (info: UserInfo) => {
    setUserInfo(info);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score: number, correct: number) => {
    setQuizScore(score);
    setCorrectAnswers(correct);
    const level = getLevel(score);
    setCurrentLevel(level);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setUserInfo(null);
    setQuizScore(0);
    setCorrectAnswers(0);
    setCurrentLevel('');
  };

  const handleGetBonus = () => {
    setCurrentScreen('video');
  };

  const handleBackFromVideo = () => {
    setCurrentScreen('result');
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleWelcomeStart} />
      )}
      
      {currentScreen === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      
      {currentScreen === 'quiz' && userInfo && (
        <QuizScreen 
          userInfo={userInfo} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {currentScreen === 'result' && userInfo && (
        <ResultScreen
          score={quizScore}
          correctAnswers={correctAnswers}
          totalQuestions={12}
          userInfo={userInfo}
          onRestart={handleRestart}
          onGetBonus={handleGetBonus}
        />
      )}
      
      {currentScreen === 'video' && (
        <VideoScreen
          level={currentLevel}
          onBack={handleBackFromVideo}
        />
      )}
    </div>
  );
}

export default App;
