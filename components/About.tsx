import React from 'react';
import { SectionId } from '../types';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <ScrollReveal>
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-gold-500 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Chef plating food" 
                className="relative z-10 w-full h-auto shadow-xl"
              />
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2">
            <ScrollReveal delay={200}>
              <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3 mb-6">
                The Art of Flavor
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
                Established in 2015, Urban Spoon Bistro was born from a passion to merge traditional culinary techniques with modern innovation. Our philosophy is simple: source the finest local ingredients and let them shine.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
                Under the guidance of Executive Chef Antoine Mercier, our kitchen transforms simple components into gastronomic masterpieces. Whether you are here for a romantic evening or a celebratory feast, we promise an unforgettable experience.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="flex items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Chef Antoine" 
                  className="w-16 h-16 rounded-full border-2 border-gold-500 grayscale"
                />
                <div>
                  <p className="font-serif text-xl text-charcoal-900">Antoine Mercier</p>
                  <p className="text-xs text-gold-500 tracking-widest uppercase">Executive Chef</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;