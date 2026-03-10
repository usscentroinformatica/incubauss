import React from 'react';
import imagenHistoria from '../assets/img/Incuba-vector-transp.png';
import { FaLinkedinIn } from 'react-icons/fa';

// ============================================
//  IMPORTACIONES DE IMÁGENES (se mantienen igual)
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
//  COMPONENTE TARJETA REUTILIZABLE (se mantiene igual)
// ============================================
const PersonaCard = ({ imagen, nombre, cargo, linkedinUrl, moradoPrincipal, verdePrincipal }) => (
  <div
    className="team-card"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: `0 10px 30px -10px ${moradoPrincipal}20`,
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: `1px solid rgba(255, 255, 255, 0.3)`,
      width: '100%',
      position: 'relative',
    }}
  >
    {/* Contenedor de imagen con gradiente decorativo */}
    <div style={{
      width: '100%',
      height: '240px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f1f5f9',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(to bottom, transparent 60%, ${moradoPrincipal}20)`,
        zIndex: 1,
      }}></div>
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: 'calc(100% - 20px)',
          height: 'calc(100% - 20px)',
          objectFit: 'contain',
          transition: 'all 0.3s ease',
          borderRadius: '20px',
          backgroundColor: '#f8fafc', // Fondo sutil para que el redondeado se note si el logo es transparente
        }}
        className="card-img"
      />
    </div>

    {/* Contenido de texto */}
    <div style={{
      padding: '20px 15px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        color: moradoPrincipal,
        margin: '0 0 4px 0',
        lineHeight: 1.2,
      }}>
        {nombre}
      </h3>

      {cargo ? (
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: verdePrincipal,
          margin: '0 0 15px 0',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {cargo}
        </p>
      ) : (
        <div style={{ height: '15px' }}></div>
      )}

      {/* Icono LinkedIn flotante */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          backgroundColor: 'white',
          color: moradoPrincipal,
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
        }}
      >
        <FaLinkedinIn size={18} />
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
  //  DATOS DE LOS EQUIPOS (se mantienen igual)
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
      {/* ========================================
          SECCIÓN 1: QUIENES SOMOS
      ======================================== */}
      <section
        style={{
          padding: '80px 20px',
          background: '#ffffff',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Decoración sutil */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${verdePrincipal}08, transparent 70%)`,
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
          <div style={{ position: 'relative' }}>
            {/* Título de Sección */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                fontWeight: 800,
                color: moradoPrincipal,
                margin: '0 0 10px 0',
                letterSpacing: '-0.02em',
              }}>
                Quiénes Somos
              </h1>
              <div style={{
                width: '60px',
                height: '4px',
                background: verdePrincipal,
                margin: '0 auto',
                borderRadius: '2px'
              }}></div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '50px',
              position: 'relative',
              flexWrap: 'wrap',
            }}>
              {/* Lado de Imagen */}
              <div style={{ flex: '1', minWidth: '320px', position: 'relative' }}>
                <div style={{
                  width: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: `20px 20px 40px -20px ${moradoPrincipal}30`,
                  border: '1px solid #f1f5f9',
                }}>
                  <img
                    src={imagenHistoria}
                    alt="INCUBA USS Team"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  background: `${verdePrincipal}20`,
                  borderRadius: '16px',
                  zIndex: -1,
                }}></div>
              </div>

              {/* Lado de Texto */}
              <div style={{ flex: '1.2', minWidth: '320px', padding: '10px' }}>
                <h2 style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: moradoPrincipal,
                  margin: '0 0 20px 0',
                  lineHeight: 1.2,
                }}>
                  Impulsamos el <span style={{ color: verdePrincipal }}>Talento Emprendedor</span>
                </h2>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#475569', margin: '0 0 15px 0' }}>
                  Somos <strong style={{ color: moradoPrincipal }}>INCUBA USS</strong>, la plataforma estratégica de la Universidad Señor de Sipán diseñada para transformar ideas innovadoras en empresas con impacto real.
                </p>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#475569', margin: '0 0 25px 0' }}>
                  Acompañamos a alumnos, egresados y emprendedores externos a través de un ecosistema sólido de <strong style={{ color: verdePrincipal }}>mentoría personalizada</strong> y redes de contacto.
                </p>

                <div style={{
                  padding: '25px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  borderLeft: `5px solid ${verdePrincipal}`,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
                }}>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: moradoPrincipal,
                    fontWeight: 600,
                    margin: 0,
                  }}>
                    Nuestro propósito es guiarte hacia el éxito sostenible, conectando tu potencial con las necesidades del mercado global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 2: EQUIPO GESTOR (FONDO GRIS CLARO)
      ======================================== */}
      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#f1f5f9',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            textAlign: 'center',
            margin: '0 0 60px 0',
            color: moradoPrincipal,
            position: 'relative',
          }}>
            Equipo Gestor
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
              borderRadius: '2px',
            }}></div>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
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
        </div>
      </section>

      {/* ========================================
          SECCIÓN 3: MENTORES (FONDO BLANCO)
      ======================================== */}
      <section
        style={{
          padding: '100px 20px',
          background: '#ffffff',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
            fontWeight: 800,
            color: moradoPrincipal,
            margin: '0 0 15px 0',
          }}>
            Nuestros <span style={{ color: verdePrincipal }}>Mentores</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Expertos comprometidos con el desarrollo del ecosistema emprendedor.
          </p>
        </div>

        <div className="mentor-ticker-wrapper" style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          padding: '20px 0',
        }}>
          <div className="mentor-ticker" style={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll-mentors 60s linear infinite',
          }}>
            {[...equipoMentores, ...equipoMentores].map((persona, index) => (
              <div key={index} style={{ width: '240px', margin: '0 15px', flexShrink: 0 }}>
                <PersonaCard
                  imagen={persona.imagen}
                  nombre={persona.nombre}
                  cargo={null}
                  linkedinUrl={persona.linkedin}
                  moradoPrincipal={moradoPrincipal}
                  verdePrincipal={verdePrincipal}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 4: EQUIPO TÉCNICO (FONDO LAVANDA)
      ======================================== */}
      <section
        style={{
          padding: '80px 20px 100px 20px',
          backgroundColor: '#f0f9ff',
          fontFamily: "'Inter', 'Poppins', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            textAlign: 'center',
            margin: '0 0 50px 0',
            color: moradoPrincipal,
          }}>
            Equipo técnico
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
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
        </div>

        <style>{`
          @keyframes scroll-mentors {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .mentor-ticker:hover {
            animation-play-state: paused;
          }

          .team-card:hover .card-img {
            transform: translateY(-5px);
          }

          .team-card:hover .linkedin-btn {
            background-color: ${verdePrincipal} !important;
            color: white !important;
            transform: rotate(360deg);
          }

          @media (max-width: 1024px) {
            .team-card-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            
            div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] {
              grid-template-columns: 1fr !important;
            }
            
            div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Nosotros;
