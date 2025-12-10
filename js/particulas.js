export function crearParticulasGlobales() {
    const particulasContainer = document.createElement("div");
    particulasContainer.className = "fixed inset-0 pointer-events-none z-0 overflow-hidden";

    for (let i = 0; i < 30; i++) {
        const particula = document.createElement("div");
        particula.className = "absolute rounded-full bg-teal-800/20";
        const size = Math.random() * 100 + 50;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particula.style.animationDelay = `${Math.random() * 5}s`;
        particulasContainer.appendChild(particula);
    }

    for (let i = 0; i < 30; i++) {
        const particula = document.createElement("div");
        particula.className = "absolute rounded-full bg-amber-400/20";
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