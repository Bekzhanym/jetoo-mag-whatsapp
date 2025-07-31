import React from 'react';
import mobImage from '../assets/mob.jpg';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        <img 
          src={mobImage} 
          alt="JETOO ENGLISH Welcome" 
          className="welcome-image"
          onClick={onStart}
        />
      </div>
    </div>
  );
};

export default WelcomeScreen; 