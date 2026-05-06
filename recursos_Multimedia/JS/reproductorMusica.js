/* LÓGICA DEL REPRODUCTOR DE MÚSICA */

/* Referencias a los elementos del DOM */
const audio         = document.getElementById('musicPlayer');   // Elemento <audio>
const playBtn       = document.getElementById('playBtn');       // Botón play/pausa
const progressFill  = document.getElementById('progressFill'); // Relleno de la barra de progreso
const progressBg    = document.getElementById('progressBg');   // Fondo clicable de la barra
const currentTimeEl = document.getElementById('currentTime');  // Texto del tiempo actual
const totalTimeEl   = document.getElementById('totalTime');    // Texto del tiempo total
const volumeSlider  = document.getElementById('volumeSlider'); // Slider de volumen

/* Volumen inicial al cargar la página (50%) */
audio.volume = 0.5;

/* Convierte segundos en formato m:ss (ej: 93 → "1:33") */
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0'); // Añade cero inicial si hace falta
  return `${m}:${s}`;
}

/* Click en el botón play/pausa */
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '&#9646;&#9646;'; /* Cambia el icono a pausa ⏸ */
  } else {
    audio.pause();
    playBtn.innerHTML = '&#9654;'; /* Cambia el icono a play ▶ */
  }
});

/* Se ejecuta continuamente mientras se reproduce el audio */
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return; /* Evita errores si la duración aún no está disponible */

  /* Calcula el porcentaje reproducido y actualiza la barra */
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';

  /* Actualiza el texto del tiempo actual */
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

/* Se ejecuta cuando el navegador ya conoce la duración del audio */
audio.addEventListener('loadedmetadata', () => {
  totalTimeEl.textContent = formatTime(audio.duration); /* Muestra la duración total */
});

/* Se ejecuta cuando la canción termina */
audio.addEventListener('ended', () => {
  playBtn.innerHTML = '&#9654;';   /* Restaura el icono a play */
  progressFill.style.width = '0%'; /* Reinicia la barra de progreso */
  currentTimeEl.textContent = '0:00'; /* Reinicia el tiempo actual */
});

/* Click en la barra de progreso para saltar a un punto de la canción */
progressBg.addEventListener('click', (e) => {
  const rect = progressBg.getBoundingClientRect(); /* Posición y tamaño de la barra */
  const pct  = (e.clientX - rect.left) / rect.width; /* Porcentaje del punto clicado */
  audio.currentTime = pct * audio.duration; /* Salta al tiempo correspondiente */
});

/* Mueve el slider de volumen → ajusta el volumen del audio */
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value; /* El valor del slider va de 0 a 1 */
});