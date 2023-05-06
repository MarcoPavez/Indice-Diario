import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import InfoUsuarioAdicional from "@/components/perfil/infoUsuarioAdicional.js";
import PanelConsultas from "@/components/consultas/panelConsultas";
import ListaConsultas from "@/components/consultas/listaConsultas";
import ConfigPerfil from "@/components/perfil/configPerfil";

export default function Perfil() {

  const [consultas, setConsultas] = useState([]);
  const [componenteRender, setComponenteRender] = useState(1);

  const verificarUsuario = async () => {

    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal == null) {
      window.location = "/Indice-Diario-Cliente/inicio.html";
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
      window.location = "/Indice-Diario-Cliente/inicio.html";
      throw new Error("Error al verificar usuario");
    }
  };

  useEffect(() => {
    verificarUsuario();
  });

  const handleRenderPerfil = () => setComponenteRender(1);
  const handleRenderPanel = () => setComponenteRender(2);
  const handleRenderRegistro = () => setComponenteRender(3);
  const handleRenderConfig = () => setComponenteRender(4);

  let componentToRender = null;
  if (componenteRender == 1) {
    componentToRender = <InfoUsuarioAdicional />;
  } else if (componenteRender == 2) {
    componentToRender = <PanelConsultas />;
  } else if (componenteRender == 3) {
    componentToRender = <ListaConsultas consultas={consultas}
      setConsultas={setConsultas} />;
  } else if (componenteRender == 4) {
    componentToRender = <ConfigPerfil />;
  }

  return (
    <Layout>
      <section>
        <ul id="lista-perfil">
          <li><button className="botones-perfil" onClick={handleRenderPerfil}>Perfil</button></li>
          <li><button className="botones-perfil" onClick={handleRenderPanel}>Realizar<br />consultas</button></li>
          <li><button className="botones-perfil" onClick={handleRenderRegistro}>Registro<br />de consultas</button></li>
          <li><button className="botones-perfil" onClick={handleRenderConfig}>Configuración</button></li>
        </ul>
      </section>

      {componentToRender}

      
    </Layout>
  )
}