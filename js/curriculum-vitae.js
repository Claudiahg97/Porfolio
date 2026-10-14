import { misDatos } from "../js/datos.js";
import { crearParticulasGlobales } from "./particulas.js";
import { t, tFecha, s, getLang } from "./i18n.js";

const fuera = document.getElementById("cont");

const contenedor = document.createElement("div");
contenedor.className = "mt-[200px] relative cv";

// Claves estables para cada parte del CV que se puede incluir/excluir del PDF
// (se marcan con data-cv="clave" y se guardan en localStorage).
const claveExp = (exp) => `experiencia:${exp.empresa}|${exp.fechaInicio}`;
const claveEst = (est) => `formacion:${est.titulo.es}`;
const claveCat = (cat) => `conocimientos:${cat.id}`;

function curriculumInfo(){

    const titulo = document.createElement("h1");
    titulo.className = "text-5xl md:text-6xl lg:text-7xl font-black mb-10 relative z-10 text-center no-print" ;
    titulo.style.fontFamily = "'Poppins', sans-serif";
    contenedor.appendChild(titulo);

    const cV = document.createElement("span");
    cV.textContent = s("cv.titulo");
    cV.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
    cV.style.backgroundClip = "text";
    cV.style.color = "transparent";
    titulo.appendChild(cV);

    const divBotones = document.createElement("div");
    divBotones.className = "flex flex-wrap justify-center gap-4 mb-16 px-4 relative z-10 no-print";

    // "Descargar CV": descarga el PDF ya hecho, en el idioma activo de la web
    const descargar = document.createElement("a");
    descargar.href = t(misDatos.datosPersonales.cvPdf);
    descargar.setAttribute("download", "");
    descargar.className = "inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-full shadow-xl shadow-amber-500/40 transform hover:scale-105 transition-all duration-300";
    descargar.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"></path>
        </svg>
        ${s("cv.descargarCv")} (${getLang().toUpperCase()})
    `;
    divBotones.appendChild(descargar);

    // "Imprimir información": elige qué incluir y abre el diálogo de impresión.
    // Los estilos @media print de style.css dejan solo el contenido del CV.
    const imprimir = document.createElement("button");
    imprimir.type = "button";
    imprimir.className = "inline-flex items-center gap-2 px-8 py-4 font-bold text-amber-600 border-2 border-amber-400 bg-white/70 hover:bg-amber-50 rounded-full transform hover:scale-105 transition-all duration-300";
    imprimir.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4"></path>
        </svg>
        ${s("cv.imprimir")}
    `;
    imprimir.addEventListener("click", abrirSelectorDescarga);
    divBotones.appendChild(imprimir);

    contenedor.appendChild(divBotones);

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
    descripcion.textContent = t(misDatos.datosPersonales.descripcion);
    tarjeta.appendChild(descripcion);

    const contacto = document.createElement("div");
    contacto.className = "flex flex-wrap justify-center gap-4 text-sm text-gray-700";

    const email = document.createElement("span");
    email.className = "flex items-center gap-1";
    email.textContent = `📧 ${misDatos.datosPersonales.email}`
    contacto.appendChild(email);

    const telefono = document.createElement("span");
    telefono.className = "flex items-center gap-1";
    telefono.dataset.cv = "telefono";
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
    logo.alt = "GitHub";
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
    logoL.alt = "LinkedIn";
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
    tarjetaExpsContainer2.dataset.cv = "experiencia";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg  relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = s("cv.experiencia");
    tarjetaExp.appendChild(tituloT2);

    const exps = document.createElement("div");
    exps.className = "mt-4 flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    misDatos.experienciaLaboral.forEach(exp => {
        const experiencia = document.createElement("div");
        experiencia.className = "cv-item bg-gradient-to-br from-amber-50/50 to-amber-400/25 border border-amber-400/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)] hover:border-amber-400 hover:shadow-amber-500/50";
        experiencia.dataset.cv = claveExp(exp);

        const puesto = document.createElement("h3");
        puesto.className = "text-xl font-bold text-teal-800 mb-2 ";
        puesto.style.fontFamily = "'Poppins', sans-serif";
        puesto.textContent = t(exp.puesto);
        experiencia.appendChild(puesto);

        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 ";
        empresa.textContent = exp.empresa;
        experiencia.appendChild(empresa);

        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 ";
        fechas.textContent = `${exp.ubicacion} • ${tFecha(exp.fechaInicio)} - ${tFecha(exp.fechaFin)}`;
        experiencia.appendChild(fechas);

        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed ";
        descripcion.textContent = t(exp.descripcion);
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
    tarjetaExpsContainer2.dataset.cv = "formacion";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg  relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = s("cv.formacion");
    tarjetaExp.appendChild(tituloT2);

    const forma = document.createElement("div");
    forma.className = "mt-4 flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    misDatos.estudios.forEach(form => {
        const formacion = document.createElement("div");
        formacion.className = "cv-item bg-gradient-to-br from-teal-50/50 to-amber-400/25 border border-amber-400/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)] hover:border-amber-400 hover:shadow-amber-500/50";
        formacion.dataset.cv = claveEst(form);

        const tipo = document.createElement("span");
        tipo.className = "inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-3";
        tipo.textContent = t(form.tipo)
        formacion.appendChild(tipo);

        const titulo = document.createElement("h3");
        titulo.className = "text-xl font-bold text-teal-800 mb-2 ";
        titulo.style.fontFamily = "'Poppins', sans-serif";
        titulo.textContent = t(form.titulo);
        formacion.appendChild(titulo);

        const institucion = document.createElement("p");
        institucion.className = "text-lg text-gray-600 font-semibold mb-3 ";
        institucion.textContent = form.institucion;
        formacion.appendChild(institucion);

        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 ";
        fechas.textContent = `${form.ubicacion} • ${tFecha(form.fechaInicio)} - ${tFecha(form.fechaFin)}`;
        formacion.appendChild(fechas);

        forma.appendChild(formacion);
    })
    tarjetaExp.appendChild(forma);
    tarjetaExpsContainer2.appendChild(tarjetaExp);
    contenedor.appendChild(tarjetaExpsContainer2);
}

