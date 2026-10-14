export const misDatos = {
    datosPersonales: {
        nombre: "Claudia",
        apellidos: "Hernández García",
        email: "claudia.hg.97@gmail.com",
        telefono: "680 108 949",
        direccion: "Los Llanos de Aridane, La Palma",
        github: "https://github.com/Claudiahg97",
        linkedin: "https://www.linkedin.com/in/claudia-hernández-garcía-0b29133a0",
        imagen: "../img/perfil.jpg",
        // PDF del CV que se descarga con el botón "Descargar CV", según el idioma activo
        cvPdf: {
            es: "../cv/CV-Claudia-Hernandez-ES.pdf",
            en: "../cv/CV-Claudia-Hernandez-EN.pdf"
        },
        historia: {
            es: "Soy una joven palmera apasionada por la creatividad en todas sus formas. Los libros han sido siempre una ventana a mundos infinitos para mí, y esa fascinación por las historias y los procesos creativos se extiende también al mundo digital. Me considero una persona organizada y responsable, con capacidad natural para liderar cuando es necesario, pero siempre valorando el trabajo en equipo. El compromiso y la sociabilidad son pilares importantes en mi forma de relacionarme con los demás y con los proyectos que emprendo. Tengo una sed constante de conocimiento. Me encanta aprender cosas nuevas y seguir formándome, lo que me mantiene en continuo crecimiento personal y profesional. Desde siempre he sentido una atracción especial por los ordenadores y las infinitas posibilidades creativas que ofrecen. Esta pasión me ha llevado a sumergirme en el mundo de la programación, y mi objetivo es seguir explorando y dominando diferentes lenguajes de programación para ampliar mis horizontes y capacidades. La combinación de mi amor por la creatividad, mi capacidad organizativa y mi interés por la tecnología define quién soy: alguien que busca conectar el arte de contar historias con el poder transformador de la programación.",
            en: "I'm a young woman from La Palma, passionate about creativity in all its forms. Books have always been a window into infinite worlds for me, and that fascination with stories and creative processes extends into the digital world as well. I consider myself an organized and responsible person, with a natural ability to lead when needed, while always valuing teamwork. Commitment and sociability are important pillars in how I relate to others and to the projects I take on. I have a constant thirst for knowledge. I love learning new things and continuing to train myself, which keeps me in constant personal and professional growth. I've always felt a special attraction to computers and the endless creative possibilities they offer. This passion has led me to dive into the world of programming, and my goal is to keep exploring and mastering different programming languages to broaden my horizons and abilities. The combination of my love for creativity, my organizational skills, and my interest in technology defines who I am: someone who seeks to connect the art of storytelling with the transformative power of programming."
        },
        descripcion: {
            es: "Técnico Superior en Desarrollo de Aplicaciones Web y en Administración de Sistemas Informáticos en Red. Apasionada por la tecnología y el aprendizaje continuo.",
            en: "Higher Technician in Web Application Development and Network Systems Administration. Passionate about technology and continuous learning."
        }
    },
    // Ordenados del más reciente al más antiguo
    estudios: [
        {
            titulo: { es: "Técnico Superior en Desarrollo de Aplicaciones Web", en: "Higher Technician in Web Application Development" },
            institucion: "I.E.S. José María Pérez Pulido",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Septiembre 2024",
            fechaFin: "Junio 2026",
            descripcion: {
                es: "Creación y desarrollo de aplicaciones web.",
                en: "Creation and development of web applications."
            },
            tipo: { es: "Técnico Superior", en: "Higher Technician" }
        },
        {
            titulo: { es: "Técnico Superior en Administración de Sistemas Informáticos en Red", en: "Higher Technician in Network Systems Administration" },
            institucion: "I.E.S. José María Pérez Pulido",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Septiembre 2017",
            fechaFin: "Junio 2019",
            descripcion: {
                es: "Manejo y configuración de sistemas y redes.",
                en: "Management and configuration of systems and networks."
            },
            tipo: { es: "Técnico Superior", en: "Higher Technician" }
        },
        {
            titulo: { es: "Bachillerato Científico Tecnológico", en: "Scientific-Technological Baccalaureate" },
            institucion: "I.E.S. José María Pérez Pulido",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Septiembre 2013",
            fechaFin: "Junio 2015",
            descripcion: {
                es: "Formación en la rama científico-tecnológica previa a los estudios superiores.",
                en: "Scientific-technological track preparing for higher education."
            },
            tipo: { es: "Bachillerato", en: "Baccalaureate" }
        },
        {
            titulo: { es: "ESO Bilingüe", en: "Bilingual Secondary Education (ESO)" },
            institucion: "I.E.S. José María Pérez Pulido",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Septiembre 2009",
            fechaFin: "Junio 2013",
            descripcion: {
                es: "Educación Secundaria Obligatoria con sección bilingüe en inglés.",
                en: "Compulsory Secondary Education with an English-bilingual track."
            },
            tipo: { es: "Educación Secundaria", en: "Secondary Education" }
        }
    ],
    // Ordenada de la más reciente a la más antigua
    experienciaLaboral: [
        {
            puesto: { es: "Programadora Junior", en: "Junior Developer" },
            empresa: "XYZ Digital",
            ubicacion: "Breña Baja",
            fechaInicio: "Septiembre 2026",
            fechaFin: "Actualidad",
            descripcion: {
                es: "Desarrollo y mantenimiento de aplicaciones web.",
                en: "Development and maintenance of web applications."
            },
            imagen: "../img/xyz.png"
        },
        {
            puesto: { es: "Auxiliar Técnico", en: "Technical Assistant" },
            empresa: "Hidrolap S.L.",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Agosto 2026",
            fechaFin: "Actualidad",
            descripcion: {
                es: "Tareas de soporte y mantenimiento técnico.",
                en: "Technical support and maintenance tasks."
            },
            imagen: "../img/hidrolap.png"
        },
        {
            puesto: { es: "Prácticas de DAW", en: "Web Development Internship" },
            empresa: "Cherenkov Telescope Array Observatory",
            ubicacion: "Breña Baja",
            fechaInicio: "Febrero 2026",
            fechaFin: "Mayo 2026",
            descripcion: {
                es: "Desarrollo de una herramienta de análisis de logs con Python y un LLM local. Prácticas del ciclo superior (DAW).",
                en: "Development of a log analysis tool using Python and a local LLM. Higher-level vocational internship (DAW)."
            },
            imagen: "../img/ctao.png"
        },
        {
            puesto: { es: "Prácticas de DAW", en: "Web Development Internship" },
            empresa: "Yonedev",
            ubicacion: "Tijarafe",
            fechaInicio: "Mayo 2025",
            fechaFin: "Junio 2025",
            descripcion: {
                es: "Familiarización con herramientas y aprendizaje de tecnologías actuales. Prácticas del ciclo superior (DAW).",
                en: "Familiarization with tools and learning of current technologies. Higher-level vocational internship (DAW)."
            },
            imagen: "../img/yonedev.jpg"
        },
        {
            puesto: { es: "Auxiliar Administrativo", en: "Administrative Assistant" },
            empresa: "Instituto Volcanológico de Canarias SA",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Diciembre 2024",
            fechaFin: "Mayo 2025",
            descripcion: {
                es: "Monitorización del proyecto CO2 en Puerto Naos por la erupción del volcán Tajogaite.",
                en: "Monitoring of the CO2 project in Puerto Naos following the Tajogaite volcano eruption."
            },
            imagen: "../img/involcan.jpg"
        },
        {
            puesto: { es: "Cajera / Reponedora", en: "Cashier / Shelf Stocker" },
            empresa: "Grupo Dinosol",
            ubicacion: "Los Llanos de Aridane",
            fechaInicio: "Junio 2021",
            fechaFin: "Junio 2021",
            descripcion: {
                es: "Atención al cliente, cobros y reposición de los productos en tienda.",
                en: "Customer service, checkout and shelf restocking."
            },
            imagen: "../img/dinosol.png"
        },
        {
            puesto: { es: "Dependienta", en: "Sales Assistant" },
            empresa: "Deportes Marba",
            ubicacion: "Puntagorda",
            fechaInicio: "Abril 2021",
            fechaFin: "Noviembre 2025",
            descripcion: {
                es: "Atención al cliente, cobros y organización de la tienda. Trabajo eventual según necesidades.",
                en: "Customer service, checkout and store organization. Worked on an as-needed seasonal basis."
            },
            imagen: "../img/marba.jpg"
        },
        {
            puesto: { es: "Prácticas de ASIR", en: "Systems Administration Internship" },
            empresa: "Gran Telescopio de Canarias",
            ubicacion: "Breña Baja",
            fechaInicio: "Abril 2019",
            fechaFin: "Junio 2019",
            descripcion: {
                es: "Prácticas del ciclo superior (ASIR).",
                en: "Higher-level vocational internship (ASIR)."
            },
            imagen: "../img/gtc.png"
        }
    ],
    // Categorías de conocimientos, en el orden en que se muestran.
    // Cada conocimiento indica su categoría con el campo "categoria" (el id de aquí).
    categoriasConocimientos: [
        { id: "lenguajes", nombre: { es: "Lenguajes", en: "Languages" } },
        { id: "frameworks", nombre: { es: "Frameworks y librerías", en: "Frameworks & Libraries" } },
        { id: "datos", nombre: { es: "Bases de datos y APIs", en: "Databases & APIs" } },
        { id: "herramientas", nombre: { es: "Herramientas de desarrollo", en: "Development Tools" } },
        { id: "sistemas", nombre: { es: "Sistemas y redes", en: "Systems & Networking" } },
        { id: "metodologias", nombre: { es: "Metodologías y gestión de proyectos", en: "Methodologies & Project Management" } },
        { id: "ofimatica", nombre: { es: "Ofimática, diseño y ERP", en: "Office, Design & ERP" } }
    ],
    conocimientos: [
        // Lenguajes
        { nombre: "HTML", imagen: "../img/html.png", categoria: "lenguajes", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "CSS", imagen: "../img/css.png", categoria: "lenguajes", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "JavaScript", imagen: "../img/javascript.png", categoria: "lenguajes", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "TypeScript", imagen: "../img/typescript.png", categoria: "lenguajes", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Java", imagen: "../img/java.png", categoria: "lenguajes", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "PHP", imagen: "../img/php.png", categoria: "lenguajes", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "Python", imagen: "../img/phyton.png", categoria: "lenguajes", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "XML", imagen: "../img/xml.png", categoria: "lenguajes", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "JSON", imagen: "../img/json.png", categoria: "lenguajes", nivel: { es: "Básico", en: "Basic" } },

        // Frameworks y librerías
        { nombre: "Laravel", imagen: "../img/laravel.webp", categoria: "frameworks", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Blade", imagen: "../img/blade.png", categoria: "frameworks", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Vue", imagen: "../img/vue.png", categoria: "frameworks", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Node.js", imagen: "../img/nodejs.png", categoria: "frameworks", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Tailwind CSS", imagen: "../img/tailwind.png", categoria: "frameworks", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Bootstrap", imagen: "../img/bootstrap.png", categoria: "frameworks", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Streamlit", imagen: "../img/streamlit.jpg", categoria: "frameworks", nivel: { es: "Básico", en: "Basic" } },

        // Bases de datos y APIs
        { nombre: "MySQL", imagen: "../img/mysql.png", categoria: "datos", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "APIs REST", imagen: "../img/api.png", categoria: "datos", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Postman", imagen: "../img/postman.svg", categoria: "datos", nivel: { es: "Básico", en: "Basic" } },

        // Herramientas de desarrollo
        { nombre: "Git", imagen: "../img/git.png", categoria: "herramientas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "GitHub", imagen: "../img/github.png", categoria: "herramientas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "GitLab", imagen: "../img/gitlab.png", categoria: "herramientas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "VS Code", imagen: "../img/vscode.svg", categoria: "herramientas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Composer", imagen: "../img/composer.svg", categoria: "herramientas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "npm", imagen: "../img/npm.svg", categoria: "herramientas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Docker", imagen: "../img/docker.png", categoria: "herramientas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Ollama", imagen: "../img/ollama.png", categoria: "herramientas", nivel: { es: "Intermedio", en: "Intermediate" } },

        // Sistemas y redes
        { nombre: "Linux", imagen: "../img/linux.png", categoria: "sistemas", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "Bash", imagen: "../img/bash.svg", categoria: "sistemas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "PowerShell", imagen: "../img/powershell.png", categoria: "sistemas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Windows Server", imagen: "../img/windows-server.svg", categoria: "sistemas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Active Directory", imagen: "../img/active-directory.svg", categoria: "sistemas", nivel: { es: "Básico", en: "Basic" } },
        { nombre: { es: "Redes (TCP/IP, DNS, DHCP)", en: "Networking (TCP/IP, DNS, DHCP)" }, imagen: "../img/redes.svg", categoria: "sistemas", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "VirtualBox / VMware", imagen: "../img/virtualbox.svg", categoria: "sistemas", nivel: { es: "Básico", en: "Basic" } },

        // Metodologías y gestión de proyectos
        { nombre: "Scrum", imagen: "../img/scrum.svg", categoria: "metodologias", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Kanban", imagen: "../img/kanban.svg", categoria: "metodologias", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Scrumban", imagen: "../img/scrumban.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Extreme Programming (XP)", imagen: "../img/xp.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Lean", imagen: "../img/lean.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Design Thinking", imagen: "../img/design-thinking.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "DevOps / CI-CD", imagen: "../img/devops.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "TDD", imagen: "../img/tdd.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Trello", imagen: "../img/trello.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Jira", imagen: "../img/jira.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },
        { nombre: "Notion", imagen: "../img/notion.svg", categoria: "metodologias", nivel: { es: "Básico", en: "Basic" } },

        // Ofimática, diseño y ERP
        { nombre: "Word", imagen: "../img/word.svg", categoria: "ofimatica", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "PowerPoint", imagen: "../img/powerpoint.svg", categoria: "ofimatica", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "Excel", imagen: "../img/excel.svg", categoria: "ofimatica", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Canva", imagen: "../img/canva.svg", categoria: "ofimatica", nivel: { es: "Avanzado", en: "Advanced" } },
        { nombre: "Figma", imagen: "../img/figma.svg", categoria: "ofimatica", nivel: { es: "Intermedio", en: "Intermediate" } },
        { nombre: "Odoo", imagen: "../img/odoo.svg", categoria: "ofimatica", nivel: { es: "Básico", en: "Basic" } }
    ],
    proyectos: [
        // Campos por proyecto:
        //   link  -> URL del repositorio (GitHub)
        //   demo  -> URL de la demo en vivo (déjalo "" si aún no la tienes)
        //   video -> URL a un vídeo/GIF de demostración (Loom, YouTube...) ("" si no hay)
        // Los botones "Ver demo" y "Ver vídeo" solo aparecen si su URL no está vacía.
        {
            nombre: "Mercadillos en La Palma",
            descripcion: {
                es: "Plataforma marketplace para los mercadillos locales de La Palma, con datos reales de los 14 municipios. Proyecto en equipo.",
                en: "Marketplace platform for La Palma's local flea markets, with real data from all 14 municipalities. Team project."
            },
            tecnologias: ["Laravel", "PHP", "Blade", "MySQL"],
            link: "",                          // Repositorio privado: no se muestra el botón "Ver código"
            imagen: "../img/mercadillos.png",
            demo: "https://mercadilloslapalma.departamentoinformaticajmpp.com",
            video: ""
        },
        {
            nombre: "Analizador de Logs",
            descripcion: {
                es: "Aplicación para analizar y visualizar logs de sistemas con ayuda de un LLM local.",
                en: "An application for analyzing and visualizing system logs with the help of a local LLM."
            },
            tecnologias: ["Python", "Streamlit", "Ollama"],
            link: "https://github.com/Claudiahg97/Analizador-de-Logs.git",
            imagen: "../img/logs.png",
            demo: "",
            video: ""
        },
        {
            nombre: "Agenda de Macronutrientes",
            descripcion: {
                es: "Una agenda para gestionar la ingesta diaria de macronutrientes, con exportación a PDF.",
                en: "A planner for tracking daily macronutrient intake, with PDF export."
            },
            tecnologias: ["Laravel", "PHP", "MySQL"],
            link: "https://github.com/Claudiahg97/AgendaMacronutrientes.git",
            imagen: "../img/agenda.png",
            demo: "",
            video: ""
        },
        {
            nombre: "Portfolio Personal",
            descripcion: {
                es: "Este portfolio: web bilingüe (ES/EN) generada dinámicamente con JavaScript a partir de un único archivo de datos.",
                en: "This portfolio: a bilingual (ES/EN) website rendered dynamically with JavaScript from a single data file."
            },
            tecnologias: ["HTML", "JavaScript", "Tailwind CSS"],
            link: "https://github.com/Claudiahg97/Porfolio.git",
            imagen: "../img/porfolio.png",
            demo: "https://claudiahg97.github.io/Porfolio/",
            video: ""
        },
        {
            nombre: "Biblioteca Online",
            descripcion: {
                es: "Una web donde los usuarios registrados registran libros y votan por sus favoritos.",
                en: "A website where registered users log books and vote for their favorites."
            },
            tecnologias: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML", "CSS"],
            link: "https://github.com/Claudiahg97/Biblioteca-Online-AJAX.git",
            imagen: "../img/biblioteca.png",
            demo: "https://biblioteca-online.great-site.net/index.php",
            video: ""
        },
        {
            nombre: "Tienda con Vue.js",
            descripcion: {
                es: "Una tienda en línea desarrollada con Vue.js para practicar el desarrollo frontend.",
                en: "An online store built with Vue.js to practice frontend development."
            },
            tecnologias: ["Vue.js", "JavaScript", "HTML", "CSS"],
            link: "https://github.com/Claudiahg97/Tienda-con-Vue.js.git",
            imagen: "../img/Tienda.png",
            demo: "https://claudiahg97.github.io/Tienda-con-Vue/",
            video: ""
        },
        {
            nombre: "Generador de Mundos",
            descripcion: {
                es: "Generador de mapas para un metaverso: configura el tamaño y las zonas naturales, urbanas y comerciales, y genera un mundo aleatorio.",
                en: "A metaverse map generator: configure the size and the nature, urban and commercial zones to create a random world."
            },
            tecnologias: ["JavaScript", "HTML", "CSS"],
            link: "https://github.com/Claudiahg97/Generador-de-mundos.git",
            imagen: "../img/mundos.png",
            demo: "https://claudiahg97.github.io/Generador-de-mundos/",
            video: ""
        },
        {
            nombre: "Panel de Control",
            descripcion: {
                es: "Un panel de control sobre una tienda de ropa para practicar el uso de Bootstrap.",
                en: "A clothing store admin dashboard built to practice Bootstrap."
            },
            tecnologias: ["Bootstrap", "JavaScript", "HTML", "CSS"],
            link: "https://github.com/Claudiahg97/Panel-de-Control.git",
            imagen: "../img/panel.png",
            demo: "https://claudiahg97.github.io/Panel-de-Control/",
            video: ""
        },
        {
            nombre: "Tienda de Alimentación",
            descripcion: {
                es: "Una web sobre una tienda de alimentación para practicar maquetación con CSS.",
                en: "A grocery store website built to practice CSS layout."
            },
            tecnologias: ["HTML", "CSS"],
            link: "https://github.com/Claudiahg97/RepasoCSS.git",
            imagen: "../img/alimentacion.png",
            demo: "https://claudiahg97.github.io/RepasoCSS/",
            video: ""
        }
        // {
        //     nombre: "Población por Sexo",
        //     descripcion: { es: "Análisis de la población por sexo en diferentes regiones.", en: "Population analysis by sex across different regions." },
        //     tecnologias: ["Laravel", "API REST", "maatwebsite/excel", "MySQL"],
        //     link: "https://github.com/Claudiahg97/Poblacion-por-sexo.git",
        //     imagen: "../img/poblacion.png",
        //     demo: "",
        //     video: ""
        // },
    ],
    idiomas: [
        { idioma: { es: "Español", en: "Spanish" }, nivel: { es: "Nativo", en: "Native" } },
        { idioma: { es: "Inglés", en: "English" }, nivel: "B1" }
    ],
    datosExtra: [
        { es: "Carnet de conducir tipo B y vehículo propio", en: "Category B driving licence and own vehicle" }
    ],
    aptitudes: [
        { es: "Gran capacidad de liderazgo", en: "Strong leadership skills" },
        { es: "Facilidad al desempeñar trabajos en equipo", en: "Comfortable working in team environments" },
        { es: "Gran capacidad de aprendizaje y adaptación", en: "Strong learning ability and adaptability" },
        { es: "Grandes habilidades organizativas", en: "Excellent organizational skills" },
        { es: "Facilidades comunicativas", en: "Strong communication skills" },
        { es: "Responsabilidad y motivación", en: "Responsibility and motivation" },
        { es: "Buena gestión del tiempo", en: "Good time management" },
        { es: "Resolución de problemas", en: "Problem solving" },
        { es: "Conocimientos sobre riesgos laborales", en: "Knowledge of occupational health and safety" }
    ]
};
