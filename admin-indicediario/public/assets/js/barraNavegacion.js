document.getElementById("menu-lateral").style.display = "none"

const iconoBarras = document.getElementById("contenedor-icono-barras")
const lateral = document.getElementById("menu-lateral")

iconoBarras.addEventListener("click", () => {
    lateral.classList.remove("dontshow");
    lateral.style.display = "block";
    lateral.classList.add("show");
})

document.addEventListener("click", (event) => {
    if (!iconoBarras.contains(event.target) && !lateral.contains(event.target)) {
        lateral.classList.remove("show");
        lateral.classList.add("dontshow");
        setTimeout(() => {
            lateral.style.display = "none";
        }, 350)
    }
});

const usuarioExiste = localStorage.getItem("usuario")
const listaMenuLateral = document.getElementById("lista-menu-lateral")
const listaBarraNavegacion = document.getElementById("lista-barra-navegacion")
const condicionalesSinUsuario = document.getElementsByClassName("condicion-usuario-registrado")
const condicionalesSinUsuarioBarra = document.getElementsByClassName("condicion-usuario-registrado-barra")

if (usuarioExiste) {
    while (condicionalesSinUsuario.length > 0) {
        listaMenuLateral.removeChild(condicionalesSinUsuario[0]);
        listaBarraNavegacion.removeChild(condicionalesSinUsuarioBarra[0])
    }

    /* const handleCerrarSesion = () => {
        localStorage.removeItem('usuario');
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "/Indice-Diario-Cliente/inicio.html";
        } 
    } */

    /* Elementos a insertar en menú lateral en caso de haber un usuario ingresado */

    let perfil = document.createElement("li")
    /* let cerrarSesion = document.createElement("li") */
    let redirectConsultas = document.createElement("li")

    perfil.setAttribute("class", "links-menu-lateral")
    /* cerrarSesion.setAttribute("class", "links-menu-lateral") */
    redirectConsultas.setAttribute("class", "links-menu-lateral")

    perfil.innerHTML =
        `
        <li>
        <a href="/Indice-Diario-Cliente/perfil" class="links-menu-lateral">
            <svg class="iconos-menu-lateral" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"/></svg>
            Perfil
        </a>
    </li>
    `
    redirectConsultas.innerHTML =
        `
    <li>
        <a href="/Indice-Diario-Cliente/consulta" class="links-menu-lateral">
        <svg xmlns="http://www.w3.org/2000/svg" class="iconos-menu-lateral" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V314.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H158.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg> 
         Consultas
        </a>
    </li>
    
    `
    listaMenuLateral.appendChild(perfil)
    listaMenuLateral.appendChild(redirectConsultas)

    /* Elementos a insertar en barra de navegación en caso de haber un usuario ingresado */

    let perfilBarra = document.createElement("li")
    let redirectConsultasBarra = document.createElement("li")

    perfilBarra.innerHTML =
    `
    <li>
        <a href="/Indice-Diario-Cliente/perfil" class="links-menu-lateral">
            Perfil
        </a>
    </li>
    `

    redirectConsultasBarra.innerHTML =
    `
    <li>
        <a href="/Indice-Diario-Cliente/consulta" class="links-menu-lateral">
            Consultas
        </a>
    </li>
    `

    listaBarraNavegacion.appendChild(perfilBarra);
    listaBarraNavegacion.appendChild(redirectConsultasBarra);
}