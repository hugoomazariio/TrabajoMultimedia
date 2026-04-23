
const input = document.getElementById("comentarioInput");
const boton = document.getElementById("ComenEnviarBtn");
const lista = document.getElementById("ComenListaComentarios");
const toggle = document.getElementById("ComenToggleBtn");

// Cargar comentarios guardados
let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [
  {
        usuario: "Toño Recio",
        texto: "Pintaza!"
    },
    {
        usuario: "David Manzanares",
        texto: "Ya he contribuido, mucha suerte! <3"
    }
  
];

// Mostrar comentarios al cargar
function renderComentarios() {
    lista.innerHTML = "";

    comentarios.forEach(texto => {
        const div = document.createElement("div");
        div.classList.add("comentario");

        div.innerHTML = `
            <img src="avatar.png">
            <div class="comentario-box">${texto}</div>
        `;

        lista.appendChild(div);
    });
}

// Guardar comentario
boton.addEventListener("click", () => {
    const texto = input.value.trim();

    if (texto !== "") {
        comentarios.push(texto);
        localStorage.setItem("comentarios", JSON.stringify(comentarios));

        input.value = "";

        renderComentarios();

        
        lista.style.display = "block";
        toggle.textContent = "▲";
    }
});

// Toggle abrir/cerrar
toggle.addEventListener("click", () => {
    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
        toggle.textContent = "▲";
    } else {
        lista.style.display = "none";
        toggle.textContent = "▼";
    }
});

// Inicializar
renderComentarios();
