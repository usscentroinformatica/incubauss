// components/Nosotros.js
import React from 'react';
import imagenHistoria from '../assets/img/Incuba-vector-transp.png';
import { FaLinkedinIn } from 'react-icons/fa';
import EnviarMensaje from './enviarmensaje';

// ============================================
//  IMPORTACIONES DE IMÁGENES
// ============================================

// Imágenes del equipo gestor
import OliverImg from '../assets/imgNosotros/Oliver-Incuba2-204x300.jpg';
import SandraImg from '../assets/imgNosotros/Sandra-Incuba-204x300.jpg';
import MelvyImg from '../assets/imgNosotros/Melvy-204x300.jpg';
import DanielImg from '../assets/imgNosotros/Dani-Incuba-204x300.jpg';

// Imágenes de mentores
import SandraAristaImg from '../assets/imgNosotros/Sandra-Incuba1-204x300.jpg';
import ArturoAyalaImg from '../assets/imgNosotros/Dani-Incuba1-204x300.jpg';
import FranklinGuerreroImg from '../assets/imgNosotros/Frank-Incuba-204x300.jpg';
import GinoGonzalesImg from '../assets/imgNosotros/Gino-204x300.jpg';
import CarlosMejiaImg from '../assets/imgNosotros/Carlos-204x300.jpg';
import RicardoGuaniloImg from '../assets/imgNosotros/RicardoGuanilo-204x300.jpg';
import AlanMansillaImg from '../assets/imgNosotros/Alan-Incuba1-204x300.jpg';
import MaribelSandovalImg from '../assets/imgNosotros/MaribelI-Incuba-204x300.jpg';
import ConsueloCoronelImg from '../assets/imgNosotros/Violeta-Coronel-204x300.jpg';
import MarySamillanImg from '../assets/imgNosotros/MarySamillanI-204x300.jpg';
import JeffersonAnayaImg from '../assets/imgNosotros/Jefferson-Rodolfo-Samir-Anaya-Romero-204x300.jpg';
import CarlosMauriolaImg from '../assets/imgNosotros/Carlos-Enrique-Mauriola-Huamanchumo-204x300.jpg';
import CeciliaAdrianzenImg from '../assets/imgNosotros/CeciliaAdrianzen-247x300.jpg';
import KarenUriarteImg from '../assets/imgNosotros/KarenUriarte-250x300.jpg';

// Imágenes del equipo técnico
import JulioValeraImg from '../assets/imgNosotros/JulioValera-204x300.jpg';
import NicidaMalcaImg from '../assets/imgNosotros/Nicida2-204x300.jpg';
import JannetGuillermoImg from '../assets/imgNosotros/Mirella-204x300.jpg';

