import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <Link to="/">
              <img src="/images/fondo negro.png" alt="Maranatha Logo" className="footer-logo" />
            </Link>
            <div className="footer-info">
              <p className="text-sm opacity-70 mb-2">+1 (123) 456-7890</p>
              <p className="text-sm opacity-70">info@maranathamission.org</p>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.minister')}</h4>
            <div className="footer-nav">
              <a href="#">Misión y Visión</a>
              <a href="#">Quiénes Somos</a>
              <a href="#">Nuestro Equipo</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.resources')}</h4>
            <div className="footer-nav">
              <Link to="/sermones">{t('nav.sermons')}</Link>
              <Link to="/galeria">{t('nav.gallery')}</Link>
              <Link to="/eventos">Eventos</Link>
              <a href="#">Donaciones</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>{t('footer.support')}</h4>
            <div className="footer-nav">
              <a href="/#contact">{t('nav.contact')}</a>
              <Link to="/privacidad">Política de Privacidad</Link>
              <Link to="/faq">Preguntas Frecuentes</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>© 2026 World Mission Maranatha. {t('footer.rights')}</p>
          <a href="https://freedomlabs.dev/" target="_blank" rel="noopener noreferrer" className="developer-attribution">
            Desarrollado y Potenciado por Freedom Labs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
