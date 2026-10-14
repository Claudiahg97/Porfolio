import { crearParticulasGlobales } from "./particulas.js";
import { s } from "./i18n.js";
import { misDatos } from "./datos.js";

const gran = document.createElement("div");
gran.className = "mt-[200px] relative";

function crearFormularioContacto() {
    // Contenedor principal - ESTE es el que centra todo
    const ContenedorG = document.createElement("div");
    ContenedorG.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";

    const contenedor = document.createElement("div");
    contenedor.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all hover:shadow-lg hover:border-amber-400 hover:shadow-amber-500/50 duration-300 w-full sm:w-[1000px] flex-shrink-0 relative z-10";

    // Título
    const titulo = document.createElement("h2");
    titulo.className = "text-4xl font-bold text-teal-800 mb-8 text-center border-b-2 border-amber-400 pb-4";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    titulo.textContent = s("contacto.titulo");
    contenedor.appendChild(titulo);

    // Aviso de envío correcto (FormSubmit vuelve aquí con ?enviado=1)
    if (new URLSearchParams(window.location.search).get("enviado") === "1") {
        const aviso = document.createElement("p");
        aviso.setAttribute("role", "status");
        aviso.className = "mx-8 mb-2 p-4 rounded-lg bg-green-100 border border-green-400 text-green-800 font-semibold text-center";
        aviso.textContent = s("contacto.enviado");
        contenedor.appendChild(aviso);
    }

    // Email directo como alternativa al formulario
    const directo = document.createElement("p");
    directo.className = "text-center text-gray-600";
    directo.textContent = `${s("contacto.directo")} `;
    const mail = document.createElement("a");
    mail.href = `mailto:${misDatos.datosPersonales.email}`;
    mail.className = "font-semibold text-amber-500 hover:text-amber-600 underline";
    mail.textContent = misDatos.datosPersonales.email;
    directo.appendChild(mail);
    contenedor.appendChild(directo);

    // Crear el formulario
    const form = document.createElement("form");
    form.action = `https://formsubmit.co/${misDatos.datosPersonales.email}`;
    form.method = "POST";
    form.className = "space-y-6 backdrop-blur-md p-8";

    // Campo Nombre
    const divNombre = document.createElement("div");
    const labelNombre = document.createElement("label");
    labelNombre.className = "block text-teal-800 font-semibold mb-2";
    labelNombre.textContent = s("contacto.nombre");
    divNombre.appendChild(labelNombre);

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = "name";
    inputNombre.required = true;
    inputNombre.placeholder = s("contacto.nombrePh");
    inputNombre.className = "w-full px-4 py-3 border border-teal-800 hover:shadow-lg hover:border-teal-500 hover:shadow-teal-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    // Campo Email
    const divEmail = document.createElement("div");
    const labelEmail = document.createElement("label");
    labelEmail.className = "block text-teal-800 font-semibold mb-2";
    labelEmail.textContent = s("contacto.email");
    divEmail.appendChild(labelEmail);

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "email";
    inputEmail.required = true;
    inputEmail.placeholder = s("contacto.emailPh");
    inputEmail.className = "w-full px-4 py-3 border border-teal-800 rounded-lg hover:shadow-lg hover:border-teal-500 hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divEmail.appendChild(inputEmail);
    form.appendChild(divEmail);

    // Campo Asunto (opcional)
    const divAsunto = document.createElement("div");
    const labelAsunto = document.createElement("label");
    labelAsunto.className = "block text-teal-800 font-semibold mb-2";
    labelAsunto.textContent = s("contacto.asunto");
    divAsunto.appendChild(labelAsunto);

    const inputAsunto = document.createElement("input");
    inputAsunto.type = "text";
    inputAsunto.name = "subject";
    inputAsunto.placeholder = s("contacto.asuntoPh");
    inputAsunto.className = "w-full px-4 py-3 border border-teal-800 rounded-lg hover:shadow-lg hover:border-teal-500 hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all";
    divAsunto.appendChild(inputAsunto);
    form.appendChild(divAsunto);

    // Campo Mensaje
    const divMensaje = document.createElement("div");
    const labelMensaje = document.createElement("label");
    labelMensaje.className = "block text-teal-800 font-semibold mb-2";
    labelMensaje.textContent = s("contacto.mensaje");
    divMensaje.appendChild(labelMensaje);

    const textareaMensaje = document.createElement("textarea");
    textareaMensaje.name = "message";
    textareaMensaje.required = true;
    textareaMensaje.rows = 6;
    textareaMensaje.placeholder = s("contacto.mensajePh");
    textareaMensaje.className = "w-full px-4 py-3 border border-teal-800 rounded-lg hover:shadow-lg hover:border-teal-500 hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none";
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
    nextHidden.value = `${window.location.origin}${window.location.pathname}?enviado=1`;
    form.appendChild(nextHidden);

    const subjectHidden = document.createElement("input");
    subjectHidden.type = "hidden";
    subjectHidden.name = "_subject";
    subjectHidden.value = s("contacto.asuntoForm");
    form.appendChild(subjectHidden);

    // Contenedor del botón para alinearlo a la derecha
    const divBoton = document.createElement("div");
    divBoton.className = "flex justify-end";

    // Botón de envío
    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.className = "inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-amber-500/50 transform hover:scale-105 transition-all duration-300";
    botonEnviar.textContent = s("contacto.enviar");
    divBoton.appendChild(botonEnviar);
    form.appendChild(divBoton);

    contenedor.appendChild(form);
    ContenedorG.appendChild(contenedor);

    return ContenedorG; 
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const contenedorContacto = document.getElementById('cont');

    if (contenedorContacto) {
        // Añadir el formulario al div con id "cont"
        gran.appendChild(crearFormularioContacto());
        contenedorContacto.appendChild(gran); 
        crearParticulasGlobales();
    } else {
        console.error('No se encontró el elemento con id "cont"');
    }
});