var frases= ['“La vida es demasiado importante para ser tomada en serio”.',
'“El arte es la forma más intensa de individualismo que el mundo ha conocido”. ',
'“La única forma de librarse de la tentación es caer en ella”.',
'“El hombre es menos él mismo cuando habla en su propia persona. Dale una máscara y te dirá la verdad”. ',
'“Algunos causan felicidad dondequiera que van; otros cuando se van”. ',
'“En este mundo solo hay dos tragedias: una, no conseguir lo que se necesita; otra, conseguirlo.”. ',
'“La moda es una forma de fealdad tan intolerable que tenemos que cambiarla cada seis meses”.',
'“Sé tú mismo, todos los demás puestos ya están ocupados”.',
'“La experiencia es simplemente el nombre que le damos a nuestros errores”. ',
'"No dejes para mañana lo que puedes dejar para pasado mañana".']


function nuevaFrase(){
    var fraseRandom = Math.floor(Math.random() * (frases.length));
    document.getElementById('display').innerHTML = document.write(frases[fraseRandom]);

}