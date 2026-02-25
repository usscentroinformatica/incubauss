import React, { useState } from "react";
import logo from "../assets/img/USS-Peq-blanco.png";
import { FaBell } from "react-icons/fa";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const baseLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontSize: "1rem",
  };

  const getLinkStyle = (name) => ({
    ...baseLinkStyle,
    backgroundColor:
      hovered === name ? "rgba(255,255,255,0.15)" : "transparent",
    transform: hovered === name ? "translateY(-2px)" : "translateY(0)",
  });

  return (
    <header
      style={{
        backgroundColor: "#3F3D99",
        height: "90px",
        display: "flex",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo GRANDE a la izquierda */}
        <img 
          src={logo} 
          alt="USS" 
          style={{ 
            height: "75px",
            width: "auto",
          }} 
        />

        {/* Contenedor CENTRADO con menú y botón JUNTOS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "absolute", // Para centrar
            left: "50%",          // Esto lo centra
            transform: "translateX(-50%)", // Ajuste fino del centrado
          }}
        >
          {/* Menú de navegación */}
          <ul
            style={{
              display: "flex",
              gap: "8px", // Reducido para que estén más juntos
              listStyle: "none",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            {["Inicio", "Nosotros", "Servicios", "Contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={getLinkStyle(item)}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón Eventos - PEGADO a Contacto */}
          <a
            href="#eventos"
            style={{
              backgroundColor: "#22c55e",
              padding: "8px 16px",
              borderRadius: "25px",
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.3s ease",
              fontSize: "0.95rem",
              border: "2px solid transparent",
              marginLeft: "2px", // Mínimo margen para separar apenas
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#22c55e";
              e.target.style.borderColor = "#22c55e";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#22c55e";
              e.target.style.color = "black";
              e.target.style.borderColor = "transparent";
            }}
          >
            <FaBell size={16} />
            Eventos
          </a>
        </div>

        {/* Espacio vacío a la derecha para equilibrar el logo (opcional) */}
        <div style={{ width: "75px" }}></div>
      </div>
    </header>
  );
};

export default Header;