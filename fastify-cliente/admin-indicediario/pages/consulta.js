import BarraNavegacion from "@/components/barraNavegacion";
import ListaConsultas from "@/components/listaConsultas";
import PanelConsultas from "@/components/panelConsultas";
import PiePagina from "@/components/piePagina";


export default function PaginaConsulta() {
    return (
        <>
            <BarraNavegacion />
            <PanelConsultas />
            <ListaConsultas />
            <PiePagina />
        </>
    )
}