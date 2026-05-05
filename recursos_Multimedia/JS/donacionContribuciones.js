const input = document.getElementById("ContrMonto");
const boton = document.getElementById("ContrBtn");
const grupo = document.getElementById("ContrGrupo");

function validar() {
    if (input.value == 0) {
        grupo.classList.add("input-error");
        boton.classList.add("disabled");
    } else {
        grupo.classList.remove("input-error");
        boton.classList.remove("disabled");
    }
}

input.addEventListener("input", validar);

// Mensaje de gracias al hacer click
boton.addEventListener("click", () => {
    if (!boton.classList.contains("disabled")) {
        alert("¡Muchas gracias por tu contribución de " + input.value + "€! Tu apoyo es muy importante para nosotros.");
    }
});

// Validación inicial
validar();

