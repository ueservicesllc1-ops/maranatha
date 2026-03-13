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
        "register": "Register",
        "lang_code": "en"
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
      "events": {
        "label": "Activities",
        "title": "Upcoming Events",
        "subtitle": "Stay informed about our upcoming meetings, conferences and special gatherings.",
        "loading": "Loading events...",
        "read_more": "READ MORE",
        "no_events": "No events scheduled",
        "no_events_desc": "At the moment we have no registered events. Come back soon!",
        "new_here": "Are you new to Maranatha?",
        "new_here_desc": "We would love to meet you at our next Sunday service.",
        "plan_visit": "PLAN YOUR VISIT"
      },
      "faq": {
        "label": "Help",
        "title": "Frequently Asked Questions",
        "subtitle": "Find answers to the most common questions about our community.",
        "not_found": "Didn't find what you were looking for?",
        "not_found_desc": "We are here to help you with whatever you need. Do not hesitate to contact us directly.",
        "send_message": "Send Message",
        "call_now": "Call Now"
      },
      "privacy": {
        "label": "Legal",
        "title": "Privacy Policy",
        "subtitle": "Committed to protecting your information and our spiritual mission.",
        "p1": "At Maranatha World Mission, we value and respect the privacy of every member of our community, visitors and collaborators. This Privacy Policy describes how we collect, use and share your personal information when you interact with us through our website, religious services and ministerial activities.",
        "s1_title": "1. Our Ethical Commitment",
        "s1_p": "As a Christian ministry, we handle your information with integrity and respect. We do not sell or rent your personal data to third parties. Your trust is fundamental to our spiritual work.",
        "s2_title": "2. Information We Collect",
        "s2_p": "We collect information that you directly provide to us when:",
        "s2_l1": "You register for events or membership.",
        "s2_l2": "You send prayer requests (these are handled with strict ministerial confidentiality).",
        "s2_l3": "You make donations or tithes through secure platforms.",
        "s2_l4": "You sign up as a volunteer in our various ministries.",
        "s3_title": "3. Use of Image and Multimedia",
        "s3_p": "During our services and public events, we may capture photos or videos for use on our social media, live streams and ministry promotion materials. If you do not wish to be included in this material, please let our reception staff know.",
        "s4_title": "4. Data Security",
        "s4_p": "We implement technical and organizational security measures to protect your personal data against unauthorized access, loss or alteration. Financial transactions are processed through certified payment service providers with bank-level encryption.",
        "s5_title": "5. Minors",
        "s5_p": "The privacy of children is a priority. We do not collect personal information from children under 13 without the explicit consent of their parents or legal guardians.",
        "s6_title": "6. Your Rights",
        "s6_p": "You have the right to access, correct or request the deletion of your personal data. To exercise these rights, you can contact us through the means indicated in our contact section.",
        "questions": "Do you have questions about this policy?",
        "questions_desc": "We are here to clarify any doubt about how we take care of your information in the ministry.",
        "contact_btn": "Contact Administration"
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
        "register": "Registro",
        "lang_code": "es"
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
      "events": {
        "label": "Actividades",
        "title": "Próximos Eventos",
        "subtitle": "Mantente al tanto de nuestros próximos encuentros, conferencias y reuniones especiales.",
        "loading": "Cargando eventos...",
        "read_more": "SABER MÁS",
        "no_events": "No hay eventos programados",
        "no_events_desc": "Por el momento no tenemos eventos registrados. ¡Vuelve pronto!",
        "new_here": "¿Eres nuevo en Maranatha?",
        "new_here_desc": "Nos encantaría conocerte en nuestro próximo servicio dominical.",
        "plan_visit": "PLANEA TU VISITA"
      },
      "faq": {
        "label": "Ayuda",
        "title": "Preguntas Frecuentes",
        "subtitle": "Encuentra respuestas a las dudas más comunes sobre nuestra comunidad.",
        "not_found": "¿No encontraste lo que buscabas?",
        "not_found_desc": "Estamos aquí para ayudarte en lo que necesites. No dudes en contactarnos directamente.",
        "send_message": "Enviar Mensaje",
        "call_now": "Llamar Ahora"
      },
      "privacy": {
        "label": "Legal",
        "title": "Política de Privacidad",
        "subtitle": "Comprometidos con la protección de tu información y nuestra misión espiritual.",
        "p1": "En Maranatha World Mission, valoramos y respetamos la privacidad de cada miembro de nuestra comunidad, visitantes y colaboradores. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información personal cuando interactúa con nosotros a través de nuestro sitio web, servicios religiosos y actividades ministeriales.",
        "s1_title": "1. Nuestro Compromiso Ético",
        "s1_p": "Como ministerio cristiano, manejamos su información con integridad y respeto. No vendemos ni alquilamos sus datos personales a terceros. Su confianza es fundamental para nuestra labor espiritual.",
        "s2_title": "2. Información que Recopilamos",
        "s2_p": "Recopilamos información que usted nos proporciona directamente cuando:",
        "s2_l1": "Se registra para eventos o membresía.",
        "s2_l2": "Envía peticiones de oración (estas se manejan con estricta confidencialidad ministerial).",
        "s2_l3": "Realiza donaciones o diezmos a través de plataformas seguras.",
        "s2_l4": "Se inscribe como voluntario en nuestros diversos ministerios.",
        "s3_title": "3. Uso de Imagen y Multimedia",
        "s3_p": "Durante nuestros servicios y eventos públicos, podemos capturar fotos o videos para uso en nuestras redes sociales, transmisiones en vivo y materiales de promoción del ministerio. Si usted no desea ser incluido en este material, por favor comuníquelo a nuestro personal de recepción.",
        "s4_title": "4. Seguridad de los Datos",
        "s4_p": "Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Las transacciones financieras se procesan a través de proveedores de servicios de pago certificados con encriptación de nivel bancario.",
        "s5_title": "5. Menores de Edad",
        "s5_p": "La privacidad de los niños es prioritaria. No recopilamos información personal de menores de 13 años sin el consentimiento explícito de sus padres o tutores legales.",
        "s6_title": "6. Sus Derechos",
        "s6_p": "Usted tiene derecho a acceder, corregir o solicitar la eliminación de sus datos personales. Para ejercer estos derechos, puede contactarnos a través de los medios indicativos en nuestra sección de contacto.",
        "questions": "¿Tiene preguntas sobre esta política?",
        "questions_desc": "Estamos aquí para aclararle cualquier duda sobre cómo cuidamos de su información en el ministerio.",
        "contact_btn": "Contactar con la Administración"
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
