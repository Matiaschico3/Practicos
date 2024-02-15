
function calcularDias() {
    var patron = /^(\d{2}|\d)(-)(\d{2}|\d)(-)\d{4}$/
    var fechaIngresada = document.getElementById('fecha').value;
    var teesteo = patron.test(fechaIngresada);
    console.log("es "+teesteo);

    var fechaEnPartes = fechaIngresada.split('-');
    
    // Tuve que convertir la fecha a formato A/M/D porque no sabia como hacer para calcular sino.
    var fechaNueva = new Date(fechaEnPartes[2], fechaEnPartes[1] - 1, fechaEnPartes[0]);
    
    var diaActual = new Date();
    
    var difTime = fechaNueva.getTime() - diaActual.getTime();
    
    var diasDif = Math.ceil(difTime / (1000 * 60 * 60 * 24));

    var dias = document.getElementById('calculoDias');
    if (diasDif == 0) {
        dias.textContent = "La fecha que se ingreso es hoy.";
    } else if (diasDif > 0) {
        dias.textContent = "Faltan " + diasDif + " días para la fecha ingresada.";
    } else {
        dias.textContent = "Han pasado " + (-diasDif) + " días de la fecha que ingreso.";
    }
}
