const misDatos = {
  datosPersonales: {
    nombre: "Claudia",
    apellidos: "Hernández García",
    email: "claudia.hg.97@gmail.com",
    direccion: "Calle Pintor Cándido Camacho Gómez, nº 46",
    github: "https://github.com/Claudiahg97",
    imagen: "../img/perfil.jpg",
    historia: "Soy una joven palmera apasionada por la creatividad en todas sus formas. Los libros han sido siempre una ventana a mundos infinitos para mí, y esa fascinación por las historias y los procesos creativos se extiende también al mundo digital. Me considero una persona organizada y responsable, con capacidad natural para liderar cuando es necesario, pero siempre valorando el trabajo en equipo. El compromiso y la sociabilidad son pilares importantes en mi forma de relacionarme con los demás y con los proyectos que emprendo. Tengo una sed constante de conocimiento. Me encanta aprender cosas nuevas y seguir formándome, lo que me mantiene en continuo crecimiento personal y profesional. Desde siempre he sentido una atracción especial por los ordenadores y las infinitas posibilidades creativas que ofrecen. Esta pasión me ha llevado a sumergirme en el mundo de la programación, y mi objetivo es seguir explorando y dominando diferentes lenguajes de programación para ampliar mis horizontes y capacidades. La combinación de mi amor por la creatividad, mi capacidad organizativa y mi interés por la tecnología define quién soy: alguien que busca conectar el arte de contar historias con el poder transformador de la programación."
  },
  estudios: [
    {
      titulo: "Técnico superior en Administración de Sistemas Informáticos en Red",
      institucion: "I.E.S. José María Pérez Pulido",
      fechaInicio: "septiembre 2017",
      fechaFin: "Junio 2019",
      descripcion: "Manejo y configuración de sistemas y redes"
    },
    {
      titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institucion: "I.E.S. José María Pérez Pulido",
      fechaInicio: "septiembre 2023",
      fechaFin: "Junio 2025",
      descripcion: "Creación y desarrollo de Aplicaciones web"
    }
  ],
  experienciaLaboral: [
    {
      puesto: "Prácticas no Remuneradas",
      empresa: "Gran Telescopio de Canarias", // Corregido: "Telescopido" → "Telescopio"
      fechaInicio: "Abril 2019",
      fechaFin: "Junio 2019",
      descripcion: "Prácticas del ciclo superior (ASIR)"
    },
    {
      puesto: "Cajera/Reponedora",
      empresa: "Grupo Dinosol",
      fechaInicio: "Junio 2021",
      fechaFin: "Junio 2021",
      descripcion: "Atención al cliente, cobros y reposición de los productos en tienda."
    },
    {
      puesto: "Dependienta",
      empresa: "Deportes Marba",
      fechaInicio: "Abril 2021",
      fechaFin: "Noviembre 2025",
      descripcion: "Atención al cliente, cobros y organización de la tienda. Trabajo de forma eventual según necesidades" // Corregido: "evetual" → "eventual"
    },
    {
      puesto: "Auxiliar Administrativo",
      empresa: "Instituto Vulcanológico de Canarias SA",
      fechaInicio: "Diciembre 2024",
      fechaFin: "Mayo 2025",
      descripcion: "Monitorización del proyecto CO2 en Puerto Naos por la erupción del volcán Tajogaite" // Corregido: "volcan" → "volcán"
    },
    {
      puesto: "Prácticas no Remuneradas",
      empresa: "Yonedev",
      fechaInicio: "Mayo 2025",
      fechaFin: "Junio 2025",
      descripcion: "Familiarización con herramientas y Aprendizaje de Tecnologías Actuales. Prácticas el ciclo superior (DAW)" // Corregido: "Técnologías" → "Tecnologías"
    }
  ],
  proyectos: [
    {
      nombre: "Portfolio Personal",
      descripcion: "Un portafolio personal desarrollado para mostrar mis capacidades.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Tailwind"],
      link: "#",
      imagen: ""
    }
  ]
};

const fuera = document.getElementById("cont");


function quienSoy() {
  const contenedor = document.createElement("div");
  contenedor.className = "text-center mt-[200px]";

  const titulo = document.createElement("h1");
  titulo.className = "text-5xl md:text-6xl lg:text-xl font-black mb-6";
  titulo.style.fontFamily = "'Poppins', sans-serif";
  contenedor.appendChild(titulo);

  const pregunta = document.createElement("span");
  pregunta.textContent = "¿Quién soy?";
  pregunta.style.background = "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)";
  pregunta.style.backgroundClip = "text";
  pregunta.style.color = "transparent";
  titulo.appendChild(pregunta);

  const contenedorDatos = document.createElement("div");
  contenedorDatos.className = "flex flex-col md:flex-row gap-8 items-center justify-center mt-8";
  contenedor.appendChild(contenedorDatos);

  // FOTO
  const foto = document.createElement("div");
  foto.className = "w-48 h-48 rounded-full overflow-hidden shadow-lg mx-auto lg:mr-0";
  const imagen = document.createElement("img");
  imagen.src = misDatos.datosPersonales.imagen; 
  imagen.alt = misDatos.datosPersonales.nombre;
  imagen.className = "w-full h-full object-cover";
  foto.appendChild(imagen);
  contenedorDatos.appendChild(foto);

  // DATOS PERSONALES
  const datos = document.createElement("div");
  datos.className = "text-center md:text-left mx-auto lg:ml-0";

  // Nombre completo
  const nombreCompleto = document.createElement("h2");
  nombreCompleto.className = "text-3xl font-bold mb-4";
  nombreCompleto.textContent = `${misDatos.datosPersonales.nombre} ${misDatos.datosPersonales.apellidos}`;
  datos.appendChild(nombreCompleto);

  // Email
  const emailP = document.createElement("p");
  emailP.className = "text-lg mb-2";
  emailP.innerHTML = `<strong>Email:</strong> ${misDatos.datosPersonales.email}`;
  datos.appendChild(emailP);

  // Dirección
  const direccionP = document.createElement("p");
  direccionP.className = "text-lg mb-2";
  direccionP.innerHTML = `<strong>Dirección:</strong> ${misDatos.datosPersonales.direccion}`;
  datos.appendChild(direccionP);

  // GitHub
  const githubP = document.createElement("p");
  githubP.className = "text-lg";
  const githubLink = document.createElement("a");
  githubLink.href = misDatos.datosPersonales.github;
  githubLink.target = "_blank";
  githubLink.className = "text-amber-500 hover:text-amber-600 underline";
  githubLink.textContent = "Ver mi GitHub";
  githubP.innerHTML = "<strong>GitHub:</strong> ";
  githubP.appendChild(githubLink);
  datos.appendChild(githubP);

  contenedorDatos.appendChild(datos);

  const historiaContainer = document.createElement("div");
  historiaContainer.className = "ml-6 mr-6 sm:ml-12 dm:mr-12 md:ml-24 md:mr-24 lg:ml-32 lg:mr-32 xl:ml-48 xl:mr-48 mx-auto mt-16 mb-12 px-4";

  const historia = document.createElement("p");
  historia.textContent = `${misDatos.datosPersonales.historia}`;
  historia.className = "text-lg  text-gray-500 text-justify leading-relaxed indent-8 p-8 rounded-lg backdrop-blur-sm border border-amber-400";
  historia.style.fontFamily = "'Poppins', sans-serif";
  historiaContainer.appendChild(historia);

  contenedor.appendChild(historiaContainer);

  fuera.appendChild(contenedor);
}

quienSoy();