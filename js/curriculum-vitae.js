import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";

const fuera = document.getElementById("cont");

const contenedor = document.createElement("div");
contenedor.className = "mt-[200px] relative";

function curriculumInfo(){    

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-20 relative z-10 text-center" ;
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const cV = document.createElement("span");
    cV.textContent = "Curriculum Vitae";
    cV.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    cV.style.backgroundClip = "text";
    cV.style.color = "transparent";
    titulo.appendChild(cV);

    const tarjetasContainer1 = document.createElement("div");
    tarjetasContainer1.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    const tarjeta = document.createElement("div");
    tarjeta.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 relative z-10";

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

    const links = document.createElement("div");
    links.className = "mt-4 flex justify-center";

    //Github
    const git = document.createElement("a");
    git.href = misDatos.datosPersonales.github;
    git.target = "_blank";
    git.rel = "noopener noreferrer";
    const logo = document.createElement("img");
    logo.src = "../img/github-logo.png"
    logo.className = "w-12 mr-12";
    git.appendChild(logo);
    links.appendChild(git);
    //Linkedin
    const linke = document.createElement("a");
    linke.href = misDatos.datosPersonales.linkedin;
    linke.target = "_blank";
    linke.rel = "noopener noreferrer";
    const logoL = document.createElement("img");
    logoL.src = "../img/linkedin (1).png"
    logoL.className = "w-12";
    linke.appendChild(logoL);
    links.appendChild(linke);
    tarjeta.appendChild(contacto);
    tarjeta.appendChild(links);
    tarjetasContainer1.appendChild(tarjeta);
    contenedor.appendChild(tarjetasContainer1);
}

function curriculumExp(){
    const tarjetaExpsContainer2 = document.createElement("div");
    tarjetaExpsContainer2.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg  relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = "💼Experiencia Laboral";
    tarjetaExp.appendChild(tituloT2);

    const exps = document.createElement("div");
    exps.className = "mt-4 flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    misDatos.experienciaLaboral.forEach(exp => {
        const experiencia = document.createElement("div");
        experiencia.className = "bg-gradient-to-br from-amber-50/50 to-amber-400/25 border border-amber-400/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)] hover:border-amber-400 hover:shadow-amber-500/50";

        const puesto = document.createElement("h3");
        puesto.className = "text-xl font-bold text-teal-800 mb-2 ";
        puesto.style.fontFamily = "'Poppins', sans-serif";
        puesto.textContent = exp.puesto;
        experiencia.appendChild(puesto);

        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 ";
        empresa.textContent = exp.empresa;
        experiencia.appendChild(empresa);

        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 ";
        fechas.textContent = `${exp.ubicacion} • ${exp.fechaInicio} - ${exp.fechaFin}`;
        experiencia.appendChild(fechas);

        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed ";
        descripcion.textContent = exp.descripcion;
        experiencia.appendChild(descripcion);

        exps.appendChild(experiencia);
    })
    tarjetaExp.appendChild(exps);
    tarjetaExpsContainer2.appendChild(tarjetaExp);
    contenedor.appendChild(tarjetaExpsContainer2);
}

function curriculumForm(){
    const tarjetaExpsContainer2 = document.createElement("div");
    tarjetaExpsContainer2.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg  relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = "🎓 Formación Académica";
    tarjetaExp.appendChild(tituloT2);

    const forma = document.createElement("div");
    forma.className = "mt-4 flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    misDatos.estudios.forEach(form => {
        const formacion = document.createElement("div");
        formacion.className = "bg-gradient-to-br from-teal-50/50 to-amber-400/25 border border-amber-400/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)] hover:border-amber-400 hover:shadow-amber-500/50";

        const tipo = document.createElement("span");
        tipo.className = "inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3";
        tipo.textContent = form.tipo
        formacion.appendChild(tipo);

        const titulo = document.createElement("h3");
        titulo.className = "text-xl font-bold text-teal-800 mb-2 ";
        titulo.style.fontFamily = "'Poppins', sans-serif";
        titulo.textContent = form.titulo;
        formacion.appendChild(titulo);

        const institucion = document.createElement("p");
        institucion.className = "text-lg text-gray-600 font-semibold mb-3 ";
        institucion.textContent = form.institucion;
        formacion.appendChild(institucion);

        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 ";
        fechas.textContent = `${form.ubicacion} • ${form.fechaInicio} - ${form.fechaFin}`;
        formacion.appendChild(fechas);

        forma.appendChild(formacion);
    })
    tarjetaExp.appendChild(forma);
    tarjetaExpsContainer2.appendChild(tarjetaExp);
    contenedor.appendChild(tarjetaExpsContainer2);
}

fuera.appendChild(contenedor);
crearParticulasGlobales();
curriculumInfo();
curriculumExp();
curriculumForm();
