import React, { useState } from 'react';
import { videoLinks } from '../data/videos';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import './VideoScreen.css';

interface VideoScreenProps {
  level: string;
  onBack: () => void;
}

const VideoScreen: React.FC<VideoScreenProps> = ({ level, onBack }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const getLevelName = (level: string) => {
    switch (level) {
      case 'Upper-Intermediate':
        return 'UPPER-INTERMEDIATE';
      case 'Intermediate':
        return 'INTERMEDIATE';
      case 'Pre-Intermediate':
        return 'PRE-INTERMEDIATE';
      case 'Elementary':
        return 'ELEMENTARY';
      case 'Beginner':
        return 'BEGINNER';
      default:
        return 'BEGINNER';
    }
  };

  const getVideoTitle = (_level: string) => {
    return '';
  };

  const getVideoDescription = (level: string) => {
    switch (level) {
      case 'Upper-Intermediate':
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
      case 'Intermediate':
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
      case 'Pre-Intermediate':
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
      case 'Elementary':
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
      case 'Beginner':
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
      default:
        return 'Тақырып: Reading, Listening, Speaking & Grammar\nҰзақтығы: 8 минут\n\nСабақты соңына дейін көрген студентерімізге тағы да сыйлығымыз бар 😍';
    }
  };

  const videoUrl = videoLinks[level as keyof typeof videoLinks] || "";

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleWhatsAppContact = () => {
    window.open('https://u.to/gSNSIg', '_blank');
  };

  return (
    <div className="video-screen">
      <Logo size="medium" />
      <div className="video-container">
        <div className="video-header">
          <h1 className="video-title">{getLevelName(level)}</h1>
        </div>

        <div className="video-content">
          <div className="video-info">
            {getVideoTitle(level) && <h2 className="level-title">{getVideoTitle(level)}</h2>}
            <p className="video-description">{getVideoDescription(level)}</p>
          </div>

          <div className="video-player">
            <div className="video-wrapper">
              {!isVideoLoaded && (
                <div className="video-placeholder">
                  <div className="play-button">
                    <span className="play-icon">▶</span>
                  </div>
                  <p className="video-placeholder-text">Видео жүктелуде...</p>
                </div>
              )}
              <iframe
                src={videoUrl}
                title="JETOO ENGLISH Video Lesson"
                className="video-iframe"
                onLoad={handleVideoLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="contact-section">
            <button className="whatsapp-button" onClick={handleWhatsAppContact}>
              <WhatsAppIcon size={24} color="white" />
              МЕНЕДЖЕРМЕН БАЙЛАНЫСУ
            </button>
          </div>
        </div>

        <div className="video-actions">
          <button className="back-button" onClick={onBack}>
            ← Нәтижеге қайту
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen; 