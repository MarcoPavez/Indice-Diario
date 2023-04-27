document.getElementById("menuLateral").style.display = "none"

const menu = document.getElementById("iconoBarras")
const lateral = document.getElementById("menuLateral")
let activado = false;

menu.addEventListener("click", () => {
    document.getElementById("menuLateral").classList.remove("dontshow");
    document.getElementById("menuLateral").style.display = "block";
    document.getElementById("menuLateral").classList.add("show");
    activado = true
})

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !lateral.contains(event.target)) {
        document.getElementById("menuLateral").classList.remove("show");
        document.getElementById("menuLateral").classList.add("dontshow");
        setTimeout(() => {
            document.getElementById("menuLateral").style.display = "none";
        }, 350)
    }
});
