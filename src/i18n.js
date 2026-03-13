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
        "events": "Events",
        "contact": "Contact",
        "login": "Login",
        "register": "Register"
      },
      "hero": {
        "label": "WORLD MISSION MARANATHA",
        "title": "Spread the Gospel to Every Creature",
        "cta": "GET INVOLVED"
      },
      "highlights": {
        "mission_desc": "Learn about our mission to spread the gospel globally",
        "sermons_desc": "Watch or listen to our latest sermons and teachings",
        "events": "Upcoming Events",
        "events_desc": "Join us for our upcoming events and outreach programs."
      },
      "about": {
        "label": "ABOUT US",
        "title": "A Life Dedicated to Mission",
        "p1": "World Mission Maranatha is a global organization dedicated to bringing the message of hope and salvation to all corners of the world.",
        "p2": "Through our programs and missions, we work to transform lives and communities through the power of the Gospel.",
        "learn_more": "LEARN MORE"
      },
      "cta": {
        "title": "JOIN US IN SPREADING THE GOOD NEWS OF JESUS CHRIST"
      },
      "contact": {
        "label": "CONTACT",
        "title": "GET IN TOUCH",
        "desc": "Have questions or want to learn more about our ministry? We'd love to hear from you.",
        "call": "Call Us",
        "email": "Email",
        "location": "Location",
        "form": {
          "name": "Full Name",
          "name_placeholder": "Your Name",
          "email": "Email Address",
          "subject": "Subject",
          "subject_placeholder": "How can we help?",
          "message": "Message",
          "message_placeholder": "Your message here...",
          "send": "SEND MESSAGE"
        }
      },
      "features": {
        "outreach": "GLOBAL OUTREACH",
        "outreach_desc": "Sharing the gospel worldwide",
        "biblical": "BIBLICAL TEACHING",
        "biblical_desc": "Preaching God's Word faithfully",
        "community": "COMMUNITY SUPPORT",
        "community_desc": "Helping the needy and brokenhearted"
      },
      "footer": {
        "minister": "MINISTRY",
        "resources": "RESOURCES",
        "support": "SUPPORT",
        "rights": "All Rights Reserved.",
        "developed_by": "Developed and Powered by Freedom Labs",
        "links": {
          "mission": "Mission & Vision",
          "who": "Who We Are",
          "team": "Our Team",
          "events": "Events",
          "donations": "Donations",
          "privacy": "Privacy Policy",
          "faq": "FAQ"
        }
      },
      "sermons": {
        "title": "SERMONS",
        "subtitle": "Spiritual resources for your growth",
        "filter_all": "All",
        "pastor": "Pastor"
      },
      "gallery": {
        "title": "MOMENTS IN COMMUNITY",
        "label": "GALLERY",
        "desc": "Capturing special moments of our missionary work and community."
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
        "events": "Eventos",
        "contact": "Contacto",
        "login": "Ingresar",
        "register": "Registro"
      },
      "hero": {
        "label": "MISIÓN MUNDIAL MARANATHA",
        "title": "Llevad el Evangelio a Toda Criatura",
        "cta": "PARTICIPAR"
      },
      "highlights": {
        "mission_desc": "Conoce nuestra misión de llevar el evangelio a todo el mundo",
        "sermons_desc": "Mira o escucha nuestros últimos sermones y enseñanzas",
        "events": "Próximos Eventos",
        "events_desc": "Únete a nuestros próximos eventos y programas de alcance."
      },
      "about": {
        "label": "QUIÉNES SOMOS",
        "title": "Una Vida Dedicada a la Misión",
        "p1": "Misión Mundial Maranatha es una organización global dedicada a llevar el mensaje de esperanza y salvación a todos los rincones del mundo.",
        "p2": "A través de nuestros programas y misiones, trabajamos para transformar vidas y comunidades mediante el poder del Evangelio.",
        "learn_more": "SABER MÁS"
      },
      "cta": {
        "title": "ÚNETE A NOSOTROS PARA DIFUNDIR LAS BUENAS NUEVAS DE JESUCRISTO"
      },
      "contact": {
        "label": "CONTACTO",
        "title": "PONTE EN CONTACTO",
        "desc": "¿Tienes preguntas o quieres saber más sobre nuestro ministerio? Nos encantaría escucharte.",
        "call": "Llámanos",
        "email": "Correo",
        "location": "Ubicación",
        "form": {
          "name": "Nombre Completo",
          "name_placeholder": "Tu Nombre",
          "email": "Correo Electrónico",
          "subject": "Asunto",
          "subject_placeholder": "¿En qué podemos ayudarte?",
          "message": "Mensaje",
          "message_placeholder": "Tu mensaje aquí...",
          "send": "ENVIAR MENSAJE"
        }
      },
      "features": {
        "outreach": "ALCANCE GLOBAL",
        "outreach_desc": "Compartiendo el evangelio en todo el mundo",
        "biblical": "ENSEÑANZA BÍBLICA",
        "biblical_desc": "Predicando la Palabra de Dios fielmente",
        "community": "APOYO COMUNITARIO",
        "community_desc": "Ayudando a los necesitados y desconsolados"
      },
      "footer": {
        "minister": "MINISTERIO",
        "resources": "RECURSOS",
        "support": "SOPORTE",
        "rights": "Todos los derechos reservados.",
        "developed_by": "Desarrollado y Potenciado por Freedom Labs",
        "links": {
          "mission": "Misión y Visión",
          "who": "Quiénes Somos",
          "team": "Nuestro Equipo",
          "events": "Eventos",
          "donations": "Donaciones",
          "privacy": "Política de Privacidad",
          "faq": "Preguntas Frecuentes"
        }
      },
      "sermons": {
        "title": "SERMONES",
        "subtitle": "Recursos espirituales para tu crecimiento",
        "filter_all": "Todos",
        "pastor": "Pastor"
      },
      "gallery": {
        "title": "MOMENTOS EN COMUNIDAD",
        "label": "GALERÍA",
        "desc": "Capturando momentos especiales de nuestra obra misionera y comunidad."
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
