import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Music } from 'lucide-react';

const ministries = [
  {
    icon: <Users className="w-8 h-8" />,
    name: 'Escuela Dominical',
    desc: 'Formando el corazón de los más pequeños con valores eternos y fe.',
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: 'Alabanza y Adoración',
    desc: 'Exaltando el nombre de Dios a través de la excelencia musical.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    name: 'Misiones Mundiales',
    desc: 'Cumpliendo la gran comisión en todas las naciones del mundo.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    name: 'Acción Social',
    desc: 'Siendo las manos y pies de Jesús para los más necesitados hoy.',
  }
];

const Ministries = () => {
  return (
    <section id="ministerios" className="section-padding bg-[#F5F6F8]">
      <div className="container mx-auto">
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#343A6B] mb-6"
          >
            Nuestros Ministerios
          </motion.h2>
          <div className="w-20 h-1 bg-[#9A9A9A] mx-auto mb-6"></div>
          <p className="text-[#9A9A9A] max-w-2xl mx-auto text-lg font-medium">
            Descubre cómo puedes involucrarte y servir a Dios a través de nuestras diversas áreas de ministerio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {ministries.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="text-[#343A6B] group-hover:text-[#9A9A9A] transition-colors mb-6">
                {m.icon}
              </div>
              <h3 className="text-xl font-bold text-[#343A6B] mb-4 uppercase tracking-tight">{m.name}</h3>
              <p className="text-[#9A9A9A] leading-relaxed text-sm">
                {m.desc}
              </p>
              <button className="mt-8 text-[#343A6B] font-bold text-xs tracking-widest uppercase hover:text-[#9A9A9A] transition-colors">
                MÁS DETALLES —
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
