import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Clock, ChevronRight, Share2 } from 'lucide-react';

const Events = () => {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, 'events'), orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        const eventList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        if (eventList.length > 0) {
          setEvents(eventList);
        } else {
          // Fallback demo events
          setEvents([
            {
              id: '1',
              title: 'Gran Conferencia Misionera',
              date: '2026-04-15',
              time: '19:00',
              location: 'Auditorio Central Maranatha',
              description: 'Un tiempo especial para compartir la visión misionera global y los alcances que estamos teniendo en todo el mundo.',
              image: 'https://images.unsplash.com/photo-1511112181181-041aa3073059?auto=format&fit=crop&w=800&q=80',
              category: 'Conferencia'
            },
            {
              id: '2',
              title: 'Vigilia de Oración y Avivamiento',
              date: '2026-04-20',
              time: '21:00',
              location: 'Sala de Intercesión',
              description: 'Únete a nosotros en una noche de búsqueda intensa de la presencia de Dios y oración por las naciones.',
              image: 'https://images.unsplash.com/photo-1444464666168-49d633b86747?auto=format&fit=crop&w=800&q=80',
              category: 'Oración'
            },
            {
              id: '3',
              title: 'Taller para Líderes de Jóvenes',
              date: '2026-05-02',
              time: '09:00',
              location: 'Centro de Capacitación',
              description: 'Capacitación intensiva para aquellos que trabajan con las nuevas generaciones, brindando herramientas bíblicas y prácticas.',
              image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80',
              category: 'Taller'
            }
          ]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="events-page">
      <header className="page-header">
        <div className="container">
          <span className="section-label">Actividades</span>
          <h1>Próximos Eventos</h1>
          <p>Mantente al tanto de nuestros próximos encuentros, conferencias y reuniones especiales.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div className="text-center py-40">Cargando eventos...</div>
          ) : (
            <div className="events-grid grid md-grid-2 lg-grid-3 gap-30">
              {events.map(event => (
                <div key={event.id} className="event-card shadow-sm">
                  <div className="event-image">
                    <img src={event.image || '/images/hero1.png'} alt={event.title} />
                    <div className="event-category-badge">{event.category}</div>
                  </div>
                  <div className="event-content">
                    <div className="event-date-pill">
                      <Calendar size={14} />
                      {formatDate(event.date)}
                    </div>
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p>{event.description}</p>
                    <div className="event-actions">
                      <button className="btn-link">
                        SABER MÁS <ChevronRight size={16} />
                      </button>
                      <button className="share-btn-icon"><Share2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {events.length === 0 && !loading && (
            <div className="text-center py-60 bg-light border-radius-15">
              <Calendar size={48} className="opacity-20 mb-20" />
              <h3>No hay eventos programados</h3>
              <p>Por el momento no tenemos eventos registrados. ¡Vuelve pronto!</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Service Alert */}
      <section className="service-alert bg-primary text-white py-40">
        <div className="container flex align-center justify-between flex-mobile-column gap-20 text-center-mobile">
          <div>
            <h2 className="mb-0" style={{color: 'white'}}>¿Eres nuevo en Maranatha?</h2>
            <p className="opacity-80 mb-0">Nos encantaría conocerte en nuestro próximo servicio dominical.</p>
          </div>
          <a href="/#contact" className="btn-accent">PLANEA TU VISITA</a>
        </div>
      </section>
    </div>
  );
};

export default Events;
