import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";
import { t, tFecha, s } from "./i18n.js";

const fuera = document.getElementById("cont");

function conocimientos(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const conocimiento = document.createElement("span");
    conocimiento.textContent = s("conocimientos.titulo");
    conocimiento.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    conocimiento.style.backgroundClip = "text";
    conocimiento.style.color = "transparent";
    titulo.appendChild(conocimiento);

    const estudios = document.createElement("div");
    

    const tituloEstudios = document.createElement("h3");
    tituloEstudios.textContent = s("conocimientos.estudios");
    tituloEstudios.style.fontFamily = "'Poppins', sans-serif";
    tituloEstudios.className = "text-3xl md:text-4xl lg:text-5xl font-black mb-20 relative z-10";
    tituloEstudios.style.color = "#143642"
    estudios.appendChild(tituloEstudios);
    

    // Contenedor de las tarjetas
    const tarjetasContainerEstudios = document.createElement("div");
    tarjetasContainerEstudios.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    // Bucle para crear una tarjeta por cada estudio
    misDatos.estudios.forEach((estudios) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "p-6 ml-12 mr-12 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-fit md:w-[525px]  flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        // Titulo
        const nombre = document.createElement("h3");
        nombre.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        nombre.style.fontFamily = "'Poppins', sans-serif";
        nombre.textContent = t(estudios.titulo);
        tarjeta.appendChild(nombre);

        // Empresa
        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        empresa.textContent = estudios.institucion;
        tarjeta.appendChild(empresa);

        // Fechas
        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 text-center";
        fechas.textContent = `${tFecha(estudios.fechaInicio)} - ${tFecha(estudios.fechaFin)}`;
        tarjeta.appendChild(fechas);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
        descripcion.textContent = t(estudios.descripcion);
        tarjeta.appendChild(descripcion);

        tarjetasContainerEstudios.appendChild(tarjeta);
    });

    estudios.appendChild(tarjetasContainerEstudios);
    contenedor.appendChild(estudios);
    
    const tecnologia = document.createElement("div");
    tecnologia.className = "mb-24";

    const tituloTecnologia = document.createElement("h3");
    tituloTecnologia.textContent = s("conocimientos.tecnologias");
    tituloTecnologia.style.fontFamily = "'Poppins', sans-serif";
    tituloTecnologia.className = "text-3xl md:text-4xl lg:text-5xl font-black mb-20 relative z-10 mt-24";
    tituloTecnologia.style.color = "#143642"
    tecnologia.appendChild(tituloTecnologia);
    contenedor.appendChild(tecnologia);

    // Un bloque por categoría, en el orden definido en datos.js
    misDatos.categoriasConocimientos.forEach((categoria) => {
        const items = misDatos.conocimientos.filter((c) => c.categoria === categoria.id);
        if (items.length === 0) return;

        const bloque = document.createElement("section");
        bloque.className = "max-w-7xl mx-auto mb-16 px-4 relative z-10";

        const tituloCategoria = document.createElement("h4");
        tituloCategoria.className = "text-2xl md:text-3xl font-bold text-teal-800 mb-8 inline-block border-b-2 border-amber-400 pb-2";
        tituloCategoria.style.fontFamily = "'Poppins', sans-serif";
        tituloCategoria.textContent = t(categoria.nombre);
        bloque.appendChild(tituloCategoria);

        // Contenedor de las tarjetas
        const tarjetasContainer = document.createElement("div");
        tarjetasContainer.className = "flex flex-wrap gap-4 justify-center";

        items.forEach((conocimiento) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "p-4 rounded-lg backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-[calc(50%-8px)] sm:w-44 flex-shrink-0 hover:shadow-lg hover:border-amber-400 hover:shadow-amber-500/50 relative z-10 flex flex-col items-center";

            //Imagen
            const foto = document.createElement("div");
            foto.className = "w-16 h-16 rounded-full overflow-hidden shadow-lg mb-3 border-2 border-amber-400/50 bg-white";
            const imagen = document.createElement("img");
            imagen.src = conocimiento.imagen;
            imagen.alt = t(conocimiento.nombre);
            imagen.loading = "lazy";
            imagen.className = "w-full h-full object-cover";
            foto.appendChild(imagen);
            tarjeta.appendChild(foto);

            // Nombre
            const nombre = document.createElement("h5");
            nombre.className = "text-base font-bold text-teal-800 text-center leading-tight";
            nombre.style.fontFamily = "'Poppins', sans-serif";
            nombre.textContent = t(conocimiento.nombre);
            tarjeta.appendChild(nombre);

            // Nivel
            const nivel = document.createElement("span");
            nivel.className = "mt-2 text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full";
            nivel.textContent = t(conocimiento.nivel);
            tarjeta.appendChild(nivel);

            tarjetasContainer.appendChild(tarjeta);
        });

        bloque.appendChild(tarjetasContainer);
        contenedor.appendChild(bloque);
    });
    
    fuera.appendChild(contenedor);
}

crearParticulasGlobales();
conocimientos();