import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Coaches />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;