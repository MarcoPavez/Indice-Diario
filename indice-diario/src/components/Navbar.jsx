import React from "react";
import "../styles/styles.css"

function Navbar() {
  return (
    <nav>
      <div class="nav__up">
        <h1>Índice Diario</h1>
 
          <ul>
            <li>Inicio</li>
            <li>Planes</li>
            <li>Glosario</li>
            <li>Ingresa</li>
          </ul>
       
      </div>
      <div class="nav__down">
        <h3>Proveemos la información que necesitas</h3>
        <p>
          Desplegamos los valores diarios e históricos de distintos<br/>índices del
          mercado. Comienza a explorar y obtén información<br/>valiosa sobre el
          panorama económico nacional.
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
