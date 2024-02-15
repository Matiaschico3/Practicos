document.addEventListener("DOMContentLoaded", function() {
    // Define un array para almacenar los datos del usuario
    var datosUsuario = [];

    // Solicita los datos al usuario y los almacena en el array
    datosUsuario.push(["Nombre", prompt("Ingrese su Nombre:", "")]);
    datosUsuario.push(["Edad", prompt("Ingrese su Edad:", "")]);
    datosUsuario.push(["Ocupación", prompt("Ingrese su Ocupación:", "")]);

    // Construye la tabla con los datos del array
    var tablaHtml = "<table border='1'><thead><tr><th>Dato</th><th>Valor</th></tr></thead><tbody>";

    // Añade las filas de datos del array al HTML de la tabla
    for (var i = 0; i < datosUsuario.length; i++) {
        tablaHtml += "<tr><td>" + datosUsuario[i][0] + "</td><td>" + datosUsuario[i][1] + "</td></tr>";
    }

    tablaHtml += "</tbody></table>";

    // Inserta la tabla en el DOM
    document.body.innerHTML += tablaHtml;
});