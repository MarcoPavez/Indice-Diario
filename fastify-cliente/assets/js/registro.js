// Validación formulario 

const formNombre = document.getElementById("nombre");
const formApellido = document.getElementById("apellido");
const formCorreo = document.getElementById("correo");
const formContrasena = document.getElementById("contrasena");
const formRepetirContrasena = document.getElementById("confirmarContrasena");
const formGenero = document.getElementById("genero");
const formNacimiento = document.getElementById("fechaNacimiento");
const formPais = document.getElementById("seleccionarPais");
const formTerminosCondiciones = document.getElementById("botonSubmit");

let mensajeErrorNombre = document.createElement("span");
let mensajeErrorApellido = document.createElement("span");
let mensajeCorreo = document.createElement("span");
let mensajeErrorContrasena = document.createElement("span");
let mensajeErrorRepetirContrasena = document.createElement("span");

// Validación Nombre 
const validaNombreApellido = (inputNombreApellido, elementoParaError, error) => {
    let valorNombreApellido = inputNombreApellido.trim();
    // Expresión regular: todas las letras, minúsculas y mayúsculas
    const regexNombre = /^[a-zA-Z\s]+$/;

    if (valorNombreApellido.length < 3) {
        error.innerText = "El nombre o apellido ingresado es muy corto.";
        elementoParaError.insertAdjacentElement("afterend", error);
    } else if (!regexNombre.test(valorNombreApellido)) {
        error.innerText = "Inserta un nombre o apellido válido. Se aceptan sólo caracteres de la A a la Z, minúsculas y mayúsculas.";
        elementoParaError.insertAdjacentElement("afterend", error);
    } else {
        error.remove();
        return valorNombreApellido;
    }
};

formNombre.addEventListener("focusout", () => {
    validaNombreApellido(formNombre.value, formNombre, mensajeErrorNombre);
});

// Validación Apellido
formApellido.addEventListener("focusout", () => {
    validaNombreApellido(formApellido.value, formApellido, mensajeErrorApellido)
})

/* Validación correo electrónico */

const validaCorreo = () => {
    let valorCorreo = formCorreo.value.trim();
    // Expresión regular: estructura básica de un correo (aaa@bbb.ccc)
    const basicEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular: símbolos no permitidos en correo
    const regexCaracteresInvalidos = /[(),:;<>[\]\\]/;

    // Check that the email matches the basic format
    if (!basicEmailPattern.test(email)) {
        return false;
    }

    // Check that the email does not contain any invalid characters
    if (invalidChars.test(email)) {
        return false;
    }

}

/* Validación Contraseña */
let valorContrasena = formContrasena.value.trim();
const validaContrasena = () => {
    /* Expresión regular que procura la existencia de, al menos, 8 caracteres, 1 en mayúsculas, 1 caracter especial y 1 número, restringiendo los espacios en blanco */
    const regexContrasena = /^(?!.*\s)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    if (!regexContrasena.test(valorContrasena)) {
        mensajeErrorContrasena.innerText = "La contraseña no es válida. Debe contener, al menos, 8 caracteres, 1 en mayúsculas, 1 caracter especial y 1 número, restringiendo los espacios en blanco.";
        formContrasena.insertAdjacentElement("afterend", mensajeErrorContrasena);
    } else {
        mensajeErrorContrasena.remove();
    };
};

formContrasena.addEventListener("focusout", () => {
    validaContrasena();
});

/* Validación repetir contrasena */

const validaRepetirContrasena = () => {
    let valorRepetirContrasena = formRepetirContrasena.value.trim();
    if (!valorRepetirContrasena == valorContrasena) {
        mensajeErrorRepetirContrasena.innerText = "Las contraseñas deben ser iguales."
        formRepetirContrasena.insertAdjacentElement("afterend", mensajeErrorRepetirContrasena)
    } else {
        mensajeErrorRepetirContrasena.remove();
    }
}

formRepetirContrasena.addEventListener("focusout", () => {
    validaRepetirContrasena();
})

/* METODO POST PARA REGISTRO USUARIO */

const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (submitEvent) => {
    submitEvent.preventDefault();

    const formElement = submitEvent.currentTarget;
    const formData = new FormData(formElement);
    const correo = formData.get("correo");
    const contrasena = formData.get("contrasena");

    const usuario = {
        correo,
        contrasena,
    };

    const baseURL = "http://localhost:3000";
    const url = baseURL + "/registro";
    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    };

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
