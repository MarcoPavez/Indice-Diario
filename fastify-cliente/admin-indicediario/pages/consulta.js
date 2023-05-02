import ListaConsultas from "@/components/consultas/listaConsultas";
import PanelConsultas from "@/components/consultas/panelConsultas";
import Layout from "@/components/layout";

export default function PaginaConsulta() {
    return (
        <Layout>
     
            <PanelConsultas />
            <ListaConsultas />
 
        </Layout>
    )
}