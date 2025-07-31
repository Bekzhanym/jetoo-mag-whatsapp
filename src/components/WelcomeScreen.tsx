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
          onClick={onStart}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
};

export default WelcomeScreen; 