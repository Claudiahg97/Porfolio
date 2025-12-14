/*
================================================================================
  GUÍA COMPLETA: DOM Y EVENTOS EN JAVASCRIPT
  Preparación para Examen - UT5 y UT6
================================================================================
*/

console.log("🎓 GUÍA DE ESTUDIO: DOM Y EVENTOS");
console.log("═══════════════════════════════════════════════════════════════");

/*
================================================================================
  PARTE 1: DOM (DOCUMENT OBJECT MODEL)
================================================================================
*/

// ============================================================================
// 1. MÉTODOS DE BÚSQUEDA EN EL DOM
// ============================================================================

console.log("\n📌 1. MÉTODOS DE BÚSQUEDA");
console.log("─────────────────────────");

// MÉTODOS TRADICIONALES (menos recomendados)
function ejemplosBusquedaTradicional() {
    // getElementById - Devuelve 1 elemento o null
    const elemento = document.getElementById("miId");

    // getElementsByClassName - Devuelve HTMLCollection
    const elementos = document.getElementsByClassName("miClase");

    // getElementsByTagName - Devuelve HTMLCollection
    const parrafos = document.getElementsByTagName("p");

    // getElementsByName - Para formularios
    const inputs = document.getElementsByName("nombreCampo");
}

// MÉTODOS MODERNOS (RECOMENDADOS)
function ejemplosBusquedaModerna() {
    // querySelector - Devuelve el PRIMER elemento que coincide o null
    const primerElemento = document.querySelector(".miClase");
    const porId = document.querySelector("#miId");
    const complejo = document.querySelector("div.container > p:first-child");

    // querySelectorAll - Devuelve NodeList con TODOS los elementos
    const todosLosElementos = document.querySelectorAll(".miClase");
    const multiples = document.querySelectorAll("div p, div span");

    // Convertir NodeList/HTMLCollection a Array
    const arrayElementos = [...todosLosElementos];
    const arrayElementos2 = Array.from(todosLosElementos);
}

// ============================================================================
// 2. NAVEGACIÓN POR EL DOM (Jerarquía)
// ============================================================================

console.log("\n📌 2. NAVEGACIÓN JERÁRQUICA");
console.log("────────────────────────────");

function ejemplosNavegacion() {
    const elemento = document.querySelector("#miElemento");

    // TRABAJANDO CON ELEMENTOS (ignora nodos de texto)
    const padre = elemento.parentElement;
    const hijos = elemento.children; // HTMLCollection
    const primerHijo = elemento.firstElementChild;
    const ultimoHijo = elemento.lastElementChild;
    const hermanoAnterior = elemento.previousElementSibling;
    const hermanoSiguiente = elemento.nextElementSibling;

    // TRABAJANDO CON NODOS (incluye texto, comentarios)
    const padreNodo = elemento.parentNode;
    const hijosNodo = elemento.childNodes; // NodeList
    const primerNodo = elemento.firstChild;
    const ultimoNodo = elemento.lastChild;
}

// ============================================================================
// 3. MANIPULACIÓN DE ATRIBUTOS
// ============================================================================

console.log("\n📌 3. ATRIBUTOS HTML");
console.log("─────────────────────");

function ejemplosAtributos() {
    const img = document.querySelector("img");

    // CONSULTAR ATRIBUTOS
    const tieneId = img.hasAttribute("id"); // true/false
    const atributos = img.getAttributeNames(); // ["src", "alt", "id"]
    const valorSrc = img.getAttribute("src");

    // MODIFICAR/AÑADIR ATRIBUTOS
    img.setAttribute("alt", "Descripción de la imagen");
    img.setAttribute("data-isla", "Tenerife");

    // ELIMINAR ATRIBUTOS
    img.removeAttribute("title");

    // TOGGLE (añadir/eliminar)
    img.toggleAttribute("hidden");

    // ATRIBUTOS BOOLEANOS (disabled, required, hidden, etc.)
    const boton = document.querySelector("button");

    // ❌ INCORRECTO (añade "true" como string)
    // boton.setAttribute("disabled", true);

    // ✅ CORRECTO - Vía propiedad JavaScript
    boton.disabled = true;

    // ✅ CORRECTO - Vía setAttribute con string vacío
    boton.setAttribute("disabled", "");
}

// ============================================================================
// 4. MANIPULACIÓN DE CONTENIDO
// ============================================================================

console.log("\n📌 4. CONTENIDO DE TEXTO Y HTML");
console.log("────────────────────────────────");

function ejemplosContenido() {
    const div = document.querySelector("div");

    // CONTENIDO DE TEXTO (sin HTML)
    // textContent - RECOMENDADO (devuelve todo el texto)
    const texto = div.textContent;
    div.textContent = "Nuevo texto"; // Si hay HTML, lo inserta como texto literal

    // innerText - Solo texto visible (respeta CSS display:none)
    const textoVisible = div.innerText;
    div.innerText = "Texto visible";

    // outerText - Reemplaza el elemento completo
    // div.outerText = "Texto"; // ⚠️ Destruye el div

    // CONTENIDO HTML
    // innerHTML - Contenido interno con HTML
    const htmlInterno = div.innerHTML;
    div.innerHTML = "<p>Párrafo <strong>con HTML</strong></p>";

    // outerHTML - Incluye la etiqueta contenedora
    const htmlCompleto = div.outerHTML;
    // div.outerHTML = "<section>Nuevo</section>"; // Reemplaza el div

    // ⚠️ SEGURIDAD: Cuidado con innerHTML si insertas contenido de usuario
    // Puede causar inyección XSS
}

// ============================================================================
// 5. CREACIÓN DE ELEMENTOS
// ============================================================================

console.log("\n📌 5. CREAR ELEMENTOS DINÁMICAMENTE");
console.log("────────────────────────────────────");

function ejemplosCreacion() {
    // CREAR ELEMENTO (solo en memoria)
    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Soy un div nuevo";
    nuevoDiv.className = "mi-clase";
    nuevoDiv.id = "miId";

    // Verificar si está conectado al DOM
    console.log(nuevoDiv.isConnected); // false

    // CREAR NODOS ESPECÍFICOS
    const comentario = document.createComment("Este es un comentario");
    const textoNodo = document.createTextNode("Texto simple");

    // CLONAR ELEMENTOS
    const original = document.querySelector("#original");

    // Clon superficial (sin hijos)
    const clonSuperficial = original.cloneNode();

    // Clon profundo (con todos los hijos) ✅
    const clonProfundo = original.cloneNode(true);
}

// ============================================================================
// 6. INSERCIÓN DE ELEMENTOS (API de Elementos - RECOMENDADA)
// ============================================================================

console.log("\n📌 6. INSERTAR ELEMENTOS");
console.log("─────────────────────────");

function ejemplosInsercion() {
    const contenedor = document.querySelector("#contenedor");
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "Nuevo párrafo";

    // API DE ELEMENTOS (moderna y versátil)
    contenedor.append(nuevoElemento);      // Añade al final (último hijo)
    contenedor.prepend(nuevoElemento);     // Añade al inicio (primer hijo)
    contenedor.before(nuevoElemento);      // Añade antes (hermano anterior)
    contenedor.after(nuevoElemento);       // Añade después (hermano siguiente)

    // Reemplazar
    contenedor.replaceWith(nuevoElemento); // Reemplaza el contenedor
    contenedor.replaceChildren(nuevoElemento); // Reemplaza todos los hijos

    // Eliminar
    nuevoElemento.remove(); // Desconecta del DOM (sigue en memoria)

    // API DE NODOS (antigua pero funcional)
    contenedor.appendChild(nuevoElemento); // Similar a append
    contenedor.removeChild(nuevoElemento); // Elimina un hijo
    contenedor.insertBefore(nuevoElemento, referencia); // Inserta antes de referencia
}

// ============================================================================
// 7. INSERCIÓN ADYACENTE (API de Alto Nivel)
// ============================================================================

console.log("\n📌 7. INSERCIÓN ADYACENTE");
console.log("──────────────────────────");

function ejemplosInsercionAdyacente() {
    const contenedor = document.querySelector("#contenedor");

    // POSICIONES:
    // "beforebegin" - Antes de la etiqueta de apertura (hermano anterior)
    // "afterbegin"  - Después de la etiqueta de apertura (primer hijo)
    // "beforeend"   - Antes de la etiqueta de cierre (último hijo)
    // "afterend"    - Después de la etiqueta de cierre (hermano siguiente)

    // insertAdjacentHTML - Inserta HTML (como innerHTML)
    contenedor.insertAdjacentHTML("beforeend", "<p>Nuevo párrafo</p>");

    // insertAdjacentText - Inserta texto (como textContent)
    contenedor.insertAdjacentText("afterbegin", "Texto al inicio");

    // insertAdjacentElement - Inserta un elemento ya creado
    const elemento = document.createElement("div");
    contenedor.insertAdjacentElement("beforebegin", elemento);
}

