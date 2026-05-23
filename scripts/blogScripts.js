// ─── Generar tarjetas ─────────────────────────────────────────────
const track = document.querySelector(".trackCarrusel");

saludos.forEach((saludo) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjetaSaludo");

    tarjeta.innerHTML = `
        <div class="encabezadoTarjetaSaludo">
            <div class="imagenTarjetaSaludo">
                <img src="${saludo.imagen}" alt="Foto de ${saludo.nombre}">
            </div>
            <div class="infoPersonaSaludo">
                <p class="nombrePersona">${saludo.nombre}</p>
            </div>
        </div>
        <div class="textoTarjetaSaludo">
            <p class="dedicatoria">${saludo.dedicatoria}</p>
            <p class="solicitud">SOLICITADO POR: ${saludo.solicitud}</p>
        </div>
    `;

    track.appendChild(tarjeta);
});

// ─── Clonar todas las tarjetas al final ───────────────────────────
// El track queda: [1,2,3,4,5,6, 1,2,3,4,5,6]
Array.from(track.children).forEach(tarjeta => {
    track.appendChild(tarjeta.cloneNode(true));
});

// ─── Lógica del carrusel ──────────────────────────────────────────
const btnAnterior = document.querySelector(".tarjetaAnterior");
const btnSiguiente = document.querySelector(".tarjetaSiguiente");

const totalTarjetas = saludos.length; // 6
let indiceActual = 0;
let animando = false; // evita clicks mientras se anima

function moverCarrusel(conAnimacion = true) {
    const tarjeta = track.querySelector(".tarjetaSaludo");
    const anchoPorTarjeta = tarjeta.offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap);
    const desplazamiento = indiceActual * (anchoPorTarjeta + gap);

    track.style.transition = conAnimacion ? "transform .5s ease" : "none";
    track.style.transform = `translateX(-${desplazamiento}px)`;
}

btnSiguiente.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    indiceActual++;
    moverCarrusel();

    // Si llegamos al inicio de los clones (índice 6), saltamos al original
    if (indiceActual === totalTarjetas) {
        setTimeout(() => {
            indiceActual = 0;
            moverCarrusel(false); // sin animación, el usuario no lo nota
            animando = false;
        }, 500);
    } else {
        setTimeout(() => animando = false, 500);
    }
});

btnAnterior.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    indiceActual--;
    moverCarrusel();

    // Si llegamos antes del índice 0, saltamos al final de los originales
    if (indiceActual < 0) {
        setTimeout(() => {
            indiceActual = totalTarjetas - 1;
            moverCarrusel(false);
            animando = false;
        }, 500);
    } else {
        setTimeout(() => animando = false, 500);
    }
});