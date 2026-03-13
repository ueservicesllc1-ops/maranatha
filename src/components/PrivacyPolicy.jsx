import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, FileText, Users, Image as ImageIcon } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <header className="page-header">
        <div className="container">
          <span className="section-label">{t('privacy.label')}</span>
          <h1>{t('privacy.title')}</h1>
          <p>{t('privacy.subtitle')}</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container max-width-800">
          <div className="policy-intro mb-40">
            <p>{t('privacy.p1')}</p>
          </div>

          <div className="policy-grid grid gap-40">
            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <Shield size={24} className="color-primary" />
                </div>
                <h3>{t('privacy.s1_title')}</h3>
              </div>
              <p>{t('privacy.s1_p')}</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <Eye size={24} className="color-accent" />
                </div>
                <h3>{t('privacy.s2_title')}</h3>
              </div>
              <p>{t('privacy.s2_p')}</p>
              <ul className="policy-list">
                <li>{t('privacy.s2_l1')}</li>
                <li>{t('privacy.s2_l2')}</li>
                <li>{t('privacy.s2_l3')}</li>
                <li>{t('privacy.s2_l4')}</li>
              </ul>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <ImageIcon size={24} className="color-primary" />
                </div>
                <h3>{t('privacy.s3_title')}</h3>
              </div>
              <p>{t('privacy.s3_p')}</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <Lock size={24} className="color-accent" />
                </div>
                <h3>{t('privacy.s4_title')}</h3>
              </div>
              <p>{t('privacy.s4_p')}</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-primary-light">
                  <Users size={24} className="color-primary" />
                </div>
                <h3>{t('privacy.s5_title')}</h3>
              </div>
              <p>{t('privacy.s5_p')}</p>
            </div>

            <div className="policy-item">
              <div className="flex align-center gap-15 mb-15">
                <div className="icon-box-sm bg-accent-light">
                  <FileText size={24} className="color-accent" />
                </div>
                <h3>{t('privacy.s6_title')}</h3>
              </div>
              <p>{t('privacy.s6_p')}</p>
            </div>
          </div>

          <div className="policy-footer mt-60 text-center p-30 border-radius-15 bg-light">
            <h4>{t('privacy.questions')}</h4>
            <p className="mb-20">{t('privacy.questions_desc')}</p>
            <a href="mailto:info@maranathamission.org" className="btn-primary">{t('privacy.contact_btn')}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
