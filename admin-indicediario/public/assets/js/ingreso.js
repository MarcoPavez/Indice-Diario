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

    const baseURL = "https://placid-seen-raven.glitch.me";
    const url = baseURL + "/ingreso"
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
        
        const usuarioLogin = objetoJSON.user;
        localStorage.setItem('usuario', JSON.stringify(usuarioLogin));
        window.location = '/perfil';
    } catch (error) {
        //gestionar errores
        console.error(error.code);
        console.error(error.message);
    }
});