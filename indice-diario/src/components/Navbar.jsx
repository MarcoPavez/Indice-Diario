import React from "react";
import "../styles/styles.css";
import indicadores from "../img/indicadores.jpg";

function Navbar() {
  return (
    <nav>
      <div class="nav__up">
        <h1>Índice Diario</h1>
        <h2>Proveemos la información que necesitas</h2>
        <p>
          Desplegamos los valores diarios e históricos de distintos
          <br />
          índices del mercado. Comienza a explorar y obtén información
          <br />
          valiosa sobre el panorama económico nacional.
        </p>
      </div>
      <div class="nav__down">
        <ul>
          <li>Inicio</li>
          <li>Planes</li>
          <li>Glosario</li>
          <li>Ingresa</li>
        </ul>

        <div class="nav__down__img">
          <img
            src={indicadores}
            alt="Imagen provisoria. Gráfico que visualiza las alzas y caídas de un indicador."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
