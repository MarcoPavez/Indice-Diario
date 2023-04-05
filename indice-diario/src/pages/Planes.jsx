import React from 'react'
import "../img/comprobado.png"

function Planes() {
    return (
    <div>
        <section class="encabezado-planes">
            <div class="encabezado container" >
                <div class="encabezado-texto">
                    <h1>Conoce nuestros planes</h1>
                    <p class="encabezado-parrafo">Nuestros planes están diseñados para satisfacer las necesidades de todo tipo de usuarios, seas un profesional de las finanzas, un investigador o simplemente alguien que quiere mantenerse informado sobre la economía.</p>
                </div>
            </div>
        </section>

        <section>
            <div class="cards container">
                <div class="cards-planes">
                    <div class="cards-contenido">
                        <div class="mes-gratis"><p class="titulo-mes-gratis"> 1 mes gratis</p></div>
                        <h2 class="cards-titulo">Básico</h2>
                        <p class="cards-precio"> Después del período de gratuidad, el precio mensual del plan asciende a $2.500.</p>
                        <hr/>
                        <ul style="list-style-image:url( assets/comprobado.png);">
                            <li>Consulta valores de los indicadores de hasta el último año.</li>
                            <li>Realiza hasta 3 consultas diarias.</li>
                            <li>Las series temporales se restringen hasta un año en el tiempo.</li>
                        </ul>
                
                        <button>Empezar</button>
                        <p class="cards-terminos">Se aplican  <strong>Términos y Condiciones</strong>. El mes gratis no está disponible para aquellos usuarios que ya han probado alguno de nuestros planes.</p>
                    </div>
                </div>

                <div class="cards-planes">
                    <div class="cards-contenido">
                        <div class="mes-gratis"><p class="titulo-mes-gratis"> 1 mes gratis</p></div>
                        <h2 class="cards-titulo">Intermedio</h2>
                        <p class="cards-precio"> Después del período de gratuidad, el precio mensual del plan asciende a $3.500.</p>
                        <hr/>
                        <ul style="list-style-image:url( assets/comprobado.png);">
                            <li>Consulta valores de los indicadores sin límite temporal.</li>
                            <li>Realiza hasta 30 consultas diarias.</li>
                            <li>Las series temporales se restringen hasta un año en el tiempo.</li>
                        </ul>
                        <button>Empezar</button>
                        <p class="cards-terminos">Se aplican  <strong>Términos y Condiciones</strong>. El mes gratis no está disponible para aquellos usuarios que ya han probado alguno de nuestros planes.</p>
        
                    </div>
                </div>
                <div class="cards-planes">
                    <div class="cards-contenido">
                        <div class="mes-gratis"><p class="titulo-mes-gratis"> 1 mes gratis</p></div>
                        <h2 class="cards-titulo">Avanzado</h2>
                        <p class="cards-precio"> Después del período de gratuidad, el precio mensual del plan asciende a $5.000.</p>
                        <hr/>
                        <ul style="list-style-image:url( assets/comprobado.png);">
                        <li>Consulta valores de los indicadores sin límite temporal.</li>
                        <li>Realiza consultas sin límites diarios.</li>
                        <li>Las series temporales no tienen restricción temporal.</li>
                        </ul>
                        <button>Empezar</button>
                        <p class="cards-terminos">Se aplican  <strong>Términos y Condiciones</strong>. El mes gratis no está disponible para aquellos usuarios que ya han probado alguno de nuestros planes.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
)
}

export default Planes