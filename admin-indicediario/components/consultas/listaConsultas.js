import { useEffect } from "react"

export default function ListaConsultas({ consultas, setConsultas }) {

    const cargarDatos = async () => {
        try {
            const baseURL = 'https://placid-seen-raven.glitch.me';
            const url = baseURL + '/registro-consultas';

            const respuesta = await fetch(url);
            if (!respuesta.ok) throw new Error("Problema al recuperar las categorías")
            const consultaRecibida = await respuesta.json();
            setConsultas(consultaRecibida);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        cargarDatos();
    }, []);

    const eliminarDato = async (consulta) => {
        try {
            const baseURL = 'https://placid-seen-raven.glitch.me';
            const url = baseURL + '/registro-consultas?id=' + consulta.id;

            const respuesta = await fetch(url, {
                method: 'DELETE'
            });
            if (!respuesta.ok) throw new Error("No se pudo borrar la consulta");
            const resultado = await respuesta.json();
            console.log("Categoría borrada de manera exitosa");
            cargarDatos();
        } catch (error) {
            console.error({ error: error.message })
        }
    };

    return (
        <>
            <h2>Consultas realizadas</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Indicador consultado</th>
                        <th>Fecha consultada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map(consulta => (
                        <tr key={consulta.id}>
                            <td>{consulta.nombreIndicador}</td>
                            <td>{consulta.fechaConsultada}</td>
                            <td>
                                <button onClick={() => eliminarDato(consulta)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}