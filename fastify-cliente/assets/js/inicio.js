document.getElementById("botones-internacionales").style.display = "none";

const botonIndicesNacionales = document.getElementById("indices-nacionales");
const botonIndicesInternacionales = document.getElementById(
  "indices-internacionales"
);

/* Funcionalidad: mostrar botones nacionales o internacionales */

botonIndicesNacionales.addEventListener("click", () => {
  document.getElementById("botones-internacionales").style.display = "none";
  document.getElementById("botones-nacionales").style.display = "grid";
});

botonIndicesInternacionales.addEventListener("click", () => {
  document.getElementById("botones-nacionales").style.display = "none";
  document.getElementById("botones-internacionales").style.display = "grid";
});

/* Obtiene valor de boton clickeado */
const queryIndicesNacionales = document.getElementsByClassName("boton-indice");
let valorBoton = "";

for (let i = 0; i < queryIndicesNacionales.length; i++) {
  queryIndicesNacionales[i].addEventListener("click", () => {
    valorBoton = queryIndicesNacionales[i].value;
  });
}





/* Obtiene valor de fecha seleccionada */

/* const queryFechaIndicador = document.getElementById("fecha-query");
let fechaCorregida = "";

function transformarFecha(fecha) {
  formatoCorrecto = fecha.split("-").reverse().join("-");
  return formatoCorrecto;
}

queryFechaIndicador.addEventListener("change", () => {
  let queryFecha = queryFechaIndicador.value;
  fechaCorregida = transformarFecha(queryFecha);
}); */

{/* <article> 
            <h5>A la fecha del ${fechaCorregida}, el valor del índice seleccionado (${datos.nombre}) es de ${datos.serie[0].valor}</h5>
        </article> */}




/* FETCH API MINDICADOR.CL */
/* Realiza consulta a API según valores previos y genera respuesta */
const botonSubmit = document.getElementById("consultar-indice");
let valorRespuesta = document.createElement("article");
/* let botonDescarga = document.createElement("button") */

botonSubmit.addEventListener("click", () => {
  fetch(`https://mindicador.cl/api/${valorBoton}`)
    .then((response) => response.json())
    .then((datos) => {
      valorRespuesta.innerHTML = `
        <article> 
            <h4 class="titulos-de-consultas">Resultado de la consulta</h4>
            <p class="parrafos-informativos">A día de hoy, el valor del índice seleccionado (<strong>${datos.nombre}</strong>) es de ${datos.serie[0].valor}. Este indicador se mide en ${datos.unidad_medida}.</p>
        </article>
        `;
      document.getElementById("despliegue-respuesta").append(valorRespuesta);
    })
    .catch((error) => {
      if (error.message == "datos.serie[0] is undefined") {
        valorRespuesta.innerHTML = `
                <article> 
                    <h5>A la fecha, no existen valores del indicador. Esto puede ocurrir debido a que el Banco Central da a conocer los valores de algunos índices con rezago. Por ejemplo, en el caso del IMACEC, recién en mayo de 2023 se conocerá su valor del mes de marzo.</h5>
                </article>
                `;
        document.getElementById("despliegue-respuesta").append(valorRespuesta);
      } else {
        console.log(error);
      }
    });
});

/* 
            Genera botón para descarga de respuesta en formato CSV
            botonDescarga.innerText = "Descargar CSV"

            document.getElementById("fechaIndicador").append(botonDescarga)

            botonDescarga.addEventListener("click", () => {

                CSV como un string 
                const csv = Papa.unparse(datos.serie);
      
                Crea objeto Blob a partir de const csv. El objeto Blob es capaz de leer el string como CSV 
                const blob = new Blob([csv], { type: 'text/csv' });

                Crea url y descargable de const blob 
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'data.csv';

                link.click();
            }) */
