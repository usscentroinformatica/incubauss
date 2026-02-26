import React, { useState } from 'react';
import imagenEnviar from '../assets/img/enviarmensaje.jpg'; // Asegúrate que la ruta sea correcta

const EnviarMensaje = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  // Colores principales
  const moradoPrincipal = '#3F3D99';
  const verdePrincipal = '#22c55e';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
    }, 3000);
  };

  return (
    <section style={{
      padding: '30px 20px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      fontFamily: "'Inter', 'Poppins', sans-serif",
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos de fondo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${verdePrincipal}15, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(50px)',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: `radial-gradient(circle, ${moradoPrincipal}15, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(50px)',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        alignItems: 'stretch', // Cambiado para que ambas columnas tengan la misma altura
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '0', // Eliminado padding general
        boxShadow: `0 15px 30px -10px ${moradoPrincipal}40`,
        border: `1px solid ${moradoPrincipal}20`,
      }}>
        
        {/* COLUMNA IZQUIERDA - Formulario (AL BORDE IZQUIERDO) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 20px 20px 0', // Padding: superior, derecho, inferior, izquierdo (0 a la izquierda)
          marginLeft: '0', // Asegurar que no haya margen izquierdo
        }}>
          {/* Título - centrado arriba */}
          <h2 style={{
            fontSize: '1.6rem',
            fontWeight: 700,
            color: moradoPrincipal,
            margin: '0 0 15px 0',
            letterSpacing: '-0.02em',
            lineHeight: '1.2',
            textAlign: 'center', // Título centrado
            width: '100%', // Ocupa todo el ancho
            paddingLeft: '20px', // Añadir padding izquierdo solo al título para centrarlo visualmente
          }}>
            Envíanos un mensaje
          </h2>

          {/* Formulario - al borde izquierdo */}
          <form onSubmit={handleSubmit} style={{
            width: '100%',
            paddingLeft: '20px', // Añadido padding izquierdo al formulario completo
          }}>
            {/* Nombre */}
            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                marginBottom: '4px',
                color: moradoPrincipal,
                fontWeight: 500,
                fontSize: '0.8rem',
                textAlign: 'left', // Texto alineado a la izquierda
              }}>
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: `1px solid #e2e8f0`,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = verdePrincipal;
                  e.target.style.boxShadow = `0 0 0 2px ${verdePrincipal}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                marginBottom: '4px',
                color: moradoPrincipal,
                fontWeight: 500,
                fontSize: '0.8rem',
                textAlign: 'left',
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                required
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: `1px solid #e2e8f0`,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = verdePrincipal;
                  e.target.style.boxShadow = `0 0 0 2px ${verdePrincipal}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Mensaje */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                marginBottom: '4px',
                color: moradoPrincipal,
                fontWeight: 500,
                fontSize: '0.8rem',
                textAlign: 'left',
              }}>
                Mensaje
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
                rows="2"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: `1px solid #e2e8f0`,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  backgroundColor: 'white',
                  minHeight: '60px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = verdePrincipal;
                  e.target.style.boxShadow = `0 0 0 2px ${verdePrincipal}20`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px 16px',
                backgroundColor: verdePrincipal,
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 8px -2px ${verdePrincipal}`,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = moradoPrincipal;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = `0 8px 16px -4px ${moradoPrincipal}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = verdePrincipal;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 4px 8px -2px ${verdePrincipal}`;
              }}
            >
              Enviar
            </button>

            {/* Mensaje de éxito */}
            {enviado && (
              <div style={{
                marginTop: '12px',
                padding: '8px',
                backgroundColor: verdePrincipal + '15',
                color: moradoPrincipal,
                borderRadius: '6px',
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '0.8rem',
                border: `1px solid ${verdePrincipal}`,
                animation: 'fadeIn 0.5s ease'
              }}>
                ¡Mensaje enviado!
              </div>
            )}
          </form>
        </div>

        {/* COLUMNA DERECHA - Imagen */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 20px 20px 0', // Padding solo a la derecha
        }}>
          <div style={{
            width: '100%',
            height: '260px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: `0 10px 20px -6px ${moradoPrincipal}60`,
            border: `2px solid white`,
          }}>
            <img 
              src={imagenEnviar}
              alt="Contacto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>
      </div>

      {/* Estilos para animación y responsive */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="padding: 20px 20px 20px 0"] {
            padding: 20px !important;
          }
          
          div[style*="height: '260px'"] {
            height: 220px !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.4rem !important;
          }
          
          div[style*="height: '260px'"] {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EnviarMensaje;