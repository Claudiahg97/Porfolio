import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";
import { t, s } from "./i18n.js";

const fuera = document.getElementById("cont");

function proyectos(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const conocimiento = document.createElement("span");
    conocimiento.textContent = s("proyectos.titulo");
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
        link.href = proyectos.demo || proyectos.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        const imagen = document.createElement("img");
        imagen.src = proyectos.imagen;
        imagen.alt = proyectos.nombre;
        imagen.loading = "lazy";
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
        tecno.textContent = proyectos.tecnologias.join(" · ");
        tarjeta.appendChild(tecno);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-sm text-amber-500 mb-4 text-center";
        descripcion.textContent = t(proyectos.descripcion);
        tarjeta.appendChild(descripcion);

        // Botones: "Ver demo" / "Ver vídeo" / "Ver código".
        // Cada botón solo se crea si su URL existe en datos.js.
        const botones = document.createElement("div");
        botones.className = "flex flex-wrap gap-3 justify-center mt-2";

        function crearBoton(texto, url, tipo) {
            if (!url) return; // sin URL, no se pinta el botón
            const boton = document.createElement("a");
            boton.href = url;
            boton.target = "_blank";
            boton.rel = "noopener noreferrer";
            boton.textContent = texto;
            if (tipo === "primario") {
                // Botón destacado (mismo degradado dorado que el título)
                boton.className = "px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-md hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300";
                boton.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
            } else {
                // Botón secundario (contorno dorado)
                boton.className = "px-4 py-2 rounded-full text-sm font-semibold text-amber-400 border border-amber-400/60 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300";
            }
            botones.appendChild(boton);
        }

        crearBoton(s("proyectos.verDemo"), proyectos.demo, "primario");
        crearBoton(s("proyectos.verVideo"), proyectos.video, "secundario");
        crearBoton(s("proyectos.verCodigo"), proyectos.link, "secundario");

        tarjeta.appendChild(botones);

        tarjetasContainer.appendChild(tarjeta);
    });
    contenedor.appendChild(tarjetasContainer);

    fuera.appendChild(contenedor);
}


crearParticulasGlobales();
proyectos();