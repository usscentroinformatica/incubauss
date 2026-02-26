import React from 'react';
import { MdHealthAndSafety, MdComputer, MdOutlineBusinessCenter, MdPeople, MdSchool } from 'react-icons/md';
import { GiProgression, GiGrowth, GiAchievement } from 'react-icons/gi';

const VerticalLines = () => {
  const lines = [
    { name: 'Salud', icon: MdHealthAndSafety },
    { name: 'Tecnología', icon: MdComputer },
    { name: 'Empresarial', icon: MdOutlineBusinessCenter },
    { name: 'Social', icon: MdPeople },
    { name: 'Educación', icon: MdSchool }
  ];
  
  // Colores principales
  const moradoPrincipal = '#3F3D99';
  const verdePrincipal = '#10b981';
  
  const phases = [
    {
      title: 'PRE INCUBACIÓN',
      icon: GiProgression,
      headerColor: '#0d9488', // Verde
      bodyColor: `${moradoPrincipal}08`, // Morado con 8% de opacidad
      accentColor: moradoPrincipal
    },
    {
      title: 'INCUBACIÓN',
      icon: GiGrowth,
      headerColor: '#059669', // Verde más intenso
      bodyColor: `${verdePrincipal}08`, // Verde con 8% de opacidad
      accentColor: verdePrincipal
    },
    {
      title: 'POST INCUBACIÓN',
      icon: GiAchievement,
      headerColor: moradoPrincipal, // Morado principal
      bodyColor: `${moradoPrincipal}08`, // Morado con 8% de opacidad
      accentColor: moradoPrincipal
    }
  ];

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
        
        {/* CARDS DE LAS 3 FASES */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '100px',
        }}>
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={index}
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 35px 60px -15px ${phase.headerColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
              >
                {/* CABECERA */}
                <div style={{
                  background: phase.headerColor,
                  padding: '24px 20px',
                  textAlign: 'center',
                  borderBottom: '4px solid rgba(255, 255, 255, 0.2)',
                }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    margin: 0,
                    color: 'white',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {phase.title}
                  </h3>
                </div>

                {/* CUERPO */}
                <div style={{
                  background: phase.bodyColor,
                  padding: '50px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  minHeight: '280px',
                }}>
                  {/* Elementos decorativos */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '80px',
                    height: '80px',
                    background: `radial-gradient(circle, ${phase.accentColor}15, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 0
                  }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    width: '100px',
                    height: '100px',
                    background: `radial-gradient(circle, ${phase.accentColor}10, transparent 70%)`,
                    borderRadius: '50%',
                    zIndex: 0
                  }}></div>

                  {/* Ícono */}
                  <div style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${phase.accentColor}, ${phase.headerColor})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: `0 20px 35px -10px ${phase.accentColor}80`,
                    border: '4px solid white',
                    margin: 'auto',
                  }}>
                    <IconComponent style={{
                      fontSize: '4rem',
                      color: 'white',
                    }} />
                  </div>

                  {/* Número de fase */}
                  <span style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '25px',
                    fontSize: '5rem',
                    fontWeight: 700,
                    color: phase.accentColor,
                    opacity: 0.1,
                    zIndex: 0,
                    fontFamily: "'Inter', monospace",
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BANNER CON LATERALES TRANSPARENTES - TEXTO EN BLANCO */}
        <div style={{
          width: '100%',
          maxWidth: '900px',
          height: '120px',
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
              Líneas verticales de{' '}
              <span style={{
                display: 'inline-block',
                fontWeight: 900,
                borderBottom: `3px solid ${verdePrincipal}`,
                paddingBottom: '4px'
              }}>
                INCUBA
              </span>
            </h2>
          </div>
        </div>

        {/* LÍNEAS VERTICALES CON ÍCONOS DE REACT ICONS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
        }}>
          {lines.map((line, index) => {
            const IconComponent = line.icon;
            const isGreen = index % 2 === 0;
            const bgColor = isGreen ? verdePrincipal : moradoPrincipal;
            const hoverColor = isGreen ? '#059669' : '#2D2B6E'; // Morado más oscuro
            
            return (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '30px 15px 25px 15px',
                  background: bgColor,
                  borderRadius: '24px',
                  boxShadow: `0 15px 30px -10px ${bgColor}80`,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 25px 40px -12px ${bgColor}`;
                  e.currentTarget.style.background = hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 15px 30px -10px ${bgColor}80`;
                  e.currentTarget.style.background = bgColor;
                }}
              >
                {/* Barra superior decorativa */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '20%',
                  right: '20%',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                  opacity: 0.5,
                }}></div>

                {/* Círculos decorativos de fondo */}
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>

                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  width: '50px',
                  height: '50px',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>

                {/* Contenedor del ícono */}
                <div style={{
                  marginBottom: '15px',
                  position: 'relative',
                  zIndex: 1,
                  display: 'inline-block',
                  padding: '12px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                }}>
                  <IconComponent style={{
                    fontSize: '2.5rem',
                    color: 'white',
                  }} />
                </div>

                {/* Título */}
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  margin: '10px 0 0 0',
                  color: 'white',
                  letterSpacing: '-0.01em',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {line.name}
                </h4>

                {/* Elementos decorativos */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '15px',
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  width: '12px',
                  height: '12px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '4px',
                  transform: 'rotate(45deg)',
                  zIndex: 0
                }}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          
          div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            max-width: 450px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          div[style*="padding: 50px 30px"] {
            padding: 40px 25px !important;
            min-height: 240px !important;
          }
          
          div[style*="width: '140px'"] {
            width: 120px !important;
            height: 120px !important;
          }
          
          h3 {
            font-size: 1.4rem !important;
          }
          
          div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          
          div[style*="height: '120px'"] {
            height: 100px !important;
            max-width: 95% !important;
          }
        }
        
        @media (max-width: 680px) {
          div[style*="white-space: nowrap"] h2 {
            white-space: normal !important;
            font-size: 1.2rem !important;
            line-height: 1.3 !important;
          }
          
          div[style*="height: '120px'"] {
            height: auto !important;
            min-height: 80px !important;
            padding: 15px 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="width: '140px'"] {
            width: 110px !important;
            height: 110px !important;
          }
          
          div[style*="backgroundSize: '30px 30px'"] {
            background-size: 20px 20px !important;
          }
          
          div[style*="backgroundSize: '8px 8px'"] {
            background-size: 6px 6px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VerticalLines;