import { s, crearSelectorIdioma } from "./i18n.js";
import { crearFooter } from "./footer.js";

const padre = document.getElementById("cont");

function generarNav() {
    const nav = document.createElement("nav");
    nav.className = "fixed top-0 left-0 w-full text-white z-50 ";
    nav.style.backgroundColor = "#143642";

    const contenedor = document.createElement("div");
    contenedor.className = "container mx-auto px-4 py-4";
    nav.appendChild(contenedor);

    // Wrapper flex para alinear logo y menú
    const navWrapper = document.createElement("div");
    navWrapper.className = "flex justify-between items-center";
    contenedor.appendChild(navWrapper);

    // Logo
    const logo = document.createElement("a");
    logo.href = "index.html";
    logo.setAttribute("aria-label", s("nav.logo"));
    const logoImg = document.createElement("img");
    logoImg.src = "img/logo.png";
    logoImg.alt = "Logo Claudia Hdez";
    logoImg.className = "w-24 h-auto";
    logo.appendChild(logoImg);
    navWrapper.appendChild(logo);

    // Overlay oscuro para móvil
    const overlay = document.createElement("div");
    overlay.className = "hidden fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300";
    overlay.id = "menu-overlay";
    document.body.appendChild(overlay);

    // Botón hamburguesa (solo visible en móvil)
    const botonHamburguesa = document.createElement("button");
    botonHamburguesa.className = "md:hidden focus:outline-none z-50 relative transition-transform duration-300";
    botonHamburguesa.setAttribute("aria-label", s("nav.abrirMenu"));
    const menu = document.createElement("img");
    menu.src = "img/menu.png";
    menu.alt = "";
    menu.className = "w-8 h-auto";
    botonHamburguesa.appendChild(menu);
    navWrapper.appendChild(botonHamburguesa);

    // Lista de navegación (el selector de idioma se añade más abajo, tras crear la lista)
    const lista = document.createElement("ul");
    lista.className = "fixed md:static top-0 -right-full md:right-auto w-64 md:w-auto h-screen md:h-auto p-8 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out z-50 shadow-2xl md:shadow-none";
    lista.style.backgroundColor = "#143642";
    lista.id = "menu-navegacion";
    navWrapper.appendChild(lista);

    // Selector de idioma (siempre visible, fuera del menú desplegable móvil)
    navWrapper.appendChild(crearSelectorIdioma());

    // Botón cerrar (X) para el menú móvil
    const botonCerrar = document.createElement("button");
    botonCerrar.className = "md:hidden self-end text-3xl mb-4 hover:text-amber-400 transition-colors";
    botonCerrar.innerHTML = "&times;";
    botonCerrar.setAttribute("aria-label", s("nav.cerrarMenu"));
    lista.appendChild(botonCerrar);

    // Elementos del menú con sus archivos correspondientes
    const menuItems = [
        { texto: s("nav.inicio"), archivo: "index.html" },
        { texto: s("nav.sobreMi"), archivo: "html/sobre-mi.html" },
        { texto: s("nav.conocimientos"), archivo: "html/conocimientos.html" },
        { texto: s("nav.proyectos"), archivo: "html/proyectos.html" },
        { texto: s("nav.cv"), archivo: "html/curriculum-vitae.html" },
        { texto: s("nav.contacto"), archivo: "html/contacto.html" }
    ];

    menuItems.forEach((item, index) => {
        const element = document.createElement("li");
        element.className = "opacity-0 transform translate-x-8 md:opacity-100 md:transform-none";
        element.style.transition = `opacity 0.3s ease-out ${index * 0.1}s, transform 0.3s ease-out ${index * 0.1}s`;

        const link = document.createElement("a");
        link.href = item.archivo; // Ahora cada enlace apunta a su archivo
        link.className = "block hover:text-amber-400 transition-colors duration-200 whitespace-nowrap text-lg py-2 md:py-0";
        link.textContent = item.texto;

        element.appendChild(link);
        lista.appendChild(element);
    });

    // Función para abrir menú
    function abrirMenu() {
        lista.style.right = "0";
        overlay.classList.remove("hidden");
        setTimeout(() => overlay.classList.add("opacity-100"), 10);

        // Animar items del menú
        const items = lista.querySelectorAll("li");
        items.forEach(item => {
            item.classList.remove("opacity-0", "translate-x-8");
        });

        // Rotar botón hamburguesa
        botonHamburguesa.style.transform = "rotate(90deg)";
    }

    // Función para cerrar menú
    function cerrarMenu() {
        lista.style.right = "-100%";
        overlay.classList.remove("opacity-100");
        setTimeout(() => overlay.classList.add("hidden"), 300);

        // Resetear animación de items
        const items = lista.querySelectorAll("li");
        items.forEach(item => {
            if (window.innerWidth < 768) {
                item.classList.add("opacity-0", "translate-x-8");
            }
        });

        // Resetear rotación del botón
        botonHamburguesa.style.transform = "rotate(0deg)";
    }

    // Event listeners
    botonHamburguesa.addEventListener("click", () => {
        if (lista.style.right === "0px") {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    botonCerrar.addEventListener("click", cerrarMenu);
    overlay.addEventListener("click", cerrarMenu);

    // Cerrar menú al hacer click en un enlace (solo en móvil)
    const enlaces = lista.querySelectorAll("a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                cerrarMenu();
            }
        });
    });

    // Cerrar menú al redimensionar a desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            lista.style.right = "auto";
            overlay.classList.add("hidden");
            botonHamburguesa.style.transform = "rotate(0deg)";
        }
    });
    padre.appendChild(nav);
}

