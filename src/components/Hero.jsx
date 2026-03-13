import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VolunteerModal from './VolunteerModal';

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="section-label" style={{color: '#C5A46D', letterSpacing: '3px'}}>{t('hero.label')}</span>
            <h1 style={{marginTop: '10px'}}>{t('hero.title')}</h1>
            <p className="hero-schedule" style={{color: 'white', fontSize: '1.2rem', marginTop: '15px', opacity: 0.9, fontWeight: '500'}}>
              {t('hero.schedule')}
            </p>
            <div style={{marginTop: '30px'}}>
              <button 
                className="btn-outline" 
                onClick={() => setIsModalOpen(true)}
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
        <img src="/images/ICONOPNG.png" alt="Icon Background" className="hero-icon-bg" />
      </section>

      <VolunteerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
