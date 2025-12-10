import { misDatos } from "../js/datos.js";

const fuera = document.getElementById("cont");

function crearParticulasGlobales() {
    const particulasContainer = document.createElement("div");
    particulasContainer.className = "fixed inset-0 pointer-events-none z-0 overflow-hidden";

    for (let i = 0; i < 30; i++) {
        const particula = document.createElement("div");
        particula.className = "absolute rounded-full bg-teal-800/10";
        const size = Math.random() * 100 + 50;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particula.style.animationDelay = `${Math.random() * 5}s`;
        particulasContainer.appendChild(particula);
    }

    document.body.appendChild(particulasContainer);
}

function conocimientos(){
    const contenedor = document.createElement("div");
    contenedor.className = "text-center mt-[200px] relative";

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const conocimiento = document.createElement("span");
    conocimiento.textContent = "Conocimientos";
    conocimiento.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    conocimiento.style.backgroundClip = "text";
    conocimiento.style.color = "transparent";
    titulo.appendChild(conocimiento);

    const estudios = document.createElement("div");

    const tituloEstudios = document.createElement("h3");
    tituloEstudios.textContent = "Estudios";
    estudios.appendChild(tituloEstudios);
    contenedor.appendChild(estudios);

    // Contenedor de las tarjetas
    const tarjetasContainerEstudios = document.createElement("div");
    tarjetasContainerEstudios.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    // Bucle para crear una tarjeta por cada estudio
    misDatos.estudios.forEach((estudios) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-sm border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-80 flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        // Titulo
        const puesto = document.createElement("h3");
        puesto.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        puesto.style.fontFamily = "'Poppins', sans-serif";
        puesto.textContent = estudios.puesto;
        tarjeta.appendChild(puesto);

        // Empresa
        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        empresa.textContent = conocimientos.empresa;
        tarjeta.appendChild(empresa);

        // Fechas
        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 text-center";
        fechas.textContent = `${conocimientos.fechaInicio} - ${conocimientos.fechaFin}`;
        tarjeta.appendChild(fechas);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
        descripcion.textContent = conocimientos.descripcion;
        tarjeta.appendChild(descripcion);

        tarjetasContainerEstudios.appendChild(tarjeta);
    });

    contenedor.appendChild(tarjetasContainerEstudios);
    
    const tecnologia = document.createElement("div");

    const tituloTecnologia = document.createElement("h3");
    tituloTecnologia.textContent = "Estudios";
    tecnologia.appendChild(tituloTecnologia);
    contenedor.appendChild(estudios);

    // Contenedor de las tarjetas
    const tarjetasContainer = document.createElement("div");
    tarjetasContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    // Bucle para crear una tarjeta por cada conocimientos
    misDatos.conocimientos.forEach((conocimientos) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-sm border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-80 flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

        //Imagen
        const foto = document.createElement("div");
        foto.className = "w-32 h-32 rounded-full overflow-hidden shadow-lg mx-auto mb-4 border-2 border-amber-400/50";
        const imagen = document.createElement("img");
        imagen.src = conocimientos.imagen;
        imagen.alt = conocimientos.nombre;
        imagen.className = "w-full h-full object-cover";
        foto.appendChild(imagen);
        tarjeta.appendChild(foto);

        // Puesto
        const puesto = document.createElement("h3");
        puesto.className = "text-xl font-bold text-teal-800 mb-2 text-center";
        puesto.style.fontFamily = "'Poppins', sans-serif";
        puesto.textContent = conocimientos.puesto;
        tarjeta.appendChild(puesto);

        // Empresa
        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        empresa.textContent = conocimientos.empresa;
        tarjeta.appendChild(empresa);

        // Fechas
        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 text-center";
        fechas.textContent = `${conocimientos.fechaInicio} - ${conocimientos.fechaFin}`;
        tarjeta.appendChild(fechas);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
        descripcion.textContent = conocimientos.descripcion;
        tarjeta.appendChild(descripcion);

        tarjetasContainer.appendChild(tarjeta);
    });

    contenedor.appendChild(tarjetasContainer);
    
    fuera.appendChild(contenedor);
}

crearParticulasGlobales();
conocimientos();