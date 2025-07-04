// src/components/home/Hero/Hero.tsx
import { useState, useEffect, FC } from 'react';
import './Hero.css';

interface HeroData {
  header: string;
  subtitle: string;
  buttonLabel: string;
  image: string;
  stats: {
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    stat3: { label: string; value: string };
  };
}

const Hero: FC = () => {
  const [heroData, setHeroData] = useState<HeroData>({
    header: 'Build Your Future, Start at Home',
    subtitle: 'Turn your dream of owning a home into a reality with our housing loan.',
    buttonLabel: 'Apply for a housing',
    image: '/home/hero/hero-image.jpg',
    stats: {
      stat1: { label: 'Families supported', value: '12,500' },
      stat2: { label: 'Loans granted', value: '$420M' },
      stat3: { label: 'Satisfaction rate', value: '96%' },
    },
  });
  const [activeHero, setActiveHero] = useState(true);

  useEffect(() => {
    const heroDataArray: HeroData[] = [
      {
        header: 'Government Housing Projects',
        subtitle: 'Government-backed housing projects designed to meet your needs.',
        buttonLabel: 'Explore Government Projects',
        image: '/home/hero/government-projects.jpg',
        stats: {
          stat1: { label: 'Active projects', value: '30' },
          stat2: { label: 'Homes built', value: '6,800' },
          stat3: { label: 'Regions covered', value: '7' },
        },
      },
      {
        header: 'Lebanese Landscape with Homes',
        subtitle: 'Explore housing solutions across cities, towns, and villages.',
        buttonLabel: 'Find a Loan for Your Region',
        image: '/home/hero/lebanese-landscape.jpg',
        stats: {
          stat1: { label: 'Locations served', value: '1,250' },
          stat2: { label: 'Developer partners', value: '110' },
          stat3: { label: 'National coverage', value: '100%' },
        },
      },
      {
        header: 'Inclusive – Young & Elderly',
        subtitle: "Whether you're just starting out or planning for retirement, we're here for you.",
        buttonLabel: 'See Loan Options for You',
        image: '/home/hero/inclusive.jpg',
        stats: {
          stat1: { label: 'Senior applicants', value: '3,100' },
          stat2: { label: 'Over 55 age group', value: '52%' },
          stat3: { label: 'Public sector borrowers', value: '9,300' },
        },
      },
      {
        header: 'Build Your Future, Start at Home',
        subtitle: 'Turn your dream of owning a home into a reality with our housing loan.',
        buttonLabel: 'Apply for a housing',
        image: '/home/hero/hero-image.jpg',
        stats: {
          stat1: { label: 'Families supported', value: '12,500' },
          stat2: { label: 'Loans granted', value: '$420M' },
          stat3: { label: 'Satisfaction rate', value: '96%' },
        },
      },
    ];

    const interval = setInterval(() => {
      setActiveHero(false);
      setTimeout(() => {
        setHeroData(heroDataArray[Math.floor(Math.random() * heroDataArray.length)]);
        setActiveHero(true);
      }, 290); // Wait for 0.7 seconds before showing the new hero
    }, 4000); // Change the hero content every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className={`hero-container ${activeHero ? 'active' : ''}`}>
        <h1 className="hero-title">{heroData.header}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>
        
        <div className="hero-image-container">
          <img 
            src={heroData.image} 
            alt="Housing" 
            className="hero-image"
          />
        </div>

        <div className="loan-banner">
          <div className="loan-text">{heroData.buttonLabel}</div>
          <span className="loan-icon"></span>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{heroData.stats.stat1.value}</div>
            <div className="stat-label">{heroData.stats.stat1.label}</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">{heroData.stats.stat2.value}</div>
            <div className="stat-label">{heroData.stats.stat2.label}</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">{heroData.stats.stat3.value}</div>
            <div className="stat-label">{heroData.stats.stat3.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;