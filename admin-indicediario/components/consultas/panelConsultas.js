import Link from "next/link";
import { useState } from "react";

export default function PanelConsultas({ consultas, setConsultas }) {

    const [nombreIndicador, setNombreIndicador] = useState('');
    const [fechaConsultada, setFechaConsultada] = useState('');
    const [respuestaAPI, setRespuestaAPI] = useState('')
    const [botonNacionales, setBotonNacionales] = useState(true);

    const procesarConsulta = async () => {
        /* Guardar consulta en registro */
        try {
            const consulta = {
                nombreIndicador,
                fechaConsultada
            };

            const baseURL = 'https://placid-seen-raven.glitch.me';
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
        /* FETCH API MINDICADOR.CL */

        let fechaCorregida = fechaConsultada.split("-").reverse().join("-")
        const baseURLAPI = `https://mindicador.cl/api/`
        const urlAPI = baseURLAPI + `${nombreIndicador}` + `/${fechaCorregida}`


        fetch(urlAPI)
            .then(response => response.json())
            .then(datos => {
                setRespuestaAPI(datos)
            })

    }

    const handleBotonInternacional = () => {
        setBotonNacionales(false);
    }

    const handleBotonNacional = () => {
        setBotonNacionales(true);
    }

    return (
        <>

            <section>
                <h4 className="titulos-de-consultas">Consulta tu índice diario</h4>

                <p className="parrafos-informativos">
                    Bienvenido al panel de consultas, tu espacio para realizar consultas más específicas.
                    Para comenzar, por favor selecciona el indicador de tu interés y la fecha a consultar. Podrás ver el registro de tus consultas en tu <Link href={"/perfil"}>perfil</Link>
                </p>

                <div id="panel-botones">
                    <button id="indices-nacionales" onClick={handleBotonNacional}>
                        Nacionales
                    </button>
                    <button id="indices-internacionales" onClick={handleBotonInternacional}>
                        Internacionales
                    </button>
                </div>

                {botonNacionales ?

                    <div id="botones-nacionales">
                        <button className="boton-indice" value="uf" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Unidad de Fomento (UF)
                        </button>
                        <button className="boton-indice" value="ipc" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Índice de Precio al Consumidor (IPC)
                        </button>
                        <button className="boton-indice" value="utm" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Unidad Tributaria
                            <br />
                            Mensual (UTM)
                        </button>
                        <button className="boton-indice" value="ivp" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Índice de Valor
                            <br />
                            Promedio (IVP)
                        </button>
                        <button className="boton-indice" value="imacec" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Índice Mensual de Act. Económica (IMACEC)
                        </button>
                        <button className="boton-indice" value="tpm" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Tasa de Política
                            <br />
                            Monetaria (TPM)
                        </button>
                        <button className="boton-indice" value="tasa_desempleo" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Tasa de Desempleo
                        </button>
                        <button className="boton-indice" value="libra_cobre" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Libra de Cobre
                        </button>
                    </div>
                    :
                    <div id="botones-internacionales">
                        <button className="boton-indice" value="dolar" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Dólar
                        </button>
                        <button className="boton-indice" value="dolar_intercambio" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Dólar de intercambio
                        </button>
                        <button className="boton-indice" value="euro" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Euro
                        </button>
                        <button className="boton-indice" value="bitcoin" onClick={(e) => setNombreIndicador(e.target.value)}>
                            Bitcoin
                        </button>
                    </div>
                }
                <div id="despliegue-respuesta">
                    <h4>Selecciona una fecha</h4>

                    <input type="date" name="fecha-query" id="fecha-query" onChange={(e) => setFechaConsultada(e.target.value)} />

                    <input type="submit" name="consultar-indice" id="consultar-indice" onClick={procesarConsulta} />
                </div>
                {respuestaAPI ?

                    <article>
                        <h4 className="titulos-de-consultas">Resultado de la consulta</h4>
                        <p className="parrafos-informativos">A día de hoy, el valor del índice seleccionado (<strong>{respuestaAPI.nombre}</strong>) es de {respuestaAPI.serie[0].valor}. Este indicador se mide en {respuestaAPI.unidad_medida}.</p>
                        {console.log(respuestaAPI)}
                    </article>

                    :
                    <>
                    </>

                }
            </section>
        </>
    );
}