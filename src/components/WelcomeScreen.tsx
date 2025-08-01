import React, { useEffect, useState } from 'react';
import mobImage from '../assets/mob.jpg';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Предзагружаем изображение
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = mobImage;
  }, []);

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        {!imageLoaded && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Жүктелуде...</p>
          </div>
        )}
        <img 
          src={mobImage} 
          alt="JETOO ENGLISH Welcome" 
          className={`welcome-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Анимированная кнопка */}
        <div className="animated-button-container">
          <button 
            className="animated-button"
            onClick={onStart}
          >
            <span className="button-text">START</span>
            <span className="button-arrow">GO &gt;</span>
            <div className="pulse-ring"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="pulse-ring pulse-ring-3"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen; 