// ============================================
//  COMPONENTE TARJETA REUTILIZABLE
// ============================================
const PersonaCard = ({ imagen, nombre, cargo, linkedinUrl, moradoPrincipal, verdePrincipal }) => (
  <div
    style={{
      backgroundColor: 'white',
      borderRadius: '20px', // Bordes redondeados en la tarjeta
      overflow: 'hidden',
      boxShadow: `0 10px 20px -8px ${moradoPrincipal}30`,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: `2px solid ${moradoPrincipal}`,
      width: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = `0 20px 30px -12px ${moradoPrincipal}80`;
      e.currentTarget.style.borderColor = verdePrincipal;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 10px 20px -8px ${moradoPrincipal}30`;
      e.currentTarget.style.borderColor = moradoPrincipal;
    }}
  >
    {/* Contenedor de imagen */}
    <div style={{
      width: '100%',
      height: '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '15px',
    }}>
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block',
          borderRadius: '16px', // Bordes redondeados en la imagen
        }}
      />
    </div>

    {/* Contenido de texto */}
    <div style={{
      padding: '15px 12px 20px 12px',
      textAlign: 'center',
    }}>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 600,
        color: moradoPrincipal,
        margin: '0 0 5px 0',
        lineHeight: 1.3,
        minHeight: '40px',
      }}>
        {nombre}
      </h3>
      
      {cargo && (
        <p style={{
          fontSize: '0.8rem',
          fontWeight: 500,
          color: '#64748b',
          margin: '0 0 12px 0',
          textTransform: 'uppercase',
          letterSpacing: '0.3px',
          minHeight: '30px',
        }}>
          {cargo}
        </p>
      )}

      {/* Icono LinkedIn */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          backgroundColor: verdePrincipal,
          color: moradoPrincipal,
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          border: `2px solid ${verdePrincipal}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = moradoPrincipal;
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderColor = moradoPrincipal;
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = verdePrincipal;
          e.currentTarget.style.color = moradoPrincipal;
          e.currentTarget.style.borderColor = verdePrincipal;
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <FaLinkedinIn size={16} />
      </a>
    </div>
  </div>
);

// ============================================
//  COMPONENTE PRINCIPAL
// ============================================
const Nosotros = () => {
  // Colores principales
  const verdePrincipal = '#22c55e';
  const moradoPrincipal = '#3F3D99';

  // ==========================================
  //  DATOS DE LOS EQUIPOS
  // ==========================================
  
  // Equipo gestor (4 personas)
  const equipoGestor = [
    {
      nombre: 'Dr. Oliver Vásquez',
      cargo: 'CENTROS EMPRESARIALES',
      imagen: OliverImg,
      linkedin: 'https://pe.linkedin.com/in/olivervasquezleyva'
    },
    {
      nombre: 'Mg Sandra Valdiviezo',
      cargo: 'CEO INCUBA USS',
      imagen: SandraImg,
      linkedin: 'https://pe.linkedin.com/in/sandra-valdiviezo-b368a9242'
    },
    {
      nombre: 'Ing. Melvy Terán',
      cargo: 'COORDINADORA DE PROGRAMAS',
      imagen: MelvyImg,
      linkedin: 'https://pe.linkedin.com/in/melvy-teran-b2484910b'
    },
    {
      nombre: 'Mg. Daniel Salazar',
      cargo: 'COORDINADOR DE TECNOLOGIAS',
      imagen: DanielImg,
      linkedin: 'https://pe.linkedin.com/in/daniel-salazar-lluen'
    }
  ];

  // Equipo de mentores (14 personas)
  const equipoMentores = [
    { nombre: 'Sandra Arista Lucero', imagen: SandraAristaImg, linkedin: 'https://pe.linkedin.com/in/sandra-arista-85a263174' },
    { nombre: 'Arturo Ayala Galloso', imagen: ArturoAyalaImg, linkedin: 'https://pe.linkedin.com/in/arturo-ayala-galloso-8b846a37' },
    { nombre: 'Franklin Guerrero Campos', imagen: FranklinGuerreroImg, linkedin: 'https://pe.linkedin.com/in/franklinguerrerocampos' },
    { nombre: 'Gino Gonzales Custodio', imagen: GinoGonzalesImg, linkedin: 'https://pe.linkedin.com/in/gino-gonzales-90773a65' },
    { nombre: 'Carlos Alberto Mejía Zelada', imagen: CarlosMejiaImg, linkedin: 'https://pe.linkedin.com/in/carlos-alberto-mejía-zelada-28870733' },
    { nombre: 'Ricardo Guanilo Gonzáles', imagen: RicardoGuaniloImg, linkedin: 'https://pe.linkedin.com/in/ricardo-guanilo-gonzales-133b0011b' },
    { nombre: 'Alan Mansilla de los Santos', imagen: AlanMansillaImg, linkedin: 'https://pe.linkedin.com/in/alan-mansilla-de-los-santos-a9a46320a' },
    { nombre: 'Maribel Sandoval Sánchez', imagen: MaribelSandovalImg, linkedin: 'https://pe.linkedin.com/in/maribel-sandoval-sánchez-499b10267' },
    { nombre: 'Consuelo Coronel Estela', imagen: ConsueloCoronelImg, linkedin: 'https://pe.linkedin.com/in/consuelo-coronel-estela-7b9968120' },
    { nombre: 'Mary Samillán Gonzáles', imagen: MarySamillanImg, linkedin: 'https://pe.linkedin.com/in/mary-samillán-gonzáles-52a4b3204' },
    { nombre: 'Jefferson Anaya Romero', imagen: JeffersonAnayaImg, linkedin: 'https://pe.linkedin.com/in/jefferson-rodolfo-samir-anaya-romero-786228194' },
    { nombre: 'Carlos Mauriola H.', imagen: CarlosMauriolaImg, linkedin: 'https://pe.linkedin.com/in/carlos-enrique-mauriola-huaman-b6a448195' },
    { nombre: 'Cecilia Adrianzén Godínez', imagen: CeciliaAdrianzenImg, linkedin: 'https://pe.linkedin.com/in/cecilia-adrianzen-godinez-a4b11426b' },
    { nombre: 'Karen Uriarte Uriarte', imagen: KarenUriarteImg, linkedin: 'https://pe.linkedin.com/in/karen-uriarte-uriarte-462ba522b' }
  ];

  // Equipo técnico (3 personas)
  const equipoTecnico = [
    {
      nombre: 'Julio Cesar Valera',
      cargo: 'Especialista en relaciones empresariales',
      imagen: JulioValeraImg,
      linkedin: '#'
    },
    {
      nombre: 'Nícida Malca',
      cargo: 'Especialista en capacitación',
      imagen: NicidaMalcaImg,
      linkedin: '#'
    },
    {
      nombre: 'Jannet Guillermo',
      cargo: 'Espec. INCUBA USS',
      imagen: JannetGuillermoImg,
      linkedin: '#'
    }
  ];

  return (
    <>
      <section
        style={{
          padding: '30px 20px 40px 20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          
          {/* ========================================
              SECCIÓN 1: QUIENES SOMOS (MEJORADO)
          ======================================== */}
          <div style={{
            marginBottom: '70px',
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              margin: '0 0 40px 0',
              color: moradoPrincipal,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              position: 'relative',
            }}>
              Quienes Somos
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
                borderRadius: '2px',
              }}></div>
            </h1>

            {/* Contenedor de dos columnas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}>
              
              {/* Columna izquierda - Imagen MÁS GRANDE */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '480px', // Aumentado de 400px a 480px
                  borderRadius: '24px', // Bordes redondeados
                  overflow: 'hidden',
                  boxShadow: `0 25px 50px -15px ${moradoPrincipal}50`,
                }}>
                  <img 
                    src={imagenHistoria}
                    alt="INCUBA USS"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '24px', // Bordes redondeados en la imagen
                    }}
                  />
                </div>
              </div>

              {/* Columna derecha - Texto */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '24px', // Bordes redondeados
                padding: '35px',
                boxShadow: `0 20px 40px -15px ${moradoPrincipal}30`,
                border: `1px solid ${moradoPrincipal}10`,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '120px',
                  height: '120px',
                  background: `radial-gradient(circle, ${verdePrincipal}10, transparent 70%)`,
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: moradoPrincipal,
                    margin: '0 0 20px 0',
                    borderBottom: `3px solid ${verdePrincipal}`,
                    paddingBottom: '8px',
                    display: 'inline-block',
                  }}>
                    Nuestra historia
                  </h2>

                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#334155', margin: '0 0 20px 0' }}>
                    <span style={{ fontSize: '2.2rem', color: verdePrincipal, fontWeight: 700, marginRight: '4px', float: 'left', lineHeight: 0.8 }}>S</span>
                    omos <strong style={{color: moradoPrincipal}}>INCUBA USS</strong>, la incubadora de emprendimiento de la <strong style={{color: moradoPrincipal}}>Universidad Señor de Sipán</strong>, comprometida en impulsar el espíritu emprendedor y promover el desarrollo de emprendimientos innovadores en nuestra comunidad universitaria y más allá, brindándoles un sistema integral de asesoría y mentoría.
                  </p>
                  
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#334155', margin: '0 0 20px 0' }}>
                    Si tienes una idea de emprendimiento que deseas desarrollar o necesitas apoyo para llevar tu negocio al siguiente nivel, no dudes en contactarnos.
                  </p>
                  
                  <p style={{
                    fontSize: '1.05rem', lineHeight: 1.7, color: moradoPrincipal,
                    fontWeight: 600, fontStyle: 'italic', padding: '15px 20px',
                    backgroundColor: `${verdePrincipal}08`, borderRadius: '16px',
                    borderLeft: `4px solid ${verdePrincipal}`,
                    margin: 0,
                  }}>
                    ¡Estamos aquí para ayudarte a alcanzar tus metas emprendedoras!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              SECCIÓN 2: EQUIPO GESTOR
          ======================================== */}
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 40px 0',
            color: moradoPrincipal,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            position: 'relative',
          }}>
            Equipo gestor
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
              borderRadius: '2px',
            }}></div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '60px',
          }}>
            {equipoGestor.map((persona, index) => (
              <PersonaCard
                key={index}
                imagen={persona.imagen}
                nombre={persona.nombre}
                cargo={persona.cargo}
                linkedinUrl={persona.linkedin}
                moradoPrincipal={moradoPrincipal}
                verdePrincipal={verdePrincipal}
              />
            ))}
          </div>

          {/* ========================================
              SECCIÓN 3: EQUIPO DE MENTORES
          ======================================== */}
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 40px 0',
            color: moradoPrincipal,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            position: 'relative',
          }}>
            Equipo de mentores
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
              borderRadius: '2px',
            }}></div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '60px',
          }}>
            {equipoMentores.map((persona, index) => (
              <PersonaCard
                key={index}
                imagen={persona.imagen}
                nombre={persona.nombre}
                cargo={null}
                linkedinUrl={persona.linkedin}
                moradoPrincipal={moradoPrincipal}
                verdePrincipal={verdePrincipal}
              />
            ))}
          </div>

          {/* ========================================
              SECCIÓN 4: EQUIPO TÉCNICO
          ======================================== */}
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 40px 0',
            color: moradoPrincipal,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            position: 'relative',
          }}>
            Equipo técnico
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
              borderRadius: '2px',
            }}></div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '40px',
          }}>
            {equipoTecnico.map((persona, index) => (
              <PersonaCard
                key={index}
                imagen={persona.imagen}
                nombre={persona.nombre}
                cargo={persona.cargo}
                linkedinUrl={persona.linkedin}
                moradoPrincipal={moradoPrincipal}
                verdePrincipal={verdePrincipal}
              />
            ))}
          </div>

          {/* ========================================
              ESTILO PARA CENTRAR LAS ÚLTIMAS TARJETAS
          ======================================== */}
          <style>{`
            @media (min-width: 969px) {
              div[style*="grid-template-columns: repeat(4, 1fr)"] > div:nth-child(13) {
                grid-column: 2 / 3;
              }
              div[style*="grid-template-columns: repeat(4, 1fr)"] > div:nth-child(14) {
                grid-column: 3 / 4;
              }
            }
          `}</style>
        </div>

        {/* Estilos responsive */}
        <style>{`
          @media (max-width: 968px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            
            div[style*="grid-template-columns: repeat(4, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 15px !important;
            }
            
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 15px !important;
            }
            
            div[style*="max-width: '480px'"] {
              max-width: 100% !important;
            }
          }
          
          @media (max-width: 768px) {
            h1, h2 {
              font-size: 1.8rem !important;
            }
            
            div[style*="padding: 35px"] {
              padding: 25px !important;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(4, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
            
            h1 {
              font-size: 1.6rem !important;
            }
            
            h2 {
              font-size: 1.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* SECCIÓN 5: ENVIAR MENSAJE */}
      <EnviarMensaje />
    </>
  );
};

export default Nosotros;