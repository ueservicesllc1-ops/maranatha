import React from 'react';
import { BookOpen, Calendar, Globe } from 'lucide-react';

const Features = () => {
  const items = [
    {
      title: 'Our Mission',
      desc: 'Learn about our mission to spread the gospel globally',
      icon: <Globe className="w-10 h-10 text-[#343A6B]" />
    },
    {
      title: 'Latest Sermons',
      desc: 'Watch or listen to our latest sermons and teachings',
      icon: <BookOpen className="w-10 h-10 text-[#343A6B]" />
    },
    {
      title: 'Upcoming Events',
      desc: 'Join us for our upcoming events and outreach programs',
      icon: <Calendar className="w-10 h-10 text-[#343A6B]" />
    }
  ];

  return (
    <section className="bg-[#F5F7FA] border-y border-gray-100">
      <div className="container mx-auto grid md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className={`flex items-start gap-6 p-12 ${i !== 2 ? 'md:border-r border-gray-200' : ''}`}>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-[14px] leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
