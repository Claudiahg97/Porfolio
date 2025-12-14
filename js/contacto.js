import { crearParticulasGlobales } from "./particulas.js";

const fuera = document.getElementById("cont");

const gran = document.createElement("div");
gran.className = "mt-[200px] relative";

function crearFormularioContacto() {
    // Contenedor principal
    const ContenedorG = document.createElement("div");
    ContenedorG.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";

    const contenedor = document.createElement("div");
    contenedor.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg relative z-10";

    // Título
    const titulo = document.createElement("h2");
    titulo.className = "text-4xl font-bold text-teal-800 mb-8 text-center border-b-2 border-amber-400 pb-4";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    titulo.textContent = "📧 Contacto";
    contenedor.appendChild(titulo);

    // Crear el formulario
    const form = document.createElement("form");
    form.action = "https://formsubmit.co/claudia.hg.97@gmail.com";
    form.method = "POST";
    form.className = "space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-lg border border-amber-400/50 shadow-lg";

    // Campo Nombre
    const divNombre = document.createElement("div");
    const labelNombre = document.createElement("label");
    labelNombre.className = "block text-teal-800 font-semibold mb-2";
    labelNombre.textContent = "Nombre:";
    divNombre.appendChild(labelNombre);

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = "name";
    inputNombre.required = true;
    inputNombre.placeholder = "Tu nombre completo";
    inputNombre.className = "w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    // Campo Email
    const divEmail = document.createElement("div");
    const labelEmail = document.createElement("label");
    labelEmail.className = "block text-teal-800 font-semibold mb-2";
    labelEmail.textContent = "Email:";
    divEmail.appendChild(labelEmail);

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.required = true;
    inputEmail.placeholder = "tu@email.com";
    inputEmail.className = "w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divEmail.appendChild(inputEmail);
    form.appendChild(divEmail);

    // Campo Asunto (opcional)
    const divAsunto = document.createElement("div");
    const labelAsunto = document.createElement("label");
    labelAsunto.className = "block text-teal-800 font-semibold mb-2";
    labelAsunto.textContent = "Asunto:";
    divAsunto.appendChild(labelAsunto);

    const inputAsunto = document.createElement("input");
    inputAsunto.type = "text";
    inputAsunto.name = "subject";
    inputAsunto.placeholder = "¿De qué quieres hablar?";
    inputAsunto.className = "w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divAsunto.appendChild(inputAsunto);
    form.appendChild(divAsunto);

    // Campo Mensaje
    const divMensaje = document.createElement("div");
    const labelMensaje = document.createElement("label");
    labelMensaje.className = "block text-teal-800 font-semibold mb-2";
    labelMensaje.textContent = "Mensaje:";
    divMensaje.appendChild(labelMensaje);

    const textareaMensaje = document.createElement("textarea");
    textareaMensaje.name = "message";
    textareaMensaje.required = true;
    textareaMensaje.rows = 6;
    textareaMensaje.placeholder = "Escribe tu mensaje aquí...";
    textareaMensaje.className = "w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none";
    divMensaje.appendChild(textareaMensaje);
    form.appendChild(divMensaje);

    // Campos ocultos de configuración de FormSubmit
    const captchaHidden = document.createElement("input");
    captchaHidden.type = "hidden";
    captchaHidden.name = "_captcha";
    captchaHidden.value = "false";
    form.appendChild(captchaHidden);

    const nextHidden = document.createElement("input");
    nextHidden.type = "hidden";
    nextHidden.name = "_next";
    nextHidden.value = window.location.href; // Vuelve a la misma página
    form.appendChild(nextHidden);

    const subjectHidden = document.createElement("input");
    subjectHidden.type = "hidden";
    subjectHidden.name = "_subject";
    subjectHidden.value = "¡Nuevo mensaje desde tu Portfolio!";
    form.appendChild(subjectHidden);

    // Botón de envío
    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.className = "w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl";
    botonEnviar.textContent = "Enviar Mensaje 📨";
    form.appendChild(botonEnviar);

    contenedor.appendChild(form);
    ContenedorG.appendChild(contenedor)

    return contenedor;
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const contenedorContacto = document.getElementById('cont');

    if (contenedorContacto) {
        // Añadir el formulario al div con id "cont"
        contenedorContacto.appendChild(crearFormularioContacto());
    } else {
        console.error('No se encontró el elemento con id "cont"');
    }
});

fuera.appendChild(gran);
crearParticulasGlobales();