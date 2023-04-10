import React, { useState } from "react";
import "../styles/inicio.css";
import indicadores from "../img/indicadores.jpg";

const Inicio = () => {
  const [mostrarNacionales, setMostrarNacionales] = useState(true);

  function handleMostrarNacionales() {
    setMostrarNacionales(true);
  }

  function handleMostrarInternacionales() {
    setMostrarNacionales(false);
  }

  return (
    <div class="inicio">
      <section id="inicioSuperior">
        <h2>
          Proveemos la información
          <br />
          que necesitas
        </h2>

        <p id="navInferiorParrafo">
          Desplegamos los valores diarios e históricos de distintos{" "}
          <strong>índices del mercado</strong>. Comienza a explorar y obtén
          información valiosa sobre el panorama económico nacional.
        </p>

        <div class="navImagen">
          <picture>
            <img
              src={indicadores}
              alt="Imagen provisoria. Gráfico que visualiza las alzas y caídas de un indicador."
            />
          </picture>
        </div>
      </section>

      <section id="inicioInferior">
        <h2>
          Facilitamos tus decisiones
          <br />
          Actualizamos tus conocimientos
        </h2>

        <p>
          Mantenente actualizado con las últimas{" "}
          <strong>tendencias del mercado</strong> y toma decisiones informadas
          sobre tus inversiones. Nuestros servicios te proporcionan los datos
          que necesitas a través de una interfaz fácil de utilizar.
        </p>
        <div class="descripcionPrincipalImagen">
          <picture>
            <img src={indicadores} alt="" />
          </picture>
        </div>
      </section>

      <section id="panelInformacion">
        <h2>Consulta tu índice diario</h2>
        <div id="panelInformacionBotones">
          <button
            class="panelInformacionBoton"
            onClick={handleMostrarNacionales}
          >
            Nacionales
          </button>
          <button
            class="panelInformacionBoton"
            onClick={handleMostrarInternacionales}
          >
            Internacionales
          </button>
        </div>
        {mostrarNacionales === true && (
          <div id="botonesNacionales">
            <button class="botonNacional" value="UF">
              Unidad de Fomento (UF)
            </button>
            <button class="botonNacional" value="IPC">
              Índice de Precio al Consumidor (IPC) 
            </button>
            <button class="botonNacional" value="UTM">
              Unidad Tributaria<br/>Mensual (UTM)
            </button>
            <button class="botonNacional" value="IVP">
              Índice de Valor<br/>Promedio (IVP)
            </button>
            <button class="botonNacional" value="IMACEC">
              Índice Mensual de Actividad Económica (IMACEC)
            </button>
            <button class="botonNacional" value="TPM">
              Tasa de Política<br/>Monetaria (TPM)
            </button>
            <button class="botonNacional" value="TasaDesempleo">
              Tasa de Desempleo
            </button>
            <button class="botonNacional" value="Cobre">
              Libra de Cobre
            </button>
          </div>
        )}
        

        {mostrarNacionales === false && (
        <div id="botonesInternacionales">
          <button class="botonInternacional" value="Dolar">
            Dólar
          </button>
          <button class="botonInternacional" value="DolarIntercambio">
            Dólar de intercambio
          </button>
          <button class="botonInternacional" value="Euro">
            Euro
          </button>
          <button class="botonInternacional" value="Bitcoin">
            Bitcoin
          </button>
        </div>
        )}
      </section>
    </div>
  );
};

export default Inicio;