// ============================================================================
// 8. FRAGMENTOS DEL DOM (Optimización de Rendimiento)
// ============================================================================

console.log("\n📌 8. FRAGMENTOS (Performance)");
console.log("───────────────────────────────");

function ejemplosFragmentos() {
    const lista = document.querySelector("#lista");

    // ❌ MAL: Múltiples operaciones en el DOM (lento)
    for (let i = 0; i < 1000; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        lista.appendChild(li); // 1000 reflows!
    }

    // ✅ BIEN: Usar fragmento (1 solo reflow)
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < 1000; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${i}`;
        fragmento.appendChild(li); // En memoria
    }

    lista.appendChild(fragmento); // 1 solo reflow
    // El fragmento queda vacío después de insertarlo
}

// ============================================================================
// 9. MANIPULACIÓN DE CLASES CSS
// ============================================================================

console.log("\n📌 9. CLASES CSS (classList)");
console.log("─────────────────────────────");

function ejemplosClases() {
    const elemento = document.querySelector("#miElemento");

    // API classList (RECOMENDADA)

    // Consultar
    const clases = elemento.classList; // DOMTokenList
    const numClases = elemento.classList.length;
    const tieneClase = elemento.classList.contains("activo"); // true/false
    const primeraClase = elemento.classList.item(0);
    const clasesString = elemento.classList.value; // "clase1 clase2 clase3"

    // Modificar
    elemento.classList.add("clase1", "clase2"); // Añade una o más clases
    elemento.classList.remove("clase1"); // Elimina clase(s)

    // Toggle - Alterna (añade si no existe, elimina si existe)
    const seAñadio = elemento.classList.toggle("activo"); // devuelve true/false

    // Toggle condicional
    const estaActivo = true;
    elemento.classList.toggle("activo", estaActivo); // Fuerza añadir/eliminar

    // Replace - Reemplaza una clase por otra
    const reemplazado = elemento.classList.replace("viejo", "nuevo");

    // FORMA ANTIGUA (className) - No recomendada
    elemento.className = "clase1 clase2"; // Reemplaza todas las clases
    const clasesAntiguo = elemento.className; // "clase1 clase2"
}

// ============================================================================
// 10. ESTILOS CSS INLINE
// ============================================================================

console.log("\n📌 10. ESTILOS CSS");
console.log("───────────────────");

function ejemplosEstilos() {
    const div = document.querySelector("div");

    // FORMA TRADICIONAL (camelCase)
    div.style.backgroundColor = "blue";
    div.style.fontSize = "20px";
    div.style.borderTopWidth = "5px";

    // FORMA MODERNA (recomendada)
    // Usar nombres CSS originales
    div.style.setProperty("background-color", "blue");
    div.style.setProperty("font-size", "20px");

    // Con !important
    div.style.setProperty("color", "red", "important");

    // Obtener valor
    const color = div.style.getPropertyValue("background-color");

    // Eliminar propiedad
    div.style.removeProperty("background-color");

    // VARIABLES CSS (Custom Properties)
    div.style.setProperty("--color-principal", "#ff0000");
    const colorVar = div.style.getPropertyValue("--color-principal");

    // ESTILOS COMPUTADOS (valores finales calculados por el navegador)
    const estilosFinales = getComputedStyle(div);
    const anchoFinal = estilosFinales.width; // "200px"
    const colorFinal = estilosFinales.backgroundColor; // "rgb(0, 0, 255)"

    // Acceder a pseudoelementos
    const estilosAfter = getComputedStyle(div, "::after");
    const contenidoAfter = estilosAfter.content;
}

// ============================================================================
// 11. VISIBILIDAD DE ELEMENTOS
// ============================================================================

console.log("\n📌 11. VERIFICAR VISIBILIDAD");
console.log("─────────────────────────────");

function ejemplosVisibilidad() {
    const elemento = document.querySelector("#miElemento");

    // checkVisibility() - Verifica si es potencialmente visible
    const esVisible = elemento.checkVisibility();

    // Con opciones específicas
    const visible = elemento.checkVisibility({
        opacityProperty: true,    // Considera opacity: 0
        visibilityProperty: true  // Considera visibility: hidden
    });

    // Verifica:
    // - Si está desconectado del DOM
    // - Si tiene atributo hidden
    // - Si tiene display: none
    // - Si tiene content-visibility: hidden
}

/*
================================================================================
  PARTE 2: FORMULARIOS
================================================================================
*/

console.log("\n\n📌 FORMULARIOS");
console.log("═══════════════════════════════════════════════════════════════");

// ============================================================================
// 12. ACCESO A FORMULARIOS
// ============================================================================

console.log("\n📌 12. ACCEDER A FORMULARIOS");
console.log("─────────────────────────────");

function ejemplosFormularios() {
    // Formas de acceder
    const form1 = document.getElementById("miForm");
    const form2 = document.forms["miForm"];
    const form3 = document.forms[0]; // Por índice
    const form4 = document.querySelector("#miForm");

    // Propiedades del formulario
    const accion = form1.action;
    const metodo = form1.method;
    const numElementos = form1.length;

    // Métodos
    form1.submit(); // Enviar formulario
    form1.reset();  // Resetear formulario

    // Acceder a controles
    const input1 = form1.elements["nombreCampo"];
    const input2 = form1.elements[0]; // Por índice
    const input3 = form1.nombreCampo; // Directamente por name
}

// ============================================================================
// 13. CONTROLES DE FORMULARIO
// ============================================================================

console.log("\n📌 13. CONTROLES DE FORMULARIO");
console.log("───────────────────────────────");

function ejemplosControles() {
    // INPUT TYPE TEXT/PASSWORD
    const inputTexto = document.querySelector("#nombre");
    const valor = inputTexto.value;
    inputTexto.value = "Nuevo valor";
    inputTexto.maxLength = 50;
    inputTexto.readOnly = true;
    inputTexto.select(); // Selecciona el texto

    // CHECKBOX
    const checkbox = document.querySelector("#acepto");
    const estaMarcado = checkbox.checked; // true/false
    checkbox.checked = true; // Marcar
    const valorCheckbox = checkbox.value; // Valor que se envía si está marcado

    // RADIO BUTTONS (grupo)
    const radios = document.querySelectorAll('input[name="opciones"]');
    radios.forEach(radio => {
        if (radio.checked) {
            console.log("Opción seleccionada:", radio.value);
        }
    });

    // SELECT
    const select = document.querySelector("#islas");
    const indiceSeleccionado = select.selectedIndex;
    const opcionSeleccionada = select.options[indiceSeleccionado];
    const textoVisible = opcionSeleccionada.text;
    const valorInterno = opcionSeleccionada.value;

    // Cambiar selección
    select.selectedIndex = 2;
}

// ============================================================================
// 14. VALIDACIÓN DE FORMULARIOS
// ============================================================================

console.log("\n📌 14. VALIDACIÓN");
console.log("──────────────────");

function ejemplosValidacion() {
    const input = document.querySelector("#email");

    // CONSTRAINT VALIDATION API

    // Objeto validity con propiedades booleanas
    const validity = input.validity;

    // Propiedades del objeto validity:
    validity.valueMissing;    // true si required y está vacío
    validity.typeMismatch;    // true si no coincide con el type (email, url)
    validity.patternMismatch; // true si no coincide con pattern
    validity.tooShort;        // true si < minlength
    validity.tooLong;         // true si > maxlength
    validity.rangeUnderflow;  // true si < min (números)
    validity.rangeOverflow;   // true si > max (números)
    validity.valid;           // true si es válido

    // Mensaje de error predeterminado
    const mensaje = input.validationMessage;

    // Verificar si se validará
    const seValidara = input.willValidate;

    // Métodos de validación
    const esValido = input.checkValidity(); // true/false
    input.reportValidity(); // Muestra error nativo del navegador

    // MENSAJES PERSONALIZADOS
    // Establecer error personalizado
    input.setCustomValidity("Este email no es válido");

    // Limpiar error personalizado (necesario para que sea válido)
    input.setCustomValidity("");

    // Propiedad para verificar si se previno el default
    const sePrevino = input.defaultPrevented;
}

/*
================================================================================
  PARTE 3: EVENTOS
================================================================================
*/

console.log("\n\n📌 EVENTOS");
console.log("═══════════════════════════════════════════════════════════════");

// ============================================================================
// 15. GESTIÓN DE EVENTOS
// ============================================================================

console.log("\n📌 15. addEventListener (RECOMENDADO)");
console.log("──────────────────────────────────────");

function ejemplosEventos() {
    const boton = document.querySelector("#miBoton");

    // FORMA RECOMENDADA: addEventListener
    boton.addEventListener("click", function (event) {
        console.log("Click en el botón");
    });

    // Con arrow function
    boton.addEventListener("click", (event) => {
        console.log("Click con arrow function");
    });

    // Con función nombrada (permite eliminar después)
    function manejarClick(event) {
        console.log("Click manejado");
    }
    boton.addEventListener("click", manejarClick);

    // ELIMINAR EVENTO
    boton.removeEventListener("click", manejarClick);

    // MÚLTIPLES FUNCIONES AL MISMO EVENTO
    boton.addEventListener("click", funcion1);
    boton.addEventListener("click", funcion2);
    // Se ejecutarán ambas

    // OPCIONES DEL addEventListener
    boton.addEventListener("click", manejarClick, {
        once: true,      // Se ejecuta solo una vez
        capture: false,  // Fase de propagación (false = bubbling)
        passive: true    // Mejora rendimiento (no llamará preventDefault)
    });

    // FORMAS NO RECOMENDADAS

    // Vía propiedad JavaScript (sobreescribe anterior)
    boton.onclick = function () {
        console.log("Click via propiedad");
    };

    // Vía atributo HTML (código acoplado)
    // <button onClick="miFuncion()">Click</button>
}

// ============================================================================
// 16. OBJETO EVENT
// ============================================================================

console.log("\n📌 16. OBJETO EVENT");
console.log("────────────────────");

function ejemplosObjetoEvent() {
    const elemento = document.querySelector("#elemento");

    elemento.addEventListener("click", (event) => {
        // PROPIEDADES GENERALES
        console.log(event.type);        // "click"
        console.log(event.target);      // Elemento donde se originó el evento
        console.log(event.currentTarget); // Elemento que tiene el listener
        console.log(event.timeStamp);   // Hora del evento
        console.log(event.isTrusted);   // true si es acción real del usuario

        // PROPIEDADES DE POINTER/MOUSE EVENTS
        console.log(event.clientX);     // Posición X del ratón
        console.log(event.clientY);     // Posición Y del ratón
        console.log(event.pageX);       // X relativa a la página
        console.log(event.pageY);       // Y relativa a la página
        console.log(event.button);      // Botón del ratón (0=izq, 1=medio, 2=der)

        // TECLAS MODIFICADORAS
        console.log(event.ctrlKey);     // true si Ctrl está pulsado
        console.log(event.shiftKey);    // true si Shift está pulsado
        console.log(event.altKey);      // true si Alt está pulsado
        console.log(event.metaKey);     // true si Cmd/Win está pulsado

        // KEYBOARD EVENTS
        console.log(event.key);         // Tecla pulsada ("a", "Enter", "Escape")
        console.log(event.code);        // Código físico ("KeyA", "Enter")
        console.log(event.keyCode);     // Código numérico (obsoleto)
    });
}

// ============================================================================
// 17. PREVENIR COMPORTAMIENTO POR DEFECTO
// ============================================================================

console.log("\n📌 17. preventDefault()");
console.log("────────────────────────");

function ejemplosPreventDefault() {
    // FORMULARIO - Evitar envío y recarga
    const form = document.querySelector("#miForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Formulario no se envió");
        // Aquí manejar el envío con fetch/AJAX
    });

    // ENLACE - Evitar navegación
    const enlace = document.querySelector("a");
    enlace.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("No navegó");
    });

    // MENÚ CONTEXTUAL - Evitar menú del botón derecho
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        console.log("Menú contextual bloqueado");
    });

    // Verificar si se previno
    form.addEventListener("submit", (event) => {
        console.log(event.defaultPrevented); // false inicialmente
        event.preventDefault();
        console.log(event.defaultPrevented); // true después
    });
}

// ============================================================================
// 18. PROPAGACIÓN DE EVENTOS
// ============================================================================

console.log("\n📌 18. PROPAGACIÓN (Capture/Bubbling)");
console.log("──────────────────────────────────────");

function ejemplosPropagacion() {
    const abuelo = document.querySelector("#abuelo");
    const padre = document.querySelector("#padre");
    const hijo = document.querySelector("#hijo");

    // FASE DE BURBUJEO (por defecto)
    // Orden: hijo -> padre -> abuelo
    hijo.addEventListener("click", () => console.log("3. Hijo"));
    padre.addEventListener("click", () => console.log("2. Padre"));
    abuelo.addEventListener("click", () => console.log("1. Abuelo"));

    // FASE DE CAPTURA
    // Orden: abuelo -> padre -> hijo
    abuelo.addEventListener("click", () => console.log("1. Abuelo (captura)"),
        { capture: true });
    padre.addEventListener("click", () => console.log("2. Padre (captura)"),
        { capture: true });
    hijo.addEventListener("click", () => console.log("3. Hijo (target)"));

    // DETENER PROPAGACIÓN
    hijo.addEventListener("click", (event) => {
        event.stopPropagation(); // No sube a padre ni abuelo
        console.log("Solo hijo");
    });

    // DETENER PROPAGACIÓN INMEDIATA
    hijo.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        // No ejecuta otros listeners del mismo elemento
        console.log("Este sí se ejecuta");
    });

    hijo.addEventListener("click", () => {
        console.log("Este NO se ejecuta");
    });
}

// ============================================================================
// 19. DELEGACIÓN DE EVENTOS
// ============================================================================

console.log("\n📌 19. DELEGACIÓN DE EVENTOS");
console.log("─────────────────────────────");

function ejemplosDelegacion() {
    const lista = document.querySelector("#lista");

    // ❌ MAL: Añadir listener a cada elemento
    const items = lista.querySelectorAll("li");
    items.forEach(item => {
        item.addEventListener("click", () => {
            console.log(item.textContent);
        });
    });

    // ✅ BIEN: Un solo listener en el padre (delegación)
    lista.addEventListener("click", (event) => {
        // Verificar que se hizo click en un LI
        if (event.target.tagName === "LI") {
            console.log(event.target.textContent);
        }
    });

    // Ventaja: Funciona también con elementos añadidos dinámicamente
}

// ============================================================================
// 20. EXPRESIONES REGULARES (BÁSICO)
// ============================================================================

console.log("\n📌 20. EXPRESIONES REGULARES");
console.log("─────────────────────────────");

function ejemplosRegExp() {
    // CREAR REGEXP
    const regexp1 = /patron/flags;
    const regexp2 = new RegExp("patron", "flags");

    // FLAGS COMUNES
    const conFlags = /texto/gi;
    // g = global (todas las coincidencias)
    // i = ignoreCase (insensible a mayúsculas)
    // m = multiline (^ y $ para cada línea)

    // MÉTODOS
    const patron = /\d{3}/; // 3 dígitos

    // test() - Verifica si coincide (true/false)
    patron.test("abc123def"); // true

    // exec() - Devuelve array con detalles o null
    const resultado = patron.exec("abc123def");
    console.log(resultado[0]); // "123"

    // CARACTERES ESPECIALES
    const ejemplos = {
        ".": "Cualquier carácter",
        "\\d": "Dígito [0-9]",
        "\\D": "No dígito",
        "\\w": "Alfanumérico [A-Za-z0-9_]",
        "\\W": "No alfanumérico",
        "\\s": "Espacio en blanco",
        "\\S": "No espacio",
        "^": "Inicio de string",
        "$": "Fin de string",
        "*": "0 o más veces",
        "+": "1 o más veces",
        "?": "0 o 1 vez (opcional)",
        "{n}": "Exactamente n veces",
        "{n,}": "n o más veces",
        "{n,m}": "Entre n y m veces"
    };

    // EJEMPLOS PRÁCTICOS
    const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telefono = /^\d{9}$/;
    const codigoPostal = /^(35|38)\d{3}$/;
    const dni = /^\d{8}[A-Z]$/i;
}

/*
================================================================================
  ACTIVIDADES PRÁCTICAS - DOM Y EVENTOS
  Soluciones Completas y Comentadas
================================================================================
*/

console.log("🎯 ACTIVIDADES DE PRÁCTICA");
console.log("═══════════════════════════════════════════════════════════════\n");

/*
================================================================================
  ACTIVIDAD 1: MANIPULACIÓN BÁSICA DEL DOM
================================================================================
*/

console.log("📝 ACTIVIDAD 1: Manipulación Básica del DOM");
console.log("────────────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Dado el siguiente HTML:

<div id="contenedor">
    <h2>Lista de Islas Canarias</h2>
    <ul id="listaIslas">
        <li class="isla">Tenerife</li>
        <li class="isla">Gran Canaria</li>
    </ul>
    <button id="btnAñadir">Añadir Isla</button>
</div>

TAREAS:
1. Selecciona el contenedor usando querySelector
2. Añade una nueva isla "La Palma" al final de la lista
3. Cambia el texto del h2 a "Las 7 Islas Canarias"
4. Añade la clase "destacado" a la primera isla
5. Cuenta cuántas islas hay en total y muéstralo en consola
`);

