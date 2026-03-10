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
    <>
      {/* Título principal de la página con fondo blanco */}
      <section style={{
        padding: '60px 20px 20px 20px',
        backgroundColor: '#ffffff',
        fontFamily: "'Inter', 'Poppins', sans-serif",
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 800,
          color: moradoPrincipal,
          letterSpacing: '-0.03em',
          margin: 0,
          position: 'relative',
          display: 'inline-block'
        }}>
          Nuestros <span style={{ color: verdePrincipal }}>Servicios</span>
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: `linear-gradient(90deg, ${verdePrincipal}, ${moradoPrincipal})`,
            borderRadius: '2px',
          }}></div>
        </h1>
      </section>

      {/* Secciones de servicios alternadas */}
      {[
        {
          titulo: 'Mentoría',
          imagen: imagenMentoria,
          parrafos: [
            'En <strong>INCUBA USS</strong>, creemos en el poder de la mentoría para impulsar el crecimiento y el éxito de los emprendedores. Es por eso que ofrecemos programas de mentoría personalizados para brindarles el apoyo y la orientación necesarios.',
            'Nuestro sistema conecta a emprendedores con profesionales experimentados que comparten conocimientos y consejos prácticos para superar desafíos y desarrollar habilidades clave.'
          ]
        },
        {
          titulo: 'Capacitación',
          imagen: imagenCapacitacion,
          parrafos: [
            'Nos dedicamos a promover la cultura emprendedora. Nuestros programas se enfocan en fortalecer habilidades clave para el éxito empresarial con el respaldo del portal <strong>Ulearning</strong>.',
            'Abordamos temas fundamentales como liderazgo, modelo de negocio, planificación estratégica, administración financiera y marketing digital, preparando a tu empresa para el siguiente nivel.'
          ]
        },
        {
          titulo: 'Asesoramiento',
          imagen: imagenAsesoramiento,
          parrafos: [
            'Ofrecemos un sólido programa de asesoramiento empresarial adaptado a las necesidades específicas de cada proyecto. Nuestros expertos brindan apoyo en áreas clave como estrategia, ventas y gestión legal.',
            'Además, fomentamos la creación de redes y la colaboración dentro de nuestra comunidad, organizando eventos de networking para potenciar el aprendizaje mutuo.'
          ]
        },
        {
          titulo: 'Coworking',
          imagen: imagenCoworking,
          parrafos: [
            'Ofrecemos un espacio de coworking dinámico y colaborativo. Es un entorno inspirador donde los emprendedores pueden conectarse, trabajar y desarrollar sus ideas con total comodidad.',
            'Contamos con áreas compartidas y salas de reuniones equipadas con laptops e internet de alta velocidad, diseñadas para fomentar la sinergia entre startups.'
          ]
        }
      ].map((seccion, index) => {
        const esPar = index % 2 === 0;
        const bgColor = esPar ? '#f1f5f9' : '#ffffff';

        return (
          <section
            key={index}
            style={{
              padding: '100px 20px',
              backgroundColor: bgColor,
              fontFamily: "'Inter', 'Poppins', sans-serif",
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              borderTop: esPar ? '1px solid #e2e8f0' : 'none',
              borderBottom: esPar ? '1px solid #e2e8f0' : 'none',
            }}
          >
            <div style={{
              maxWidth: '1100px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}>
              {/* Imagen (Alterna izquierda/derecha) */}
              <div style={{
                order: esPar ? 2 : 1,
                display: 'flex',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: `0 25px 50px -12px ${moradoPrincipal}20`,
                  border: '8px solid white',
                  transition: 'transform 0.4s ease-out',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03) translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}>
                  <img src={seccion.imagen} alt={seccion.titulo} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>

              {/* Texto (Alterna izquierda/derecha) */}
              <div style={{ order: esPar ? 1 : 2 }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: moradoPrincipal,
                  marginBottom: '25px',
                  position: 'relative'
                }}>
                  {seccion.titulo}
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-8px',
                    width: '40px',
                    height: '4px',
                    backgroundColor: verdePrincipal,
                    borderRadius: '2px'
                  }}></span>
                </h2>

                {seccion.parrafos.map((texto, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      color: '#475569',
                      marginBottom: '20px',
                    }}
                    dangerouslySetInnerHTML={{ __html: texto }}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          div[style*="order: 2"], div[style*="order: 1"] {
            order: unset !important;
          }
          section {
            padding: 60px 20px !important;
          }
          h2 { font-size: 1.8rem !important; }
        }
      `}</style>
    </>
  );
};

export default Servicios;