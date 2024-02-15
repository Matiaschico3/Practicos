var valor = Math.random()*1000000;
valor = Math.round(valor);
console.log(valor)

while (true) {
    let input = Number(prompt('Ingrese el numero que cree que es'));
    if (input == valor) {
        alert('Es correcto! El valor ' + valor + ' es igual a ' + input);
        break;
    } else if (valor > input) {
        alert('El numero es Mayor');
    } else if (valor < input) {
        alert('El numero es menor');
    }
}