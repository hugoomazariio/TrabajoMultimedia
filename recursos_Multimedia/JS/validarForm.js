function validarForm() {

    // Flag que controla si el formulario es válido. Empieza en true y se pone
    // en false si alguna validación falla
    let validar = true;

    // Expresión regular para el nombre: solo permite letras (incluidas tildes,
    // ñ y diéresis) y espacios. No permite números ni símbolos
    var regEXPnombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    // Expresión regular para el email: valida el formato estándar usuario@dominio.extension
    let regEXPemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Recogemos los valores introducidos por el usuario en cada campo del formulario
    var nombre = document.getElementById("nombre").value;
    let email = document.getElementById('email').value;
    var comentario = document.getElementById("idcomentario").value;


    // --- Validación Nombre ---
    // Primero comprueba si está vacío, luego si contiene caracteres no permitidos
    if (!nombre) {
        alert("El campo de nombre no puede estar vacío.");
        validar = false;
    } else if (!regEXPnombre.exec(nombre)) {
        alert("El nombre solo admite letras y espacios.");
        validar = false;
    }


    // --- Validación Email ---
    // Si el email NO cumple el formato de la regex, entramos al else para ver qué falló
    if (regEXPemail.test(email)) {
        // Email válido, no se hace nada
    } else {
        if (email.trim() == 0) {
            // El campo está vacío (trim() elimina espacios y == 0 comprueba si queda algo)
            alert('Error!!! El campo e-mail es requerido');
            validar = false;
        } else {
            // Hay texto pero no tiene formato de email válido
            alert('Error!!! El e-mail es inválido');
            validar = false;
        }
    }


    // --- Validación Comentario ---
    // Simplemente comprueba que el campo no esté vacío
    if (!comentario) {
        alert("El campo de Tu Mensaje no puede estar vacío.");
        validar = false;
    }

    // Si todas las validaciones han pasado, se muestra el mensaje de éxito
    if (validar) {
        alert("Muchas gracias, el equipo se pondrá en contacto contigo en breve.");
    }
}