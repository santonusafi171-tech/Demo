import React from 'react';
import { SectionId } from '../types';
import { MENU_ITEMS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Specials: React.FC = () => {
  const specialItems = MENU_ITEMS.filter(item => item.isSpecial);

  return (
    <section id={SectionId.SPECIALS} className="py-24 bg-charcoal-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Recommended</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3">Chef's Specials</h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 150}>
              <div 
                className="group relative overflow-hidden bg-charcoal-800 border border-charcoal-700 hover-card-physics h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-charcoal-900 text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                    Special
                  </div>
                </div>
                
                <div className="p-8 text-center relative z-10">
                  <h3 className="text-2xl font-serif mb-3 text-white group-hover:text-gold-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                  <span className="inline-block px-4 py-2 border border-gold-500/30 rounded text-xl text-gold-500 font-bold group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-all duration-300">
                    {item.price}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;