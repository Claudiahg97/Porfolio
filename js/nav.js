const padre = document.getElementById("nav");

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
    logo.href = "../index.html";
    const logoImg = document.createElement("img");
    logoImg.src = "../img/logo.png";
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
    menu.src = "../img/menu.png";
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
    botonCerrar.className = "md:hidden self-end text-3xl mb-4 hover:text-amber-400 transition-colors";
    botonCerrar.innerHTML = "&times;";
    lista.appendChild(botonCerrar);

    // Elementos del menú con sus archivos correspondientes
    const menuItems = [
        { texto: "Inicio", archivo: "../index.html" },
        { texto: "Sobre mi", archivo: "sobre-mi.html" },
        { texto: "Conocimientos", archivo: "conocimientos.html" },
        { texto: "Proyectos", archivo: "proyectos.html" },
        { texto: "Curriculum Vitae", archivo: "curriculum-vitae.html" },
        { texto: "Contacto", archivo: "contacto.html" }
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

generarNav();