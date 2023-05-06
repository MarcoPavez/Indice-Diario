import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import InfoUsuarioAdicional from "@/components/perfil/infoUsuarioAdicional.js";
import PanelConsultas from "@/components/consultas/panelConsultas";
import ListaConsultas from "@/components/consultas/listaConsultas";
import ConfigPerfil from "@/components/perfil/configPerfil";
import { verificarUsuario } from "@/verificarToken";

export default function Perfil() {

  const [consultas, setConsultas] = useState([]);
  const [componenteRender, setComponenteRender] = useState(1);

  /* Página privada, verifica usuario luego de renderización inicial */
  useEffect(() => {
    verificarUsuario();
  });

  /* Renderiza componentes según evento en botones */
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