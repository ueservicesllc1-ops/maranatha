import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { HelpCircle, ChevronDown, ChevronUp, MapPin, Phone, MessageSquare, Heart, Users } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchFaqs = async () => {
      try {
        const q = query(collection(db, 'faqs'), orderBy('createdAt', 'asc'));
        const querySnapshot = await getDocs(q);
        const faqList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        if (faqList.length > 0) {
          setFaqs(faqList);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <header className="page-header">
        <div className="container">
          <span className="section-label">{t('faq.label')}</span>
          <h1>{t('faq.title')}</h1>
          <p>{t('faq.subtitle')}</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container max-width-800">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <div className="flex align-center gap-15">
                    {faq.icon || <HelpCircle className="color-primary" size={20} />}
                    <span>{faq.question}</span>
                  </div>
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-more-help mt-60 text-center p-40 border-radius-15 bg-light shadow-sm">
            <HelpCircle size={48} className="color-accent mb-20" />
            <h3>{t('faq.not_found')}</h3>
            <p className="mb-20">{t('faq.not_found_desc')}</p>
            <div className="flex justify-center gap-20 flex-mobile-column">
              <a href="/#contact" className="btn-primary">{t('faq.send_message')}</a>
              <a href="tel:+11234567890" className="btn-primary-outline">{t('faq.call_now')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
