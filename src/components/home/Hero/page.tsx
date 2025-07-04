// src/components/home/Hero/Hero.tsx
import { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Build Your Future, Start at Home</h1>
        <p className="hero-subtitle">
          Turn your dream of owning a home into a reality with our housing loan.
        </p>
        
        <div className="hero-image-container">
          <img 
            src="/home/hero/hero-image.jpg" 
            alt="Housing" 
            className="hero-image"
          />
        </div>

        <div className="loan-banner">
          <div className="loan-text">Apply for a housing</div>
          <span className="loan-icon"></span>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">12,500</div>
            <div className="stat-label">Families supported</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">$420M</div>
            <div className="stat-label">Loans granted</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">96%</div>
            <div className="stat-label">Satisfaction rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;