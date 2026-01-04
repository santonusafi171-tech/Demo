import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { RESTAURANT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', href: `#${SectionId.HOME}` },
    { label: 'About', href: `#${SectionId.ABOUT}` },
    { label: 'Menu', href: `#${SectionId.MENU}` },
    { label: 'Specials', href: `#${SectionId.SPECIALS}` },
    { label: 'Gallery', href: `#${SectionId.GALLERY}` },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href={`#${SectionId.HOME}`} 
          onClick={(e) => handleSmoothScroll(e, `#${SectionId.HOME}`)}
          className="text-2xl font-serif font-bold text-white tracking-wider cursor-pointer"
        >
          URBAN <span className="text-gold-500">SPOON</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`#${SectionId.RESERVATION}`}
            onClick={(e) => handleSmoothScroll(e, `#${SectionId.RESERVATION}`)}
            className="px-5 py-2 border border-gold-500 text-gold-500 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900 absolute w-full border-t border-charcoal-800">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-gray-300 hover:bg-charcoal-800 hover:text-gold-400 uppercase text-xs tracking-widest cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`#${SectionId.RESERVATION}`}
              className="mx-6 mt-4 text-center px-5 py-3 bg-gold-500 text-white uppercase text-xs tracking-widest cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, `#${SectionId.RESERVATION}`)}
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;