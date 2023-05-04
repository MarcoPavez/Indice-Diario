import { useState } from "react";
import InfoUsuarioAdicional from "./infoUsuarioAdicional";

export default function ManagerInfoAdicional (props) {
    
    const [infoUsuario, setInfoUsuario] = useState([]);
    
    return(
 
        <>
            <InfoUsuarioAdicional 
                infoUsuario = {infoUsuario}
                setInfoUsuario = {setInfoUsuario}/>
        </>

    )
}