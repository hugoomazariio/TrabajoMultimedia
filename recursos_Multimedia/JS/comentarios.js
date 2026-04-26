let comentarios = [];

document.addEventListener("DOMContentLoaded", () => {

  console.log("Comentarios JS cargado ✅");

  const input = document.getElementById("comentarioInput");
  const boton = document.querySelector(".ComenButton");
  const divider = document.querySelector(".ComenDivider");
  const lista = document.getElementById("comentariosLista");

  boton.addEventListener("click", agregarComentario);
  divider.addEventListener("click", toggleComentarios);

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

function toggleComentarios() {
  const lista = document.getElementById("comentariosLista");
  const btn = document.getElementById("toggleBtn");

  lista.classList.toggle("oculto");

  const abierto = !lista.classList.contains("oculto");

  btn.textContent = abierto ? "▲" : "▼";
}

function guardarComentarios() {
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
}
