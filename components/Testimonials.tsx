import React from 'react';
import { TESTIMONIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3">What Guests Say</h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 150}>
              <div 
                className="bg-white p-8 border-t-4 border-gold-500 hover-card-physics h-full"
              >
                <div className="flex text-gold-500 mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center border-t border-stone-100 pt-6">
                  <div className="w-10 h-10 bg-charcoal-200 rounded-full flex items-center justify-center text-charcoal-600 font-bold font-serif text-lg mr-3 shadow-sm">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-charcoal-900 uppercase tracking-wider text-sm">{t.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;