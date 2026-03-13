import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')));
        const imagesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (imagesList.length > 0) setImages(imagesList);
        else setImages([
          { id: 1, url: "https://images.unsplash.com/photo-1544427920-c49ccfb85579", title: "Servicio Dominical" },
          { id: 2, url: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3", title: "Misión Global" },
          { id: 3, url: "https://images.unsplash.com/photo-1444464666168-49d633b86747", title: "Oración" },
          { id: 4, url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94", title: "Adoración" },
          { id: 5, url: "https://images.unsplash.com/photo-1511112181181-041aa3073059", title: "Comunidad" },
          { id: 6, url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", title: "Enseñanza" }
        ]);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <span className="section-label" style={{color: '#C5A46D'}}>{t('gallery.label')}</span>
          <h1 style={{fontSize: '42px'}}>{t('gallery.title')}</h1>
          <p style={{opacity: 0.8, maxWidth: '600px', margin: '20px auto'}}>
            {t('gallery.desc')}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-grid">
          {images.map(img => (
            <div key={img.id} className="gallery-item">
              <img src={img.url} alt={img.title || "Gallery Image"} />
              <div className="gallery-overlay">
                <ImageIcon size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
