const listaTradiciones = document.querySelector(".listaTradiciones")

tradiciones.forEach(
    tradicion => {
        listaTradiciones.innerHTML += `
            <div class="tarjetaTradicion">
                <div class="encabezadoTradicion" style="background-image: url('${tradicion.imagen}')">
                    <p class="etiquetaTradicion">${tradicion.etiqueta}</p>
                </div>
                <div class="cuerpoTradicion">
                    <p class="tituloTradicion">${tradicion.titulo}</p>
                    <p class="descripcionTradicion">
                        ${tradicion.descripcion}
                    </p>
                </div>
            </div>
        `
    }
)