function curriculumCono() {
    const tarjetaExpsContainer2 = document.createElement("div");
    tarjetaExpsContainer2.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";
    tarjetaExpsContainer2.dataset.cv = "conocimientos";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg  relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = s("cv.conocimientos");
    tarjetaExp.appendChild(tituloT2);

    // Agrupados por categoría, en el orden definido en datos.js
    misDatos.categoriasConocimientos.forEach(categoria => {
        const items = misDatos.conocimientos.filter(c => c.categoria === categoria.id);
        if (items.length === 0) return;

        // Título + tarjetas de la categoría, para poder ocultarlos juntos
        const bloqueCategoria = document.createElement("div");
        bloqueCategoria.dataset.cv = claveCat(categoria);

        const tituloCategoria = document.createElement("h4");
        tituloCategoria.className = "cv-categoria text-xl font-bold text-teal-800 mt-6 mb-3";
        tituloCategoria.style.fontFamily = "'Poppins', sans-serif";
        tituloCategoria.textContent = t(categoria.nombre);
        bloqueCategoria.appendChild(tituloCategoria);

        const forma = document.createElement("div");
        forma.className = "cv-grupo flex flex-wrap gap-3";

        items.forEach(conocimiento => {
            const formacion = document.createElement("div");
            formacion.className = "cv-skill bg-gradient-to-br from-teal-50/50 to-amber-400/25 border border-amber-400/50 rounded-lg px-4 py-3 shadow-md hover:shadow-xl text-center transition-shadow w-[calc(50%-6px)] md:w-[calc(20%-10px)] hover:border-amber-400 hover:shadow-amber-500/50";

            const institucion = document.createElement("p");
            institucion.className = "text-base font-bold text-teal-800 leading-tight mb-1";
            institucion.textContent = t(conocimiento.nombre);
            formacion.appendChild(institucion);

            const fechas = document.createElement("p");
            fechas.className = "text-sm text-amber-500";
            fechas.textContent = t(conocimiento.nivel);
            formacion.appendChild(fechas);

            forma.appendChild(formacion);
        });
        bloqueCategoria.appendChild(forma);
        tarjetaExp.appendChild(bloqueCategoria);
    });
    tarjetaExpsContainer2.appendChild(tarjetaExp);
    contenedor.appendChild(tarjetaExpsContainer2);
}

