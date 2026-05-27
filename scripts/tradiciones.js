const tradiciones = [
    {
        "etiqueta": "MÚSICA",
        "imagen": "https://cdn.shopify.com/s/files/1/0962/1578/files/son_jarocho3_medium.jpg?v=1584573175",
        "titulo": "Son Jarocho",
        "descripcion": "Expresión musical emblemática de Veracruz nacida de la mezcla indígena, africana y española. Se interpreta con jarana, requinto y zapateado durante los tradicionales fandangos."
    },

    {
        "etiqueta": "RITUAL",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxywWMsc46JfXC8bx-0Us1Cp5ojOTTAVnQWQ&s",
        "titulo": "Danza de los Voladores",
        "descripcion": "Ceremonia ancestral totonaca donde cinco hombres ascienden un gran poste ceremonial y descienden girando para representar la conexión entre la tierra, la fertilidad y el universo."
    },

    {
        "etiqueta": "FESTIVIDAD",
        "imagen": "https://www.rtv.org.mx/masnoticias/wp-content/uploads/sites/13/2025/06/4020d9c1-0595-4134-a65b-2732cc1e2d2c-scaled.jpeg",
        "titulo": "Carnaval de Veracruz",
        "descripcion": "La fiesta más famosa del puerto llena de música, comparsas, disfraces y desfiles. Es considerada una de las celebraciones carnavalescas más importantes de México."
    },

    {
        "etiqueta": "TRADICIÓN",
        "imagen": "https://tvazteca.brightspotcdn.com/9f/d4/1af71bc345b4ae2e72b2bc698aab/rama-veracruz1.jpg",
        "titulo": "La Rama",
        "descripcion": "Tradición navideña donde grupos recorren las calles cantando versos con ramas decoradas mientras piden cooperación y transmiten alegría comunitaria."
    },

    {
        "etiqueta": "TRADICIÓN",
        "imagen": "https://cdn.unotv.com/images/2024/12/que-es-el-viejo-tradicion-navidena-de-veracruz-115059.jpg",
        "titulo": "El Viejo",
        "descripcion": "Costumbre de fin de año donde se representa un muñeco viejo que simboliza el año que termina. Se acompaña con música, versos y celebraciones populares."
    },

    {
        "etiqueta": "DANZA",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/36/La_danza_de_los_negritos.jpg",
        "titulo": "Danza de los Negritos",
        "descripcion": "Danza tradicional originaria de la región totonaca que mezcla elementos africanos e indígenas mediante música, máscaras y vestimentas coloridas."
    },

    {
        "etiqueta": "DÍA DE MUERTOS",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Personas_con_trajes_tradicionales_y_m%C3%A0scaras_de_madera_en_el_Festival_%22Xantolo%22_2013..JPG",
        "titulo": "Xantolo",
        "descripcion": "Celebración huasteca del Día de Muertos donde las familias honran a sus difuntos con altares, danzas, máscaras y música tradicional."
    },

    {
        "etiqueta": "FESTIVIDAD",
        "imagen": "https://www.ciudadespatrimonio.mx/wp-content/uploads/2024/07/YJ6533DOGZBI5K4A2YFT7NS33I-scaled.jpg",
        "titulo": "Fiesta de la Candelaria",
        "descripcion": "Celebración tradicional realizada en Tlacotalpan en honor a la Virgen de la Candelaria, famosa por sus procesiones, música y cabalgatas."
    },

    {
        "etiqueta": "MISTICISMO",
        "imagen": "https://visitmexico.com/media/usercontent/68b09d041ef67-Visit-Mexico-Catemaco-B_gmxdot_jpg",
        "titulo": "Brujos de Catemaco",
        "descripcion": "Catemaco es reconocido por sus prácticas esotéricas y rituales de limpia espiritual, convirtiéndose en un importante centro de misticismo en México."
    },

    {
        "etiqueta": "GASTRONOMÍA",
        "imagen": "https://cdn.milenio.com/uploads/media/2020/09/07/origen-manjar-data-ano-huaxtecapan.jpg",
        "titulo": "Zacahuil",
        "descripcion": "Gigantesco tamal típico de la Huasteca elaborado con masa y carne sazonada, cocido lentamente en horno de leña durante celebraciones especiales."
    },

    {
        "etiqueta": "GASTRONOMÍA",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Caf%C3%A9_en_Teocelo.png",
        "titulo": "Café Veracruzano",
        "descripcion": "Tradición agrícola y cultural profundamente arraigada en regiones como Coatepec, reconocida internacionalmente por la calidad de su café."
    },

    {
        "etiqueta": "MÚSICA",
        "imagen": "https://i.ytimg.com/vi/lWY-DQBuyYs/maxresdefault.jpg",
        "titulo": "Huapango Huasteco",
        "descripcion": "Género musical tradicional interpretado con violines y jaranas donde predominan la improvisación poética y el zapateado."
    },

    {
        "etiqueta": "ARTESANÍA",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE48dWo3FF4NIGpuunETqvkSpaU4HC8IMObg&s",
        "titulo": "Artesanías Totonacas",
        "descripcion": "Las comunidades indígenas preservan técnicas ancestrales de bordado, barro, madera y palma que reflejan la identidad regional."
    },

    {
        "etiqueta": "VESTIMENTA",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IH1wDDjhOVTPciTXDurnJzFofbSj_fN7BQ&s",
        "titulo": "Traje Jarocho",
        "descripcion": "Vestimenta tradicional símbolo de Veracruz utilizada en bailes y celebraciones folklóricas, destacando el blanco elegante y el paliacate rojo."
    },

    {
        "etiqueta": "RELIGIÓN",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7hROO7qcPq0O1n5KBZSuC0lf2lBl5lwROA&s",
        "titulo": "Semana Santa Veracruzana",
        "descripcion": "Procesiones religiosas y representaciones tradicionales que reúnen a miles de personas en distintas ciudades del estado."
    },

    {
        "etiqueta": "FESTIVAL",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8aeSd7CZ_I7bUFLweTcqQbiGNZB1tl4NeA&s",
        "titulo": "Festival Afrocaribeño",
        "descripcion": "Evento cultural que celebra la herencia africana y caribeña presente en la música, danza y gastronomía veracruzana."
    },

    {
        "etiqueta": "TRADICIÓN",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGE7-T6r2jN5Tel_u8fD98sGcTZGuuAZd1mA&s",
        "titulo": "Bendición de Lanchas",
        "descripcion": "Ceremonia realizada en comunidades pesqueras donde se bendicen embarcaciones para pedir protección y abundancia en el mar."
    },

    {
        "etiqueta": "FESTIVIDAD",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWk8WWWUwV4xSeMp_IRsGAWIz3kVt_WujIQ&s",
        "titulo": "Feria del Café de Coatepec",
        "descripcion": "Celebración que reúne gastronomía, música y actividades culturales relacionadas con la tradición cafetalera de la región."
    },

    {
        "etiqueta": "DANZA",
        "imagen": "https://i.ytimg.com/vi/9C87YUQIMZc/sddefault.jpg",
        "titulo": "Zapateado Jarocho",
        "descripcion": "Baile tradicional ejecutado sobre una tarima de madera donde los bailarines crean ritmos con el movimiento de sus pies."
    },

    {
        "etiqueta": "LEYENDA",
        "imagen": "https://oem.com.mx/elsoldecordoba/img/19021271/1656931769/BASE_LANDSCAPE/1200/image.webp",
        "titulo": "Leyendas del Puerto",
        "descripcion": "Historias populares transmitidas por generaciones que mezclan misterio, historia y elementos sobrenaturales del Veracruz antiguo."
    },

    {
        "etiqueta": "TRADICIÓN",
        "imagen": "https://st2.depositphotos.com/1179009/7556/i/950/depositphotos_75568143-stock-photo-mojigangas.jpg",
        "titulo": "Mojigangas",
        "descripcion": "Gigantescas figuras coloridas utilizadas en fiestas populares y desfiles que llenan de humor y alegría las celebraciones comunitarias."
    },

    {
        "etiqueta": "GASTRONOMÍA",
        "imagen": "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/2603482B-C515-4B2E-8E9D-ACCD3E4A1622/Derivates/ad8f3cc8-a157-4ad6-9aaf-b8f891c20a21.jpg",
        "titulo": "Pescado a la Veracruzana",
        "descripcion": "Platillo tradicional preparado con jitomate, aceitunas, alcaparras y especias que refleja la influencia mediterránea en Veracruz."
    },

    {
        "etiqueta": "RITUAL",
        "imagen": "https://pueblosoriginarios.com/meso/golfo/totonaca/imagenes/ninin.jpg",
        "titulo": "Rituales Totonacas",
        "descripcion": "Ceremonias indígenas vinculadas a la naturaleza, la fertilidad y el ciclo agrícola preservadas por generaciones en la región norte."
    },

    {
        "etiqueta": "FESTIVIDAD",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Kan-hvTUbHOdf2cHQQ5PzAWc2VIHRTGtQg&s",
        "titulo": "Desfiles Patrios",
        "descripcion": "Celebraciones cívicas llenas de música, bandas escolares y representaciones culturales que fortalecen el orgullo regional."
    }
]