function inicio() {
    const contenedorInicio = document.createElement("div");
    contenedorInicio.className = "relative flex items-center justify-center min-h-screen overflow-hidden";
    contenedorInicio.style.background = "radial-gradient(circle at 20% 50%, #143642 0%, #0a1f2e 100%)";

    // Partículas flotantes
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement("div");
        particula.className = "absolute rounded-full bg-amber-400/10";
        const size = Math.random() * 100 + 50;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particula.style.animationDelay = `${Math.random() * 5}s`;
        contenedorInicio.appendChild(particula);
    }
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement("div");
        particula.className = "absolute rounded-full bg-amber-400/10";
        const size = Math.random() * 100 + 50;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particula.style.animationDelay = `${Math.random() * 5}s`;
        contenedorInicio.appendChild(particula);
    }

    // Contenedor central
    const contenido = document.createElement("div");
    contenido.className = "relative z-10 text-center px-4";

    // Badge superior
    const badge = document.createElement("div");
    badge.className = "inline-block px-6 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8 backdrop-blur-sm";
    badge.textContent = s("home.badge");
    contenido.appendChild(badge);

    // Nombre grande
    const nombre = document.createElement("h1");
    nombre.className = "text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative";
    nombre.style.fontFamily = "'Poppins', sans-serif";

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = "Claudia";
    nombreSpan.className = "text-white block";
    nombreSpan.style.textShadow = "0 0 80px #fbbf2480";
    nombre.appendChild(nombreSpan);

    const apellidoSpan = document.createElement("span");
    apellidoSpan.textContent = "Hdez";
    apellidoSpan.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    apellidoSpan.style.backgroundClip = "text";
    apellidoSpan.style.webkitBackgroundClip = "text";
    apellidoSpan.style.color = "transparent";
    apellidoSpan.className = "block";
    nombre.appendChild(apellidoSpan);

    contenido.appendChild(nombre);

    // Foto circular pequeña integrada
    // const fotoContainer = document.createElement("div");
    // fotoContainer.className = "inline-block relative mb-8";

    // const foto = document.createElement("img");
    // foto.src = "img/yo.jpg";
    // foto.className = "w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-xl shadow-amber-500/50";
    // fotoContainer.appendChild(foto);

    // const statusDot = document.createElement("div");
    // statusDot.className = "absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse";
    // fotoContainer.appendChild(statusDot);

    // contenido.appendChild(fotoContainer);

    // Subtítulo
    const subtitulo = document.createElement("p");
    subtitulo.textContent = s("home.subtitulo");
    subtitulo.className = "text-white/60 text-xl md:text-2xl font-light tracking-widest mb-12";
    contenido.appendChild(subtitulo);

    // CTA
    const cta = document.createElement("a");
    cta.href = "html/proyectos.html";
    cta.className = "inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-amber-500/50 transform hover:scale-105 transition-all duration-300";
    cta.innerHTML = `
        ${s("home.cta")}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
    `;
    contenido.appendChild(cta);

    contenedorInicio.appendChild(contenido);

    // Animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-30px) translateX(20px); }
        }
    `;
    document.head.appendChild(style);

    padre.appendChild(contenedorInicio);
}

function crearModalSaludo() {
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center opacity-0 transition-opacity duration-300";

    const modal = document.createElement("div");
    modal.className = "bg-white rounded-2xl shadow-2xl p-8 max-w-md transform scale-90 transition-transform duration-300 relative";

    modal.innerHTML = `
        <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none" onclick="this.closest('.fixed').remove()">
            &times;
        </button>
        <div class="text-center">
            <div class="text-6xl mb-4 animate-bounce">👋</div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">${s("modal.saludo")}</h2>
            <p class="text-gray-600 mb-6">${s("modal.bienvenida")}</p>
            <button class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors" onclick="this.closest('.fixed').remove()">
                ${s("modal.comenzar")}
            </button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Animaciones
    setTimeout(() => {
        overlay.style.opacity = "1";
        modal.style.transform = "scale(1)";
    }, 100);

    // Cerrar al hacer click en el overlay
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// El saludo solo se muestra en la primera visita
window.addEventListener("load", () => {
    let yaVisto = false;
    try {
        yaVisto = localStorage.getItem("portfolio-saludo") === "1";
        localStorage.setItem("portfolio-saludo", "1");
    } catch (e) { /* sin localStorage: se muestra siempre */ }
    if (!yaVisto) setTimeout(crearModalSaludo, 500);
});

inicio();
generarNav();
document.body.appendChild(crearFooter(""));