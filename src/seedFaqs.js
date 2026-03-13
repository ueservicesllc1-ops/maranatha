import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, serverTimestamp } from 'firebase/firestore';

const demoFaqs = [
  {
    question: "¿Dónde está ubicada la iglesia?",
    answer: "Nuestra iglesia central se encuentra en 33/CTWats Sec- Ody, 20300. Contamos con un amplio estacionamiento y estamos ubicados en una zona de fácil acceso para toda la comunidad."
  },
  {
    question: "¿Cómo puedo contactar a un pastor para ayuda espiritual?",
    answer: "Si necesitas consejería o apoyo espiritual, puedes llamarnos al +1 (123) 456-7890 o escribirnos a info@maranathamission.org. También puedes acercarte al finalizar cualquier servicio dominical y nuestro equipo de ujieres te guiará con gusto."
  },
  {
    question: "¿Cuáles son los horarios de los servicios?",
    answer: "Nuestros servicios principales son los Domingos a las 10:00 AM y 6:00 PM. También tenemos reuniones de oración y estudio bíblico los Miércoles a las 7:30 PM."
  },
  {
    question: "¿Tienen programas para niños y jóvenes?",
    answer: "¡Sí! Creemos que las nuevas generaciones son fundamentales. Contamos con la 'Escuela de Zion' para niños de 3 a 12 años y el grupo 'Maranatha Youth' para adolescentes y jóvenes, con actividades diseñadas específicamente para ellos."
  },
  {
    question: "¿Cómo puedo involucrarme como voluntario?",
    answer: "¡Nos encantaría que te unas a nuestro equipo! Puedes buscar el botón de 'Participar' en nuestra página de inicio para llenar el formulario de voluntarios, o hablarnos directamente en la iglesia sobre tus dones y talentos."
  },
  {
    question: "¿Cómo puedo enviar una petición de oración?",
    answer: "Puedes enviar tus peticiones de oración a través de nuestro formulario de contacto en el sitio web o dejarlas en el buzón de peticiones que se encuentra en el vestíbulo de la iglesia. Oramos por cada petición en nuestras reuniones de intercesión."
  }
];

const seedFaqs = async () => {
  try {
    const q = query(collection(db, 'faqs'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Seeding demo FAQs...");
      for (const faq of demoFaqs) {
        await addDoc(collection(db, 'faqs'), {
          ...faq,
          createdAt: serverTimestamp()
        });
      }
      console.log("Seeding complete!");
    } else {
      console.log("FAQs collection is not empty. Skipping seeding.");
    }
  } catch (error) {
    console.error("Error seeding FAQs:", error);
  }
};

seedFaqs();
