import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";

const fuera = document.getElementById("cont");

function curriculum(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const cV = document.createElement("span");
    cV.textContent = "Curriculum Vitae";
    cV.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    cV.style.backgroundClip = "text";
    cV.style.color = "transparent";
    titulo.appendChild(cV);

    const tarjetasContainer = document.createElement("div");
    tarjetasContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    const tarjeta = document.createElement("div");
    tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

    // Nombre
    const nombre = document.createElement("h3");
    nombre.className = "text-4xl font-bold text-teal-800 mb-2 text-center";
    nombre.style.fontFamily = "'Poppins', sans-serif";
    nombre.textContent = `${misDatos.datosPersonales.nombre}  ${misDatos.datosPersonales.apellidos}`;
    tarjeta.appendChild(nombre);
    
    // Descripción
    const descripcion = document.createElement("p");
    descripcion.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
    descripcion.textContent = `${misDatos.datosPersonales.descripcion}`;
    tarjeta.appendChild(descripcion);

    const contacto = document.createElement("div");
    contacto.className = "flex flex-wrap justify-center gap-4 text-sm text-gray-700";

    const email = document.createElement("span");
    email.className = "flex items-center gap-1";
    email.textContent = `📧 ${misDatos.datosPersonales.email}`
    contacto.appendChild(email);

    const telefono = document.createElement("span");
    telefono.className = "flex items-center gap-1";
    telefono.textContent = `📱 ${misDatos.datosPersonales.telefono}`
    contacto.appendChild(telefono);

    const direccion = document.createElement("span");
    direccion.className = "flex items-center gap-1";
    direccion.textContent = `📍 ${misDatos.datosPersonales.direccion}`;
    contacto.appendChild(direccion);

    tarjeta.appendChild(contacto);
    tarjetasContainer.appendChild(tarjeta);



    contenedor.appendChild(tarjetasContainer);

    
    
    
    // function crearHeader() {
        
    //     header.innerHTML = `
    //             <div class="text-center">
    //                 <h1 class="text-4xl font-bold text-gray-800 mb-2">${miCV.datosPersonales.nombre}</h1>
    //                 <p class="text-lg text-gray-600 mb-4">${miCV.datosPersonales.descripcion}</p>
    //                 <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
    //                     <span class="flex items-center gap-1">📧 ${miCV.datosPersonales.email}</span>
    //                     <span class="flex items-center gap-1">📱 ${miCV.datosPersonales.telefono}</span>
    //                     <span class="flex items-center gap-1">📍 ${miCV.datosPersonales.direccion}</span>
    //                 </div>
    //                 <div class="mt-4">
    //                     <a href="${miCV.datosPersonales.github}" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
    //                         GitHub Profile
    //                     </a>
    //                 </div>
    //             </div>
    //         `;
    //     return header;
    // }

    fuera.appendChild(contenedor);
}

crearParticulasGlobales();
curriculum();