// ============== SOLUCIÓN ==============

function actividad1_solucion() {
    // TAREA 1: Seleccionar el contenedor
    const contenedor = document.querySelector("#contenedor");
    console.log("✅ Contenedor seleccionado:", contenedor);

    // TAREA 2: Añadir nueva isla "La Palma"
    const lista = document.getElementById("listaIslas");
    const nuevaIsla = document.createElement("li");
    nuevaIsla.className = "isla";
    nuevaIsla.textContent = "La Palma";
    lista.appendChild(nuevaIsla);
    console.log("✅ Isla 'La Palma' añadida");

    // TAREA 3: Cambiar texto del h2
    const titulo = contenedor.querySelector("h2");
    titulo.textContent = "Las 7 Islas Canarias";
    console.log("✅ Título actualizado:", titulo.textContent);

    // TAREA 4: Añadir clase "destacado" a la primera isla
    const primeraIsla = lista.firstElementChild;
    // O también: const primeraIsla = lista.querySelector(".isla");
    primeraIsla.classList.add("destacado");
    console.log("✅ Clase 'destacado' añadida a:", primeraIsla.textContent);

    // TAREA 5: Contar islas
    const todasLasIslas = lista.querySelectorAll(".isla");
    console.log(`✅ Total de islas: ${todasLasIslas.length}`);

    // BONUS: Mostrar todas las islas
    console.log("📋 Lista de islas:");
    todasLasIslas.forEach((isla, index) => {
        console.log(`   ${index + 1}. ${isla.textContent}`);
    });
}

