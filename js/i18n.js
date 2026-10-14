const STORAGE_KEY = "portfolio-lang";

export function getLang() {
    const guardado = localStorage.getItem(STORAGE_KEY);
    return guardado === "en" ? "en" : "es";
}

export function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    window.location.reload();
}

// Traduce un campo de datos.js: si es un objeto {es, en} devuelve el idioma activo,
// si es un string normal (nombres propios, enlaces...) lo devuelve tal cual.
export function t(campo) {
    if (campo && typeof campo === "object" && !Array.isArray(campo)) {
        const lang = getLang();
        return campo[lang] ?? campo.es ?? "";
    }
    return campo;
}

const MESES_EN = {
    "Enero": "January", "Febrero": "February", "Marzo": "March", "Abril": "April",
    "Mayo": "May", "Junio": "June", "Julio": "July", "Agosto": "August",
    "Septiembre": "September", "Octubre": "October", "Noviembre": "November", "Diciembre": "December"
};

// Traduce fechas tipo "Agosto 2026" o "Actualidad" al idioma activo.
export function tFecha(fecha) {
    if (!fecha || getLang() === "es") return fecha;
    if (fecha === "Actualidad") return "Present";
    const partes = fecha.split(" ");
    if (partes.length === 2 && MESES_EN[partes[0]]) {
        return `${MESES_EN[partes[0]]} ${partes[1]}`;
    }
    return fecha;
}

export const strings = {
    es: {
        nav: {
            inicio: "Inicio", sobreMi: "Sobre mí", conocimientos: "Conocimientos",
            proyectos: "Proyectos", cv: "Currículum", contacto: "Contacto",
            abrirMenu: "Abrir menú", cerrarMenu: "Cerrar menú", logo: "Ir al inicio"
        },
        footer: { derechos: "Todos los derechos reservados" },
        home: {
            badge: "👩‍💻 Desarrolladora Web en La Palma",
            subtitulo: "Desarrolladora Web Full Stack • Laravel • JavaScript • Python",
            cta: "Ver mis proyectos"
        },
        modal: {
            saludo: "¡Hola!",
            bienvenida: "Bienvenido a mi portfolio. Explora mis proyectos y conocimientos.",
            comenzar: "¡Comenzar!"
        },
        sobreMi: {
            titulo: "¿Quién soy?", email: "Email", direccion: "Dirección",
            experiencia: "Experiencia Laboral"
        },
        conocimientos: { titulo: "Conocimientos", estudios: "Estudios", tecnologias: "Tecnologías" },
        proyectos: {
            titulo: "Proyectos", verDemo: "Ver demo", verVideo: "Ver vídeo", verCodigo: "Ver código"
        },
        cv: {
            titulo: "Currículum Vitae",
            descargarCv: "Descargar CV",
            imprimir: "Imprimir información",
            selImprimir: "Imprimir",
            selTitulo: "¿Qué quieres imprimir?",
            selAyuda: "Desmarca lo que no quieras que aparezca. En la ventana de impresión también puedes elegir «Guardar como PDF».",
            selTelefono: "📱 Teléfono",
            selTodo: "Marcar todo",
            selCancelar: "Cancelar",
            experiencia: "💼 Experiencia Laboral",
            formacion: "🎓 Formación Académica",
            conocimientos: "🛠️ Conocimientos Técnicos",
            aptitudes: "⭐ Aptitudes",
            idiomas: "🌍 Idiomas",
            datos: "📋 Datos Adicionales"
        },
        contacto: {
            titulo: "📧 Contacto", nombre: "Nombre:", nombrePh: "Tu nombre completo",
            email: "Email:", emailPh: "tu@email.com", asunto: "Asunto:",
            asuntoPh: "¿De qué quieres hablar?", mensaje: "Mensaje:",
            mensajePh: "Escribe tu mensaje aquí...", enviar: "Enviar Mensaje",
            asuntoForm: "¡Nuevo mensaje desde tu Portfolio!",
            enviado: "✅ ¡Mensaje enviado! Te responderé lo antes posible.",
            directo: "También puedes escribirme directamente a:"
        }
    },
    en: {
        nav: {
            inicio: "Home", sobreMi: "About me", conocimientos: "Skills",
            proyectos: "Projects", cv: "Resume", contacto: "Contact",
            abrirMenu: "Open menu", cerrarMenu: "Close menu", logo: "Go to home page"
        },
        footer: { derechos: "All rights reserved" },
        home: {
            badge: "👩‍💻 Web Developer in La Palma",
            subtitulo: "Full Stack Web Developer • Laravel • JavaScript • Python",
            cta: "See my projects"
        },
        modal: {
            saludo: "Hello!",
            bienvenida: "Welcome to my portfolio. Explore my projects and skills.",
            comenzar: "Let's go!"
        },
        sobreMi: {
            titulo: "Who am I?", email: "Email", direccion: "Address",
            experiencia: "Work Experience"
        },
        conocimientos: { titulo: "Skills", estudios: "Education", tecnologias: "Technologies" },
        proyectos: {
            titulo: "Projects", verDemo: "View demo", verVideo: "View video", verCodigo: "View code"
        },
        cv: {
            titulo: "Resume",
            descargarCv: "Download Resume",
            imprimir: "Print information",
            selImprimir: "Print",
            selTitulo: "What do you want to print?",
            selAyuda: "Uncheck anything you don't want to appear. In the print dialog you can also choose \"Save as PDF\".",
            selTelefono: "📱 Phone number",
            selTodo: "Select all",
            selCancelar: "Cancel",
            experiencia: "💼 Work Experience",
            formacion: "🎓 Education",
            conocimientos: "🛠️ Technical Skills",
            aptitudes: "⭐ Skills",
            idiomas: "🌍 Languages",
            datos: "📋 Additional Information"
        },
        contacto: {
            titulo: "📧 Contact", nombre: "Name:", nombrePh: "Your full name",
            email: "Email:", emailPh: "you@email.com", asunto: "Subject:",
            asuntoPh: "What would you like to talk about?", mensaje: "Message:",
            mensajePh: "Write your message here...", enviar: "Send Message",
            asuntoForm: "New message from your Portfolio!",
            enviado: "✅ Message sent! I'll get back to you as soon as possible.",
            directo: "You can also email me directly at:"
        }
    }
};

// Devuelve un string de la UI por ruta, ej: s("nav.inicio")
export function s(ruta) {
    const lang = getLang();
    return ruta.split(".").reduce((acc, clave) => (acc ? acc[clave] : undefined), strings[lang]);
}

// Crea el selector de idioma ES/EN para insertar en la barra de navegación.
export function crearSelectorIdioma() {
    const activo = getLang();
    const contenedor = document.createElement("div");
    contenedor.className = "inline-flex items-center border border-white/30 rounded-full p-0.5 ml-4";
    contenedor.setAttribute("role", "group");
    contenedor.setAttribute("aria-label", "Idioma / Language");

    ["es", "en"].forEach((lang) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.textContent = lang.toUpperCase();
        boton.setAttribute("aria-pressed", activo === lang ? "true" : "false");
        boton.className = "px-3 py-1 rounded-full text-xs font-bold transition-colors " +
            (activo === lang ? "bg-amber-400 text-gray-900" : "text-white/70 hover:text-amber-400");
        boton.addEventListener("click", () => {
            if (getLang() !== lang) setLang(lang);
        });
        contenedor.appendChild(boton);
    });

    return contenedor;
}

document.documentElement.lang = getLang();
