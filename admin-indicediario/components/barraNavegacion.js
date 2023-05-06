import { useState, useEffect, useRef } from 'react';

export default function BarraNavegacion() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [usuarioIngresado, setUsuarioIngresado] = useState(false);

    const verificarUsuario = async () => {

        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "inicio.html";
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
            window.location = "ingreso.html";
            throw new Error("Error al verificar usuario");
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(true);
    };

    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutsideMenu);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMenu);
        };

    }, [menuRef]);

    useEffect(() => {
        let usuario = localStorage.getItem("usuario")
        if (usuario) {
            setUsuarioIngresado(true);
        }
    }, [])

    const handleCerrarSesion = () => {
        localStorage.removeItem('usuario');
        const usuarioLocal = localStorage.getItem("usuario");
        if (usuarioLocal == null) {
            window.location = "/Indice-Diario-Cliente/inicio.html";
        } else {
            window.location = "/Indice-Diario-Cliente/perfil"
        }

        verificarUsuario();
    }

    return (
        <>
            <nav>
                <picture id="contenedor-icono-barras" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="icono-barras" fill="#fff" viewBox="0 0 448 512"><path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
                </picture>
                <a href="/Indice-Diario-Cliente/inicio.html">
                    <h1 id="titulo-principal">Índice Diario</h1>
                </a>
                <ul id="lista-barra-navegacion">
                    <li><a href="/Indice-Diario-Cliente/inicio.html">Inicio</a></li>
                    <li><a href="/Indice-Diario-Cliente/planes.html">Planes</a></li>
                    <li><a href="/Indice-Diario-Cliente/glosario.html">Glosario</a></li>
                    {usuarioIngresado ?
                        <>
                            <li><a href="/Indice-Diario-Cliente/perfil">Perfil</a></li>
                            <li><a href="/Indice-Diario-Cliente/consulta">Consultas</a></li>
                            <li><a href="/Indice-Diario-Cliente/inicio.html" onClick={handleCerrarSesion}>Cerrar sesión</a></li>
                        </> :
                        <>
                            <li><a href="/Indice-Diario-Cliente/ingreso.html">Ingreso</a></li>
                            <li><a href="/Indice-Diario-Cliente/registro.html">Regístrate</a></li>
                        </>
                    }
                </ul>

            </nav>
            {isMenuOpen && (
                <section id="menu-lateral" className={'show'} ref={menuRef}>
                    <h3>Menú</h3>
                    <ul id="lista-menu-lateral">
                        <li>
                            <a href="/Indice-Diario-Cliente/inicio.html" className="links-menu-lateral">
                                <svg width="800px" className="iconos-menu-lateral" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <g id="Navigation / House_01"> <path id="Vector" d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" /> </g> </g></svg>
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/Indice-Diario-Cliente/planes.html" className="links-menu-lateral">
                                <svg xmlns="http://www.w3.org/2000/svg" className="iconos-menu-lateral" width="800px" height="800px" viewBox="0 0 24.00 24.00" fill="none" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_iconCarrier"> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /> <line x1="3" y1="9" x2="21" y2="9" /> <line x1="3" y1="15" x2="21" y2="15" /> <line x1="9" y1="9" x2="9" y2="21" /> <line x1="15" y1="9" x2="15" y2="21" /> </g></svg>
                                Planes
                            </a>
                        </li>
                        <li>
                            <a href="/Indice-Diario-Cliente/glosario.html" className="links-menu-lateral">
                                <svg className="iconos-menu-lateral" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm104 0c0-13.3 10.7-24 24-24h224c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24h224c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24h224c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-32 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0z" /></svg>
                                Glosario
                            </a>
                        </li>

                        {usuarioIngresado ?
                            <>
                                <li>
                                    <a href="/Indice-Diario-Cliente/perfil" className="links-menu-lateral">
                                        <svg className="iconos-menu-lateral" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z" /></svg>
                                        Perfil
                                    </a>
                                </li>
                                <li>
                                    <a href="/Indice-Diario-Cliente/consulta" className="links-menu-lateral">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="iconos-menu-lateral" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V314.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H158.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                        Consultas
                                    </a>
                                </li>
                                <li>
                                    <a href="/Indice-Diario-Cliente/inicio.html" className="links-menu-lateral" onClick={handleCerrarSesion}>
                                        <svg className="iconos-menu-lateral" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                                        Cerrar sesión
                                    </a>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <a href="/Indice-Diario-Cliente/ingreso.html" className="links-menu-lateral">
                                        <svg className="iconos-menu-lateral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <g id="User / User_02"> <path id="Vector" d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" /> </g> </g></svg>
                                        Ingresa
                                    </a>
                                </li>
                                <li>
                                    <a href="/Indice-Diario-Cliente/registro.html" className="links-menu-lateral">
                                        <img src="./assets/img/registro.svg" alt="" />
                                        <svg className="iconos-menu-lateral" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <g id="User / User_Add"> <path id="Vector" d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M19 16V13M19 13V10M19 13H16M19 13H22M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#000000" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" /> </g> </g></svg>
                                        Regístrate
                                    </a>
                                </li>
                            </>

                        }
                    </ul>
                </section>
            )}
        </>

    )
}