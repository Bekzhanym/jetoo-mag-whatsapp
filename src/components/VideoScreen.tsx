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

  const getVideoTitle = (level: string) => {
    switch (level) {
      case 'Upper-intermediate':
        return 'Жоғары деңгей - Кәсіби ағылшын тілі';
      case 'Intermediate':
        return 'Орта деңгей - Кең аудитория алдында сөйлеу';
      case 'Pre-intermediate':
        return 'Орта деңгей - Күрделі грамматика';
      case 'Elementary':
        return 'Бастапқы деңгей - Негізгі грамматика';
      case 'Beginner':
        return 'Бастапқы деңгей - Жүйелі оқу';
      default:
        return 'Ағылшын тілі сабағы';
    }
  };

  const getVideoDescription = (level: string) => {
    switch (level) {
      case 'Upper-intermediate':
        return 'Кәсіби деңгейдегі дағдыларды дамытуға арналған арнайы сабақ.';
      case 'Intermediate':
        return 'Кең аудитория алдында сөйлеу және жазу дағдыларын жетілдіру.';
      case 'Pre-intermediate':
        return 'Күрделі грамматика және сөйлеу дағдыларын дамыту.';
      case 'Elementary':
        return 'Негізгі грамматика және сөздік қорын кеңейту.';
      case 'Beginner':
        return 'Жүйелі оқу және тәжірибе жинауға арналған сабақ.';
      default:
        return 'Сіздің деңгейіңізге арналған арнайы сабақ.';
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
          <h1 className="video-title">Бонустық сабақ</h1>
        </div>

        <div className="video-content">
          <div className="video-info">
            <h2 className="level-title">{getVideoTitle(level)}</h2>
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
            <h3 className="section-title">Толық ақпарат алу</h3>
            <p className="contact-description">
              Курстар туралы толық ақпарат алу үшін WhatsApp арқылы байланысыңыз!
            </p>
            <button className="whatsapp-button" onClick={handleWhatsAppContact}>
              <WhatsAppIcon size={24} color="white" />
              WhatsApp арқылы байланысу
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