function curriculumExtra() {
    const tarjetaExpsContainer2 = document.createElement("div");
    tarjetaExpsContainer2.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto mt-[100px]";
    // Se oculta sola si se excluyen sus tres bloques
    tarjetaExpsContainer2.dataset.cvAuto = "";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg relative z-10";

    const bloques = [
        { clave: "aptitudes", titulo: s("cv.aptitudes"), items: misDatos.aptitudes.map(apt => t(apt)) },
        { clave: "idiomas", titulo: s("cv.idiomas"), items: misDatos.idiomas.map(i => `${t(i.idioma)}: ${t(i.nivel)}`) },
        { clave: "datos", titulo: s("cv.datos"), items: misDatos.datosExtra.map(dato => t(dato)) }
    ];

    bloques.forEach((bloque, i) => {
        const div = document.createElement("div");
        div.dataset.cv = bloque.clave;
        if (i > 0) div.className = "mt-8";

        const titulo = document.createElement("h3");
        titulo.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-amber-400 pb-2";
        titulo.style.fontFamily = "'Poppins', sans-serif";
        titulo.textContent = bloque.titulo;
        div.appendChild(titulo);

        const lista = document.createElement("ul");
        lista.className = "space-y-2";
        bloque.items.forEach(texto => {
            const li = document.createElement("li");
            li.className = "flex items-start gap-2 text-gray-700";

            const punto = document.createElement("span");
            punto.className = "text-teal-800 mt-1";
            punto.textContent = "•";
            li.appendChild(punto);

            const span = document.createElement("span");
            span.textContent = texto;
            li.appendChild(span);

            lista.appendChild(li);
        });
        div.appendChild(lista);
        tarjetaExp.appendChild(div);
    });

    tarjetaExpsContainer2.appendChild(tarjetaExp);
    contenedor.appendChild(tarjetaExpsContainer2);
}

// ---------- Selector de contenido del PDF ----------

const STORAGE_EXCLUIDOS = "cv-excluidos";

function leerExcluidos() {
    try {
        const guardado = JSON.parse(localStorage.getItem(STORAGE_EXCLUIDOS));
        return new Set(Array.isArray(guardado) ? guardado : []);
    } catch (e) {
        return new Set();
    }
}

function guardarExcluidos(excluidos) {
    try {
        localStorage.setItem(STORAGE_EXCLUIDOS, JSON.stringify([...excluidos]));
    } catch (e) { /* sin localStorage: no se recuerda la selección */ }
}

// Opciones del selector: secciones y, dentro de algunas, sus elementos
function opcionesSelector() {
    return [
        { clave: "telefono", etiqueta: s("cv.selTelefono") },
        {
            clave: "experiencia", etiqueta: s("cv.experiencia"),
            hijos: misDatos.experienciaLaboral.map(exp => ({ clave: claveExp(exp), etiqueta: `${t(exp.puesto)} · ${exp.empresa}` }))
        },
        {
            clave: "formacion", etiqueta: s("cv.formacion"),
            hijos: misDatos.estudios.map(est => ({ clave: claveEst(est), etiqueta: t(est.titulo) }))
        },
        {
            clave: "conocimientos", etiqueta: s("cv.conocimientos"),
            hijos: misDatos.categoriasConocimientos
                .filter(cat => misDatos.conocimientos.some(c => c.categoria === cat.id))
                .map(cat => ({ clave: claveCat(cat), etiqueta: t(cat.nombre) }))
        },
        { clave: "aptitudes", etiqueta: s("cv.aptitudes") },
        { clave: "idiomas", etiqueta: s("cv.idiomas") },
        { clave: "datos", etiqueta: s("cv.datos") }
    ];
}

// Marca con .cv-oculto (oculto solo al imprimir) lo excluido
function aplicarSeleccion(excluidos) {
    document.querySelectorAll("[data-cv]").forEach(el => {
        el.classList.toggle("cv-oculto", excluidos.has(el.dataset.cv));
    });
    // Una sección con todos sus elementos excluidos también se oculta
    document.querySelectorAll("[data-cv-auto], [data-cv='experiencia'], [data-cv='formacion'], [data-cv='conocimientos']").forEach(el => {
        const hijos = [...el.querySelectorAll("[data-cv]")];
        if (hijos.length > 0 && hijos.every(h => h.classList.contains("cv-oculto"))) {
            el.classList.add("cv-oculto");
        } else if (el.dataset.cvAuto !== undefined) {
            el.classList.remove("cv-oculto");
        }
    });
}

function limpiarSeleccion() {
    document.querySelectorAll(".cv-oculto").forEach(el => el.classList.remove("cv-oculto"));
}

function crearCasilla(clave, etiqueta, marcada, esHijo) {
    const label = document.createElement("label");
    label.className = "flex items-center gap-3 cursor-pointer select-none " +
        (esHijo ? "text-sm text-gray-700 py-0.5" : "font-semibold text-teal-800 py-1");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = marcada;
    input.dataset.clave = clave;
    input.className = "w-4 h-4 flex-shrink-0 accent-amber-500 cursor-pointer";
    label.appendChild(input);

    const span = document.createElement("span");
    span.textContent = etiqueta;
    label.appendChild(span);

    return { label, input };
}

