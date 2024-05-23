
function ValidacionForms() {

    // Primero pedimos la data del forms y las ponemos en diferentes variables.
    var nombreJS = document.getElementById("nombre").value;   
    var telefonoJS = document.getElementById("telefono").value;  
    var emailJS = document.getElementById("email").value;  
    var consultaJS = document.getElementById("consulta").value;  
    var archivoJS = document.getElementById("archivo").value;  
    var checkboxJS = document.getElementById("checkboxContacto").checked;

    // Con esta variable confirmamos si todos los campos son correctos.
    let validador = true;

    // Aca preguntamos variable por variable si cumple los requisitos.
    if (nombreJS === "") {
        alert("Por favor, ingrese su nombre.");
        console.log("Nombre no valido, validador pasa a ser FALSE");
        validador = false;
    }

    if (telefonoJS === "") {
        alert("Por favor, ingrese su numero de telefono.");
        console.log("Telefono no valido, validador pasa a ser FALSE");
        validador = false;
    }

    if (emailJS === "" || !emailJS.includes("@")) {
        alert("Por favor, ingrese un email valido.");
        console.log("Email no valido, validador pasa a ser FALSE");
        validador = false;
    }

    if (consultaJS === "") {
        alert("Por favor, ingrese su problema o motivo de consulta");
        console.log("Consulta no valida, validador pasa a ser FALSE");
        validador = false;
    }

    if (archivoJS === "") {
        alert("Por favor, ingrese un archivo.");
        console.log("Archivo no valido, validador pasa a ser FALSE");
        validador = false;
    }

    if (!checkboxJS) {
        alert("Por favor, acepte los terminos y condiciones.");
        console.log("checkbox no aceptado, validador pasa a ser FALSE");
        validador = false;
    }


    console.log(validador);

    return validador;
}
