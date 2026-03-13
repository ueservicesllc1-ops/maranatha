import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Us",
        "mission": "Mission",
        "sermons": "Sermons",
        "gallery": "Gallery",
        "contact": "Contact",
        "login": "Login",
        "register": "Register"
      },
      "hero": {
        "label": "WORLD MISSION MARANATHA",
        "title": "Spread the Gospel to Every Creature",
        "cta": "GET INVOLVED"
      },
      "about": {
        "label": "ABOUT US",
        "title": "A Life Dedicated to Mission",
        "p1": "World Mission Maranatha is a global organization dedicated to bringing the message of hope and salvation to all corners of the world.",
        "p2": "Through our programs and missions, we work to transform lives and communities through the power of the Gospel."
      },
      "sermons": {
        "title": "SERMONS",
        "subtitle": "Spiritual resources for your growth",
        "filter_all": "All",
        "pastor": "Pastor"
      },
      "gallery": {
        "title": "MOMENTS IN COMMUNITY",
        "label": "GALLERY"
      },
      "footer": {
        "minister": "MINISTRY",
        "resources": "RESOURCES",
        "support": "SUPPORT",
        "rights": "All Rights Reserved."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "home": "Inicio",
        "about": "Nosotros",
        "mission": "Misión",
        "sermons": "Sermones",
        "gallery": "Galería",
        "contact": "Contacto",
        "login": "Ingresar",
        "register": "Registro"
      },
      "hero": {
        "label": "MISIÓN MUNDIAL MARANATHA",
        "title": "Llevad el Evangelio a Toda Criatura",
        "cta": "PARTICIPAR"
      },
      "about": {
        "label": "QUIÉNES SOMOS",
        "title": "Una Vida Dedicada a la Misión",
        "p1": "Misión Mundial Maranatha es una organización global dedicada a llevar el mensaje de esperanza y salvación a todos los rincones del mundo.",
        "p2": "A través de nuestros programas y misiones, trabajamos para transformar vidas y comunidades mediante el poder del Evangelio."
      },
      "sermons": {
        "title": "SERMONES",
        "subtitle": "Recursos espirituales para tu crecimiento",
        "filter_all": "Todos",
        "pastor": "Pastor"
      },
      "gallery": {
        "title": "MOMENTS EN COMUNIDAD",
        "label": "GALERÍA"
      },
      "footer": {
        "minister": "MINISTERIO",
        "resources": "RECURSOS",
        "support": "SOPORTE",
        "rights": "Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
