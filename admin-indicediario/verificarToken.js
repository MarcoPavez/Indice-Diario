export const verificarUsuario = async () => {
    
    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal == null) {
        window.location = "/Indice-Diario-Cliente/inicio.html";
    }
    const objetoUsuario = JSON.parse(usuarioLocal);
    const token = objetoUsuario.stsTokenManager.accessToken;

    const baseURL = "https://placid-seen-raven.glitch.me";
    const url = baseURL + "/usuario/verificarToken";
  
    try {
      const respuesta = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
  
      if (!respuesta.ok) {
        throw new Error("Token inválido");
      }

      const data = await respuesta.json();
      return data;
    } catch (error) {
      console.log(error.message);
      window.location = "/Indice-Diario-Cliente/ingreso.html";
      throw new Error("Error al verificar usuario");
    }
  };