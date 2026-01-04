import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10 border-t border-charcoal-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <div className="text-center md:text-left">
             <a href="#" className="text-3xl font-serif font-bold tracking-wider block mb-6">
              URBAN <span className="text-gold-500">SPOON</span>
            </a>
            <p className="text-gray-400 font-light max-w-xs mx-auto md:mx-0 leading-relaxed">
              Fine dining experiences that engage the senses and comfort the soul.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-serif text-gold-500 mb-6">Contact Us</h4>
            <p className="text-gray-400 mb-2">{RESTAURANT_INFO.address}</p>
            <p className="text-gray-400 mb-2">{RESTAURANT_INFO.phone}</p>
            <p className="text-gray-400">{RESTAURANT_INFO.email}</p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-serif text-gold-500 mb-6">Opening Hours</h4>
            <p className="text-gray-400">{RESTAURANT_INFO.hours}</p>
            
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 border border-charcoal-700 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 hover:border-gold-500 transition-all cursor-pointer">
                <span className="font-bold">IG</span>
              </div>
              <div className="w-10 h-10 border border-charcoal-700 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-charcoal-900 hover:border-gold-500 transition-all cursor-pointer">
                <span className="font-bold">FB</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Urban Spoon Bistro. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
