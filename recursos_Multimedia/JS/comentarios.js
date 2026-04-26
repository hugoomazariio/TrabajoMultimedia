<script>
let comentarios = [];

/* Cargar comentarios al iniciar */
window.onload = function() {
  const guardados = localStorage.getItem("comentarios");

  if (guardados) {
    comentarios = JSON.parse(guardados);
  } else {
    // comentarios iniciales
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
};

/* Mostrar comentarios */
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

/* Añadir comentario */
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

  // abrir comentarios automáticamente
  const lista = document.getElementById("comentariosLista");
  lista.classList.remove("oculto");
}

/* Guardar en localStorage */
function guardarComentarios() {
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
}

/* Toggle abrir/cerrar */
function toggleComentarios() {
  const lista = document.getElementById("comentariosLista");
  lista.classList.toggle("oculto");
}
</script>