// Descomentar para ejecutar:
// actividad1_solucion();

/*
================================================================================
  ACTIVIDAD 2: FORMULARIOS Y VALIDACIÓN
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 2: Formularios y Validación");
console.log("──────────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Dado el siguiente HTML:

<form id="registro" novalidate>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required minlength="3">
    <span class="error" id="errorNombre"></span>
    
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <span class="error" id="errorEmail"></span>
    
    <label for="edad">Edad:</label>
    <input type="number" id="edad" min="18" max="100">
    <span class="error" id="errorEdad"></span>
    
    <label for="isla">Isla de residencia:</label>
    <select id="isla" required>
        <option value="">Selecciona...</option>
        <option value="TF">Tenerife</option>
        <option value="GC">Gran Canaria</option>
        <option value="LP">La Palma</option>
    </select>
    <span class="error" id="errorIsla"></span>
    
    <button type="submit">Enviar</button>
</form>

TAREAS:
1. Captura el evento submit del formulario
2. Valida que el nombre tenga al menos 3 caracteres
3. Valida que el email sea correcto
4. Valida que la edad esté entre 18 y 100
5. Valida que se haya seleccionado una isla
6. Muestra errores personalizados en los span.error
7. Si todo es válido, muestra un alert con los datos y resetea el form
`);

// ============== SOLUCIÓN ==============

function actividad2_solucion() {
    const form = document.getElementById("registro");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const edadInput = document.getElementById("edad");
    const islaSelect = document.getElementById("isla");

    // Función auxiliar para mostrar errores
    function mostrarError(inputId, mensaje) {
        const errorSpan = document.getElementById(`error${inputId}`);
        errorSpan.textContent = mensaje;
        errorSpan.style.color = "red";
        errorSpan.style.display = "block";
    }

    // Función auxiliar para limpiar errores
    function limpiarErrores() {
        document.querySelectorAll(".error").forEach(span => {
            span.textContent = "";
            span.style.display = "none";
        });
    }

    // TAREA 1: Capturar evento submit
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar envío por defecto

        limpiarErrores();
        let formularioValido = true;

        // TAREA 2: Validar nombre (min 3 caracteres)
        if (nombreInput.validity.valueMissing) {
            mostrarError("Nombre", "⚠️ El nombre es obligatorio");
            formularioValido = false;
        } else if (nombreInput.validity.tooShort) {
            mostrarError("Nombre",
                `⚠️ Mínimo 3 caracteres (tienes ${nombreInput.value.length})`);
            formularioValido = false;
        }

        // TAREA 3: Validar email
        if (emailInput.validity.valueMissing) {
            mostrarError("Email", "⚠️ El email es obligatorio");
            formularioValido = false;
        } else if (emailInput.validity.typeMismatch) {
            mostrarError("Email", "⚠️ Formato de email inválido");
            formularioValido = false;
        }

        // TAREA 4: Validar edad (18-100)
        if (edadInput.value && edadInput.validity.rangeUnderflow) {
            mostrarError("Edad", "⚠️ Debes ser mayor de 18 años");
            formularioValido = false;
        } else if (edadInput.value && edadInput.validity.rangeOverflow) {
            mostrarError("Edad", "⚠️ La edad máxima es 100 años");
            formularioValido = false;
        }

        // TAREA 5: Validar selección de isla
        if (islaSelect.value === "") {
            mostrarError("Isla", "⚠️ Debes seleccionar una isla");
            formularioValido = false;
        }

        // TAREA 7: Si es válido, mostrar datos y resetear
        if (formularioValido) {
            const datos = {
                nombre: nombreInput.value,
                email: emailInput.value,
                edad: edadInput.value || "No especificada",
                isla: islaSelect.options[islaSelect.selectedIndex].text
            };

            alert(`✅ Registro exitoso!\n\n` +
                `Nombre: ${datos.nombre}\n` +
                `Email: ${datos.email}\n` +
                `Edad: ${datos.edad}\n` +
                `Isla: ${datos.isla}`);

            form.reset();
            console.log("✅ Formulario validado y reseteado");
        } else {
            console.log("❌ Hay errores en el formulario");
        }
    });

    // BONUS: Validación en tiempo real
    nombreInput.addEventListener("input", () => {
        if (nombreInput.validity.valid) {
            document.getElementById("errorNombre").textContent = "";
        }
    });

    emailInput.addEventListener("input", () => {
        if (emailInput.validity.valid) {
            document.getElementById("errorEmail").textContent = "";
        }
    });
}

// Descomentar para ejecutar:
// actividad2_solucion();

/*
================================================================================
  ACTIVIDAD 3: EVENTOS Y PROPAGACIÓN
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 3: Eventos y Propagación");
console.log("───────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Dado el siguiente HTML:

<div id="archipielago" class="zona" style="padding: 30px; background: lightblue;">
    <div id="isla" class="zona" style="padding: 20px; background: lightgreen;">
        <button id="municipio" style="padding: 10px;">
            Click aquí
        </button>
    </div>
</div>

TAREAS:
1. Añade listeners de 'click' a los 3 elementos
2. En cada listener, muestra en consola qué elemento capturó el evento
3. Observa el orden de ejecución (fase de burbujeo)
4. Añade un listener en modo captura al archipiélago
5. Usa stopPropagation() en el botón y observa el efecto
6. Muestra información del evento (target vs currentTarget)
`);

// ============== SOLUCIÓN ==============

function actividad3_solucion() {
    const archipielago = document.getElementById("archipielago");
    const isla = document.getElementById("isla");
    const municipio = document.getElementById("municipio");

    console.log("🎯 Sistema de eventos configurado\n");

    // TAREA 1 y 2: Añadir listeners en modo BURBUJEO (por defecto)
    archipielago.addEventListener("click", (event) => {
        console.log("📍 3. Archipiélago capturó el evento (BUBBLING)");
        console.log("   Target:", event.target.id);
        console.log("   CurrentTarget:", event.currentTarget.id);
    });

    isla.addEventListener("click", (event) => {
        console.log("🏝️  2. Isla capturó el evento (BUBBLING)");
        console.log("   Target:", event.target.id);
        console.log("   CurrentTarget:", event.currentTarget.id);
    });

    municipio.addEventListener("click", (event) => {
        console.log("🏛️  1. Municipio capturó el evento (TARGET)");
        console.log("   Target:", event.target.id);
        console.log("   CurrentTarget:", event.currentTarget.id);

        // TAREA 5: Descomentar para detener propagación
        // event.stopPropagation();
        // console.log("   ⛔ Propagación detenida!");
    });

    // TAREA 4: Añadir listener en modo CAPTURA
    archipielago.addEventListener("click", (event) => {
        console.log("📍 0. Archipiélago capturó el evento (CAPTURE)");
        console.log("   Esta es la FASE DE CAPTURA (va hacia abajo)");
    }, { capture: true });

    isla.addEventListener("click", (event) => {
        console.log("🏝️  0.5. Isla capturó el evento (CAPTURE)");
    }, { capture: true });

    console.log(`
📌 ORDEN DE EJECUCIÓN (sin stopPropagation):
   0. Archipiélago (CAPTURE) ⬇️
   0.5. Isla (CAPTURE) ⬇️
   1. Municipio (TARGET) 🎯
   2. Isla (BUBBLING) ⬆️
   3. Archipiélago (BUBBLING) ⬆️
   
📌 DIFERENCIAS:
   - event.target: Elemento donde se ORIGINÓ el evento (botón)
   - event.currentTarget: Elemento que tiene el LISTENER actual
    `);
}

// Descomentar para ejecutar:
// actividad3_solucion();

/*
================================================================================
  ACTIVIDAD 4: TODO LIST COMPLETA
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 4: Lista de Tareas Completa");
console.log("─────────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Crea una aplicación de lista de tareas con las siguientes funcionalidades:

1. Formulario para añadir tareas
2. Validación: no permitir tareas vacías
3. Cada tarea debe tener:
   - Texto de la tarea
   - Botón para marcar como completada (toggle)
   - Botón para eliminar
4. Contador de tareas totales y completadas
5. Botón para limpiar tareas completadas
6. Las tareas completadas deben tener un estilo diferente
7. Usar delegación de eventos para los botones de las tareas

HTML NECESARIO:

<div id="appTareas">
    <h2>📝 Lista de Tareas</h2>
    
    <form id="formTarea">
        <input type="text" id="inputTarea" placeholder="Nueva tarea..." required>
        <button type="submit">➕ Añadir</button>
        <span id="errorTarea" class="error"></span>
    </form>
    
    <div id="stats">
        <span id="totalTareas">Total: 0</span> | 
        <span id="completadas">Completadas: 0</span>
    </div>
    
    <button id="btnLimpiar">🧹 Limpiar completadas</button>
    
    <ul id="listaTareas"></ul>
</div>

<style>
    .tarea-completada {
        text-decoration: line-through;
        opacity: 0.6;
        color: gray;
    }
    .error {
        color: red;
        display: block;
        margin-top: 5px;
    }
    .tarea {
        padding: 10px;
        margin: 5px 0;
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tarea button {
        margin-left: 5px;
    }
</style>
`);

// ============== SOLUCIÓN COMPLETA ==============

function actividad4_solucion() {
    // ELEMENTOS DEL DOM
    const form = document.getElementById("formTarea");
    const input = document.getElementById("inputTarea");
    const lista = document.getElementById("listaTareas");
    const errorSpan = document.getElementById("errorTarea");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const totalSpan = document.getElementById("totalTareas");
    const completadasSpan = document.getElementById("completadas");

    // ESTADO DE LA APLICACIÓN
    let tareas = [];
    let idCounter = 0;

    // FUNCIÓN: Actualizar estadísticas
    function actualizarEstadisticas() {
        const total = tareas.length;
        const completadas = tareas.filter(t => t.completada).length;

        totalSpan.textContent = `Total: ${total}`;
        completadasSpan.textContent = `Completadas: ${completadas}`;
    }

    // FUNCIÓN: Renderizar todas las tareas
    function renderizarTareas() {
        lista.innerHTML = ""; // Limpiar lista

        if (tareas.length === 0) {
            lista.innerHTML = "<li>No hay tareas pendientes 🎉</li>";
            return;
        }

        tareas.forEach(tarea => {
            const li = document.createElement("li");
            li.className = "tarea";
            li.dataset.id = tarea.id;

            if (tarea.completada) {
                li.classList.add("tarea-completada");
            }

            // Estructura de la tarea
            li.innerHTML = `
                <span class="texto-tarea">${tarea.texto}</span>
                <div class="botones">
                    <button class="btn-completar" data-id="${tarea.id}">
                        ${tarea.completada ? "↩️ Desmarcar" : "✅ Completar"}
                    </button>
                    <button class="btn-eliminar" data-id="${tarea.id}">
                        🗑️ Eliminar
                    </button>
                </div>
            `;

            lista.appendChild(li);
        });

        actualizarEstadisticas();
    }

    // FUNCIÓN: Añadir tarea
    function añadirTarea(texto) {
        const nuevaTarea = {
            id: idCounter++,
            texto: texto.trim(),
            completada: false
        };

        tareas.push(nuevaTarea);
        renderizarTareas();
        console.log("✅ Tarea añadida:", nuevaTarea.texto);
    }

    // FUNCIÓN: Toggle completada
    function toggleCompletada(id) {
        const tarea = tareas.find(t => t.id === parseInt(id));
        if (tarea) {
            tarea.completada = !tarea.completada;
            renderizarTareas();
            console.log(`🔄 Tarea ${tarea.completada ? 'completada' : 'desmarcada'}:`,
                tarea.texto);
        }
    }

    // FUNCIÓN: Eliminar tarea
    function eliminarTarea(id) {
        const index = tareas.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            const tareaEliminada = tareas[index];
            tareas.splice(index, 1);
            renderizarTareas();
            console.log("🗑️ Tarea eliminada:", tareaEliminada.texto);
        }
    }

    // FUNCIÓN: Limpiar completadas
    function limpiarCompletadas() {
        const cantidadAntes = tareas.length;
        tareas = tareas.filter(t => !t.completada);
        const eliminadas = cantidadAntes - tareas.length;

        renderizarTareas();
        console.log(`🧹 ${eliminadas} tarea(s) completada(s) eliminada(s)`);
    }

    // EVENTO: Submit del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        errorSpan.textContent = "";

        const textoTarea = input.value.trim();

        // Validación
        if (textoTarea === "") {
            errorSpan.textContent = "⚠️ La tarea no puede estar vacía";
            return;
        }

        if (textoTarea.length < 3) {
            errorSpan.textContent = "⚠️ La tarea debe tener al menos 3 caracteres";
            return;
        }

        añadirTarea(textoTarea);
        input.value = "";
        input.focus();
    });

    // EVENTO: Delegación para botones de tareas
    lista.addEventListener("click", (event) => {
        const target = event.target;

        // Botón completar
        if (target.classList.contains("btn-completar")) {
            const id = target.dataset.id;
            toggleCompletada(id);
        }

        // Botón eliminar
        if (target.classList.contains("btn-eliminar")) {
            const id = target.dataset.id;

            // Confirmación
            const tarea = tareas.find(t => t.id === parseInt(id));
            if (confirm(`¿Eliminar "${tarea.texto}"?`)) {
                eliminarTarea(id);
            }
        }
    });

    // EVENTO: Limpiar completadas
    btnLimpiar.addEventListener("click", () => {
        const completadas = tareas.filter(t => t.completada).length;

        if (completadas === 0) {
            alert("No hay tareas completadas para limpiar");
            return;
        }

        if (confirm(`¿Eliminar ${completadas} tarea(s) completada(s)?`)) {
            limpiarCompletadas();
        }
    });

    // EVENTO: Limpiar error al escribir
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            errorSpan.textContent = "";
        }
    });

    // Inicializar
    console.log("🎯 Aplicación de tareas inicializada");
    renderizarTareas();
}

// Descomentar para ejecutar:
// actividad4_solucion();

/*
================================================================================
  ACTIVIDAD 5: GALERÍA DE IMÁGENES INTERACTIVA
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 5: Galería de Imágenes");
console.log("────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Crea una galería de imágenes con las siguientes características:

1. Grid de miniaturas clicables
2. Al hacer click, mostrar la imagen en grande
3. Navegación con botones anterior/siguiente
4. Cerrar con botón X o tecla ESC
5. Mostrar contador (imagen X de Y)
6. Prevenir scroll del body cuando el modal está abierto

HTML NECESARIO:

<div id="galeria">
    <div class="grid">
        <img src="imagen1.jpg" alt="Teide" class="miniatura" data-index="0">
        <img src="imagen2.jpg" alt="Playa" class="miniatura" data-index="1">
        <img src="imagen3.jpg" alt="Bosque" class="miniatura" data-index="2">
        <!-- Más imágenes... -->
    </div>
</div>

<div id="modal" class="modal oculto">
    <button id="btnCerrar" class="btn-cerrar">✕</button>
    <button id="btnAnterior" class="btn-nav">❮</button>
    <img id="imagenGrande" src="" alt="">
    <button id="btnSiguiente" class="btn-nav">❯</button>
    <div id="contador"></div>
</div>
`);

// ============== SOLUCIÓN ==============

function actividad5_solucion() {
    // Elementos
    const miniaturas = document.querySelectorAll(".miniatura");
    const modal = document.getElementById("modal");
    const imagenGrande = document.getElementById("imagenGrande");
    const btnCerrar = document.getElementById("btnCerrar");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnSiguiente = document.getElementById("btnSiguiente");
    const contador = document.getElementById("contador");

    let indiceActual = 0;
    const totalImagenes = miniaturas.length;

    // Array de imágenes
    const imagenes = Array.from(miniaturas).map(img => ({
        src: img.src,
        alt: img.alt
    }));

    // FUNCIÓN: Mostrar imagen
    function mostrarImagen(indice) {
        if (indice < 0) indice = totalImagenes - 1;
        if (indice >= totalImagenes) indice = 0;

        indiceActual = indice;
        imagenGrande.src = imagenes[indice].src;
        imagenGrande.alt = imagenes[indice].alt;
        contador.textContent = `${indice + 1} / ${totalImagenes}`;

        // Deshabilitar botones en extremos (opcional)
        btnAnterior.disabled = indice === 0;
        btnSiguiente.disabled = indice === totalImagenes - 1;
    }

    // FUNCIÓN: Abrir modal
    function abrirModal(indice) {
        modal.classList.remove("oculto");
        document.body.style.overflow = "hidden"; // Bloquear scroll
        mostrarImagen(indice);
        console.log("🖼️ Modal abierto - Imagen", indice + 1);
    }

    // FUNCIÓN: Cerrar modal
    function cerrarModal() {
        modal.classList.add("oculto");
        document.body.style.overflow = ""; // Restaurar scroll
        console.log("✕ Modal cerrado");
    }

    // EVENTO: Click en miniaturas (delegación)
    document.querySelector(".grid").addEventListener("click", (event) => {
        if (event.target.classList.contains("miniatura")) {
            const indice = parseInt(event.target.dataset.index);
            abrirModal(indice);
        }
    });

    // EVENTO: Botón cerrar
    btnCerrar.addEventListener("click", cerrarModal);

    // EVENTO: Navegación
    btnAnterior.addEventListener("click", () => {
        mostrarImagen(indiceActual - 1);
    });

    btnSiguiente.addEventListener("click", () => {
        mostrarImagen(indiceActual + 1);
    });

    // EVENTO: Teclado
    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("oculto")) {
            switch (event.key) {
                case "Escape":
                    cerrarModal();
                    break;
                case "ArrowLeft":
                    mostrarImagen(indiceActual - 1);
                    break;
                case "ArrowRight":
                    mostrarImagen(indiceActual + 1);
                    break;
            }
        }
    });

    // EVENTO: Click fuera de la imagen (cerrar)
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    console.log("🎯 Galería inicializada con", totalImagenes, "imágenes");
}

// Descomentar para ejecutar:
// actividad5_solucion();

/*
================================================================================
  ACTIVIDAD 6: EJERCICIO RÁPIDO - PREGUNTAS Y RESPUESTAS
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 6: Preguntas de Repaso");
console.log("────────────────────────────────────\n");

console.log(`
PREGUNTAS DE REPASO RÁPIDO:

1. ¿Cuál es la diferencia entre textContent e innerHTML?
   📌 RESPUESTA: textContent solo maneja texto plano (sin HTML), mientras que
   innerHTML interpreta y maneja código HTML. Si insertas "<p>Hola</p>" con
   textContent, se muestra literalmente; con innerHTML crea un párrafo real.

2. ¿Qué devuelve querySelector si no encuentra ningún elemento?
   📌 RESPUESTA: Devuelve null (no undefined ni un array vacío).

3. ¿Cómo se previene el envío de un formulario?
   📌 RESPUESTA: Usando event.preventDefault() en el listener del evento 'submit'.

4. ¿Diferencia entre event.target y event.currentTarget?
   📌 RESPUESTA: 
   - event.target: Elemento donde se ORIGINÓ el evento (donde hiciste click)
   - event.currentTarget: Elemento que tiene el LISTENER (donde está el addEventListener)

5. ¿Diferencia entre append() y appendChild()?
   📌 RESPUESTA:
   - appendChild(): Solo acepta Nodes, devuelve el nodo añadido
   - append(): Acepta Nodes Y strings, puede añadir múltiples, no devuelve nada

6. ¿Qué es la delegación de eventos y por qué es útil?
   📌 RESPUESTA: Poner un listener en un elemento padre en lugar de en cada hijo.
   Es útil para elementos dinámicos y mejora el rendimiento (menos listeners).

7. ¿Cuál es el orden de propagación de eventos?
   📌 RESPUESTA: 
   1. CAPTURA (raíz → objetivo) - si capture:true
   2. TARGET (el elemento objetivo)
   3. BUBBLING (objetivo → raíz) - por defecto

8. ¿Cómo se convierte un NodeList en Array?
   📌 RESPUESTA: 
   - [...nodeList]
   - Array.from(nodeList)

9. ¿Diferencia entre .remove() y .removeChild()?
   📌 RESPUESTA:
   - .remove(): El elemento se elimina a sí mismo
   - .removeChild(hijo): El padre elimina a un hijo específico

10. ¿Para qué sirve el flag 'once' en addEventListener?
    📌 RESPUESTA: El listener se ejecuta solo una vez y luego se elimina
    automáticamente. Útil para eventos de inicialización.
`);

/*
================================================================================
  ACTIVIDAD 7: VALIDACIÓN CON EXPRESIONES REGULARES
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 7: Validación con RegExp");
console.log("───────────────────────────────────────\n");

console.log(`
ENUNCIADO:
Crea un formulario de registro que valide los siguientes campos usando
expresiones regulares:

1. DNI/NIE: 8 números + 1 letra (ej: 12345678A)
2. Teléfono: 9 dígitos, puede empezar por 6, 7, 8 o 9
3. Código postal canario: 5 dígitos, empieza por 35 o 38
4. Usuario: 4-20 caracteres alfanuméricos, puede incluir guión bajo
5. Contraseña: Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número

HTML NECESARIO:

<form id="formRegistro">
    <div>
        <label for="dni">DNI/NIE:</label>
        <input type="text" id="dni" placeholder="12345678A">
        <span class="error"></span>
    </div>
    
    <div>
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" placeholder="612345678">
        <span class="error"></span>
    </div>
    
    <div>
        <label for="codigoPostal">Código Postal:</label>
        <input type="text" id="codigoPostal" placeholder="35001">
        <span class="error"></span>
    </div>
    
    <div>
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" placeholder="usuario_123">
        <span class="error"></span>
    </div>
    
    <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password">
        <span class="error"></span>
    </div>
    
    <button type="submit">Registrar</button>
</form>
`);

// ============== SOLUCIÓN ==============

function actividad7_solucion() {
    // EXPRESIONES REGULARES
    const regexps = {
        dni: /^\d{8}[A-Z]$/i,
        telefono: /^[6-9]\d{8}$/,
        codigoPostal: /^(35|38)\d{3}$/,
        usuario: /^[A-Za-z0-9_]{4,20}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };

    // Mensajes de error personalizados
    const mensajesError = {
        dni: "❌ DNI/NIE inválido. Formato: 12345678A",
        telefono: "❌ Teléfono inválido. 9 dígitos empezando por 6, 7, 8 o 9",
        codigoPostal: "❌ Código postal canario inválido. Debe empezar por 35 o 38",
        usuario: "❌ Usuario inválido. 4-20 caracteres alfanuméricos y guión bajo",
        password: "❌ Contraseña débil. Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número"
    };

    const form = document.getElementById("formRegistro");

    // Función para validar un campo
    function validarCampo(input, regexp, mensajeError) {
        const errorSpan = input.nextElementSibling;
        const valor = input.value.trim();

        if (valor === "") {
            errorSpan.textContent = "⚠️ Este campo es obligatorio";
            errorSpan.style.color = "orange";
            return false;
        }

        if (!regexp.test(valor)) {
            errorSpan.textContent = mensajeError;
            errorSpan.style.color = "red";
            return false;
        }

        errorSpan.textContent = "✅ Válido";
        errorSpan.style.color = "green";
        return true;
    }

    // Validación en tiempo real
    Object.keys(regexps).forEach(campo => {
        const input = document.getElementById(campo);

        input.addEventListener("blur", () => {
            validarCampo(input, regexps[campo], mensajesError[campo]);
        });

        input.addEventListener("input", () => {
            const errorSpan = input.nextElementSibling;
            if (errorSpan.textContent !== "") {
                validarCampo(input, regexps[campo], mensajesError[campo]);
            }
        });
    });

    // Validación en submit
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formularioValido = true;

        // Validar todos los campos
        Object.keys(regexps).forEach(campo => {
            const input = document.getElementById(campo);
            const esValido = validarCampo(input, regexps[campo], mensajesError[campo]);
            if (!esValido) formularioValido = false;
        });

        if (formularioValido) {
            alert("✅ ¡Registro exitoso! Todos los campos son válidos.");
            console.log("📋 Datos del formulario:");
            Object.keys(regexps).forEach(campo => {
                console.log(`   ${campo}: ${document.getElementById(campo).value}`);
            });
            form.reset();
        } else {
            alert("❌ Por favor, corrige los errores en el formulario");
        }
    });

    console.log("🎯 Sistema de validación con RegExp inicializado");
}

// Descomentar para ejecutar:
// actividad7_solucion();

/*
================================================================================
  ACTIVIDAD 8: TABLA DINÁMICA CON FILTRADO Y ORDENACIÓN
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD 8: Tabla Dinámica");
console.log("───────────────────────────────\n");

console.log(`
ENUNCIADO:
Crea una tabla de datos con las siguientes funcionalidades:

1. Datos de ejemplo (array de objetos de islas canarias)
2. Renderizar tabla dinámicamente
3. Ordenar por columna (nombre, población, superficie) al hacer click en encabezado
4. Filtro de búsqueda en tiempo real
5. Botón para añadir nueva isla
6. Botón para eliminar isla (con confirmación)

ESTRUCTURA:

<div id="appTabla">
    <h2>🏝️ Islas Canarias</h2>
    
    <input type="text" id="filtro" placeholder="🔍 Buscar isla...">
    
    <button id="btnAñadirIsla">➕ Añadir Isla</button>
    
    <table id="tablaIslas">
        <thead>
            <tr>
                <th data-columna="nombre">Nombre ↕️</th>
                <th data-columna="poblacion">Población ↕️</th>
                <th data-columna="superficie">Superficie (km²) ↕️</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
`);

// ============== SOLUCIÓN ==============

function actividad8_solucion() {
    // DATOS DE EJEMPLO
    let islas = [
        { id: 1, nombre: "Tenerife", poblacion: 917841, superficie: 2034 },
        { id: 2, nombre: "Gran Canaria", poblacion: 851231, superficie: 1560 },
        { id: 3, nombre: "Lanzarote", poblacion: 152289, superficie: 846 },
        { id: 4, nombre: "Fuerteventura", poblacion: 116886, superficie: 1660 },
        { id: 5, nombre: "La Palma", poblacion: 83458, superficie: 708 },
        { id: 6, nombre: "La Gomera", poblacion: 21503, superficie: 370 },
        { id: 7, nombre: "El Hierro", poblacion: 11147, superficie: 269 }
    ];

    let idCounter = 8;
    let ordenActual = { columna: null, ascendente: true };
    let filtroActual = "";

    // ELEMENTOS
    const tbody = document.querySelector("#tablaIslas tbody");
    const inputFiltro = document.getElementById("filtro");
    const btnAñadir = document.getElementById("btnAñadirIsla");
    const thead = document.querySelector("#tablaIslas thead");

    // FUNCIÓN: Renderizar tabla
    function renderizarTabla() {
        tbody.innerHTML = "";

        // Aplicar filtro
        let islasFiltradas = islas.filter(isla => {
            const textoFiltro = filtroActual.toLowerCase();
            return isla.nombre.toLowerCase().includes(textoFiltro);
        });

        // Aplicar ordenación
        if (ordenActual.columna) {
            islasFiltradas.sort((a, b) => {
                let valorA = a[ordenActual.columna];
                let valorB = b[ordenActual.columna];

                // Para strings
                if (typeof valorA === "string") {
                    valorA = valorA.toLowerCase();
                    valorB = valorB.toLowerCase();
                }

                if (valorA < valorB) return ordenActual.ascendente ? -1 : 1;
                if (valorA > valorB) return ordenActual.ascendente ? 1 : -1;
                return 0;
            });
        }

        // Renderizar filas
        if (islasFiltradas.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center;">
                        No se encontraron islas
                    </td>
                </tr>
            `;
            return;
        }

        islasFiltradas.forEach(isla => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${isla.nombre}</td>
                <td>${isla.poblacion.toLocaleString()}</td>
                <td>${isla.superficie.toLocaleString()}</td>
                <td>
                    <button class="btn-eliminar" data-id="${isla.id}">
                        🗑️ Eliminar
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        console.log(`✅ Tabla renderizada: ${islasFiltradas.length} isla(s)`);
    }

    // FUNCIÓN: Ordenar por columna
    function ordenarPorColumna(columna) {
        if (ordenActual.columna === columna) {
            ordenActual.ascendente = !ordenActual.ascendente;
        } else {
            ordenActual.columna = columna;
            ordenActual.ascendente = true;
        }

        // Actualizar indicadores visuales en encabezados
        document.querySelectorAll("th[data-columna]").forEach(th => {
            const col = th.dataset.columna;
            if (col === columna) {
                th.textContent = th.textContent.split(" ")[0] +
                    (ordenActual.ascendente ? " ⬆️" : " ⬇️");
            } else {
                th.textContent = th.textContent.split(" ")[0] + " ↕️";
            }
        });

        renderizarTabla();
        console.log(`🔄 Ordenado por: ${columna} (${ordenActual.ascendente ? 'ASC' : 'DESC'})`);
    }

    // FUNCIÓN: Añadir isla
    function añadirIsla() {
        const nombre = prompt("Nombre de la isla:");
        if (!nombre) return;

        const poblacion = parseInt(prompt("Población:"));
        if (isNaN(poblacion)) {
            alert("❌ La población debe ser un número");
            return;
        }

        const superficie = parseInt(prompt("Superficie (km²):"));
        if (isNaN(superficie)) {
            alert("❌ La superficie debe ser un número");
            return;
        }

        const nuevaIsla = {
            id: idCounter++,
            nombre: nombre,
            poblacion: poblacion,
            superficie: superficie
        };

        islas.push(nuevaIsla);
        renderizarTabla();
        console.log("➕ Isla añadida:", nuevaIsla);
    }

    // FUNCIÓN: Eliminar isla
    function eliminarIsla(id) {
        const isla = islas.find(i => i.id === parseInt(id));
        if (!isla) return;

        if (confirm(`¿Eliminar la isla "${isla.nombre}"?`)) {
            islas = islas.filter(i => i.id !== parseInt(id));
            renderizarTabla();
            console.log("🗑️ Isla eliminada:", isla.nombre);
        }
    }

    // EVENTOS: Click en encabezados (ordenar)
    thead.addEventListener("click", (event) => {
        const th = event.target.closest("th[data-columna]");
        if (th) {
            const columna = th.dataset.columna;
            ordenarPorColumna(columna);
        }
    });

    // EVENTO: Filtro en tiempo real
    inputFiltro.addEventListener("input", (event) => {
        filtroActual = event.target.value;
        renderizarTabla();
    });

    // EVENTO: Añadir isla
    btnAñadir.addEventListener("click", añadirIsla);

    // EVENTO: Delegación para eliminar
    tbody.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-eliminar")) {
            const id = event.target.dataset.id;
            eliminarIsla(id);
        }
    });

    // Inicializar
    renderizarTabla();
    console.log("🎯 Tabla dinámica inicializada con", islas.length, "islas");
}

// Descomentar para ejecutar:
// actividad8_solucion();

/*
================================================================================
  ACTIVIDAD BONUS: TEMPORIZADOR / CRONÓMETRO
================================================================================
*/

