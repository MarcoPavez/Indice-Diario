document.getElementById("menu-lateral").style.display = "none"

const iconoBarras = document.getElementById("contenedor-icono-barras")
const lateral = document.getElementById("menu-lateral")
let activado = false;

iconoBarras.addEventListener("click", () => {
    lateral.classList.remove("dontshow");
    lateral.style.display = "block";
    lateral.classList.add("show");
    activado = true
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
