const listaNoticias = document.querySelector(".listaNoticias");

noticias.forEach(
    noticia => {
        listaNoticias.innerHTML += `
            <article class="tarjetaNoticia">
                <div class="imagenNoticia">
                    <img src="${noticia.imagen}" alt="imagen de la noticia">
                </div>
                <div class="contenidoDeNoticia">
                    <p class="tituloTarjetaNoticia">${noticia.titulo}</p>
                    <p class="descripcionNoticia">${noticia.descripcion}</p>
                    <!--<a href="#">Leer crónica completa</a>-->
                </div>
            </article>
        `
    }
)