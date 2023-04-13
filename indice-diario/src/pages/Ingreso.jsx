import React from 'react'
import { Link } from "react-router-dom"
import "../styles/ingreso.css"

const Ingreso = () => {

  return (
    <form action="index.html" method="get" id="formIngreso">
      <h2>Ingresa</h2>

      

        <label for="ingresoNombre">Ingresa tu correo electrónico o nombre de usuario</label>
        <input
          type="text"
          name="ingresoNombreUsuario"
          id="ingresoNombreUsuario"
          required
        />
        <span></span>

        <label for="apellido">Ingresa tu contraseña</label>
        <input
          type="password"
          name="ingresoContrasena"
          id="ingresoContrasena"
          required
        />
        <span></span>

      <input type="submit" id="botonIngreso" value={"Ingresa"}></input>

      <span>
        ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
      </span>
    </form>
  )
}

export default Ingreso