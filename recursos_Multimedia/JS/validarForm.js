function validarForm() {

    let validar = true;
    var regEXPnombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regEXPemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    var nombre = document.getElementById("nombre").value;
    let email = document.getElementById('email').value;
    var comentario = document.getElementById("idcomentario").value;

    //Validación Nombre
    if (!nombre) {
        alert("El campo de nombre no puede estar vacío.");
        validar = false;
    } else if (!regEXPnombre.exec(nombre)) {
        alert("El nombre solo admite letras y espacios.");
        validar = false;

    } 

    
    //Validación Email
    if (regEXPemail.test(email)) {
    } else {
        if (email.trim() == 0) {
            alert('Error!!! El campo e-mail es requerido');
            validar = false;
        } else {
            alert('Error!!! El e-mail es inválido');
            validar = false;
        }
     
    }

    //Validación Comentario
    if (!comentario) {
        alert("El campo de Tu Mensaje no puede estar vacío.");
        validar = false;
    } 

    if (validar){
        alert("Muchas gracias, el equipo se pondrá en contacto contigo en breve.")
    }
}
