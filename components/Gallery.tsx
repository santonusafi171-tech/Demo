import React, { useState, useEffect, useCallback } from 'react';
import { SectionId } from '../types';
import { GALLERY_IMAGES } from '../constants';
import ScrollReveal from './ScrollReveal';

// Internal component to handle individual image loading states
const GalleryItem: React.FC<{ 
  image: typeof GALLERY_IMAGES[0]; 
  index: number; 
  onClick: () => void; 
}> = ({ image, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="relative overflow-hidden group cursor-pointer aspect-[4/3] rounded-sm shadow-md bg-stone-200"
      onClick={onClick}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out-expo ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'
        } group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-all duration-300 flex items-center justify-center">
        <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
  }, [selectedIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
  }, [selectedIndex]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id={SectionId.GALLERY} className="py-24 bg-beige-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mt-3">Gallery</h2>
          </ScrollReveal>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 100}>
              <GalleryItem 
                image={image} 
                index={index} 
                onClick={() => openLightbox(index)} 
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-10 text-white/50 hover:text-white hover:scale-110 transition-all p-2"
            onClick={prevImage}
          >
            <svg className="w-10 h-10 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image */}
          <div 
            className="max-w-6xl max-h-[85vh] w-full px-4 md:px-20 relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <img 
              src={GALLERY_IMAGES[selectedIndex].src} 
              alt={GALLERY_IMAGES[selectedIndex].alt} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border-4 border-charcoal-800"
            />
            <p className="text-white mt-4 text-lg font-serif tracking-wide">{GALLERY_IMAGES[selectedIndex].alt}</p>
            <p className="text-stone-400 text-sm uppercase tracking-widest mt-1">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-10 text-white/50 hover:text-white hover:scale-110 transition-all p-2"
            onClick={nextImage}
          >
            <svg className="w-10 h-10 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;