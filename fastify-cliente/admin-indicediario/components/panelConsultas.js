import { useState } from "react";

export default function PanelConsultas({ consultas, setConsultas }) {

    const [nombreIndicador, setNombreIndicador] = useState('');
    const [fechaConsultada, setFechaConsultada] = useState('');


    const procesarConsulta = async () => {
        try {
            const consulta = {
                nombreIndicador,
                fechaConsultada
            };

            const baseURL = 'http://localhost:3000';
            const url = baseURL + '/registro-consultas'

            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(consulta)
            });

            if (!respuesta.ok) throw new Error("No se pudo guardar la categoría...");

            const consultaGuardada = await respuesta.json();
            console.dir(consultaGuardada);

            setConsultas(
                [...consultas, consultaGuardada]
            );

        } catch (error) {
            console.error(error)
        }
        /* FECTCH API MINDICADOR.CL */

        let fechaCorregida = fechaConsultada.split("-").reverse().join("-")
        const baseURLAPI = `https://mindicador.cl/api/`
        const urlAPI = baseURLAPI + `${nombreIndicador}` + `/${fechaCorregida}`


        fetch(urlAPI)
            .then(response => response.json())
            .then(datos => {
                console.log(datos.serie[0].valor)
            })

    }

    return (
        <>
        
            <section>
                <h4 class="titulos-de-consultas">Consulta tu índice diario</h4>

                <p class="parrafos-informativos">
                    El siguiente método es una versión de prueba: sólo podrás consultar el valor actual del indicador, ya sea diario o mensual. Para realizar consultas más específicas,
                    crea tu perfil y <strong>suscríbete</strong> a uno de nuestros planes.
                </p>

                <div id="panel-botones">
                    <button id="indices-nacionales">
                        Nacionales
                    </button>
                    <button id="indices-internacionales">
                        Internacionales
                    </button>
                </div>

                <div id="botones-nacionales">
                    <button class="boton-indice" value="uf" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Unidad de Fomento (UF)
                    </button>
                    <button class="boton-indice" value="ipc" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice de Precio al Consumidor (IPC)
                    </button>
                    <button class="boton-indice" value="utm" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Unidad Tributaria
                        <br />
                        Mensual (UTM)
                    </button>
                    <button class="boton-indice" value="ivp" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice de Valor
                        <br />
                        Promedio (IVP)
                    </button>
                    <button class="boton-indice" value="imacec" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Índice Mensual de Act. Económica (IMACEC)
                    </button>
                    <button class="boton-indice" value="tpm" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Tasa de Política
                        <br />
                        Monetaria (TPM)
                    </button>
                    <button class="boton-indice" value="tasa_desempleo" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Tasa de Desempleo
                    </button>
                    <button class="boton-indice" value="libra_cobre" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Libra de Cobre
                    </button>
                </div>

                <div id="botones-internacionales">
                    <button class="boton-indice" value="dolar" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Dólar
                    </button>
                    <button class="boton-indice" value="dolar_intercambio" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Dólar de intercambio
                    </button>
                    <button class="boton-indice" value="euro" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Euro
                    </button>
                    <button class="boton-indice" value="bitcoin" onClick={(e) => setNombreIndicador(e.target.value)}>
                        Bitcoin
                    </button>
                </div>

                <div id="despliegue-respuesta">
                    <h4>Selecciona una fecha</h4>

                    <input type="date" name="fecha-query" id="fecha-query" onChange={(e) => setFechaConsultada(e.target.value)} />

                    <input type="submit" name="consultar-indice" id="consultar-indice" onClick={procesarConsulta} />
                </div>
            </section>
        </>
    );
}