import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Luxury Restaurant Food Spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-gold-500 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-[fadeIn_1s_ease-out]">
          Experience Fine Dining
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight animate-[fadeIn_1.5s_ease-out]">
          Where Taste <br/> Meets Elegance
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-[fadeIn_2s_ease-out]">
          A culinary journey crafted by master chefs using the finest seasonal ingredients in an atmosphere of sophisticated luxury.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-[fadeIn_2.5s_ease-out]">
          <a 
            href={`#${SectionId.MENU}`}
            onClick={(e) => handleSmoothScroll(e, `#${SectionId.MENU}`)}
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-charcoal-900 transition-all duration-300 uppercase tracking-widest text-sm font-semibold cursor-pointer"
          >
            View Menu
          </a>
          <a 
            href={`#${SectionId.RESERVATION}`}
            onClick={(e) => handleSmoothScroll(e, `#${SectionId.RESERVATION}`)}
            className="px-8 py-3 bg-gold-500 border border-gold-500 text-white hover:bg-gold-600 hover:border-gold-600 transition-all duration-300 uppercase tracking-widest text-sm font-semibold shadow-lg shadow-gold-500/30 cursor-pointer"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;