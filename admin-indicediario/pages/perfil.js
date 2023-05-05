import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import InfoUsuarioAdicional from "@/components/perfil/infoUsuarioAdicional.js";

export default function Perfil() {

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario');
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "/inicio.html";
        } else {
            window.location = "./perfil"
        }
    
        verificarUsuario();
    }

    const verificarUsuario = async () => {
    
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "inicio.html";
        }
        const objetoUsuario = JSON.parse(usuarioLocal);
        const token = objetoUsuario.stsTokenManager.accessToken;
    
        const baseURL = "https://placid-seen-raven.glitch.me";
        const url = baseURL + "/usuario/verificarToken";
      
        try {
          const respuesta = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token,
            },
          });
      
          if (!respuesta.ok) {
            throw new Error("Token inválido");
          }
    
          const data = await respuesta.json();
          return data;
        } catch (error) {
          console.log(error.message);
          window.location = "ingreso.html";
          throw new Error("Error al verificar usuario");
        }
      };

    useEffect(() => {
        verificarUsuario();
    }, []);

   

    return (
        <Layout>
            <section>
                <ul>
                    <li>Perfil</li>
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