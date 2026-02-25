import React from 'react';
import backgroundImage from '../assets/img/unnamed.jpg'; // Ajusta la ruta según donde tengas la imagen

const HeroSection = () => {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Efecto parallax suave (opcional)
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* CAPA SUPERPUESTA (OVERLAY) - Para que todo se vea bien */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(46, 204, 113, 0.75) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      ></div>

      {/* Formas orgánicas difuminadas - Iluminación suave (ahora sobre el overlay) */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-100px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.12)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      ></div>
      
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '-150px',
          left: '-50px',
          borderRadius: '50%',
          background: 'rgba(46, 204, 113, 0.15)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      ></div>
      
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '20%',
          left: '15%',
          borderRadius: '50%',
          background: 'rgba(30, 58, 138, 0.2)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      ></div>

      {/* Vignette sutil para profundidad */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      ></div>

      {/* Contenedor principal con dos columnas */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1300px',
          width: '90%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        {/* COLUMNA IZQUIERDA - Texto principal */}
        <div
          style={{
            color: 'white',
            textAlign: 'left',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Sombra extra para legibilidad
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 72px)',
              fontWeight: 700,
              letterSpacing: '2px',
              margin: '0 0 0.25rem 0',
              lineHeight: 1.1,
              color: 'white',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            INCUBA
          </h1>
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 72px)',
              fontWeight: 700,
              letterSpacing: '2px',
              margin: '0 0 1rem 0',
              lineHeight: 1.1,
              color: 'white',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            USS
          </h1>
          
          <p
            style={{
              fontSize: 'clamp(1.3rem, 4vw, 24px)',
              opacity: 0.95,
              margin: '1.5rem 0 2.5rem 0',
              fontWeight: 400,
              letterSpacing: '1px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            Incubadora de emprendimientos
          </p>

          <button
            style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              border: '2px solid transparent',
              padding: '16px 36px',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.4)',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 25px 35px -10px rgba(0, 0, 0, 0.5)';
              e.target.style.backgroundColor = '#27ae60';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 20px 30px -10px rgba(0, 0, 0, 0.4)';
              e.target.style.backgroundColor = '#2ecc71';
            }}
          >
            Conéctate con nosotros
          </button>
        </div>

        {/* COLUMNA DERECHA - Tarjeta con acentos INTEGRADOS */}
        <div
          style={{
            position: 'relative',
          }}
        >
          {/* Tarjeta principal */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              padding: 'clamp(2.5rem, 6vw, 4rem) clamp(2rem, 5vw, 3rem)',
              borderRadius: '48px',
              boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
              textAlign: 'center',
              width: '100%',
              transform: 'translateY(0)',
              animation: 'float 6s ease-in-out infinite',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Línea decorativa superior */}
            <div
              style={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #2ecc71, #1e3a8a)',
                margin: '0 auto 2rem auto',
                borderRadius: '2px',
                opacity: 0.6,
              }}
            ></div>

            {/* Texto de la tarjeta */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#1e293b',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                LAS BUENAS IDEAS NECESITAN
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: '#1e3a8a',
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2ecc71 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                BUENOS PLANES DE NEGOCIOS
              </span>
            </div>

            {/* Línea decorativa inferior */}
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #2ecc71, #1e3a8a, transparent)',
                margin: '2rem auto 0 auto',
                opacity: 0.5,
              }}
            ></div>

            {/* ACENTO GEOMÉTRICO SUPERIOR DERECHA */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                }}
              >
                <path
                  d="M40 2 L40 28 C40 34.627 34.627 40 28 40 L2 40"
                  stroke="#2ecc71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* ACENTO GEOMÉTRICO INFERIOR IZQUIERDA */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '40px',
                height: '40px',
                overflow: 'hidden',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '-2px',
                }}
              >
                <path
                  d="M0 38 L0 12 C0 5.373 5.373 0 12 0 L38 0"
                  stroke="#2ecc71"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Animación y estilos responsive */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          div[style*="textAlign: 'left'"] {
            text-align: center !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="border-radius: 48px"] {
            border-radius: 32px !important;
            padding: 2.5rem 1.5rem !important;
          }
          div[style*="width: '40px'"] {
            width: 30px !important;
            height: 30px !important;
          }
          svg {
            width: 30px !important;
            height: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="border-radius: 48px"] {
            border-radius: 24px !important;
            padding: 2rem 1.25rem !important;
          }
          button {
            padding: 14px 28px !important;
            font-size: 1rem !important;
          }
          div[style*="width: '40px'"] {
            width: 24px !important;
            height: 24px !important;
          }
          svg {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;