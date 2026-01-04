import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'main' | 'desserts' | 'drinks'>('main');

  const categories = [
    { id: 'starters', label: 'Starters' },
    { id: 'main', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id={SectionId.MENU} className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3 mb-12">Our Menu</h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`text-sm uppercase tracking-widest py-2 border-b-2 transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'border-gold-500 text-charcoal-900 font-bold scale-105' 
                    : 'border-transparent text-stone-400 hover:text-gold-500 hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        <div key={activeCategory} className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto text-left">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <div 
                className="group p-4 -mx-4 rounded-lg hover:bg-beige-50 transition-colors duration-500"
              >
                <div className="flex justify-between items-baseline border-b border-dashed border-stone-300 pb-2 mb-2 group-hover:border-gold-300 transition-colors duration-500">
                  <h3 className="text-xl font-serif text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-gold-600 transform group-hover:scale-110 transition-transform duration-300 origin-right">{item.price}</span>
                </div>
                <p className="text-stone-500 font-light italic group-hover:text-stone-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={200}>
          <div className="mt-16">
            <p className="text-stone-400 text-sm">
              * Please inform our staff of any food allergies or dietary restrictions.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Menu;