console.log("\n\n📝 ACTIVIDAD BONUS: Temporizador");
console.log("─────────────────────────────────\n");

console.log(`
ENUNCIADO:
Crea un cronómetro/temporizador con:

1. Mostrar tiempo en formato MM:SS:MS
2. Botones: Iniciar, Pausar, Resetear
3. Guardar tiempos (laps) con botón
4. Mostrar lista de laps
5. Cambiar color del fondo según el estado (corriendo/pausado)

HTML:

<div id="cronometro">
    <h2>⏱️ Cronómetro</h2>
    <div id="display">00:00:00</div>
    
    <div class="botones">
        <button id="btnIniciar">▶️ Iniciar</button>
        <button id="btnPausar" disabled>⏸️ Pausar</button>
        <button id="btnResetear">🔄 Resetear</button>
        <button id="btnLap" disabled>🏁 Lap</button>
    </div>
    
    <h3>Tiempos guardados:</h3>
    <ul id="listaLaps"></ul>
</div>
`);

// ============== SOLUCIÓN ==============

function actividadBonus_cronometro() {
    // ELEMENTOS
    const display = document.getElementById("display");
    const btnIniciar = document.getElementById("btnIniciar");
    const btnPausar = document.getElementById("btnPausar");
    const btnResetear = document.getElementById("btnResetear");
    const btnLap = document.getElementById("btnLap");
    const listaLaps = document.getElementById("listaLaps");
    const contenedor = document.getElementById("cronometro");

    // ESTADO
    let intervalId = null;
    let tiempoInicio = 0;
    let tiempoTranscurrido = 0;
    let corriendo = false;
    let laps = [];

    // FUNCIÓN: Formatear tiempo
    function formatearTiempo(ms) {
        const milisegundos = Math.floor((ms % 1000) / 10);
        const segundos = Math.floor((ms / 1000) % 60);
        const minutos = Math.floor((ms / (1000 * 60)) % 60);

        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milisegundos).padStart(2, '0')}`;
    }

    // FUNCIÓN: Actualizar display
    function actualizarDisplay() {
        const tiempoActual = Date.now() - tiempoInicio + tiempoTranscurrido;
        display.textContent = formatearTiempo(tiempoActual);
    }

    // FUNCIÓN: Iniciar
    function iniciar() {
        if (corriendo) return;

        corriendo = true;
        tiempoInicio = Date.now();
        intervalId = setInterval(actualizarDisplay, 10);

        // Actualizar UI
        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        btnLap.disabled = false;
        contenedor.style.backgroundColor = "#d4edda";

        console.log("▶️ Cronómetro iniciado");
    }

    // FUNCIÓN: Pausar
    function pausar() {
        if (!corriendo) return;

        corriendo = false;
        tiempoTranscurrido += Date.now() - tiempoInicio;
        clearInterval(intervalId);

        // Actualizar UI
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
        btnLap.disabled = true;
        contenedor.style.backgroundColor = "#fff3cd";

        console.log("⏸️ Cronómetro pausado");
    }

    // FUNCIÓN: Resetear
    function resetear() {
        pausar();

        tiempoInicio = 0;
        tiempoTranscurrido = 0;
        display.textContent = "00:00:00";
        laps = [];
        listaLaps.innerHTML = "";

        contenedor.style.backgroundColor = "#fff";

        console.log("🔄 Cronómetro reseteado");
    }

    // FUNCIÓN: Guardar lap
    function guardarLap() {
        if (!corriendo) return;

        const tiempoActual = Date.now() - tiempoInicio + tiempoTranscurrido;
        const numeroLap = laps.length + 1;

        laps.push(tiempoActual);

        const li = document.createElement("li");
        li.textContent = `Lap ${numeroLap}: ${formatearTiempo(tiempoActual)}`;
        listaLaps.appendChild(li);

        console.log(`🏁 Lap ${numeroLap} guardado: ${formatearTiempo(tiempoActual)}`);
    }

    // EVENTOS
    btnIniciar.addEventListener("click", iniciar);
    btnPausar.addEventListener("click", pausar);
    btnResetear.addEventListener("click", resetear);
    btnLap.addEventListener("click", guardarLap);

    // TECLADO (Espacio para iniciar/pausar, R para resetear)
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            event.preventDefault();
            if (corriendo) pausar();
            else iniciar();
        } else if (event.code === "KeyR") {
            resetear();
        } else if (event.code === "KeyL" && corriendo) {
            guardarLap();
        }
    });

    console.log("⏱️ Cronómetro inicializado");
    console.log("💡 Atajos: [ESPACIO] = Iniciar/Pausar | [R] = Resetear | [L] = Lap");
}

// Descomentar para ejecutar:
// actividadBonus_cronometro();

/*
================================================================================
  CONSEJOS FINALES PARA EL EXAMEN
================================================================================
*/

console.log("\n\n💡 CONSEJOS FINALES PARA EL EXAMEN");
console.log("═══════════════════════════════════════════════════════════════\n");

console.log(`
🎯 TIPS CLAVE:

