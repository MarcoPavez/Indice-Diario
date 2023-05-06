import { verificarUsuario } from "./verificarToken";

export default function handleCerrarSesion () {
    localStorage.removeItem('usuario');
    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal == null) {
        window.location = "/Indice-Diario-Cliente/inicio.html";
    } else {
        window.location = "/Indice-Diario-Cliente/perfil"
    }
    verificarUsuario();
}