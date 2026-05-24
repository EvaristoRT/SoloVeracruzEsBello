const proximosEventos = document.querySelector(".proximosEventos");

const evento = eventos.filter(
    event => event.dia >= diaActual 
)




evento.forEach(
    (event) => {
        proximosEventos.innerHTML += `
            <article class="evento">
                <div class="fechaEvento ${event.dia == diaActual ? "activo" : ""}">
                    <p>${event.mes} <br>${event.dia}</p>
                </div>
                <div class="informacionEvento">
                    <p class="nombreEvento">${event.nombre}</p>
                    <p class="ubicacionHoraEvento">${event.ubicacionHora}</p>
                </div>
            </article>
        `
    }
)