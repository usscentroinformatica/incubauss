import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Importar las páginas/componentes
import HeroSection from './components/HeroSection';
import VerticalLines from './components/VerticalLines';
import AlliesSection from './components/AlliesSection';
import EnviarMensaje from './components/enviarmensaje';
import Nosotros from './components/nosotros';
import Servicios from './components/servicios';
import Contacto from './components/contacto'; // ← DESCOMENTADO (verifica el nombre exacto)
// import Eventos from './components/Eventos';

// Componente para la página de Inicio (todas las secciones juntas)
const PaginaInicio = () => (
  <>
    <HeroSection />
    <VerticalLines />
    <AlliesSection />
    <EnviarMensaje />
  </>
);

// Componente para la página Nosotros
const PaginaNosotros = () => (
  <>
    <Nosotros />
  </>
);

const PaginaServicios = () => (
   <>
    <Servicios />
  </>
);

// Componente para la página Contacto
const PaginaContacto = () => (
  <>
    <Contacto />
  </>
);

// Componente para la página Eventos (cuando la crees)
// const PaginaEventos = () => (
//   <>
//     <Eventos />
//   </>
// );

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/inicio" element={<PaginaInicio />} />
          <Route path="/nosotros" element={<PaginaNosotros />} />
          <Route path="/servicios" element={<PaginaServicios />} />
          <Route path="/contacto" element={<PaginaContacto />} /> {/* ← DESCOMENTADO */}
          {/* <Route path="/eventos" element={<PaginaEventos />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;