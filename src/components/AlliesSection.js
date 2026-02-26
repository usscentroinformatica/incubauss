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

        {/* GRID DE ALIADOS - 13 LOGOS EN ORDEN ESPECÍFICO */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginTop: '20px',
        }}>
          {allies.map((ally, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px 20px',
                boxShadow: `0 10px 30px -8px ${verdePrincipal}80`,
                border: `2px solid ${verdePrincipal}`,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '140px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                // Si es la última tarjeta (índice 12) y estamos en desktop, la centramos
                ...(index === 12 && {
                  gridColumn: '2 / 3', // La coloca en la columna del medio
                }),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 20px 40px -12px ${moradoPrincipal}`;
                e.currentTarget.style.borderColor = moradoPrincipal;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 10px 30px -8px ${verdePrincipal}80`;
                e.currentTarget.style.borderColor = verdePrincipal;
              }}
            >
              {/* Elemento decorativo en la esquina */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '40px',
                height: '40px',
                background: `radial-gradient(circle, ${verdePrincipal}10, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '-10px',
                width: '40px',
                height: '40px',
                background: `radial-gradient(circle, ${moradoPrincipal}10, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              {/* Logo del aliado */}
              <img 
                src={ally.image} 
                alt={ally.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          /* En tablets, la última tarjeta se centra en su fila de 2 columnas */
          div[key="12"] {
            grid-column: 1 / -1 !important;
            max-width: 50% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="height: '100px'"] {
            height: 80px !important;
            max-width: 90% !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
          
          div[style*="min-height: '140px'"] {
            min-height: 120px !important;
            padding: 20px !important;
          }
          
          img {
            max-height: 80px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          /* En móviles, la última tarjeta ocupa todo el ancho normal */
          div[key="12"] {
            grid-column: auto !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          div[style*="height: '100px'"] {
            height: 70px !important;
          }
          
          h2 {
            font-size: 1.2rem !important;
          }
          
          div[style*="backgroundSize: '30px 30px'"] {
            background-size: 20px 20px !important;
          }
          
          div[style*="backgroundSize: '8px 8px'"] {
            background-size: 6px 6px !important;
          }
          
          div[style*="min-height: '140px'"] {
            min-height: 100px !important;
          }
          
          img {
            max-height: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AlliesSection;