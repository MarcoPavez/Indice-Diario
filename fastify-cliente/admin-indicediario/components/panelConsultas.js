import { useState } from "react";

export default function PanelConsultas() {

    const [nombreIndicador, setNombreIndicador] = useState('');
    const [fechaConsultada, setFechaConsultada] = useState('');

    const procesarConsulta = async () => {

        const consulta = {
            nombreIndicador,
            fechaConsultada
        }

        let fechaCorregida = fechaConsultada.split("-").reverse().join("-")

        const baseURL = `https://mindicador.cl/api/`
        const url = baseURL + `${nombreIndicador}` + `/${fechaCorregida}`


        fetch(url)
            .then(response => response.json())
            .then(datos => {
                console.log(datos.serie[0].valor)
            })
  
    }

    return (
        <>
            <section id="panelInformacion">

                <h4>Consulta tu índice diario</h4>
                <div id="panelInformacionBotones">
                    <button id="indicesNacionales">
                        Nacionales
                    </button>
                    <button id="indicesInternacionales">
                        Internacionales
                    </button>
                </div>

                <div id="botonesNacionales">
                    <button className="botonIndice" value="uf" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Unidad de Fomento (UF)
                    </button>
                    <button className="botonIndice" value="ipc" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice de Precio al Consumidor (IPC)
                    </button>
                    <button className="botonIndice" value="utm" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Unidad Tributaria
                        <br />
                        Mensual (UTM)
                    </button>
                    <button className="botonIndice" value="ivp" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice de Valor
                        <br />
                        Promedio (IVP)
                    </button>
                    <button className="botonIndice" value="imacec" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice Mensual de Actividad Económica (IMACEC)
                    </button>
                    <button className="botonIndice" value="tpm" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Tasa de Política
                        <br />
                        Monetaria (TPM)
                    </button>
                    <button className="botonIndice" value="tasa_desempleo" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Tasa de Desempleo
                    </button>
                    <button className="botonIndice" value="libra_cobre" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Libra de Cobre
                    </button>
                </div>

                <div id="botonesInternacionales">
                    <button className="botonIndice" value="dolar" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Dólar
                    </button>
                    <button className="botonIndice" value="dolar_intercambio" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Dólar de intercambio
                    </button>
                    <button className="botonIndice" value="euro" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Euro
                    </button>
                    <button className="botonIndice" value="bitcoin" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Bitcoin
                    </button>
                </div>

                <div id="fechaIndicador">
                    <h4>Selecciona una fecha</h4>

                    <input type="date" name="fechaQuery" id="fechaQuery" onChange={(e) => setFechaConsultada(e.target.value)} />

                    <input type="submit" name="consultarIndice" id="consultarIndice" onClick={procesarConsulta} />
                </div>

            </section>
        </>
    );
}