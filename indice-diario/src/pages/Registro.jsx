import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/registro.css";

const Registro = () => {
  const [crearUsuario, setCrearUsuario] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    genero: "",
    fechaNacimiento: "",
    pais: "",
    inputTerminosCondiciones: false,
  });

  return (
    <form action="index.html" method="get" id="formRegistro">
      <h2>Regístrate</h2>

      <fieldset id="perfil">
        <legend>Perfil</legend>

        <label for="nombre">Ingresa tu nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ej: Pablo"
          required
        />
        <span></span>

        <label for="apellido">Ingresa tu apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Ej: Martínez"
          required
        />
        <span></span>

        <label for="nombreUsuario">Ingresa tu nombre de usuario</label>
        <input
          type="text"
          name="nombreUsuario"
          id="nombreUsuario"
          placeholder="Ej: PMartinez"
        />
        <span></span>
      </fieldset>

      <fieldset id="contactoSeguridad">
        <legend>Contacto y seguridad</legend>

        <label for="correo">Correo electrónico</label>

        <input
          type="email"
          name="correo"
          placeholder="Ej: pablomart@gmail.com"
          required
        />
        <span></span>

        <label for="contrasena">Contraseña</label>

        <input type="password" name="contrasena" required />

        <span>
          Debe contener, al menos, 8 caracteres, una letra mayúscula, una letra
          minúscula, un número y un caracter especial.
        </span>

        <label for="confirmarContrasena">Confirmar contraseña</label>

        <input type="password" name="confirmarContrasena" required />
        <span></span>
      </fieldset>

      <fieldset id="datosComplementarios">
        <legend>Datos complementarios</legend>

        <div id="datosComplementariosSuperior">
          <div class="divRadio">
            <label for="masculino">Masculino</label>
            <input
              type="radio"
              id="masculino"
              name="genero"
              value="masculino"
            ></input>
          </div>

          <div class="divRadio">
            <label for="femenino">Femenino</label>
            <input type="radio" id="femenino" name="genero" value="femenino" />
          </div>

          <div class="divRadio">
            <label for="otro">Otro</label>
            <input type="radio" id="otro" name="genero" value="otro" />
          </div>
        </div>

        <div id="datosComplementariosInferior">
          <div>
            <label for="fechaNacimiento">Fecha de nacimiento</label>
            <br></br>

            <input
              type="date"
              name="fechaNacimiento"
              id="fechaNacimiento"
              required
            />
          </div>
          <div>
            <label for="seleccionarPais">País de residencia</label>

            <select name="pais" id="seleccionarPais" required>
              <option value="">Selecciona una opción</option>
              <option value="chile">Chile</option>
              <option value="argentina">Argentina</option>
              <option value="peru">Perú</option>
              <option value="venezuela">Venezuela</option>
              <option value="brasil">Brasil</option>
              <option value="colombia">Colombia</option>
              <option value="uruguay">Uruguay</option>
              <option value="ecuador">Ecuador</option>
            </select>
          </div>
        </div>
      </fieldset>

      <label id="labelTerminosCondiciones">
        <input
          type="checkbox"
          name="inputTerminosCondiciones"
          id="inputTerminosCondiciones"
          value="acepta"
          required
        />
        <br></br>
        Acepto los Términos y Condiciones
        <span></span>
      </label>

      <input type="submit" id="botonSubmit" value={"Regístrate"}></input>

      <span>
        ¿Ya tienes una cuenta? <Link to="/ingreso">Ingresa</Link>
      </span>
    </form>
  );
};

export default Registro;
