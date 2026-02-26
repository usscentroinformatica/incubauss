// components/Contacto.js
import React from 'react';
import imagenContacto from '../assets/imgServicios/Mesa-de-trabajo-77-768x432.png';
import EnviarMensaje from './enviarmensaje'; // Importar el componente de formulario

const Contacto = () => {
  // Colores principales
  const verdePrincipal = '#22c55e';
  const moradoPrincipal = '#3F3D99';

  return (
    <>
      <section
        style={{
          padding: '40px 20px 40px 20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Elementos decorativos de fondo */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${verdePrincipal}10, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${moradoPrincipal}10, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0
        }}></div>

        <div style={{
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          
          {/* Título principal - Contacto */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 50px 0',
            color: moradoPrincipal,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            position: 'relative',
          }}>
            Contacto
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
              borderRadius: '2px',
            }}></div>
          </h1>

          {/* Contenedor de dos columnas - Contacto + Imagen */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'stretch',
            marginBottom: '60px',
          }}>
            
            {/* COLUMNA IZQUIERDA - Información de contacto */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '35px',
              boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
              border: `1px solid ${moradoPrincipal}10`,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {/* Elemento decorativo */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, ${verdePrincipal}10, transparent 70%)`,
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                
                {/* Email */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  marginBottom: '30px',
                }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${verdePrincipal}20, ${moradoPrincipal}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={moradoPrincipal} strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: moradoPrincipal,
                      margin: '0 0 5px 0',
                    }}>
                      Email
                    </h3>
                    <a 
                      href="mailto:incubauss@uss.edu.pe"
                      style={{
                        fontSize: '1rem',
                        color: '#334155',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.color = verdePrincipal}
                      onMouseLeave={(e) => e.target.style.color = '#334155'}
                    >
                      incubauss@uss.edu.pe
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  marginBottom: '30px',
                }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${verdePrincipal}20, ${moradoPrincipal}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={moradoPrincipal} strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: moradoPrincipal,
                      margin: '0 0 5px 0',
                    }}>
                      WhatsApp
                    </h3>
                    <a 
                      href="https://wa.me/51986728883"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        color: '#334155',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.color = verdePrincipal}
                      onMouseLeave={(e) => e.target.style.color = '#334155'}
                    >
                      986 728 883
                    </a>
                  </div>
                </div>

                {/* Llámanos */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${verdePrincipal}20, ${moradoPrincipal}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={moradoPrincipal} strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: moradoPrincipal,
                      margin: '0 0 5px 0',
                    }}>
                      Llámanos
                    </h3>
                    <a 
                      href="tel:51986728883"
                      style={{
                        fontSize: '1rem',
                        color: '#334155',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.color = verdePrincipal}
                      onMouseLeave={(e) => e.target.style.color = '#334155'}
                    >
                      986 728 883
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA - Imagen */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: `0 25px 50px -12px ${moradoPrincipal}50`,
                border: `4px solid white`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img 
                  src={imagenContacto}
                  alt="Contacto INCUBA USS"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>

          {/* SECCIÓN MAPA */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '30px',
            boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
            border: `1px solid ${moradoPrincipal}10`,
            marginTop: '20px',
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: moradoPrincipal,
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}>
              Visítanos en nuestra oficina
            </h2>
            
            <p style={{
              fontSize: '1rem',
              color: '#334155',
              textAlign: 'center',
              margin: '0 0 25px 0',
            }}>
              <strong>Elias Aguirre 933</strong>, Chiclayo - Perú
            </p>

            {/* Mapa de Google Maps */}
            <div style={{
              width: '100%',
              height: '350px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: `0 10px 20px -8px ${moradoPrincipal}30`,
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.084780833837!2d-79.844722!3d-6.771389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceee8c5a28b47%3A0x9b5b5b5b5b5b5b5b!2sElias%20Aguirre%20933%2C%20Chiclayo%2C%20Peru!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación INCUBA USS"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Estilos responsive */}
        <style>{`
          @media (max-width: 968px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            div[style*="max-width: '500px'"] {
              max-width: 100% !important;
            }
          }
          @media (max-width: 768px) {
            h1 { font-size: 2.2rem !important; }
            div[style*="padding: 35px"] { padding: 25px !important; }
            div[style*="height: '350px'"] { height: 300px !important; }
          }
          @media (max-width: 480px) {
            h1 { font-size: 2rem !important; }
            div[style*="height: '350px'"] { height: 250px !important; }
          }
        `}</style>
      </section>

      {/* Componente EnviarMensaje al final */}
      <EnviarMensaje />
    </>
  );
};

export default Contacto;