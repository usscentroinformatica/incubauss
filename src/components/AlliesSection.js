import React from 'react';
import Ulearning from '../assets/img/Ulearning.png';
import LogoHero from '../assets/img/Logo-Hero.png';
import Ecosistema from '../assets/img/ecosistema.png';
import Ministerio from '../assets/img/ministerio.jpeg';
import Tuempresa from '../assets/img/tuempresa.jpeg';
import Wempo from '../assets/img/wempo.png';
import Amazonas from '../assets/img/amazonas.png';
import Colaborativo from '../assets/img/Colaborativo.png';
import AliadosCamara from '../assets/img/Aliados-Camara-de-comercio.png';
import RedImpacto from '../assets/img/Red-de-Impacto-Logo.png';
import Commup from '../assets/img/commup.png';
import Vivehealth from '../assets/img/vivehealth.jpeg';
import Corazon from '../assets/img/corazon.jpg';

const AlliesSection = () => {
  // Array con los 13 logos en el orden especificado
  const allies = [
    { name: 'Ulearning', image: Ulearning },
    { name: 'Logo-Hero', image: LogoHero },
    { name: 'Ecosistema', image: Ecosistema },
    { name: 'Ministerio', image: Ministerio },
    { name: 'Tu Empresa', image: Tuempresa },
    { name: 'Wempo', image: Wempo },
    { name: 'Amazonas', image: Amazonas },
    { name: 'Colaborativo', image: Colaborativo },
    { name: 'Cámara de Comercio', image: AliadosCamara },
    { name: 'Red de Impacto', image: RedImpacto },
    { name: 'Commup', image: Commup },
    { name: 'Vive Health', image: Vivehealth },
    { name: 'Corazón', image: Corazon }
  ];

  // Colores principales (mismos que en VerticalLines)
  const verdePrincipal = '#10b981';
  const moradoPrincipal = '#3F3D99';

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      fontFamily: "'Inter', 'Poppins', -apple-system, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos de fondo sutiles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${verdePrincipal}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${moradoPrincipal}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>

        {/* BANNER DEL TÍTULO */}
        <div style={{
          width: '100%',
          maxWidth: '700px',
          height: '100px',
          position: 'relative',
          margin: '0 auto 50px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Fondo con laterales transparentes degradado verde-morado */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, ${verdePrincipal} 15%, ${moradoPrincipal} 85%, transparent)`,
            zIndex: 1,
          }}></div>

          {/* Cuadrículas y puntos con máscara */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            zIndex: 2,
            opacity: 0.4
          }}></div>

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px',
            maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            zIndex: 3,
            opacity: 0.3
          }}></div>

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)',
            zIndex: 4,
            opacity: 0.5
          }}></div>

          {/* Texto centrado en BLANCO */}
          <div style={{
            position: 'relative',
            zIndex: 5,
            padding: '0 30px',
            whiteSpace: 'nowrap',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'nowrap',
            }}>
              Nuestros aliados
            </h2>
          </div>
        </div>

        {/* CAROUSEL DE ALIADOS - LOGO TICKER INFINITO */}
        <div style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          overflow: 'hidden',
          padding: '20px 0',
        }}>
          <div className="ticker-container" style={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 40s linear infinite',
          }}>
            {/* Duplicamos el array para el efecto infinito */}
            {[...allies, ...allies].map((ally, index) => (
              <div
                key={index}
                className="ally-card"
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  margin: '0 15px',
                  boxShadow: `0 10px 25px -12px rgba(0,0,0,0.15)`,
                  border: `2px solid ${verdePrincipal}40`,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '200px',
                  height: '100px',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <img
                  src={ally.image}
                  alt={ally.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(20%) contrast(90%)',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-container:hover {
          animation-play-state: paused;
        }

        .ally-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px -15px ${moradoPrincipal}50;
          border-color: ${moradoPrincipal};
          border-width: 2px;
          z-index: 10;
        }

        .ally-card:hover img {
          filter: grayscale(0%) contrast(100%);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          div[style*="height: '100px'"] {
            height: 80px !important;
          }
          
          .ally-card {
            width: 160px !important;
            height: 80px !important;
            margin: 0 10px !important;
            padding: 10px 15px !important;
          }

          .ticker-container {
            animation-duration: 30s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AlliesSection;