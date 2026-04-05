let btnPJ1 = document.getElementById("botonPJ1");
let btnPJ2 = document.getElementById("botonPJ2");
let btnPJ3 = document.getElementById("botonPJ3");
let btnSalir = document.getElementById("salir");
let imgchange = document.getElementById("imgchange");
let fadeInContainer = imgchange.parentElement; // Obtener el contenedor .fade-in

// Función para cambiar imagen con transición fade
function cambiarImagenConFade(nuevaRuta) {
    // Agregar la animación de fade-out
    fadeInContainer.classList.add("fade-out");
    
    // Después de que termine el fade-out, cambiar la imagen y hacer fade-in
    setTimeout(function() {
        fadeInContainer.classList.remove("fade-out");
        imgchange.src = nuevaRuta;
        fadeInContainer.classList.add("fade-in");
    }, 800); // 800ms coincide con la duración de la animación
}

btnPJ1.onclick = function() {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_Cazarrecompensas.jpg");
}

btnPJ2.onclick = function() {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_Sheriff.jpg");
}

btnPJ3.onclick = function() {
    cambiarImagenConFade("recursos_Multimedia/img/instagram-icon.png");
}

btnSalir.onclick = function() {
    cambiarImagenConFade("recursos_Multimedia/img/Personajes_ExpedienteCerrado.jpg");
}




