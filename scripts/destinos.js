const pueblosMagicos = [
    {
        "nombre": "Coatepec",
        "caracteristica": "Capital del Café",
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0c/67/06/14/atardecer-en-coatepec.jpg",
        "descripcion": "Entre montañas cubiertas de neblina y cafetales interminables, Coatepec enamora con el aroma intenso del café veracruzano. Sus calles tranquilas, casonas coloniales y tradición cafetalera lo convierten en uno de los rincones más representativos de Veracruz."
    },

    {
        "nombre": "Coscomatepec",
        "caracteristica": "Mirador del Pico de Orizaba",
        "imagen": "https://visitmexico.com/media/usercontent/67f82957645dd-67f6e2c7b94d2-COSCOMATEPEC_ver_gmxdot_jpg",
        "descripcion": "Custodiado por la majestuosidad del Pico de Orizaba, Coscomatepec mezcla tradición, mercados llenos de color y paisajes de montaña. Un pueblo donde la cultura indígena y la esencia veracruzana siguen vivas en cada rincón."
    },

    {
        "nombre": "Córdoba",
        "caracteristica": "La Ciudad de los 30 Caballeros",
        "imagen": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2023/07/@SECTUR_mx_centro_1600.jpg",
        "descripcion": "Cuna de historia, café y tradición, Córdoba destaca por sus calles elegantes y su importante papel en la independencia de México. Sus portales y jardines guardan el encanto de una ciudad donde el pasado aún se respira."
    },

    {
        "nombre": "Naolinco",
        "caracteristica": "Tierra del Calzado Artesanal",
        "imagen": "https://machbel.com/fotos/2015/05/Calle-comercial-de-Naolinco-Pueblo-de-Naolinco-Veracruz-M%C3%A9xico-by-machbel.jpg",
        "descripcion": "Famoso por la elaboración artesanal de calzado y cuero, Naolinco combina tradición, arquitectura colonial y un ambiente lleno de cultura. Sus calles empedradas y festividades reflejan la esencia auténtica de Veracruz."
    },

    {
        "nombre": "Orizaba",
        "caracteristica": "La Ciudad de las Aguas Alegres",
        "imagen": "https://alhorizonte.com.mx/wp-content/uploads/2023/07/orizaba.webp",
        "descripcion": "Rodeada de montañas y atravesada por ríos cristalinos, Orizaba deslumbra con su belleza natural y urbana. Teleféricos, museos y calles limpias convierten a esta ciudad en uno de los destinos más modernos y encantadores de Veracruz."
    },

    {
        "nombre": "Papantla",
        "caracteristica": "La Ciudad que Perfuma al Mundo",
        "imagen": "https://visitmexico.com/media/usercontent/67fd5a0da3f67-papantla2_gmxdot_jpg",
        "descripcion": "Hogar de los totonacas, Papantla mezcla la esencia de la vainilla silvestre con el desafío de la gravedad de los Voladores. Entre tradiciones ancestrales y aromas únicos, este pueblo mágico mantiene viva una de las culturas más emblemáticas de México."
    },

    {
        "nombre": "Xico",
        "caracteristica": "Tradición entre Montañas",
        "imagen": "https://heraldodemexico.com.mx/u/fotografias/m/2021/2/18/f1280x720-322696_454371_5050.jpg",
        "descripcion": "Entre cascadas, neblina y calles llenas de color, Xico destaca por sus tradiciones, su mole y sus fiestas patronales. Un pueblo mágico donde la naturaleza y la cultura veracruzana se encuentran en perfecta armonía."
    },

    {
        "nombre": "Zozocolco",
        "caracteristica": "El Pueblo de los Globos de Papel",
        "imagen": "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mp8M21voj1TxVezR/zozocolco-veracruz-pueblo-magico-globos-monumentales-festival-A3QJ6jxW63tgRkrq.jpg",
        "descripcion": "Enclavado en la sierra totonaca, Zozocolco brilla por sus impresionantes globos de papel gigantes que iluminan el cielo durante sus festividades. Naturaleza, tradición indígena y paisajes espectaculares hacen de este lugar una joya escondida de Veracruz."
    }
];

