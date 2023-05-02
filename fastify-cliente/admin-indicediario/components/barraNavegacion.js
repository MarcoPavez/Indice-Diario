export default function BarraNavegacion(props) {
    return (
        <header>
            <nav>
                <picture id="iconoBarras">
                    <svg id="barras" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/></svg>
                </picture>

                <a href="/inicio.html">
                    <h1>Índice Diario</h1>
                </a>

                <ul id="listaBarraNavegacion">
                    <li><a href="/inicio.html">Inicio</a></li>
                    <li><a href="/planes.html">Planes</a></li>
                    <li><a href="/glosario.html">Glosario</a></li>
                    <li><a href="/registro.html">Regístrate</a></li>
                </ul>
            </nav>

            <section id="menuLateral">
                <h3>Menú</h3>
                <ol>
                    <li><a href="/inicio.html"><img src="./assets/img/casa.svg" alt=""/>Inicio</a></li>
                    <li><a href="/planes.html"><img src="./assets/img/papel.svg" alt=""/>Planes</a></li>
                    <li><a href="/glosario.html"><img src="./assets/img/listado.svg" alt=""/>Glosario</a></li>
                    <li><a href="/ingreso.html"><img src="./assets/img/ingreso.svg" alt=""/>Ingresa</a></li>
                    <li><a href="/registro.html"><img src="./assets/img/registro.svg" alt=""/>Regístrate</a></li>
                </ol>
            </section>
        </header>
    )
}