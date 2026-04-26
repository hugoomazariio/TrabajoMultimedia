let comentarios = [];

/* Esperar a que cargue TODO el DOM */
document.addEventListener("DOMContentLoaded", () => {

  console.log("Comentarios JS cargado ✅");

  const input = document.getElementById("comentarioInput");
  const boton = document.querySelector(".ComenButton");
  const divider = document.querySelector(".ComenDivider");
  const lista = document.getElementById("comentariosLista");

  /* EVENTOS */
  boton.addEventListener("click", agregarComentario);
  divider.addEventListener("click", toggleComentarios);

  /* CARGAR LOCALSTORAGE */
  const guardados = localStorage.getItem("comentarios");

  if (guardados) {
    comentarios = JSON.parse(guardados);
  } else {
    comentarios = [
      {
        nombre: "Toño Recio",
        texto: "Pintaza de juego, porfavor gente apoyad esta campaña!"
      },
      {
        nombre: "David Manzanares",
        texto: "ya he aportado mi granito de arena, mucha suerte <3"
      }
    ];
    guardarComentarios();
  }

  renderComentarios();
});

/* RENDER */
function renderComentarios() {
  const lista = document.getElementById("comentariosLista");
  lista.innerHTML = "";

  comentarios.forEach(c => {
    const div = document.createElement("div");
    div.className = "ComenItem";

    div.innerHTML = `
      <img class="ComenItemAvatar" src="./recursos_Multimedia/img/ComentariosUser.png">
      <div class="ComenItemContent">
        <div class="ComenItemName">${c.nombre}</div>
        <div class="ComenItemText">${c.texto}</div>
      </div>
    `;

    lista.appendChild(div);
  });
}

/* AÑADIR */
function agregarComentario() {
  const input = document.getElementById("comentarioInput");
  const texto = input.value.trim();

  if (texto === "") return;

  comentarios.push({
    nombre: "User",
    texto: texto
  });

  guardarComentarios();
  renderComentarios();

  input.value = "";

  document.getElementById("comentariosLista").classList.remove("oculto");
}

/* TOGGLE */
function toggleComentarios() {
  const lista = document.getElementById("comentariosLista");
  lista.classList.toggle("oculto");
}

/* GUARDAR */
function guardarComentarios() {
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
}
