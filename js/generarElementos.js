function generarNav(){
    const nav = document.createElement("nav");
    nav.className = "fixed top-0 left-0 w-full bg-teal-950 text-white shadow-md";
    nav.appendChild("cont");

    const contenedor = document.createElement("div");
    contenedor.className = "flex items-center";
    contenedor.appendChild(nav);

    const lista = document.createElement("ul");
    lista.appendChild(contenedor);

    for (let index = 1; index <= 6; index++) {
        const element = document.createElement("li");
        element.className = "ml-5";
        const link = document.createElement("a");
        link.href = "eje.html";
        switch (index) {
            case 1:
                var contenido = document.createTextNode("Inicio");
                link.appendChild(contenido);
                break;
            case 2:
                var contenido = document.createTextNode("Sobre mi");
                link.appendChild(contenido);
                break;
            case 3:
                var contenido = document.createTextNode("Conocimientos");
                link.appendChild(contenido);
                break;
            case 4:
                var contenido = document.createTextNode("Proyectos");
                link.appendChild(contenido);
                break;
            case 5:
                var contenido = document.createTextNode("Curriculum Vitae");
                link.appendChild(contenido);
                break;
            case 6:
                var contenido = document.createTextNode("contacto");
                link.appendChild(contenido);
                break;
        
            default:
                break;
        }
        
    }
}