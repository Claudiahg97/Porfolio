import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";

const fuera = document.getElementById("cont");

function proyectos(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const conocimiento = document.createElement("span");
    conocimiento.textContent = "Proyectos";
    conocimiento.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    conocimiento.style.backgroundClip = "text";
    conocimiento.style.color = "transparent";
    titulo.appendChild(conocimiento);

    // Contenedor de las tarjetas
    const tarjetasContainer = document.createElement("div");
    tarjetasContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    // Bucle para crear una tarjeta por cada proyectos
    misDatos.proyectos.forEach((proyectos) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-[400px] flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        //Imagen
        const foto = document.createElement("div");
        foto.className = "w-80 overflow-hidden shadow-lg mx-auto mb-4 border-2 border-amber-400/50";
        const link = document.createElement("a");
        link.href = proyectos.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        const imagen = document.createElement("img");
        imagen.src = proyectos.imagen;
        imagen.alt = proyectos.nombre;
        imagen.className = "w-full h-full object-cover";
        link.appendChild(imagen);
        foto.appendChild(link);
        tarjeta.appendChild(foto);

        // Titulo
        const nombre = document.createElement("h3");
        nombre.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        nombre.style.fontFamily = "'Poppins', sans-serif";
        nombre.textContent = proyectos.nombre;
        tarjeta.appendChild(nombre);

        // Técnologías
        const tecno = document.createElement("p");
        tecno.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        tecno.textContent = proyectos.tecnologias;
        tarjeta.appendChild(tecno);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-sm text-amber-500 mb-4 text-center";
        descripcion.textContent = proyectos.descripcion;
        tarjeta.appendChild(descripcion);

        tarjetasContainer.appendChild(tarjeta);
    });
    contenedor.appendChild(tarjetasContainer);

    fuera.appendChild(contenedor);
}


crearParticulasGlobales();
proyectos();