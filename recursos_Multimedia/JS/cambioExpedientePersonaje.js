let btnPJ1 = document.getElementById("botonPJ1");
let btnPJ2 = document.getElementById("botonPJ2");
let btnPJ3 = document.getElementById("botonPJ3");
let btnSalir = document.getElementById("salir");
let imgchange = document.getElementById("imgchange");

btnPJ1.onclick = function() {
    imgchange.src = "recursos_Multimedia/img/Personajes_Cazarrecompensas.jpg";
}

btnPJ2.onclick = function() {
    imgchange.src = "recursos_Multimedia/img/Personajes_Sheriff.jpg";
}

btnPJ3.onclick = function() {
    imgchange.src = "recursos_Multimedia/img/instagram-icon.png";
}
btnSalir.onclick = function() {
    imgchange.src = "recursos_Multimedia/img/Personajes_ExpedienteCerrado.jpg";
}




