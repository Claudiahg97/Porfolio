import { misDatos } from "./datos";

const tarjetaExpsContainer2 = document.createElement("div");
    tarjetaExpsContainer2.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    const tarjetaExp = document.createElement("div");
    tarjetaExp.className = "p-6 rounded-lg leading-relaxed backdrop-blur-md border border-amber-400/50 hover:border-amber-400 transition-all duration-300 w-full sm:w-[1000px] flex-shrink-0 hover:shadow-lg hover:shadow-amber-500/50 relative z-10";

    // tituloT2
    const tituloT2 = document.createElement("h3");
    tituloT2.className = "text-4xl font-bold text-teal-800 mb-6 border-b-2 border-blue-500 pb-2";
    tituloT2.style.fontFamily = "'Poppins', sans-serif";
    tituloT2.textContent = "💼Experiencia Laboral";
    tarjetaExp.appendChild(tituloT2);

    const exps = document.createElement("div");
    exps.className = "mt-4 flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

    misDatos.experienciaLaboral.forEach(exp =>{
        const experiencia = document.createElement("div");
        experiencia.className = "bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)]";

        const puesto = document.createElement("h3");
        puesto.className = "text-4xl font-bold text-teal-800 mb-2 text-center";
        puesto.style.fontFamily = "'Poppins', sans-serif";
        puesto.textContent = exp.puesto;
        experiencia.appendChild(puesto);

        const empresa = document.createElement("p");
        empresa.className = "text-lg text-gray-600 font-semibold mb-3 text-center";
        empresa.textContent = exp.empresa;
        experiencia.appendChild(empresa);

        const fechas = document.createElement("p");
        fechas.className = "text-sm text-amber-500 mb-4 text-center";
        fechas.textContent = `${exp.ubicacion} • ${exp.fechaInicio} - ${exp.fechaFin}`;
        experiencia.appendChild(fechas);

        const descripcion = document.createElement("p");
        descripcion.className = "text-gray-600 text-sm leading-relaxed text-center";
        descripcion.textContent = exp.descripcion;
        tarjetaExp.appendChild(descripcion);

        exps.appendChild(experiencia);
    })

// function crearSeccionExperiencia() {
//     const seccion = document.createElement("div");
//     seccion.className = "bg-white rounded-lg shadow-xl p-8 mb-8";
//     seccion.innerHTML = `<h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">💼 Experiencia Laboral</h2>`;

//     const tarjetaExpsContainer = document.createElement("div");
//     tarjetaExpsContainer.className = "flex flex-wrap gap-6 justify-center max-w-7xl mx-auto";

//     miCV.experiencia.forEach(exp => {
//         const tarjetaExp = document.createElement("div");
//         tarjetaExp.className = "bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow w-full md:w-[calc(50%-12px)]";
//         tarjetaExp.innerHTML = `
//                     <h3 class="text-xl font-semibold text-gray-800 mb-2">${exp.puesto}</h3>
//                     <p class="text-blue-600 font-medium mb-1">${exp.empresa}</p>
//                     <p class="text-sm text-gray-600 mb-2">${exp.ubicacion} • ${exp.periodo}</p>
//                     <p class="text-gray-700 text-sm">${exp.descripcion}</p>
//                 `;
//         tarjetaExpsContainer.appendChild(tarjetaExp);
//     });

//     seccion.appendChild(tarjetaExpsContainer);
//     return seccion;}
