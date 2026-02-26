// components/Servicios.js
import React from 'react';
import imagenMentoria from '../assets/imgServicios/sistema-mentoria-G-q7mkuvv5hnzr418et6ca40kfloqrjh8xqabmvt1z58.png';
import imagenCapacitacion from '../assets/imgServicios/Capacitacion-G-q7mkud2doza0ntzpuy7qq5b7pzbf9j6azp9xa9tulo.png';
import imagenAsesoramiento from '../assets/imgServicios/Asesoramiento-G-q7mkumgrlbmvvxm2c2a0f2xtnu13ei7mczss31fwvg.png';
import imagenCoworking from '../assets/imgServicios/Coworking-G-q7mku3nzsmx5fqdddu5h17ols4lr4k4zmer2hi7sbw.png';

const Servicios = () => {
  // Colores principales
  const verdePrincipal = '#22c55e';
  const moradoPrincipal = '#3F3D99';

  return (
    <section
      style={{
        padding: '40px 20px 60px 20px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        fontFamily: "'Inter', 'Poppins', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
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
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        
        {/* Título principal - Servicios */}
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
          Servicios
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

        {/* SECCIÓN 1: Mentoría - Imagen derecha, texto izquierda */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Texto */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
            border: `1px solid ${moradoPrincipal}10`,
            position: 'relative',
            overflow: 'hidden',
          }}>
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
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: '0 0 25px 0' }}>
                En <strong style={{color: moradoPrincipal}}>INCUBA USS</strong>, creemos en el poder de la mentoría para impulsar el crecimiento y el éxito de los emprendedores. Es por eso que ofrecemos programas de mentoría personalizados para brindarles el apoyo y la orientación necesarios en su camino emprendedor.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: 0 }}>
                Nuestro sistema de mentoría está diseñado para conectar a emprendedores con profesionales experimentados y exitosos en diferentes áreas de negocio. A través de sesiones individuales y grupales, nuestros mentores comparten sus conocimientos, experiencias y consejos prácticos para ayudar a los emprendedores a superar desafíos, desarrollar habilidades clave y tomar decisiones informadas.
              </p>
            </div>
          </div>
          {/* Imagen */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: `0 25px 50px -12px ${moradoPrincipal}50`,
              border: `4px solid white`,
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={imagenMentoria} alt="Mentoría INCUBA USS" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: Capacitación - Imagen izquierda, texto derecha */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Imagen */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: `0 25px 50px -12px ${moradoPrincipal}50`,
              border: `4px solid white`,
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={imagenCapacitacion} alt="Capacitación INCUBA USS" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          {/* Texto */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
            border: `1px solid ${moradoPrincipal}10`,
            position: 'relative',
            overflow: 'hidden',
          }}>
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
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: '0 0 25px 0' }}>
                En <strong style={{color: moradoPrincipal}}>INCUBA USS</strong>, nos dedicamos a promover la cultura emprendedora y brindar apoyo integral a los emprendedores. Nuestros programas de capacitación se enfocan en fortalecer habilidades clave para el éxito empresarial con el respaldo del portal <strong style={{color: verdePrincipal}}>Ulearning</strong>.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: 0 }}>
                A través de una selección cuidadosa de ideas de negocio, identificamos las áreas en las que cada emprendedor necesita crecer y desarrollarse. Nuestro enfoque se centra en temas fundamentales como liderazgo, trabajo en equipo, desarrollo actitudinal, creatividad e innovación, diseño de modelo de negocio, planificación estratégica, gestión legal y contable, administración financiera, gestión de procesos, diseño de imagen corporativa, protección de la propiedad intelectual y el uso de herramientas de presentación empresarial.
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN 3: Asesoramiento - Imagen derecha, texto izquierda */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Texto */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
            border: `1px solid ${moradoPrincipal}10`,
            position: 'relative',
            overflow: 'hidden',
          }}>
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
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: '0 0 25px 0' }}>
                <strong style={{color: moradoPrincipal}}>INCUBA USS</strong> se enorgullece de ofrecer un sólido programa de asesoramiento empresarial a los emprendedores que forman parte de nuestra incubadora y de la comunidad. Nuestro objetivo principal es brindar el apoyo necesario para impulsar el crecimiento y el éxito de los proyectos empresariales.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: '0 0 25px 0' }}>
                El asesoramiento empresarial personalizado se adapta a las necesidades específicas de cada emprendedor y proyecto. Nuestros asesores brindan apoyo en áreas clave como desarrollo de modelos de negocio, estrategia empresarial, marketing y ventas, gestión financiera, análisis de mercado y planificación estratégica.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: 0 }}>
                En <strong style={{color: moradoPrincipal}}>INCUBA USS</strong>, creemos en el poder de la colaboración y el intercambio de conocimientos. Además del asesoramiento individual, también fomentamos la creación de redes y la colaboración entre emprendedores dentro de nuestra comunidad. Organizamos eventos de networking, sesiones de intercambio de experiencias y actividades de aprendizaje conjunto para promover el crecimiento colectivo y el aprendizaje mutuo.
              </p>
            </div>
          </div>
          {/* Imagen */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: `0 25px 50px -12px ${moradoPrincipal}50`,
              border: `4px solid white`,
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={imagenAsesoramiento} alt="Asesoramiento INCUBA USS" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>

        {/* SECCIÓN 4: Coworking - Imagen izquierda, texto derecha */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
        }}>
          {/* Imagen */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: `0 25px 50px -12px ${moradoPrincipal}50`,
              border: `4px solid white`,
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={imagenCoworking} alt="Coworking INCUBA USS" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
          {/* Texto */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
            border: `1px solid ${moradoPrincipal}10`,
            position: 'relative',
            overflow: 'hidden',
          }}>
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
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: '0 0 25px 0' }}>
                <strong style={{color: moradoPrincipal}}>INCUBA USS</strong> ofrece un espacio de coworking dinámico y colaborativo para emprendedores en nuestra incubadora. Nuestro coworking es un entorno inspirador donde los emprendedores pueden conectarse, trabajar y desarrollar sus emprendimientos.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', margin: 0 }}>
                En nuestro espacio de coworking, fomentamos la colaboración y el intercambio de ideas entre los emprendedores. Contamos con áreas de trabajo compartidas, salas de reuniones equipadas laptops, internet.
              </p>
            </div>
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
          div[style*="padding: 40px"] { padding: 30px !important; }
          p { font-size: 1rem !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 2rem !important; }
          div[style*="padding: 40px"] { padding: 25px !important; }
        }
      `}</style>
    </section>
  );
};

export default Servicios;