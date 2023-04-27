document.getElementById("contrasenaSpan").style.display = "none"

const labelContrasena = document.getElementById("requisitosContrasena")

labelContrasena.addEventListener("mouseover", function (event) {
    document.getElementById("contrasenaSpan").style.display = "block"
})

labelContrasena.addEventListener("mouseout", function (event) {
    document.getElementById("contrasenaSpan").style.display = "none"
})

/* METODO POST PARA REGISTRO USUARIO */

const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (submitEvent) => {

    submitEvent.preventDefault();

    const formElement = submitEvent.currentTarget;
    const formData = new FormData(formElement);
    const correo = formData.get("correo");
    const contrasena = formData.get("contrasena")

    const usuario = {
        correo,
        contrasena
    }

    const baseURL = "http://localhost:3000";
    const url = baseURL + "/registro"
    const fetchConfig = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }

    try {
        const respuesta = await fetch(url, fetchConfig);
        // TODO gestionar errores
        if (!respuesta.ok) {
            console.error("La respuesta no está OK");
            return;
        }

        const objetoJSON = await respuesta.json();
        console.dir(objetoJSON);

    } catch (error) {
        //gestionar errores
        console.error(error.code);
        console.error(error.message);
    }
});





/* const formulario = document.querySelector("form")
formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const nombreUsuario = document.getElementById("nombreUsuario").value
    const correo = document.getElementById("correo").value
    const contrasena = document.getElementById("contrasena").value
    const confirmarContrasena = document.getElementById("confirmarContrasena").value
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value
    const pais = document.querySelector('select[name="pais"]').value;

    const usuario = {
        nombre,
        apellido,
        nombreUsuario,
        correo,
        contrasena,
        confirmarContrasena,
        genero,
        fechaNacimiento,
        pais
    }

    fetch('https://receptive-fine-turret.glitch.me/registro', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.dir(data))
        .catch(error => console.error(error));

})
 */