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


function transformarFecha(fecha) {

    let formatoFecha = new Date(fecha);

    let mes = (formatoFecha.getMonth() + 1);
    let dia = (formatoFecha.getDate() + 1);
    let anio = formatoFecha.getFullYear();

    if (dia == 31 && (mes == 4 || mes == 6 || mes == 9 || mes == 11)) {
        dia = 1;
        mes = mes + 1
    } else if (dia == 32 && (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10)) {
        dia = 1;
        mes = mes + 1;
    } else if (dia == 32 && mes == 12) {
        dia = 1;
        mes = 1;
        anio = anio + 1;
    } else if (dia == 29 && mes == 2) {
        dia = 1;
        mes = mes + 1;
    }

    if (mes.length < 2) {
        mes = "0" + mes;
    }
    if (dia.length < 2) {
        dia = "0" + dia;
    }

    let nuevaFecha = [dia, mes, anio].join("-");
    return nuevaFecha;
}


const queryFechaIndicador = document.getElementById("fechaQuery")
let formatoFechaCorrecto = "";

queryFechaIndicador.addEventListener("change", () => {
    let queryFecha = queryFechaIndicador.value
    formatoFechaCorrecto = transformarFecha(queryFecha)
})

const botonSubmit = document.getElementById("consultarIndice")

botonSubmit.addEventListener("click", (evento) => {

    fetch(`https://mindicador.cl/api/${valorBoton}/${formatoFechaCorrecto}`)
        .then(response => response.json())
        .then(datos => {

            let valorRespuesta = document.createElement("article")
            valorRespuesta.innerHTML = `
        <article> 
            <h5>A la fecha del ${formatoFechaCorrecto}, el valor del índice seleccionado (${datos.nombre}) es de ${datos.serie[0].valor}</h5>
        </article>
        `
            document.getElementById("fechaIndicador").append(valorRespuesta)
        })

        let botonDescarga = document.createElement("button")
        botonDescarga.innerText = "Descargar CSV"

        document.getElementById("fechaIndicador").append(botonDescarga)

        botonDescarga.addEventListener("click", () => {

            fetch(`https://mindicador.cl/api/${valorBoton}/${formatoFechaCorrecto}`)
            .then(response => response.json())
            .then(data => {
              // Convert JSON to CSV
              const csv = Papa.unparse(data.serie);
              // Create a Blob object
              const blob = new Blob([csv], { type: 'text/csv' });
          
              // Create a download link
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'data.csv';
          
              link.click();
  
            });
        })
});