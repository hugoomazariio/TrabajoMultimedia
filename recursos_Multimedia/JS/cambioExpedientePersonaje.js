let btnPJ1 = document.getElementById("botonPJ1");
let btnPJ2 = document.getElementById("botonPJ2");
let btnPJ3 = document.getElementById("botonPJ3");
let btnSalir = document.getElementById("salir");
let imgchange = document.getElementById("imgchange");
let fadeInContainer = imgchange.parentElement; // Obtener el contenedor .fade-in

// Función para cambiar imagen con transición fade
function cambiarImagenConFade(nuevaRuta) {

    // Asegurar que fade-in no está activo
    fadeInContainer.classList.remove("fade-in");

    // Activar fade-out
    fadeInContainer.classList.add("fade-out");

    // Esperar a que termine el fade-out
    setTimeout(function () {

        // Cambiar imagen
        imgchange.src = nuevaRuta;

        // Forzar reflow (Safari lo necesita)
        void fadeInContainer.offsetWidth;

        // Quitar fade-out y activar fade-in
        fadeInContainer.classList.remove("fade-out");
        fadeInContainer.classList.add("fade-in");

    }, 800);
}


btnPJ1.onclick = function () {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_Cazarrecompensas.jpg");
}

btnPJ2.onclick = function () {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_Sheriff.jpg");
}

btnPJ3.onclick = function () {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_Criminal.jpg");
}

btnSalir.onclick = function () {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_ExpedienteCerrado.jpg");
}




