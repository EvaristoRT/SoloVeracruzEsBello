const tbody = document.querySelector(".contenidoTablaClima");

function obtenerIconoClima(estado) {//Funcion para colocar el icono correspondiente al estado del dia
    switch (estado) {
        case "Soleado":
            return "bi-sun";

        case "Parcialmente nublado":
            return "bi-cloud-sun";

        case "Nublado":
            return "bi-cloud";

        case "Lluvioso":
            return "bi-cloud-rain";

        case "Tormenta eléctrica":
            return "bi-cloud-lightning-rain";

        case "Caluroso":
            return "bi-brightness-high";

        default:
            return "bi-question-circle";
    }
}


clima.forEach(dia => {

    const icono = obtenerIconoClima(dia.estado);

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${dia.dia}</td>
        <td>
            <i class="bi ${icono}"></i>
            ${dia.estado}
        </td>
        <td>
            <span class="tempMax">${dia.max}°</span> / ${dia.min}°
        </td>
    `;

    tbody.appendChild(fila);
});