function abrirSelectorDescarga() {
    const excluidos = leerExcluidos();

    const overlay = document.createElement("div");
    overlay.className = "no-print fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4";

    const panel = document.createElement("div");
    panel.className = "bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "selector-cv-titulo");
    overlay.appendChild(panel);

    // Cabecera
    const cabecera = document.createElement("div");
    cabecera.className = "px-6 pt-6 pb-4 border-b border-amber-200";
    const titulo = document.createElement("h2");
    titulo.id = "selector-cv-titulo";
    titulo.className = "text-2xl font-bold text-teal-800";
    titulo.style.fontFamily = "'Poppins', sans-serif";
    titulo.textContent = s("cv.selTitulo");
    cabecera.appendChild(titulo);
    const ayuda = document.createElement("p");
    ayuda.className = "text-sm text-gray-500 mt-1";
    ayuda.textContent = s("cv.selAyuda");
    cabecera.appendChild(ayuda);
    panel.appendChild(cabecera);

    // Lista de casillas
    const cuerpo = document.createElement("div");
    cuerpo.className = "px-6 py-4 overflow-y-auto space-y-3";
    panel.appendChild(cuerpo);

    opcionesSelector().forEach(opcion => {
        const grupo = document.createElement("div");
        const padre = crearCasilla(opcion.clave, opcion.etiqueta, !excluidos.has(opcion.clave), false);
        grupo.appendChild(padre.label);

        if (opcion.hijos) {
            const lista = document.createElement("div");
            lista.className = "ml-7 mt-1 space-y-0.5";
            const inputsHijos = opcion.hijos.map(hijo => {
                const casilla = crearCasilla(hijo.clave, hijo.etiqueta, !excluidos.has(hijo.clave), true);
                lista.appendChild(casilla.label);
                return casilla.input;
            });
            grupo.appendChild(lista);

            const actualizarPadre = () => {
                const marcados = inputsHijos.filter(i => i.checked).length;
                padre.input.checked = marcados > 0;
                padre.input.indeterminate = marcados > 0 && marcados < inputsHijos.length;
            };
            // Si la sección está excluida, sus hijos se muestran desmarcados
            if (!padre.input.checked) inputsHijos.forEach(i => { i.checked = false; });
            actualizarPadre();

            padre.input.addEventListener("change", () => {
                inputsHijos.forEach(i => { i.checked = padre.input.checked; });
                padre.input.indeterminate = false;
            });
            inputsHijos.forEach(i => i.addEventListener("change", actualizarPadre));
        }
        cuerpo.appendChild(grupo);
    });

    // Botones
    const pie = document.createElement("div");
    pie.className = "px-6 py-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-3";

    const botonTodo = document.createElement("button");
    botonTodo.type = "button";
    botonTodo.className = "text-sm font-semibold text-amber-600 hover:text-amber-700 underline";
    botonTodo.textContent = s("cv.selTodo");
    botonTodo.addEventListener("click", () => {
        cuerpo.querySelectorAll("input").forEach(i => { i.checked = true; i.indeterminate = false; });
    });
    pie.appendChild(botonTodo);

    const derecha = document.createElement("div");
    derecha.className = "flex gap-3";

    const botonCancelar = document.createElement("button");
    botonCancelar.type = "button";
    botonCancelar.className = "px-5 py-2 rounded-full font-semibold text-gray-600 border border-gray-300 hover:bg-gray-100 transition-colors";
    botonCancelar.textContent = s("cv.selCancelar");
    derecha.appendChild(botonCancelar);

    const botonDescargar = document.createElement("button");
    botonDescargar.type = "button";
    botonDescargar.className = "px-5 py-2 rounded-full font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md transition-colors";
    botonDescargar.textContent = s("cv.selImprimir");
    derecha.appendChild(botonDescargar);
    pie.appendChild(derecha);
    panel.appendChild(pie);

    const cerrar = () => {
        overlay.remove();
        document.removeEventListener("keydown", alPulsarTecla);
    };
    const alPulsarTecla = (e) => { if (e.key === "Escape") cerrar(); };

    botonCancelar.addEventListener("click", cerrar);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) cerrar(); });
    document.addEventListener("keydown", alPulsarTecla);

    botonDescargar.addEventListener("click", () => {
        const nuevosExcluidos = new Set();
        cuerpo.querySelectorAll("input").forEach(i => {
            if (!i.checked) nuevosExcluidos.add(i.dataset.clave);
        });
        guardarExcluidos(nuevosExcluidos);
        cerrar();
        aplicarSeleccion(nuevosExcluidos);
        window.addEventListener("afterprint", limpiarSeleccion, { once: true });
        window.print();
    });

    document.body.appendChild(overlay);
    botonDescargar.focus();
}

fuera.appendChild(contenedor);
crearParticulasGlobales();
curriculumInfo();
curriculumExp();
curriculumForm();
curriculumCono();
curriculumExtra();
