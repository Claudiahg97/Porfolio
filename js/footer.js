import { misDatos } from "./datos.js";
import { s } from "./i18n.js";

// base: prefijo de ruta hasta la raíz del sitio ("" desde index.html, "../" desde html/*.html)
export function crearFooter(base = "") {
    const footer = document.createElement("footer");
    footer.className = "relative z-10 mt-24 py-8 border-t-2 backdrop-blur-md";
    footer.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";

    const contenedor = document.createElement("div");
    contenedor.className = "max-w-7xl mx-auto px-6";

    const contenido = document.createElement("div");
    contenido.className = "flex flex-col md:flex-row justify-between items-center gap-4";

    // Sección izquierda
    const seccionIzq = document.createElement("div");
    seccionIzq.className = "text-center md:text-left";

    const nombre = document.createElement("p");
    nombre.className = "text-teal-800 font-bold text-lg";
    nombre.style.fontFamily = "'Poppins', sans-serif";
    nombre.textContent = `${misDatos.datosPersonales.nombre} ${misDatos.datosPersonales.apellidos}`;
    seccionIzq.appendChild(nombre);

    const copyright = document.createElement("p");
    copyright.className = "text-gray-600 text-sm mt-1";
    copyright.textContent = `© ${new Date().getFullYear()} ${s("footer.derechos")}`;
    seccionIzq.appendChild(copyright);

    contenido.appendChild(seccionIzq);

    const seccionDer = document.createElement("div");
    seccionDer.className = "flex gap-4";

    const redes = [
        { nombre: "LinkedIn", icono: `${base}img/linkedin.png`, url: misDatos.datosPersonales.linkedin },
        { nombre: "GitHub", icono: `${base}img/github-logo (1).png`, url: misDatos.datosPersonales.github }
    ];

    redes.forEach(red => {
        const enlace = document.createElement("a");
        enlace.href = red.url;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.className = "hover:scale-125 transition-transform duration-300";
        enlace.title = red.nombre;

        const img = document.createElement("img");
        img.src = red.icono;
        img.alt = red.nombre;
        img.className = "w-8 h-8 object-contain";
        enlace.appendChild(img);

        seccionDer.appendChild(enlace);
    });

    contenido.appendChild(seccionDer);
    contenedor.appendChild(contenido);
    footer.appendChild(contenedor);

    return footer;
}
