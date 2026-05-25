const contenidoEncabezadoDestinos = document.querySelector(".contenidoEncabezadoDestinos")
const contenedorTarjetas = document.querySelector(".contenedorTarjetas");

function cargarPlayas(){
    contenedorTarjetas.innerHTML = "";
    contenidoEncabezadoDestinos.innerHTML = `
        <p class="etiquetaEncabezadoDestinos">
            ${encabezados[0].etiqueta}
        </p>
        <p class="tituloDestinos">
            Hermosas <br>
            <span>Playas</span>
        </p>
        <p class="descripcionDestinos">
            ${encabezados[0].descripcion}
        </p>
        <p class="comienzoViaje">
            Comienza tu viaje
        </p>
    `
    document.querySelector(".encabezadoDestinos").style.backgroundImage = `linear-gradient(
        rgba(0, 30, 64, 0.0),
        rgba(0, 30, 64, 0.7)),url(${encabezados[0].imagen})`;
    playas.forEach(
        ciudad => {
            contenedorTarjetas.innerHTML += `
                <div class="tarjetaDestino">
                    <div class="encabezadoTarjetaDestino" style="background-image: url(${ciudad.imagen})">
                        <p class="etiquetaTarjetaDestino">
                            ${ciudad.caracteristica}
                        </p>
                    </div>
                    <div class="descripcionTarjetaDestino">
                        <p class="tituloDescripcionTarjetaDestino">
                            ${ciudad.nombre}
                        </p>
                        <p class="textoTarjetaDestino">
                            ${ciudad.descripcion}
                        </p>
                    </div>
                </div>
            `
        }
    )
};

function cargarPueblos(){
    contenedorTarjetas.innerHTML = "";
    contenidoEncabezadoDestinos.innerHTML = `
        <p class="etiquetaEncabezadoDestinos">
            ${encabezados[1].etiqueta}
        </p>
        <p class="tituloDestinos">
            Pueblos <br>
            <span>Mágicos</span>
        </p>
        <p class="descripcionDestinos">
            ${encabezados[1].descripcion}
        </p>
        <p class="comienzoViaje">
            Comienza tu viaje
        </p>
    `
    document.querySelector(".encabezadoDestinos").style.backgroundImage = `linear-gradient(
        rgba(0, 30, 64, 0.0),
        rgba(0, 30, 64, 0.7)),url(${encabezados[1].imagen})`;
    pueblosMagicos.forEach(
        ciudad => {
            contenedorTarjetas.innerHTML += `
                <div class="tarjetaDestino">
                    <div class="encabezadoTarjetaDestino" style="background-image: url(${ciudad.imagen})">
                        <p class="etiquetaTarjetaDestino">
                            ${ciudad.caracteristica}
                        </p>
                    </div>
                    <div class="descripcionTarjetaDestino">
                        <p class="tituloDescripcionTarjetaDestino">
                            ${ciudad.nombre}
                        </p>
                        <p class="textoTarjetaDestino">
                            ${ciudad.descripcion}
                        </p>
                    </div>
                </div>
            `
        }
    )
};

function cargarSelva(){
    contenedorTarjetas.innerHTML = "";
    contenidoEncabezadoDestinos.innerHTML = `
        <p class="etiquetaEncabezadoDestinos">
            ${encabezados[2].etiqueta}
        </p>
        <p class="tituloDestinos">
            Selva y <br>
            <span>Aventura</span>
        </p>
        <p class="descripcionDestinos">
            ${encabezados[2].descripcion}
        </p>
        <p class="comienzoViaje">
            Comienza tu viaje
        </p>
    `
    document.querySelector(".encabezadoDestinos").style.backgroundImage = `linear-gradient(
        rgba(0, 30, 64, 0.0),
        rgba(0, 30, 64, 0.7)),url(${encabezados[2].imagen})`;
    selvaYAventura.forEach(
        ciudad => {
            contenedorTarjetas.innerHTML += `
                <div class="tarjetaDestino">
                    <div class="encabezadoTarjetaDestino" style="background-image: url(${ciudad.imagen})">
                        <p class="etiquetaTarjetaDestino">
                            ${ciudad.caracteristica}
                        </p>
                    </div>
                    <div class="descripcionTarjetaDestino">
                        <p class="tituloDescripcionTarjetaDestino">
                            ${ciudad.nombre}
                        </p>
                        <p class="textoTarjetaDestino">
                            ${ciudad.descripcion}
                        </p>
                    </div>
                </div>
            `
        }
    )
};

// ── Router ──────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const tipo   = params.get("tipo");

const funciones = {
    playas:  cargarPlayas,
    pueblos: cargarPueblos,
    selva:   cargarSelva,
};

(funciones[tipo] ?? cargarPlayas)();