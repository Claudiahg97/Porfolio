import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";

const fuera = document.getElementById("cont");

function conocimientos(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const conocimiento = document.createElement("span");
    conocimiento.textContent = "Conocimientos";
    conocimiento.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    conocimiento.style.backgroundClip = "text";
    conocimiento.style.color = "transparent";
    titulo.appendChild(conocimiento);

    const estudios = document.createElement("div");
    

    const tituloEstudios = document.createElement("h3");
    tituloEstudios.textContent = "Estudios";
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
        tarjeta.className = "p-6 ml-12 mr-12 rounded-lg leading-relaxed backdrop-blur-sm border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-fit md:w-[525px]  flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        // Titulo
        const nombre = document.createElement("h3");
        nombre.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        nombre.style.fontFamily = "'Poppins', sans-serif";
        nombre.textContent = estudios.titulo;
        tarjeta.appendChild(nombre);

        // Empresa
        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        empresa.textContent = estudios.institucion;
        tarjeta.appendChild(empresa);

        // Fechas
        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 text-center";
        fechas.textContent = `${estudios.fechaInicio} - ${estudios.fechaFin}`;
        tarjeta.appendChild(fechas);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
        descripcion.textContent = estudios.descripcion;
        tarjeta.appendChild(descripcion);

        tarjetasContainerEstudios.appendChild(tarjeta);
    });

    estudios.appendChild(tarjetasContainerEstudios);
    contenedor.appendChild(estudios);
    
    const tecnologia = document.createElement("div");
    tecnologia.className = "mb-24";

    const tituloTecnologia = document.createElement("h3");
    tituloTecnologia.textContent = "Técnologías";    
    tituloTecnologia.style.fontFamily = "'Poppins', sans-serif";
    tituloTecnologia.className = "text-3xl md:text-4xl lg:text-5xl font-black mb-20 relative z-10 mt-24";
    tituloTecnologia.style.color = "#143642"
    tecnologia.appendChild(tituloTecnologia);
    contenedor.appendChild(tecnologia);

    // Contenedor de las tarjetas
    const tarjetasContainer = document.createElement("div");
    tarjetasContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    // Bucle para crear una tarjeta por cada conocimientos
    misDatos.conocimientos.forEach((conocimientos) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-sm border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-80 flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        //Imagen
        const foto = document.createElement("div");
        foto.className = "w-24 h-24 rounded-full overflow-hidden shadow-lg mx-auto mb-4 border-2 border-amber-400/50";
        const imagen = document.createElement("img");
        imagen.src = conocimientos.imagen;
        imagen.alt = conocimientos.nombre;
        imagen.className = "w-full h-full object-cover";
        foto.appendChild(imagen);
        tarjeta.appendChild(foto);

        // nombre
        const nombre = document.createElement("h3");
        nombre.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        nombre.style.fontFamily = "'Poppins', sans-serif";
        nombre.textContent = conocimientos.nombre;
        tarjeta.appendChild(nombre);

        tarjetasContainer.appendChild(tarjeta);
    });

    contenedor.appendChild(tarjetasContainer);
    
    fuera.appendChild(contenedor);
}

crearParticulasGlobales();
conocimientos();