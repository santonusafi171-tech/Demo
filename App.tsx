import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="font-sans text-charcoal-900">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <Reservation />
        <Testimonials />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;