import { useState } from "react";
import ListaConsultas from "./listaConsultas";
import PanelConsultas from "./panelConsultas";

export default function ConsultaManager(props) {

    const [consultas, setConsultas] = useState([]);

    return (
        <>
            <PanelConsultas
                consultas={consultas}
                setConsultas={setConsultas} />
            <hr />
            <ListaConsultas
                consultas={consultas}
                setConsultas={setConsultas} />
        </>
    )
}