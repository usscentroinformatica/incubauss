import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VerticalLines from './components/VerticalLines';
import AlliesSection from './components/AlliesSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <VerticalLines />
      <AlliesSection />      
      {/* Aquí irán el resto de secciones: VerticalLines, AlliesSection, ContactForm, Footer */}
    </div>
  );
}

export default App;