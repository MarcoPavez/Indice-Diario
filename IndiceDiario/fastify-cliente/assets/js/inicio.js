document.getElementById("botonesInternacionales").style.display = "none";

const botonIndicesNacionales = document.getElementById("indicesNacionales")
const botonIndicesInternacionales = document.getElementById("indicesInternacionales")

botonIndicesNacionales.addEventListener("click", () => {
    document.getElementById("botonesInternacionales").style.display = "none";
    document.getElementById("botonesNacionales").style.display = "grid";
})

botonIndicesInternacionales.addEventListener("click", () => {
    document.getElementById("botonesNacionales").style.display = "none";
    document.getElementById("botonesInternacionales").style.display = "grid";
})