1. SELECCIÓN DE ELEMENTOS
   ✅ USA: querySelector / querySelectorAll (modernos y versátiles)
   ⚠️ EVITA: getElementById solo si te lo piden explícitamente

2. MANIPULACIÓN DE CONTENIDO
   ✅ textContent para texto plano
   ✅ innerHTML para HTML (con precaución por seguridad)
   ⚠️ Nunca uses innerHTML con datos de usuario sin sanitizar

3. EVENTOS
   ✅ SIEMPRE usa addEventListener (nunca onclick en HTML)
   ✅ No olvides event.preventDefault() en formularios
   ✅ Usa delegación de eventos para elementos dinámicos

4. CLASES CSS
   ✅ Usa classList (add, remove, toggle, contains)
   ⚠️ Evita className (antigua y menos práctica)

5. VALIDACIÓN DE FORMULARIOS
   ✅ Usa Constraint Validation API (validity, setCustomValidity)
   ✅ Valida en submit Y en tiempo real (eventos input/blur)
   ✅ Mensajes claros y específicos para el usuario

6. PROPAGACIÓN
   ✅ Entiende la diferencia entre capture y bubbling
   ✅ Usa stopPropagation() solo cuando sea necesario
   ✅ Conoce event.target vs event.currentTarget

7. OPTIMIZACIÓN
   ✅ Usa DocumentFragment para insertar múltiples elementos
   ✅ Delegación de eventos en lugar de múltiples listeners
   ✅ Almacena referencias a elementos usados frecuentemente

