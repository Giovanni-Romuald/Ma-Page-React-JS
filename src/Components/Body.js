// Body.js
import React from 'react';
import '../styles/Body.css';
import monLogo from '../images/monLogo.jpeg'

const Body = () => {
  return (
    <div className="body-container">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content-wrapper">
          {/* Partie texte à gauche */}
          <div className="hero-text-content">
            <div className="text-animation-container">
              <h1 className="flaming-text">Ignite Your Learning Adventure:</h1>
              <h2 className="flaming-text-subtitle">Start Today, Enrich Tomorrow's Dreams</h2>
              <p className="hero-description">
                Elevate Learning with More Than Just Lectures: Real-life Experiments, Interactive Workshops, and Joyful Experiences
              </p>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Watching Video</button>
            </div>
          </div>
          
          {/* Partie image à droite */}
          <div className="hero-image-content">
            <div className="image-container">
              <div className="flaming-frame"></div>
              <img 
                src={monLogo} 
                alt="Learning Adventure"
                className="hero-image"
              />
              <div className="blue-flames-overlay"></div>
              
              {/* Électrons en orbite */}
              <div className="electron electron-1"></div>
              <div className="electron electron-2"></div>
              <div className="electron electron-3"></div>
              <div className="electron electron-4"></div>
              <div className="electron electron-5"></div>
              <div className="electron electron-6"></div>
              <div className="electron electron-7"></div>
              <div className="electron electron-8"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;