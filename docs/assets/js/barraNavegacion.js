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
const lista = document.getElementById("lista-menu-lateral")
const condicionalesSinUsuario = document.getElementsByClassName("condicion-usuario-registrado")

if (usuarioExiste) {
    while (condicionalesSinUsuario.length > 0) {
        lista.removeChild(condicionalesSinUsuario[0]);
    }

    let perfil = document.createElement("li")
    let cerrarSesion = document.createElement("li")
    let redirectConsultas = document.createElement("li")

    perfil.setAttribute("class", "links-menu-lateral")
    cerrarSesion.setAttribute("class", "links-menu-lateral")
    redirectConsultas.setAttribute("class", "links-menu-lateral")

    perfil.innerHTML =
        `
    <li>
        <a href="/perfil" class="links-menu-lateral">
        <img src="#" alt="" class="iconos-menu-lateral">
            Perfil
        </a>
    </li>
    `
    cerrarSesion.innerHTML =
        `
    <li>
        <a class="links-menu-lateral" onClick={handleCerrarSesion()}> 
            Cerrar sesión
        </a>
    </li>
    `
    redirectConsultas.innerHTML =
        `
    <li>
        <a href="/consulta" class="links-menu-lateral"> 
         Consultas
        </a>
    </li>
    `

    lista.appendChild(perfil)
    lista.appendChild(cerrarSesion)
    lista.appendChild(redirectConsultas)
}