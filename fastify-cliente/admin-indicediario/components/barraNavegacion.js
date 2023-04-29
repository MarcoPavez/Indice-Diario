export default function BarraNavegacion(props) {
    return (
        <header>
            <nav>
                <div id="iconoBarras">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
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
        </header>
    )
}