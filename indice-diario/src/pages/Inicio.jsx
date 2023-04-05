import React from "react";
import "../styles/styles.css"
import indicadores from "../img/indicadores.jpg"

const Inicio = () => {
  return (
    <div class="inicio">
      <section>
        <h2>
          Facilitamos tus decisiones
          <br />
          Actualizamos tus conocimientos
        </h2>

        <div class="descripcion__principal">
          <p>
            Mantenente actualizado con las últimas tendencias del mercado
            <br />y toma decisiones informadas sobre tus inversiones.
            <br /> Tanto si eres un analista financiero, investigador o tienes
            interés
            <br />
            en realizar un seguimiento de la economía nacional, nuestros
            <br />
            servicios te proporcionan los datos que necesitas a través de una
            <br />
            interfaz fácil de utilizar.
          </p>
          <div class="descripcion__principal__img">
            <picture>
              <img src={indicadores} alt="" />
            </picture>
          </div>
        </div>
      </section>
      <section>
        <h2>Consulta tu índice diario</h2>

        <div class="section__buscador">
          <button>Nacionales</button>
          <button>Internacionales</button>

          <div class="section__buscador__nacionales">
            <div value="UF">Unidad de Fomento (UF)</div>
            <div value="IPC">Índice de Precio al Consumidor (IPC)</div>
            <div value="UTM">Unidad Tributaria Mensual (UTM)</div>
            <div value="IVP">Índice de Valor Promedio (IVP)</div>
            <div value="IMACEC">
              Índice Mensual de Actividad Económico (IMACEC)
            </div>
            <div value="TPM">Tasa de Política Monetaria (TPM)</div>
            <div value="TasaDesempleo">Tasa de Desempleo</div>
            <div value="Cobre">Libra de Cobre</div>
          </div>
          <div class="section__buscador__internacionales">
            <div value="Dolar">Dólar</div>
            <div value="DolarIntercambio">Dólar de intercambio</div>
            <div value="Euro">Euro</div>
            <div value="Bitcoin">Bitcoin</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
