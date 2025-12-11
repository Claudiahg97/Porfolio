import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";


const fuera = document.getElementById("cont");

function quienSoy() {
  const contenedor = document.createElement("div");
  contenedor.className = "text-center mt-[200px] relative";

  const titulo = document.createElement("h1");
  titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
  titulo.style.fontFamily = "'Poppins', sans-serif";
  contenedor.appendChild(titulo);

  const pregunta = document.createElement("span");
  pregunta.textContent = "¿Quién soy?";
  pregunta.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
  pregunta.style.backgroundClip = "text";
  pregunta.style.color = "transparent";
  titulo.appendChild(pregunta);

  const contenedorDatos = document.createElement("div");
  contenedorDatos.className = "flex flex-col md:flex-row gap-8 items-center justify-center mb-20 relative z-10";
  contenedor.appendChild(contenedorDatos);

  // FOTO
  const foto = document.createElement("div");
  foto.className = "w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-amber-400/50 hover:border-amber-400 hover:shadow-amber-500/50";
  const imagen = document.createElement("img");
  imagen.src = misDatos.datosPersonales.imagen;
  imagen.alt = misDatos.datosPersonales.nombre;
  imagen.className = "w-full h-full object-cover";
  foto.appendChild(imagen);
  contenedorDatos.appendChild(foto);

  // DATOS PERSONALES
  const datos = document.createElement("div");
  datos.className = "text-center md:text-left";

  // Nombre completo
  const nombreCompleto = document.createElement("h2");
  nombreCompleto.className = "text-3xl font-bold mb-4 text-teal-800";
  nombreCompleto.style.fontFamily = "'Poppins', sans-serif";
  nombreCompleto.textContent = `${misDatos.datosPersonales.nombre} ${misDatos.datosPersonales.apellidos}`;
  datos.appendChild(nombreCompleto);

  // Email
  const emailP = document.createElement("p");
  emailP.className = "text-lg mb-2 text-gray-700";
  emailP.innerHTML = `<strong class="text-teal-800">Email:</strong> ${misDatos.datosPersonales.email}`;
  datos.appendChild(emailP);

  // Dirección
  const direccionP = document.createElement("p");
  direccionP.className = "text-lg mb-2 text-gray-700";
  direccionP.innerHTML = `<strong class="text-teal-800">Dirección:</strong> ${misDatos.datosPersonales.direccion}`;
  datos.appendChild(direccionP);

  // GitHub
  const githubP = document.createElement("p");
  githubP.className = "text-lg text-gray-700";
  const githubLink = document.createElement("a");
  githubLink.href = misDatos.datosPersonales.github;
  githubLink.target = "_blank";
  githubLink.className = "text-amber-500 hover:text-amber-600 underline transition-colors";
  githubLink.textContent = "Ver mi GitHub";
  githubP.innerHTML = "<strong class='text-teal-800'>GitHub:</strong> ";
  githubP.appendChild(githubLink);
  datos.appendChild(githubP);

  contenedorDatos.appendChild(datos);

  //Descripción
  const historiaContainer = document.createElement("div");
  historiaContainer.className = "max-w-6xl mx-auto mt-16 mb-12 px-6 md:px-12 lg:px-24 relative z-10";

  const historia = document.createElement("p");
  historia.textContent = `${misDatos.datosPersonales.historia}`;
  historia.className = "text-lg text-gray-600 text-justify leading-relaxed indent-8 p-8 rounded-lg backdrop-blur-md border border-amber-400/50 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300";
  historia.style.fontFamily = "'Poppins', sans-serif";
  historia.style.whiteSpace = "pre-line";
  historiaContainer.appendChild(historia);

  contenedor.appendChild(historiaContainer);
  fuera.appendChild(contenedor);
}

function experienciaLaboral() {
  const contenedorLaboral = document.createElement("div");
  contenedorLaboral.className = "mt-20 mb-12 px-4";

  // Título de la sección
  const titulo = document.createElement("h2");
  titulo.className = "text-4xl md:text-5xl lg:text-6xl font-black mb-20 relative z-10 text-center";
  titulo.style.fontFamily = "'Poppins', sans-serif";

  const tituloTexto = document.createElement("span");
  tituloTexto.textContent = "Experiencia Laboral";
  tituloTexto.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
  tituloTexto.style.backgroundClip = "text";
  tituloTexto.style.color = "transparent";
  titulo.appendChild(tituloTexto);
  contenedorLaboral.appendChild(titulo);

  // Contenedor de las tarjetas
  const tarjetasContainer = document.createElement("div");
  tarjetasContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

  // Bucle para crear una tarjeta por cada experiencia
  misDatos.experienciaLaboral.forEach((experiencia) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-80 flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

    //Imagen
    const foto = document.createElement("div");
    foto.className = "w-32 h-32 rounded-full overflow-hidden shadow-lg mx-auto mb-4 border-2 border-amber-400/50";
    const imagen = document.createElement("img");
    imagen.src = experiencia.imagen;
    imagen.alt = experiencia.empresa;
    imagen.className = "w-full h-full object-cover";
    foto.appendChild(imagen);
    tarjeta.appendChild(foto);

    // Puesto
    const puesto = document.createElement("h3");
    puesto.className = "text-xl font-bold text-teal-800 mb-2 text-center";
    puesto.style.fontFamily = "'Poppins', sans-serif";
    puesto.textContent = experiencia.puesto;
    tarjeta.appendChild(puesto);

    // Empresa
    const empresa = document.createElement("p");
    empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
    empresa.textContent = experiencia.empresa;
    tarjeta.appendChild(empresa);

    // Fechas
    const fechas = document.createElement("p");
    fechas.className = "text-sm text-amber-500 mb-4 text-center";
    fechas.textContent = `${experiencia.fechaInicio} - ${experiencia.fechaFin}`;
    tarjeta.appendChild(fechas);

    // Descripción
    const descripcion = document.createElement("p");
    descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
    descripcion.textContent = experiencia.descripcion;
    tarjeta.appendChild(descripcion);

    tarjetasContainer.appendChild(tarjeta);
  });

  contenedorLaboral.appendChild(tarjetasContainer);
  fuera.appendChild(contenedorLaboral);
}

crearParticulasGlobales();
quienSoy();
experienciaLaboral();