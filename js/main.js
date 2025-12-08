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
    logo.href = "eje.html";
    const logoImg = document.createElement("img");
    logoImg.src = "img/logo.png";
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
    const menu = document.createElement("img");
    menu.src = "img/menu.png";
    menu.className = "w-8 h-auto";
    botonHamburguesa.appendChild(menu);
    navWrapper.appendChild(botonHamburguesa);

    // Lista de navegación
    const lista = document.createElement("ul");
    lista.className = "fixed md:static top-0 -right-full md:right-auto w-64 md:w-auto h-screen md:h-auto p-8 md:p-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 ease-in-out z-50 shadow-2xl md:shadow-none";
    lista.style.backgroundColor = "#143642";
    lista.id = "menu-navegacion";
    navWrapper.appendChild(lista);

    // Botón cerrar (X) para el menú móvil
    const botonCerrar = document.createElement("button");
    botonCerrar.className = "md:hidden self-end text-3xl mb-4 hover:text-amber-600 transition-colors";
    botonCerrar.innerHTML = "&times;";
    lista.appendChild(botonCerrar);

    // Elementos del menú
    const menuItems = ["Inicio", "Sobre mi", "Conocimientos", "Proyectos", "Curriculum Vitae", "Contacto"];

    menuItems.forEach((texto, index) => {
        const element = document.createElement("li");
        element.className = "opacity-0 transform translate-x-8 md:opacity-100 md:transform-none";
        element.style.transition = `opacity 0.3s ease-out ${index * 0.1}s, transform 0.3s ease-out ${index * 0.1}s`;

        const link = document.createElement("a");
        link.href = "eje.html";
        link.className = "block hover:text-amber-600 transition-colors duration-200 whitespace-nowrap text-lg py-2 md:py-0";
        link.textContent = texto;

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

// function inicio(){
//     const contenedorInicio = document.createElement("div");
//     contenedorInicio.className = "flex items-center justify-center h-screen rounded-b-full flex-col";
//     contenedorInicio.style.backgroundColor = "#143642";

//     const nombre = document.createElement("h1");
//     const elNombre = document.createTextNode("Claudia Hdez");
//     nombre.className = "text-amber-600 font-medium text-7xl font-serif";
//     nombre.appendChild(elNombre);
//     contenedorInicio.appendChild(nombre);

//     const foto = document.createElement("img");
//     foto.src = "img/yo.jpg";
//     foto.className = "rounded-full w-80 mt-[128px]";
//     contenedorInicio.appendChild(foto);

//     const titulo = document.createElement("h1");
//     const elTitulo = document.createTextNode("Mi porfolio");
//     titulo.className = "text-white font-medium text-8xl p-12 font-serif text-shadow-2xs text-shadow-white";
//     titulo.appendChild(elTitulo);
//     contenedorInicio.appendChild(titulo);


//     padre.appendChild(contenedorInicio);
// }

//Hero
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

    // Contenedor central
    const contenido = document.createElement("div");
    contenido.className = "relative z-10 text-center px-4";

    // Badge superior
    const badge = document.createElement("div");
    badge.className = "inline-block px-6 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8 backdrop-blur-sm";
    badge.textContent = "✨ Disponible para proyectos";
    contenido.appendChild(badge);

    // Nombre grande
    const nombre = document.createElement("h1");
    nombre.className = "text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative";
    nombre.style.fontFamily = "'Poppins', sans-serif";

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = "Claudia";
    nombreSpan.className = "text-white block";
    nombreSpan.style.textShadow = "0 0 80px rgba(251, 191, 36, 0.5)";
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
    const fotoContainer = document.createElement("div");
    fotoContainer.className = "inline-block relative mb-8";

    const foto = document.createElement("img");
    foto.src = "img/yo.jpg";
    foto.className = "w-32 h-32 rounded-full object-cover border-4 border-amber-500 shadow-xl shadow-amber-500/50";
    fotoContainer.appendChild(foto);

    const statusDot = document.createElement("div");
    statusDot.className = "absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse";
    fotoContainer.appendChild(statusDot);

    contenido.appendChild(fotoContainer);

    // Subtítulo
    const subtitulo = document.createElement("p");
    subtitulo.textContent = "Portfolio • Desarrolladora Web • Diseñadora UI/UX";
    subtitulo.className = "text-white/60 text-xl md:text-2xl font-light tracking-widest mb-12";
    contenido.appendChild(subtitulo);

    // CTA
    const cta = document.createElement("a");
    cta.href = "#proyectos";
    cta.className = "inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-amber-500/50 transform hover:scale-105 transition-all duration-300";
    cta.innerHTML = `
        Explorar Portfolio
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

//Minimalista
// function inicio() {
//     const contenedorInicio = document.createElement("div");
//     contenedorInicio.className = "relative flex items-center justify-center min-h-screen";
//     contenedorInicio.style.backgroundColor = "#0a0a0a";

//     // Grid de fondo
//     const grid = document.createElement("div");
//     grid.className = "absolute inset-0 opacity-20";
//     grid.style.backgroundImage = "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)";
//     grid.style.backgroundSize = "50px 50px";
//     contenedorInicio.appendChild(grid);

//     // Contenedor principal
//     const contenido = document.createElement("div");
//     contenido.className = "relative z-10 max-w-4xl mx-auto px-8";

//     // Layout en dos columnas para desktop
//     const layout = document.createElement("div");
//     layout.className = "flex flex-col md:flex-row items-center gap-12 md:gap-16";

//     // Columna izquierda - Foto
//     const columnaFoto = document.createElement("div");
//     columnaFoto.className = "relative group";

//     const fotoWrapper = document.createElement("div");
//     fotoWrapper.className = "relative";

//     // Marco decorativo
//     const marco = document.createElement("div");
//     marco.className = "absolute -inset-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity";
//     fotoWrapper.appendChild(marco);

//     const foto = document.createElement("img");
//     foto.src = "img/yo.jpg";
//     foto.className = "relative rounded-2xl w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl";
//     fotoWrapper.appendChild(foto);

//     columnaFoto.appendChild(fotoWrapper);
//     layout.appendChild(columnaFoto);

//     // Columna derecha - Texto
//     const columnaTexto = document.createElement("div");
//     columnaTexto.className = "text-center md:text-left";

//     const saludo = document.createElement("p");
//     saludo.textContent = "Hola, soy";
//     saludo.className = "text-amber-400 text-xl md:text-2xl font-light mb-2 tracking-wider";
//     columnaTexto.appendChild(saludo);

//     const nombre = document.createElement("h1");
//     nombre.textContent = "Claudia Hdez";
//     nombre.className = "text-white font-black text-5xl md:text-7xl mb-4";
//     nombre.style.fontFamily = "'Inter', sans-serif";
//     columnaTexto.appendChild(nombre);

//     const titulo = document.createElement("h2");
//     titulo.textContent = "Desarrolladora Web";
//     titulo.className = "text-gray-400 text-2xl md:text-4xl font-light mb-6";
//     columnaTexto.appendChild(titulo);

//     const descripcion = document.createElement("p");
//     descripcion.textContent = "Creando experiencias digitales únicas con código limpio y diseño intuitivo.";
//     descripcion.className = "text-gray-500 text-lg mb-8 max-w-md";
//     columnaTexto.appendChild(descripcion);

//     // Botones
//     const botones = document.createElement("div");
//     botones.className = "flex flex-wrap gap-4 justify-center md:justify-start";

//     const botonPrimario = document.createElement("a");
//     botonPrimario.href = "#proyectos";
//     botonPrimario.textContent = "Ver Proyectos";
//     botonPrimario.className = "px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50";
//     botones.appendChild(botonPrimario);

//     const botonSecundario = document.createElement("a");
//     botonSecundario.href = "#contacto";
//     botonSecundario.textContent = "Contactar";
//     botonSecundario.className = "px-8 py-3 border-2 border-white/20 hover:border-amber-500 text-white font-semibold rounded-lg transition-all duration-300";
//     botones.appendChild(botonSecundario);

//     columnaTexto.appendChild(botones);
//     layout.appendChild(columnaTexto);

//     contenido.appendChild(layout);
//     contenedorInicio.appendChild(contenido);

//     padre.appendChild(contenedorInicio);
// }

//gradiantes
// function inicio() {
//     const contenedorInicio = document.createElement("div");
//     contenedorInicio.className = "relative flex items-center justify-center min-h-screen overflow-hidden";
//     contenedorInicio.style.background = "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)";

//     // Elementos decorativos de fondo
//     const decoracion = document.createElement("div");
//     decoracion.className = "absolute inset-0 overflow-hidden";
//     decoracion.innerHTML = `
//         <div class="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
//         <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style="animation-delay: 4s;"></div>
//     `;
//     contenedorInicio.appendChild(decoracion);

//     // Contenedor principal con glassmorphism
//     const contenidoCentral = document.createElement("div");
//     contenidoCentral.className = "relative z-10 text-center backdrop-blur-sm bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500";

//     // Nombre con animación
//     const nombre = document.createElement("h1");
//     nombre.textContent = "Claudia Hdez";
//     nombre.className = "text-amber-400 font-bold text-6xl md:text-7xl mb-8 animate-fade-in-down";
//     nombre.style.fontFamily = "'Playfair Display', serif";
//     nombre.style.textShadow = "0 0 30px rgba(251, 191, 36, 0.5)";
//     contenidoCentral.appendChild(nombre);

//     // Contenedor de la foto con efecto
//     const fotoContainer = document.createElement("div");
//     fotoContainer.className = "relative inline-block mb-8";

//     // Anillo decorativo giratorio
//     const anillo = document.createElement("div");
//     anillo.className = "absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin";
//     anillo.style.width = "330px";
//     anillo.style.height = "330px";
//     anillo.style.left = "-15px";
//     anillo.style.top = "-15px";
//     fotoContainer.appendChild(anillo);

//     // Foto con efecto de brillo
//     const foto = document.createElement("img");
//     foto.src = "img/yo.jpg";
//     foto.className = "relative rounded-full w-80 h-80 object-cover border-8 border-white/20 shadow-2xl hover:shadow-amber-400/50 transition-all duration-500";
//     fotoContainer.appendChild(foto);

//     contenidoCentral.appendChild(fotoContainer);

//     // Título con efecto gradiente
//     const titulo = document.createElement("h2");
//     titulo.textContent = "Mi Portfolio";
//     titulo.className = "font-bold text-6xl md:text-8xl mb-4 animate-fade-in-up";
//     titulo.style.fontFamily = "'Playfair Display', serif";
//     titulo.style.background = "linear-gradient(to right, #ffffff, #fbbf24, #ffffff)";
//     titulo.style.backgroundClip = "text";
//     titulo.style.webkitBackgroundClip = "text";
//     titulo.style.color = "transparent";
//     titulo.style.backgroundSize = "200% auto";
//     titulo.style.animation = "shine 3s linear infinite";
//     contenidoCentral.appendChild(titulo);

//     // Subtítulo
//     const subtitulo = document.createElement("p");
//     subtitulo.textContent = "Desarrolladora Web & Diseñadora";
//     subtitulo.className = "text-white/80 text-xl md:text-2xl font-light tracking-wide";
//     contenidoCentral.appendChild(subtitulo);

//     // Botón CTA
//     const boton = document.createElement("a");
//     boton.href = "#proyectos";
//     boton.textContent = "Ver Proyectos";
//     boton.className = "inline-block mt-8 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1 transition-all duration-300";
//     contenidoCentral.appendChild(boton);

//     contenedorInicio.appendChild(contenidoCentral);

//     // Flecha animada para scroll
//     const flecha = document.createElement("div");
//     flecha.className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer";
//     flecha.innerHTML = `
//         <svg class="w-8 h-8 text-white/50 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//         </svg>
//     `;
//     flecha.onclick = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
//     contenedorInicio.appendChild(flecha);

//     // Agregar estilos de animación
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes shine {
//             to { background-position: 200% center; }
//         }
//         @keyframes fade-in-down {
//             from {
//                 opacity: 0;
//                 transform: translateY(-20px);
//             }
//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }
//         @keyframes fade-in-up {
//             from {
//                 opacity: 0;
//                 transform: translateY(20px);
//             }
//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }
//         .animate-fade-in-down {
//             animation: fade-in-down 1s ease-out;
//         }
//         .animate-fade-in-up {
//             animation: fade-in-up 1s ease-out 0.5s backwards;
//         }
//     `;
//     document.head.appendChild(style);

//     padre.appendChild(contenedorInicio);
// }

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
            <h2 class="text-3xl font-bold text-gray-800 mb-2">¡Hola!</h2>
            <p class="text-gray-600 mb-6">Bienvenido a mi portfolio. Explora mis proyectos y conocimientos.</p>
            <button class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors" onclick="this.closest('.fixed').remove()">
                ¡Comenzar!
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

// window.addEventListener("load", () => {
//     setTimeout(crearModalSaludo, 500);
// });

inicio();
generarNav();