const playas = [

    {
        "nombre": "Alvarado",
        "caracteristica": "Tradición entre mar y lagunas",
        "imagen": "https://www.mexicoplayas.com/wp-content/uploads/2025/02/playa-mata-de-uva.jpg",
        "descripcion": "Con una fuerte herencia jarocha y paisajes rodeados de agua, Alvarado combina gastronomía, tradición pesquera y hermosos atardeceres frente al Golfo de México."
    },

    {
        "nombre": "Catemaco",
        "caracteristica": "Naturaleza y misticismo",
        "imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a4/93/b1/caption.jpg?w=500&h=500&s=1",
        "descripcion": "Rodeado de selva tropical, lagunas y una enorme biodiversidad, Catemaco es uno de los destinos más mágicos de Veracruz. La aventura, el ecoturismo y las tradiciones ancestrales conviven en cada rincón."
    },

    {
        "nombre": "Costa Esmeralda",
        "caracteristica": "Paraíso del Golfo",
        "imagen": "https://emporioveracruz.com/wp-content/uploads/2023/07/FOTO1.jpg",
        "descripcion": "Kilómetros de playas tranquilas, arena dorada y paisajes naturales convierten a Costa Esmeralda en uno de los destinos favoritos para descansar y disfrutar del mar veracruzano."
    },

    {
        "nombre": "Nautla",
        "caracteristica": "Ríos que abrazan el mar",
        "imagen": "https://www.turimexico.com/wp-content/uploads/2015/06/Nautla-Veracruz.jpg",
        "descripcion": "Con paisajes donde los ríos desembocan en el Golfo de México, Nautla destaca por su tranquilidad, su gastronomía marina y sus escenarios naturales perfectos para relajarse."
    },

    {
        "nombre": "Tecolutla",
        "caracteristica": "Aventura junto al mar",
        "imagen": "https://i0.wp.com/www.sinembargo.mx/wp-content/uploads/2019/10/tecolutla-playa-de-tecolutla-7-1.jpg?fit=1100%2C580&quality=80&strip=all&ssl=1",
        "descripcion": "Famoso por sus playas y manglares, Tecolutla ofrece paseos en lancha, gastronomía costeña y actividades ecoturísticas que conectan el mar con la naturaleza."
    },

    {
        "nombre": "Tuxpan",
        "caracteristica": "Puerta del norte veracruzano",
        "imagen": "https://www.dondeir.com/wp-content/uploads/2016/10/que-hacer-en-tuxpan-veracruz.jpg",
        "descripcion": "Playas extensas, ambiente relajado y una gran oferta gastronómica hacen de Tuxpan uno de los destinos costeros más importantes y modernos del estado."
    },

    {
        "nombre": "Veracruz",
        "caracteristica": "La alegría del Golfo",
        "imagen": "https://xeu.mx/contenidos/imagenes/noticias/standard/2024/03/1315154xeu20240315095554.webp",
        "descripcion": "Historia, música, mar y tradición se unen en el puerto más emblemático de México. Veracruz ofrece playas, cultura y el inconfundible ambiente jarocho."
    }
];

const selvaYAventura = [

    {
        "nombre": "Catemaco",
        "caracteristica": "Misticismo entre la selva",
        "imagen": "https://visitmexico.com/media/usercontent/68b09d0a26d85-Visit-Mexico-Catemaco-D_gmxdot_jpg",
        "descripcion": "La selva tropical, la Laguna de Catemaco y su riqueza natural convierten a este destino en uno de los principales puntos de ecoturismo y aventura de Veracruz."
    },

    {
        "nombre": "Filobobos",
        "caracteristica": "Rápidos y adrenalina",
        "imagen": "https://www.mexicodestinos.com/blog/wp-content/uploads/2012/11/rio-filibobos-veracruz1.jpg",
        "descripcion": "Ríos cristalinos, cuevas y rápidos hacen de Filobobos uno de los mejores lugares para practicar rafting y actividades extremas rodeadas de naturaleza."
    },

    {
        "nombre": "Jalcomulco",
        "caracteristica": "Capital del rafting",
        "imagen": "https://images.trvl-media.com/place/6084571/9e609aa7-bc27-4bfc-b61c-988fb5b44bff.jpg",
        "descripcion": "Entre montañas y ríos caudalosos, Jalcomulco es el destino ideal para los amantes de la aventura. Rafting, tirolesas y senderismo forman parte de su esencia."
    },

    {
        "nombre": "Los Tuxtlas",
        "caracteristica": "Reserva volcánica y selvática",
        "imagen": "https://foodandpleasure.com/wp-content/uploads/2023/03/destinos-tuxtlas-salto-eyipantla-shutter.jpg",
        "descripcion": "La región de Los Tuxtlas ofrece volcanes, selva húmeda, cascadas y fauna exótica, creando uno de los ecosistemas más impresionantes de México."
    },

    {
        "nombre": "Orizaba",
        "caracteristica": "Aventura entre montañas",
        "imagen": "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Pico-de-Orizaba-17_MG.jpg",
        "descripcion": "Con teleféricos, senderismo y vistas espectaculares hacia el Pico de Orizaba, esta ciudad combina naturaleza, deporte y modernidad."
    },

    {
        "nombre": "Xico",
        "caracteristica": "Cascadas y tradición",
        "imagen": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/13/e0/3e/0d/20180727-132912-largejpg.jpg",
        "descripcion": "Rodeado de bosques y cascadas como Texolo, Xico es perfecto para quienes buscan paisajes naturales, caminatas y experiencias llenas de cultura."
    }
];