import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import indicadores from "../img/indicadores.jpg";

function Navbar() {
  return (
    <nav>
      <div class="navSuperior">
        <div id="iconoBarras">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>

        <h1>
          Índice
          <br />
          Diario
        </h1>

        <ul>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li>Inicio</li>
          </Link>
          <Link to="/planes" style={{textDecoration: 'none', color: 'white'}}>
            <li>Planes</li>
          </Link>
          <li>Glosario</li>
          <Link to="/registro" style={{textDecoration: 'none', color: 'white'}}>
          <li>Regístrate</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
