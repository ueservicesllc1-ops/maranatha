import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VolunteerModal from './VolunteerModal';

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-map-overlay"></div>
        <div className="container">
          <div className="hero-grid-layout">
            <div className="hero-content">
              <h1 className="hero-title-main">{t('hero.title')}</h1>
              <p className="hero-description-main">{t('hero.subtitle')}</p>
              <div className="hero-actions-main">
                <a href="/sermones" className="btn-hero-main">
                  {t('hero.cta')}
                </a>
              </div>
            </div>
            <div className="hero-logo-side">
              <img src="/images/banner-logo.png" alt="Maranatha Logo" className="hero-large-logo" />
            </div>
          </div>
        </div>
      </section>

      <VolunteerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
