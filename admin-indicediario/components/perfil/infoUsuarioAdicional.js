import { useEffect, useState } from "react";

export default function InfoUsuarioAdicional() {

    const [datosUsuario, setDatosUsuario] = useState([]);

    const cargarDatos = async () => {
        try {
            const baseURL = 'https://placid-seen-raven.glitch.me';
            const url = baseURL + '/infoUsuarioAdicional';
            const respuestaFetch = await fetch(url);
            if (!respuestaFetch.ok) throw new Error("Problema al recuperar las categorías")
            const respuestaInfoUsuario = await respuestaFetch.json();

            const usuarioIngresado = localStorage.getItem("usuario")
            const arrayUsuarioIngresado = JSON.parse(usuarioIngresado)

            respuestaInfoUsuario.forEach((respuesta) => {
                if (respuesta.correo.includes(arrayUsuarioIngresado.email)) {
                    setDatosUsuario(respuesta);
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        cargarDatos();
    }, []);

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario');
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
          window.location = "/Indice-Diario-Cliente/inicio.html";
        } else {
          window.location = "/Indice-Diario-Cliente/perfil"
        }
    
        verificarUsuario();
      }

    return (
        <>
            <h2>Bienvenido {datosUsuario.nombre} {datosUsuario.apellido}</h2>

            <table>
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Datos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Nombre</td>
                        <td>{datosUsuario.nombre}</td>
                    </tr>
                    <tr>
                        <td>Apellido</td>
                        <td>{datosUsuario.apellido}</td>
                    </tr>
                    <tr>
                        <td>Nombre de usuario</td>
                        <td>{datosUsuario.nombreUsuario}</td>
                    </tr>
                    <tr>
                        <td>Correo electrónico</td>
                        <td>{datosUsuario.correo}</td>
                    </tr>
                    <tr>
                        <td>Género</td>
                        <td>{datosUsuario.genero}</td>
                    </tr>
                    <tr>
                        <td>Fecha de nacimiento</td>
                        <td>{datosUsuario.fechaNacimiento}</td>
                    </tr>
                    <tr>
                        <td>País de residencia</td>
                        <td>{datosUsuario.paisResidencia}</td>
                    </tr>
                </tbody>
            </table>
            <button className="botones-perfil" onClick={handleCerrarSesion}>
                Cerrar sesión
            </button>
        </>
    )
}