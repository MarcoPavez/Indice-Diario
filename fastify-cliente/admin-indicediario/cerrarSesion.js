import { verificarUsuario } from "./verificarToken";

export const handleCerrarSesion = () => {
    localStorage.removeItem('usuario');
    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal == null) {
        window.location = "/inicio.html";
    } else {
        window.location = "/perfil"
    }

    verificarUsuario();
}