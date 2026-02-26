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
// Importa otros componentes cuando los crees:
// import Servicios from './components/Servicios';
// import Contacto from './components/Contacto';
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

// Componente para la página Servicios (cuando la crees)
// const PaginaServicios = () => (
//   <>
//     <Servicios />
//   </>
// );

// Componente para la página Contacto (cuando la crees)
// const PaginaContacto = () => (
//   <>
//     <Contacto />
//   </>
// );

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
        <Header /> {/* Header visible en todas las páginas */}
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/inicio" element={<PaginaInicio />} />
          <Route path="/nosotros" element={<PaginaNosotros />} />
          {/* <Route path="/servicios" element={<PaginaServicios />} /> */}
          {/* <Route path="/contacto" element={<PaginaContacto />} /> */}
          {/* <Route path="/eventos" element={<PaginaEventos />} /> */}
        </Routes>
        <Footer /> {/* Footer visible en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;