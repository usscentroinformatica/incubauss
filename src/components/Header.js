import React from "react"; // Eliminamos useState porque ya no lo necesitamos
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/USS-Peq-blanco.png";
import { FaBell } from "react-icons/fa";

const Header = () => {
  // Eliminamos el estado hovered porque ya no se usa

  const baseLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    fontSize: "1rem",
  };

  // Función para determinar el estilo activo
  const getActiveStyle = ({ isActive }) => ({
    ...baseLinkStyle,
    backgroundColor: isActive ? "#22c55e" : "transparent",
    color: isActive ? "black" : "white",
    transform: isActive ? "translateY(-2px)" : "translateY(0)",
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
        {/* Logo - Link a inicio */}
        <Link to="/">
          <img 
            src={logo} 
            alt="USS" 
            style={{ 
              height: "75px",
              width: "auto",
              cursor: "pointer",
            }} 
          />
        </Link>

        {/* Contenedor CENTRADO con menú y botón */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Menú de navegación */}
          <ul
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <NavLink
                to="/inicio"
                style={getActiveStyle}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                style={getActiveStyle}
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                style={getActiveStyle}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                style={getActiveStyle}
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Botón Eventos */}
          <Link
            to="/eventos"
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
              marginLeft: "2px",
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
          </Link>
        </div>

        {/* Espacio vacío a la derecha */}
        <div style={{ width: "75px" }}></div>
      </div>
    </header>
  );
};

export default Header;