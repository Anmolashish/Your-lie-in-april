"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './Jagjeet_App.css';

const EpisodeCardCarousel = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Function to generate episode URL based on episode ID
  const getEpisodeUrl = (episodeId) => {
    const baseUrl = "https://hianime.sx/watch/your-lie-in-april-31";
    const episodeMapping = {
      1: 926,   // Episode 1 -> ?ep=926
      2: 927,   // Episode 2 -> ?ep=927
      3: 928,   // And so on...
      4: 929,
      5: 930,
      6: 931,
      7: 932,
      8: 933,
      9: 934,
      10: 935,
      11: 936,
      12: 937,
      13: 938,
      14: 939,
      15: 940,
      16: 941,
      17: 942,
      18: 943,
      19: 944,
      20: 945,
      21: 946,
      22: 947
    };
    return `${baseUrl}?ep=${episodeMapping[episodeId]}`;
  };

  useEffect(() => {
    if (cards.length > 0) setIsLoading(false);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [cards]);

  const nextCard = () => {
    if (cards.length === 0) return;
    const step = isMobile ? 1 : 2;
    setCurrentIndex(prev => (prev + step >= cards.length ? 0 : prev + step));
  };

  const prevCard = () => {
    if (cards.length === 0) return;
    const step = isMobile ? 1 : 2;
    setCurrentIndex(prev => (prev - step < 0 ? cards.length - (cards.length % step || step) : prev - step));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    trackMouse: true
  });

  const currentCards = cards.length > 0 ? 
    cards.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)) : [];

  if (isLoading) return (
    <motion.div 
      className="carousel-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="loading-message">🎵 Loading Melodies...</div>
    </motion.div>
  );

  if (cards.length === 0) return (
    <div className="carousel-container">
      <div className="empty-message">🎹 No Episodes Available</div>
    </div>
  );

  return (
    <div {...handlers} className="carousel-container">
      <motion.h2 
        className="carousel-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Every Note, Every Tear: 
      </motion.h2>
      <motion.h4 
        className="carousel-title-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The Full Collection
      </motion.h4>

      <div className="carousel-wrapper">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            className="carousel-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {currentCards.map((card) => (
              <a 
                key={card.id}
                href={getEpisodeUrl(card.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <motion.div 
                  className="card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="image-container">
                    <img 
                      src={card.image} 
                      alt={`episode_${card.id}`} 
                      className="gradient-border"
                    />
                    <div className="episode-overlay">{card.episode}</div>
                  </div>
                  
                  <div className="content">
                    <div className="meta-info">
                      <span className="date">{card.date}</span>
                      <div className="progress-dots">
                        {cards.map((_, idx) => (
                          <span 
                            key={idx}
                            className={`dot ${idx === currentIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <motion.h3 className="heading">{card.heading}</motion.h3>
                    <p className="intro">{card.intro}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <motion.button 
          onClick={prevCard} 
          className="carousel-button prev"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="arrow">‹</span>
        </motion.button>
        
        <span className="slide-indicator">
          {Math.floor(currentIndex / (isMobile ? 1 : 2)) + 1} / 
          {Math.ceil(cards.length / (isMobile ? 1 : 2))}
        </span>
        
        <motion.button 
          onClick={nextCard} 
          className="carousel-button next"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="arrow">›</span>
        </motion.button>
      </div>
    </div>
  );
};
export default EpisodeCardCarousel;