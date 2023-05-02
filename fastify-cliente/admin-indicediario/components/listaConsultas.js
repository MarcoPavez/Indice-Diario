import { useEffect, useState } from "react"

export default function ListaConsultas() {

    const [consultas, setConsultas] = useState([]);

    const cargarDatos = async () => {
        try {
            const baseURL = 'http://localhost:3000';
            const url = baseURL + '/registro-consultas';
        
            const respuesta = await fetch(url);
            if (!respuesta.ok) throw new Error("Problema al recuperar las categorías")
            const consultaRecibida = await respuesta.json();
            setConsultas(consultaRecibida);

        } catch (error) {
            console.error( error )
        }
    }

    useEffect(() => {
        cargarDatos();
    }, [])

    return (
        <>
            <h2>Consultas realizadas</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Indicador consultado</th>
                        <th>Fecha consultada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map(consulta => (
                        <tr key={consulta.id}>
                            <td>{consulta.id}</td>
                            <td>{consulta.nombreIndicador}</td>
                            <td>{consulta.fechaConsultada}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}