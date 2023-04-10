import React from "react";
import "../styles/navbar.css";

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
          <li>Inicio</li>
          <li>Planes</li>
          <li>Glosario</li>
          <li>Ingresa</li>
        </ul>
      </div>

      <div class="navInferior">
        <h2>
          Proveemos la información
          <br />
          que necesitas
        </h2>
      </div>

      <p id="navInferiorParrafo">
        Desplegamos los valores diarios e históricos de distintos{" "}
        <strong>índices del mercado</strong>. Comienza a explorar y obtén
        información valiosa sobre el panorama económico nacional.
      </p>

      <div class="navImagen">
        <img
          src={indicadores}
          alt="Imagen provisoria. Gráfico que visualiza las alzas y caídas de un indicador."
        />
      </div>
    </nav>
  );
}

export default Navbar;
