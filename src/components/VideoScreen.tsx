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
      case "Upper-intermediate":
        return "Upper-intermediate деңгейі үшін бонустық сабақ";
      case "Intermediate":
        return "Intermediate деңгейі үшін бонустық сабақ";
      case "Pre-intermediate":
        return "Pre-intermediate деңгейі үшін бонустық сабақ";
      case "Elementary":
        return "Elementary деңгейі үшін бонустық сабақ";
      case "Beginner":
        return "Beginner деңгейі үшін бонустық сабақ";
      default:
        return "Бонустық сабақ";
    }
  };

  const getVideoDescription = (level: string) => {
    switch (level) {
      case "Upper-intermediate":
        return "Күрделі грамматикалық құрылымдар мен кәсіби ағылшын тілін үйреніңіз.";
      case "Intermediate":
        return "Орташа деңгейдегі грамматика мен сөйлесу дағдыларын дамытыңыз.";
      case "Pre-intermediate":
        return "Негізгі грамматикалық ережелер мен сөздік қорын кеңейтіңіз.";
      case "Elementary":
        return "Бастапқы грамматика мен күнделікті сөйлесу дағдыларын үйреніңіз.";
      case "Beginner":
        return "Ағылшын тілінің негіздерін және қарапайым сөйлесу дағдыларын үйреніңіз.";
      default:
        return "Сіздің деңгейіңізге арналған арнайы сабақ.";
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
      <div className="video-container">
        <div className="video-header">
          <Logo size="medium" />
          <h1 className="video-title">Бонустық сабақ</h1>
        </div>

        <div className="video-content">
          <div className="video-info">
            <h2 className="level-title">{getVideoTitle(level)}</h2>
            <p className="video-description">{getVideoDescription(level)}</p>
          </div>

          <div className="video-player">
            {videoUrl ? (
              <div className="video-wrapper">
                <iframe
                  src={videoUrl}
                  title={`${level} бонустық сабақ`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={handleVideoLoad}
                  className="video-iframe"
                ></iframe>
                {!isVideoLoaded && (
                  <div className="video-loading">
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                    <p className="video-placeholder-text">Видео жүктелуде...</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="video-placeholder">
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
                <p className="video-placeholder-text">Видео қолжетімді емес</p>
              </div>
            )}
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

          <div className="video-actions">
            <button className="back-button" onClick={onBack}>
              ← Нәтижеге қайту
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen; 