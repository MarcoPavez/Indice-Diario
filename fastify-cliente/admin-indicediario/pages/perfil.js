import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { verificarUsuario } from "../verificarToken.js";
import InfoUsuarioAdicional from "@/components/perfil/infoUsuarioAdicional.js";
import { handleCerrarSesion } from "@/cerrarSesion.js";

export default function Perfil() {

    useEffect(() => {
        verificarUsuario()
    }, []);

    return (
        <Layout>
            <h1>PERFIL</h1>
            <section>
                <ul>
                    <li>Información del perfil</li>
                    <li>Realizar consultas</li>
                    <li>Registro de consultas</li>
                    <li>Configuración</li>
                </ul>
            </section>
            <button onClick={handleCerrarSesion}>
                Cerrar sesión
            </button>

            <InfoUsuarioAdicional />
        </Layout>
    )
}