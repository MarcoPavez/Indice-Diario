document.getElementById("botonesInternacionales").style.display = "none";

const botonIndicesNacionales = document.getElementById("indicesNacionales")
const botonIndicesInternacionales = document.getElementById("indicesInternacionales")

botonIndicesNacionales.addEventListener("click", () => {
    document.getElementById("botonesInternacionales").style.display = "none";
    document.getElementById("botonesNacionales").style.display = "grid";
})

botonIndicesInternacionales.addEventListener("click", () => {
    document.getElementById("botonesNacionales").style.display = "none";
    document.getElementById("botonesInternacionales").style.display = "grid";
})


/* FETCH API MINDICADOR.CL */


const queryIndicesNacionales = document.getElementsByClassName("botonIndice")

let valorBoton = "";

for (let i = 0; i < queryIndicesNacionales.length; i++) {
    queryIndicesNacionales[i].addEventListener("click", () => {
        valorBoton = queryIndicesNacionales[i].value;
    });
}

const queryFechaIndicador = document.getElementById("fechaQuery")
let fechaCorregida = "";

function transformarFecha(fecha) {
    formatoCorrecto = fecha.split("-").reverse().join("-")
    return formatoCorrecto
}

queryFechaIndicador.addEventListener("change", () => {
    let queryFecha = queryFechaIndicador.value
    fechaCorregida = transformarFecha(queryFecha)
})

const botonSubmit = document.getElementById("consultarIndice")

let valorRespuesta = document.createElement("article")
let botonDescarga = document.createElement("button")
botonSubmit.addEventListener("click", () => {

 

        fetch(`https://mindicador.cl/api/${valorBoton}/${fechaCorregida}`)
        .then(response => response.json())
        .then(datos => {

            
            valorRespuesta.innerHTML = `
        <article> 
            <h5>A la fecha del ${fechaCorregida}, el valor del índice seleccionado (${datos.nombre}) es de ${datos.serie[0].valor}</h5>
        </article>
        `
            document.getElementById("fechaIndicador").append(valorRespuesta)

            
            botonDescarga.innerText = "Descargar CSV"

            document.getElementById("fechaIndicador").append(botonDescarga)

            botonDescarga.addEventListener("click", () => {

                /* CSV como un string */
                const csv = Papa.unparse(datos.serie);
      
                /* Crea objeto Blob a partir de const csv. El objeto Blob es capaz de leer el string como CSV  */
                const blob = new Blob([csv], { type: 'text/csv' });

                /* Crea url y descargable de const blob  */
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'data.csv';

                link.click();
            })
        }).catch(error => {

            if(error.message == "datos.serie[0] is undefined"){
                valorRespuesta.innerHTML = `
                <article> 
                    <h5>A la fecha, no existen valores del indicador. Existen índices cuyo valor del mes actual se conoce durante los próximos meses.</h5>
                </article>
                `
                    document.getElementById("fechaIndicador").append(valorRespuesta)
            }

            
        })
     

});