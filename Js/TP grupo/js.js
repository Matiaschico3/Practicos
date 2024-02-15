

//Función para procesar el formulario html
function processForm() {
    //Guarda el input del usuario
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var año = document.getElementById("año").value;

    // Crea el objeto Date (Usando un "Template literal")
    var dateObject = new Date(`${año}-${mes}-${dia}`);
    // verifica que no de "Invalid Date"
    if (validateDate(dia, mes, año)) {
    // si el input es correcto muestra la fecha
    document.getElementById("display").innerHTML = "Fecha registrada: " + dateObject.toDateString();
    } else {
    // si el input es incorrecto muestra el mensaje.
    document.getElementById("display").innerHTML = "Fecha no válida. Por favor, verifique los datos ingresados.";
}
}

//Función que valida los datos
function validateDate(dia, mes, año) {
    // Convierte los datos a números.
   var day = parseInt(dia);
   var  month = parseInt(mes);
   var year = parseInt(año);

    // Verifica que los números no sean String y estén en su correspondiente rango para ser una fecha.
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }
    if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > 2100) {
        return false;
    }
    //Verifica años biciestos.
    if (month === 2) {
        if ((year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) && day > 28) {
            return false;
        } else if (day > 29) {
            return false;
        }
    }

    return true;  


}