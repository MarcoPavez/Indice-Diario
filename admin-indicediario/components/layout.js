import BarraNavegacion from "./barraNavegacion";
import PiePagina from "./piePagina";

export default function Layout(props) {
    return (
        <>
            <BarraNavegacion />
            {props.children}
            <PiePagina />
        </>
    );
};