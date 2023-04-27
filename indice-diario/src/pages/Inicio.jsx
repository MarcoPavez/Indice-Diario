import React, { useState, useEffect, useRef } from "react";
import "../styles/inicio.css";
import indicadores from "../img/indicadores.jpg";

const Inicio = () => {
  const [mostrarNacionales, setMostrarNacionales] = useState(true);
  const [mostrarFecha, setMostrarFecha] = useState(false);

  function handleMostrarNacionales() {
    setMostrarNacionales(true);
  }

  function handleMostrarInternacionales() {
    setMostrarNacionales(false);
  }

  function handleMostarFecha() {
    setMostrarFecha(true);
  }

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setMostrarFecha(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div class="inicio">
      <section id="inicioSuperior">
        <h2>
          Proveemos la información
          <br />
          que necesitas
        </h2>

        <p id="inicioSuperiorParrafoPrimero">
          Consulta los principales indicadores del mercado <br />
          <span>
            20+ años de datos | 12 índices | Indicadores nacionales e
            internacionales
          </span>{" "}
        </p>

        <p id="inicioSuperiorParrafoSegundo">
          Desplegamos los valores diarios e históricos de distintos{" "}
          <strong>índices del mercado</strong>. Haz tu consulta y obtén
          información valiosa sobre el panorama económico nacional.
        </p>
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
      </section>

      <section id="panelInformacion">
        <h4>Consulta tu índice diario</h4>
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
            <button
              class="botonNacional"
              value="UF"
              onClick={handleMostarFecha}
            >
              Unidad de Fomento (UF)
            </button>
            <button
              class="botonNacional"
              value="IPC"
              onClick={handleMostarFecha}
            >
              Índice de Precio al Consumidor (IPC)
            </button>
            <button
              class="botonNacional"
              value="UTM"
              onClick={handleMostarFecha}
            >
              Unidad Tributaria
              <br />
              Mensual (UTM)
            </button>
            <button
              class="botonNacional"
              value="IVP"
              onClick={handleMostarFecha}
            >
              Índice de Valor
              <br />
              Promedio (IVP)
            </button>
            <button
              class="botonNacional"
              value="IMACEC"
              onClick={handleMostarFecha}
            >
              Índice Mensual de Actividad Económica (IMACEC)
            </button>
            <button
              class="botonNacional"
              value="TPM"
              onClick={handleMostarFecha}
            >
              Tasa de Política
              <br />
              Monetaria (TPM)
            </button>
            <button
              class="botonNacional"
              value="TasaDesempleo"
              onClick={handleMostarFecha}
            >
              Tasa de Desempleo
            </button>
            <button
              class="botonNacional"
              value="Cobre"
              onClick={handleMostarFecha}
            >
              Libra de Cobre
            </button>
          </div>
        )}

        {mostrarNacionales === false && (
          <div id="botonesInternacionales">
            <button
              class="botonInternacional"
              value="Dolar"
              onClick={handleMostarFecha}
            >
              Dólar
            </button>
            <button
              class="botonInternacional"
              value="DolarIntercambio"
              onClick={handleMostarFecha}
            >
              Dólar de intercambio
            </button>
            <button
              class="botonInternacional"
              value="Euro"
              onClick={handleMostarFecha}
            >
              Euro
            </button>
            <button
              class="botonInternacional"
              value="Bitcoin"
              onClick={handleMostarFecha}
            >
              Bitcoin
            </button>
          </div>
        )}

        {mostrarFecha === true && (
          <div ref={ref} id="fechaIndicador">
            <h4>Selecciona una fecha</h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default Inicio;
