import React from 'react';
import { Play, Calendar, User } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

const Sermons = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState('All');
  const [sermonsList, setSermonsList] = React.useState([
    {
      id: 1,
      title: "La Importancia de la Fe",
      date: "12 Mar, 2026",
      year: "2026",
      speaker: "Pastor Juan Pérez",
      category: "Fe",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Caminando en Amor",
      date: "05 Mar, 2026",
      year: "2026",
      speaker: "Pastora María García",
      category: "Amor",
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]);

  React.useEffect(() => {
    const fetchSermons = async () => {
      try {
        const sermonsCol = collection(db, 'sermons');
        const q = query(sermonsCol, orderBy('date', 'desc'));
        const sermonSnapshot = await getDocs(q);
        const fetchedList = sermonSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        if (fetchedList.length > 0) {
          setSermonsList(fetchedList);
        }
      } catch (error) {
        console.error("Error fetching sermons from Firestore:", error);
      }
    };

    fetchSermons();
  }, []);

  const filteredSermons = filter === 'All' 
    ? sermonsList 
    : sermonsList.filter(s => s.year === filter);

  return (
    <div className="sermons-page">
      <div className="page-header">
        <div className="container">
          <span className="section-label" style={{color: '#C5A46D'}}>{t('nav.sermons')}</span>
          <h1 style={{fontSize: '42px'}}>{t('sermons.title')}</h1>
          <p style={{opacity: 0.8, maxWidth: '600px', margin: '20px auto'}}>
            {t('sermons.subtitle')}
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="sermon-filters">
            <button 
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              {t('sermons.filter_all')}
            </button>
            <button 
              className={`filter-btn ${filter === '2026' ? 'active' : ''}`}
              onClick={() => setFilter('2026')}
            >
              2026
            </button>
            <button 
              className={`filter-btn ${filter === '2025' ? 'active' : ''}`}
              onClick={() => setFilter('2025')}
            >
              2025
            </button>
          </div>

          <div className="sermons-grid">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="sermon-card">
                <div className="sermon-thumb">
                  <img src={sermon.image} alt={sermon.title} />
                  <div className="play-overlay">
                    <Play size={40} color="white" fill="white" />
                  </div>
                </div>
                <div className="sermon-info">
                  <div className="flex justify-between align-center mb-10">
                    <span className="sermon-date">
                      <Calendar size={14} style={{marginRight: '5px'}} />
                      {sermon.date}
                    </span>
                    <span className="sermon-category">{sermon.category}</span>
                  </div>
                  <h3>{sermon.title}</h3>
                  <p className="sermon-speaker">
                    <User size={14} style={{marginRight: '5px'}} />
                    {sermon.speaker}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
