var cadena = prompt("Ingrese una cadena");
let separar = cadena.split(" ");
console.log(separar);

cantidadPalabras = separar.length;
console.log("Cantidad de palabras ingresadas "+cantidadPalabras);

primeraPalabra = separar[0];
console.log(primeraPalabra);

ultimaPalabra = separar[cantidadPalabras - 1];
console.log(ultimaPalabra);

invertido = separar.reverse();
console.log(invertido)

deAaZ = separar.sort();
console.log(deAaZ);

deZaA = separar.sort();
console.log(deZaA.reverse());