import React from 'react';
import logo from "../assets/img/USS-Peq-blanco.png";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // Mismos colores que en el header
  const moradoPrincipal = '#3F3D99';
  const verdePrincipal = '#22c55e';

  return (
    <footer style={{
      backgroundColor: moradoPrincipal,
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      padding: '40px 20px 30px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elemento decorativo de fondo sutil */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${verdePrincipal}15, transparent 70%)`,
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '30px',
        alignItems: 'center',
      }}>
        
        {/* COLUMNA IZQUIERDA - Logo y texto */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <img 
            src={logo} 
            alt="USS" 
            style={{ 
              height: '70px',
              width: 'auto',
              marginBottom: '10px',
            }} 
          />
          <p style={{
            fontSize: '0.95rem',
            fontWeight: 400,
            color: verdePrincipal,
            margin: 0,
            lineHeight: 1.4,
            maxWidth: '250px'
          }}>
            Incubadora de emprendimientos
          </p>
        </div>

        {/* COLUMNA CENTRAL - Botones en vertical */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}>
            {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = verdePrincipal;
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA DERECHA - Redes sociales en horizontal */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/Incubauss/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: verdePrincipal,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: moradoPrincipal,
              transition: 'all 0.3s ease',
              border: `2px solid transparent`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = verdePrincipal;
              e.currentTarget.style.color = verdePrincipal;
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = verdePrincipal;
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = moradoPrincipal;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaFacebookF size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/incuba-uss/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: verdePrincipal,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: moradoPrincipal,
              transition: 'all 0.3s ease',
              border: `2px solid transparent`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = verdePrincipal;
              e.currentTarget.style.color = verdePrincipal;
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = verdePrincipal;
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = moradoPrincipal;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Estilos responsive */}
      <style>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center !important;
          }
          div[style*="align-items: flex-start"] {
            align-items: center !important;
            text-align: center !important;
          }
          div[style*="justify-content: flex-end"] {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gap: '12px'"] {
            gap: 8px !important;
          }
          a[style*="width: '40px'"] {
            width: 35px !important;
            height: 35px !important;
          }
          svg {
            width: 16px !important;
            height: 16px !important;
          }
          img {
            height: 60px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;