8. ERRORES COMUNES A EVITAR
   ❌ No verificar si un elemento existe antes de manipularlo
   ❌ Olvidar preventDefault() en formularios
   ❌ Confundir textContent con innerHTML
   ❌ No limpiar mensajes de error previos
   ❌ No usar const/let apropiadamente

9. ESTRUCTURA DE CÓDIGO
   ✅ Separa funciones: una función, una responsabilidad
   ✅ Nombres descriptivos para variables y funciones
   ✅ Comenta código complejo
   ✅ Agrupa elementos relacionados

10. EN EL EXAMEN
    ✅ Lee TODAS las instrucciones antes de empezar
    ✅ Prueba tu código en la consola frecuentemente
    ✅ Verifica que todos los eventos funcionen
    ✅ Maneja casos edge (listas vacías, inputs vacíos, etc.)
    ✅ Si algo no funciona, revisa: selección, eventos, nombres

📚 MÉTODOS MÁS IMPORTANTES:

DOM:
• querySelector() / querySelectorAll()
• createElement() / appendChild() / append()
• setAttribute() / getAttribute() / removeAttribute()
• classList.add() / .remove() / .toggle() / .contains()
• textContent / innerHTML

EVENTOS:
• addEventListener()
• event.preventDefault()
• event.stopPropagation()
• event.target / event.currentTarget

FORMULARIOS:
• element.validity (valueMissing, typeMismatch, etc.)
• setCustomValidity()
• checkValidity()
• FormData (para envío programático)

🔥 PATRÓN COMÚN EN EXÁMENES:

1. Seleccionar elementos
2. Añadir event listeners
3. En el evento:
   - Prevenir default si es necesario
   - Validar datos
   - Manipular el DOM (crear/modificar/eliminar)
   - Actualizar la UI

¡MUCHA SUERTE EN TU EXAMEN! 🍀

Recuerda: La práctica hace al maestro. Intenta recrear estas
actividades sin mirar las soluciones. Esa es la mejor forma de
aprender y estar preparado.

¿Alguna duda? Revisa los archivos, practica los ejemplos y
asegúrate de entender CADA línea de código.

¡TÚ PUEDES! 💪
`);

console.log("\n═══════════════════════════════════════════════════════════════");
console.log("FIN DEL ARCHIVO DE ACTIVIDADES");