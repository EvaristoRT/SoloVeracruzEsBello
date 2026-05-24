const contenedorEfemerides = document.querySelector(".contenedorEfemeride") //Obteniendo el contenedor que se llenará automáticamente con el json
const fecha = new Date(); //Se crea un objeto tipo fecha para obtener la misma después
const diaActual = fecha.getDate();//Obtener la fecha directamente del navegador

const efemeridesPasadas = efemerides.filter(
    efemeride => efemeride.dia <= diaActual
);

const efemerideDelDia = efemeridesPasadas[efemeridesPasadas.length-1]


const proximaEfemeride = efemerides.find(
    efemeride => efemeride.dia > diaActual
)

contenedorEfemerides.innerHTML = `
    <p class="encabezadoEfemeride">
        <i class="bi bi-journal-richtext"></i><span>EFEMÉRIDES</span>
    </p>
    <p class="fechaEfemeride">
        ${efemerideDelDia.dia} de Junio
    </p>
    <p class="textoEfemeride">
        ${efemerideDelDia.titulo}: ${efemerideDelDia.descripcion}
    </p>
    <p class="proxima">
        Próximamente
    </p>
    <p class="proximaEfemeride">
        ${proximaEfemeride.titulo}: ${proximaEfemeride.descripcion}
    </p>
`;
