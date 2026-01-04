import React, { useState } from 'react';
import { SectionId } from '../types';
import ScrollReveal from './ScrollReveal';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => setStatus('success'), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id={SectionId.RESERVATION} className="py-24 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
      <div className="absolute inset-0 bg-charcoal-900/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-white shadow-2xl p-8 md:p-12">
            
            <div className="text-center mb-10">
              <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Book a Table</span>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mt-2">Make a Reservation</h2>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif text-charcoal-900 mb-2">Reservation Confirmed</h3>
                <p className="text-stone-500 mb-8">Thank you, {formData.name}. We look forward to seeing you on {formData.date} at {formData.time}.</p>
                <button onClick={() => setStatus('idle')} className="text-gold-600 font-bold hover:underline text-sm uppercase tracking-wider transition-all hover:text-gold-500">Book Another Table</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="md:col-span-1 group">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-gold-600 transition-colors duration-300">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-all duration-300 bg-transparent font-serif text-lg text-charcoal-900 placeholder-stone-300" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-1 group">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-gold-600 transition-colors duration-300">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-all duration-300 bg-transparent font-serif text-lg text-charcoal-900 placeholder-stone-300" 
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-1 group">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-gold-600 transition-colors duration-300">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-all duration-300 bg-transparent font-serif text-lg text-charcoal-900"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-1 group">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-gold-600 transition-colors duration-300">Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    required 
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-all duration-300 bg-transparent font-serif text-lg text-charcoal-900"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2 group">
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-gold-600 transition-colors duration-300">Guests</label>
                  <select 
                    name="guests" 
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-gold-500 transition-all duration-300 bg-transparent font-serif text-lg text-charcoal-900 cursor-pointer"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8, "8+"].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2 mt-6">
                  <button 
                    type="submit" 
                    className="w-full bg-gold-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-charcoal-900 transition-colors duration-500 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Book Table
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reservation;