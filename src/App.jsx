import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Sermons from './components/Sermons';
import AdminDashboard from './components/AdminDashboard';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import Events from './components/Events';
import { Globe2, PlusSquare, Calendar, BookOpen, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      
      {/* Three Highlight Cards */}
      <section className="highlights">
        <div className="container grid md-grid-3">
          <div className="highlight-card">
            <div className="card-icon">
              <Globe2 size={32} color="#1F2346" />
            </div>
            <div className="card-content">
              <h3>{t('nav.mission')}</h3>
              <p>Learn about our mission to spread the gospel globally</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="card-icon">
              <PlusSquare size={32} color="#C5A46D" />
            </div>
            <div className="card-content">
              <h3>{t('nav.sermons')}</h3>
              <p>Watch or listen to our latest sermons and teachings</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="card-icon">
              <Calendar size={32} color="#1F2346" />
            </div>
            <div className="card-content">
              <h3>Upcoming Events</h3>
              <p>Join us for our upcoming events and outreach programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" id="about">
        <div className="container grid md-grid-2 align-center gap-60">
          <div className="about-text">
            <span className="section-label">{t('about.label')}</span>
            <h2 className="title-large">{t('about.title')}</h2>
            <p className="description">
              {t('about.p1')} {t('about.p2')}
            </p>
            <button className="btn-primary-outline">LEARN MORE</button>
          </div>
          <div className="about-image">
            <img src="/images/church_modern_exterior_1773427949943.png" alt="Church Building" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>JOIN US IN SPREADING THE GOOD NEWS OF JESUS CHRIST</h2>
          <button className="btn-accent">{t('hero.cta')}</button>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="home-carousel">
        <div className="container text-center">
          <span className="section-label">{t('gallery.label')}</span>
          <h2 className="title-large">{t('gallery.title')}</h2>
          <div className="mt-40">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <SwiperSlide key={i}>
                  <img src={`https://images.unsplash.com/photo-${i === 1 ? '1544427920-c49ccfb85579' : i === 2 ? '1438232992991-995b7058bbb3' : i === 3 ? '1444464666168-49d633b86747' : i === 4 ? '1490730141103-6cac27aaab94' : '1511112181181-041aa3073059'}?auto=format&fit=crop&w=800&q=80`} alt="Gallery" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">{t('nav.contact')}</span>
              <h2>GET IN TOUCH</h2>
              <p>Have questions or want to learn more about our ministry? We'd love to hear from you.</p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon"><Phone size={20} /></div>
                  <div>
                    <h4 style={{marginBottom: '5px', fontSize: '14px'}}>Call Us</h4>
                    <p style={{margin: 0, fontSize: '14px', opacity: 0.8}}>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"><Mail size={20} /></div>
                  <div>
                    <h4 style={{marginBottom: '5px', fontSize: '14px'}}>Email</h4>
                    <p style={{margin: 0, fontSize: '14px', opacity: 0.8}}>info@maranathamission.org</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon"><MapPin size={20} /></div>
                  <div>
                    <h4 style={{marginBottom: '5px', fontSize: '14px'}}>Location</h4>
                    <p style={{margin: 0, fontSize: '14px', opacity: 0.8}}>33/CTWats Sec- Ody, 20300 - 43256</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="grid md-grid-2 gap-20">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" className="form-control" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" placeholder="Your message here..."></textarea>
                </div>
                <button type="button" className="btn-primary" style={{width: '100%'}}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Features */}
      <section className="service-features section-padding">
        <div className="container grid md-grid-3 text-center gap-40">
          <div className="service-item">
            <div className="service-icon-wrapper">
              <Globe2 size={48} color="#1F2346" className="opacity-70" />
            </div>
            <h4>GLOBAL OUTREACH</h4>
            <p>Sharing the gospel worldwide</p>
          </div>
          <div className="service-item">
            <div className="service-icon-wrapper">
              <BookOpen size={48} color="#1F2346" className="opacity-70" />
            </div>
            <h4>BIBLICAL TEACHING</h4>
            <p>Preaching God's Word faithfully</p>
          </div>
          <div className="service-item">
            <div className="service-icon-wrapper">
              <Heart size={48} color="#1F2346" className="opacity-70" />
            </div>
            <h4>COMMUNITY SUPPORT</h4>
            <p>Helping the needy and brokenhearted</p>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sermones" element={<Sermons />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
